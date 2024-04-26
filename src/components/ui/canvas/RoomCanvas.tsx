import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {Suspense, useRef} from "react";
import Loader from "../../../Loader";

const Room = () => {
  const {scene} = useGLTF("/room_04___magicavoxel/scene.gltf");
  const roomRef = useRef<any>();

  useFrame(() => {
    roomRef.current.rotation.y += 0.002;
  });

  return (
    <mesh>
      <ambientLight intensity={0.75} />
      <pointLight intensity={3} position={[-1, 2, 1]} />
      <primitive
        object={scene}
        scale={0.048}
        position={[0, -1.8, 0.25]}
        rotation={[0, 10.05, 0]}
        ref={roomRef}
      />
    </mesh>
  );
};

const RoomCanvas = () => {
  return (
    <Canvas frameloop='always' gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Room />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;
