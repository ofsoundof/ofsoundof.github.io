// Floating points joined by thin lines, drawn behind the page; the cursor
// acts as an extra point that pulls nearby points toward it (the canvas-nest
// effect). Follows the site's light/dark theme, honours prefers-reduced-motion,
// and pauses while the tab is hidden.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const COLORS = { light: "0,0,0", dark: "255,255,255" };
  const ALPHA = { light: 0.5, dark: 0.35 };
  const LINK_DIST = 6000; // squared distance below which two points are linked
  const MOUSE_DIST = 20000; // squared distance within which the cursor links and pulls
  const SPEED = 0.5;

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let width, height, dpr, points;
  const mouse = { x: null, y: null, max: MOUSE_DIST };

  function theme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(40, Math.min(120, Math.round((width * height) / 12000)));
    if (!points) {
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        xa: (Math.random() * 2 - 1) * SPEED,
        ya: (Math.random() * 2 - 1) * SPEED,
        max: LINK_DIST,
      }));
    } else {
      points.forEach((p) => {
        p.x = Math.min(p.x, width);
        p.y = Math.min(p.y, height);
      });
    }
  }

  function draw() {
    const t = theme();
    const color = COLORS[t];
    const alpha = ALPHA[t];
    ctx.clearRect(0, 0, width, height);
    const all = [mouse].concat(points);
    points.forEach((p, i) => {
      p.x += p.xa;
      p.y += p.ya;
      if (p.x > width || p.x < 0) p.xa = -p.xa;
      if (p.y > height || p.y < 0) p.ya = -p.ya;
      ctx.fillStyle = "rgba(" + color + "," + alpha + ")";
      ctx.fillRect(p.x - 0.5, p.y - 0.5, 1, 1);
      for (let j = i + 1; j < all.length; j++) {
        const q = all[j];
        if (q.x === null) continue;
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d2 = dx * dx + dy * dy;
        if (d2 >= q.max) continue;
        if (q === mouse && d2 >= q.max / 2) {
          p.x -= 0.03 * dx; // pull the point toward the cursor
          p.y -= 0.03 * dy;
        }
        const ratio = (q.max - d2) / q.max;
        ctx.strokeStyle = "rgba(" + color + "," + Math.min(1, (ratio + 0.2) * alpha) + ")";
        ctx.lineWidth = ratio / 2;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      }
    });
  }

  let running = false;
  function loop() {
    if (!running) return;
    draw();
    requestAnimationFrame(loop);
  }
  function start() {
    if (running) return;
    running = true;
    requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
  }

  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("pointerleave", () => {
    mouse.x = mouse.y = null;
  });
  document.addEventListener("mouseleave", () => {
    mouse.x = mouse.y = null;
  });
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  resize();
  start();
})();
