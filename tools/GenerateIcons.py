"""Generate PWA icons (matching public/favicon.svg) into public/icons/."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
S = 1024  # supersample canvas, designed on the 256 grid of favicon.svg (x4)


def draw(maskable: bool) -> Image.Image:
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    k = S / 256
    if maskable:
        d.rectangle([0, 0, S, S], fill="#7C3AED")  # full-bleed, OS applies mask
        scale, off = 0.75, 0.125 * S               # keep content inside safe zone
    else:
        d.ellipse([0, 0, S, S], fill="#5B21B6")
        d.ellipse([13 * k, 13 * k, 243 * k, 243 * k], fill="#7C3AED")
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
for name, maskable, size in [
    ("icon-192.png", False, 192), ("icon-512.png", False, 512),
    ("icon-maskable-192.png", True, 192), ("icon-maskable-512.png", True, 512),
    ("apple-touch-icon.png", True, 180),
]:
    draw(maskable).resize((size, size), Image.LANCZOS).save(OUT / name)
    print("wrote", name)
