import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, shaderMaterial, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import React from "react";
import { fragmentShader, vertexShader } from "../canvas/shaders";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#0491ed").convertSRGBToLinear(),
  // roughness: 0.5,
});
const bauble2Material = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#f95dff").convertSRGBToLinear(),
  // roughness: 0.5,
});

export const StCanvas = () => (
  <Canvas
    frameloop="demand"
    shadows
    gl={{ antialias: false }}
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
  >
    <ambientLight intensity={0.5} />
    {/* <color attach="background" args={["#dfdfdf"]} /> */}
    <spotLight
      intensity={1}
      angle={0.2}
      penumbra={1}
      position={[30, 30, 30]}
      castShadow
      shadow-mapSize={[512, 512]}
    />
    <Physics gravity={[0, 2, 0]} iterations={5}>
      <Pointer />
      <Clump />
    </Physics>
    <Environment files={"/studio_small_03_1k.hdr"} />
  </Canvas>
);

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  //   const texture = useTexture("/cross.jpg");
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(0), rfs(20)],
  }));
  const [ref2, api2] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(0), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 10; i++) {
      // @ts-ignore
      ref.current.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-10)
            .toArray(),
          [10, 0, 10]
        );
      // @ts-ignore

      ref2.current.getMatrixAt(i, mat);
      api2
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-10)
            .toArray(),
          [10, 0, 10]
        );
    }
  });
  return (
    <>
      <instancedMesh
        // @ts-ignore
        ref={ref}
        castShadow
        receiveShadow
        // @ts-ignore
        args={[null, null, 3]}
        geometry={sphereGeometry}
        material={baubleMaterial}
        //   material-map={texture}
      >
        {/* <meshBasicMaterial /> */}
        {/* <baubleMaterial /> */}
      </instancedMesh>
      <instancedMesh
        // @ts-ignore
        ref={ref2}
        castShadow
        receiveShadow
        // @ts-ignore
        args={[null, null, 3]}
        geometry={sphereGeometry}
        material={bauble2Material}
      ></instancedMesh>
    </>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    position: [0, 0, 0],
  }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
}
