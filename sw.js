/* Service Worker - Anki Quiz PWA
 * Nằm ở thư mục gốc để scope bao phủ toàn site.
 * Đổi CACHE_VERSION khi muốn ép xoá cache cũ.
 */
const CACHE_VERSION = "v1";
const SHELL_CACHE = `anki-shell-${CACHE_VERSION}`;
const RUNTIME_CACHE = `anki-runtime-${CACHE_VERSION}`;

const SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./public/favicon.svg",
  "./public/icons/icon-192.png",
  "./public/icons/icon-512.png",
  "./public/css/main.css",
  "./public/css/exam.css",
  "./public/js/classes.js",
  "./public/js/desks.js",
  "./public/js/exam.js",
  "./public/js/system-prompt.js",
  "./public/js/question-search.js",
  "./public/js/access-gate.js",
  "./public/js/copy-to-ask-ai.js",
  "./public/js/feedback-modal.js",
  "./public/data/index.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== SHELL_CACHE && k !== RUNTIME_CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Trả cache ngay, đồng thời tải bản mới để lần sau dùng.
function staleWhileRevalidate(request) {
  return caches.open(RUNTIME_CACHE).then((cache) =>
    cache.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && (response.ok || response.type === "opaque")) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
}

// Ưu tiên mạng, rớt mạng thì dùng cache (dành cho dữ liệu cần luôn mới, vd danh sách truy cập).
function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
      }
      return response;
    })
    .catch(() => caches.match(request));
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Điều hướng trang: mạng trước, offline thì dùng index.html đã cache.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  if (url.origin === self.location.origin && url.pathname.endsWith("/access-list.json")) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Asset cùng origin (JS/CSS/data) và CDN (Bootstrap, Font Awesome, Google Fonts).
  event.respondWith(staleWhileRevalidate(request));
});
