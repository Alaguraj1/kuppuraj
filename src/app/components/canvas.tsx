"use client";

import { Box } from "@chakra-ui/react";
import {
  Canvas,
  OrthographicCameraProps,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  Backdrop,
  CameraControls,
  ContactShadows,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  OrthographicCamera,
  Shadow,
  Stage,
  Stats,
  useAspect,
  useHelper,
} from "@react-three/drei";
import { BufferGeometry, Color, DoubleSide, Euler, Mesh } from "three";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export default function AboutCanvas() {
  const [height, setHeight] = useState(1080);
  const [width, setWidth] = useState(1920);
  // const height = useMemo(() => window.innerHeight ?? 1080, []),
  //   width = useMemo(() => window.innerWidth ?? 1080, []);
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
  }, []);
  const aspect = width / height;
  return (
    <>
      {width > 800 && (
        <>
          <Box
            zIndex={-99}
            h={"100vh"}
            position={"fixed"}
            top={0}
            left={0}
            width={"100vw"}
          >
            <Canvas
              orthographic
              camera={{
                left: (-aspect * height) / 2,
                right: (aspect * height) / 2,
                top: height / 2,
                bottom: -height / 2,
                zoom: 80,
                near: 0.1,
                far: 2000,
              }}
            >
              <Scene />
              {/* <Stats /> */}
              <ambientLight />
              {/*<OrbitControls/>*/}
              {/* <EffectComposer>
            <Noise opacity={0.05}></Noise>
          </EffectComposer> */}
            </Canvas>
          </Box>
        </>
      )}
    </>
  );
}

function Scene() {
  const boxRef = useRef<any>();
  const box2Ref = useRef<any>();
  const { viewport } = useThree();
  const height = window.innerHeight,
    width = window.innerWidth;

  useFrame(({ clock }) => {
    if (boxRef.current && box2Ref.current) {
      boxRef.current.rotation.x += 0.002;
      boxRef.current.rotation.y += 0.002;
      boxRef.current.rotation.z += 0.002;
      box2Ref.current.rotation.x += 0.002;
      box2Ref.current.rotation.y += 0.002;
      box2Ref.current.rotation.z += 0.002;
    }
  });

  return (
    <>
      <pointLight intensity={5} />
      {/*@ts-ignore*/}
      <mesh
        ref={boxRef}
        position={[viewport.width / 2 - 1, viewport.height / 2 - 2, -5]}
        rotation={new Euler(10, 10, 10)}
      >
        <boxGeometry></boxGeometry>
        <meshPhongMaterial color="#C9FBFF" />
        {/* <meshStandardMaterial color='white' /> */}
        {/* <meshBasicMaterial color='red' /> */}
        {/* <meshNormalMaterial></meshNormalMaterial> */}
      </mesh>
      <mesh
        ref={box2Ref}
        position={[-viewport.width / 3 + 2, viewport.height / 2 - 0.7, -5]}
        rotation={new Euler(10, 10, 10)}
      >
        <sphereGeometry args={[0.7, 16]}></sphereGeometry>
        <meshPhongMaterial color="#C9FBFF" />

        {/* <meshNormalMaterial></meshNormalMaterial> */}
      </mesh>
    </>
  );
}
