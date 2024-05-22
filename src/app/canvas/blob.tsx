import { useFrame } from "@react-three/fiber";
import {
  MutableRefObject,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { fragmentShader, vertexShader } from "./shaders";
import { useSpring, animated } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { useRouter } from "next/navigation";

export default function Blob() {
  const router = useRouter();
  const ref = useRef() as MutableRefObject<
    Mesh<BufferGeometry<NormalBufferAttributes>>
  >;

  // let [scale, setScale] = useState(0);
  let scale = useRef(1);
  const [springs, api] = useSpring(
    () => ({
      scale: 5,
      position: [0, 0, 0],
      config: (key: string) => {
        switch (key) {
          case "scale":
            return {
              mass: 10,
              friction: 100,
            };
          case "position":
            return { mass: 4, friction: 220 };
          default:
            return {};
        }
      },
    }),
    []
  );

  const uniform = useMemo(() => {
    return {
      uTime: { value: 0 },
      uIntensity: { value: 0.3 },
    };
  }, []);
  useFrame((state) => {
    if (ref.current) {
      // ref.current.rotation.y += 0.01;
      // ref.current.rotation.x += 0.01;
      // @ts-ignore
      ref.current.material.uniforms.uTime.value =
        3 * state.clock.getElapsedTime();
    }
  });

  const handleMouseWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      scale.current += 0.5;
      api.start({
        scale: scale.current,
      });
    } else if (e.deltaY < 0.0 && scale.current > 1) {
      scale.current -= 0.5;
      api.start({
        scale: scale.current,
      });
    }
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      api.start({
        position: [x * 0.5, y * -0.5, 0],
      });
    },
    [api]
  );

  const handleMouseOut = useCallback(() => {
    api.start({
      position: [0, 0, 0],
    });
  }, [api]);

  useEffect(() => {
    if (ref.current) {
      api.start({
        scale: 1,
      });
      // window.addEventListener('wheel', handleMouseWheel);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      // window.removeEventListener('wheel', handleMouseWheel);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [api, handleMouseMove, handleMouseOut]);
  const icoRef:any = useRef();

  useEffect(() => {}, []);

  return (
    <>
      <animated.mesh
        ref={ref}
        scale={springs.scale}
        // @ts-ignore
        position={springs.position}
      >
        {/* @ts-ignore */}
        {/* <div ref={icoRef}></div> */}
        <icosahedronGeometry ref={icoRef} args={[1, 500]}></icosahedronGeometry>
        <shaderMaterial
          // wireframe
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniform}
        ></shaderMaterial>
        {/* <meshStandardMaterial /> */}
      </animated.mesh>
    </>
  );
}
