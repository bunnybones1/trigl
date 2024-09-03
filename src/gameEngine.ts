import { Color, OrthographicCamera, WebGLRenderer } from "three";
import { Scene } from "three";
import { Object3D } from "three";
import type {} from "vite";
import Game from "./Game";
import { initResizeHandler } from "./initResizeHandler";
import { renderMetrics } from "./renderMetrics";
// import { testModelCluster } from "./testModelCluster"

let gameEngine:
  | {
      renderer: WebGLRenderer;
      game: Game;
    }
  | undefined;

export function getGameEngine() {
  if (!gameEngine) {
    // Create a scene
    const scene = new Scene();
    scene.matrixAutoUpdate = false;
    scene.matrixWorldAutoUpdate = false;
    const halfWidth = 1920 * 0.5;
    const halfHeight = 1080 * 0.5;

    // Create a camera
    const camera = new OrthographicCamera(
      -halfWidth,
      halfWidth,
      halfHeight,
      -halfHeight,
      -10000,
      10000
    );

    scene.add(camera);
    scene.background = new Color(0x5599aa);
    camera.updateMatrixWorld();

    // camera.position.set(Number(c[0]), Number(c[1]) + 1, Number(c[2]))
    const renderer = new WebGLRenderer({ logarithmicDepthBuffer: true });

    renderer.autoClear = false;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    for (const v of [
      "-moz-crisp-edges",
      "-webkit-crisp-edges",
      "crisp-edges",
      "pixelated"
    ]) {
      renderer.domElement.style.setProperty("image-rendering", v);
    }

    function cb() {
      renderer.setPixelRatio(renderMetrics.finalDevicePixelRatio.value);
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    }

    renderMetrics.finalDevicePixelRatio.listen(cb);
    renderMetrics.onSizeChange(cb);

    let simulate: ((dt: number) => void) | undefined;
    let lastNow = performance.now();

    function simulationTick() {
      const now = performance.now();
      while (lastNow < now) {
        if (simulate) {
          simulate(1 / 60);
        }
        lastNow += 1000 / 60;
      }
    }
    setInterval(simulationTick, 10);

    function animate() {
      renderer.clearColor();
      renderer.render(scene, camera);
      renderer.clearDepth();
      game.render();
    }
    renderer.setAnimationLoop(animate);
    initResizeHandler([camera], renderer);

    const gamePivot = new Object3D();
    scene.add(gamePivot);

    let game = new Game(gamePivot, camera, renderer);

    const _gameEngine = {
      renderer,
      game
    };

    if (import.meta.hot) {
      import.meta.hot.accept("./Game", (mod) => {
        while (gamePivot.children.length > 0) {
          gamePivot.remove(gamePivot.children[0]);
        }
        game.cleanup();
        game = new mod!.default(gamePivot, camera, renderer);
        simulate = game.simulate;
        _gameEngine.game = game;
      });
    }
    simulate = game.simulate;
    gameEngine = _gameEngine;
  }
  return gameEngine;
}
