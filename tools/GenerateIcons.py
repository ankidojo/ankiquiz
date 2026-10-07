"""Generate PWA icons (matching public/favicon.svg) into public/icons/."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
S = 1024  # supersample canvas, designed on the 256 grid of favicon.svg (x4)


def draw(mode: str) -> Image.Image:
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    k = S / 256
    if mode == "maskable":
        d.rectangle([0, 0, S, S], fill="#7C3AED")  # full-bleed, Android applies its own mask
        scale, off = 0.75, 0.125 * S               # keep content inside the safe zone
    elif mode == "apple":
        # iOS rounds the corners itself and never crops into a safe zone, so
        # there's no reason to keep the circle design's wide margin here:
        # zoom the card in until only a ~2-3px purple edge remains at 180px.
        d.rectangle([0, 0, S, S], fill="#7C3AED")
        margin = 3.5  # grid units (256-grid), centered zoom around the card
        scale = (256 - 8 * margin) / 136
        off = 128 * k * (1 - scale)
    else:
        d.ellipse([0, 0, S, S], fill="#5B21B6")
        d.ellipse([3 * k, 3 * k, 253 * k, 253 * k], fill="#7C3AED")  # ~2px ring at 192px
        scale, off = 1.0, 0

    def p(v):
        return v * k * scale + off

    d.rounded_rectangle([p(60), p(60), p(196), p(196)], radius=12 * k * scale, fill="#F8F7FF")
    d.rounded_rectangle([p(60), p(60), p(128), p(196)], radius=12 * k * scale, fill="#E4DCFB")
    font = ImageFont.truetype("arialbd.ttf", int(80 * k * scale))
    d.text((p(128), p(115)), "?", font=font, fill="#5B21B6", anchor="mm")
    cx, cy, r = p(170), p(85), 16 * k * scale
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill="#10B981")
    w = int(2.5 * k * scale)
    pts = [(cx - 8 * k * scale, cy), (cx - 2 * k * scale, cy + 6 * k * scale), (cx + 8 * k * scale, cy - 4 * k * scale)]
    d.line(pts, fill="white", width=w, joint="curve")
    return img


OUT.mkdir(parents=True, exist_ok=True)
for name, mode, size in [
    ("icon-192.png", "circle", 192), ("icon-512.png", "circle", 512),
    ("icon-maskable-192.png", "maskable", 192), ("icon-maskable-512.png", "maskable", 512),
    ("apple-touch-icon.png", "apple", 180),
]:
    draw(mode).resize((size, size), Image.LANCZOS).save(OUT / name)
    print("wrote", name)
