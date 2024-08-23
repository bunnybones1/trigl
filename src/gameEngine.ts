import { Color, FogExp2, PCFSoftShadowMap, WebGLRenderer } from "three";
import { PerspectiveCamera } from "three";
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
    const sceneUi = new Scene();
    sceneUi.matrixAutoUpdate = false;
    sceneUi.matrixWorldAutoUpdate = false;

    const CAMERA_FAR = 16 * 4 * 32;

    // Create a camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.01,
      CAMERA_FAR
    );

    // Create a camera
    const cameraUi = new PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      0.05,
      200
    );

    const params = new URLSearchParams(window.location.search);

    scene.add(camera);
    scene.background = new Color(0x5599aa);
    sceneUi.add(cameraUi);
    scene.fog = new FogExp2(0x7799bb, 0.001);
    camera.position.set(
      Number.parseFloat(params.get("x") || "0"),
      Number.parseFloat(params.get("y") || "0") + 1.15,
      Number.parseFloat(params.get("z") || "0")
    );
    camera.updateMatrixWorld();
    cameraUi.position.set(0, 0, 100);
    cameraUi.updateMatrixWorld();

    // camera.position.set(Number(c[0]), Number(c[1]) + 1, Number(c[2]))
    const renderer = new WebGLRenderer({ logarithmicDepthBuffer: true });

    renderer.shadowMap.enabled = true;

    renderer.shadowMap.type = PCFSoftShadowMap;

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
      renderer.render(sceneUi, cameraUi);
      game.render();
    }
    renderer.setAnimationLoop(animate);
    initResizeHandler([camera, cameraUi], renderer);

    const gamePivot = new Object3D();
    scene.add(gamePivot);

    const gamePivotUi = new Object3D();
    sceneUi.add(gamePivotUi);

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
        while (gamePivotUi.children.length > 0) {
          gamePivotUi.remove(gamePivotUi.children[0]);
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
