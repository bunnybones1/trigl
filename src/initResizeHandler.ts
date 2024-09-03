import type { OrthographicCamera, WebGLRenderer } from "three";

export function initResizeHandler(
  cameras: OrthographicCamera[],
  renderer: WebGLRenderer
) {
  // Resize handler
  function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    for (const camera of cameras) {
      const height = camera.top - camera.bottom;
      const halfWidth = height * 0.5 * aspect;
      camera.left = -halfWidth;
      camera.right = halfWidth;
      camera.updateProjectionMatrix();
    }

    // Update renderer size
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onWindowResize);
  onWindowResize();
}
