import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Annex1() {
  const wallColorTexture = useTexture(
    "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"
  );
  const wallARMTexture = useTexture(
    "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"
  );
  const wallNormalTexture = useTexture(
    "/wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg"
  );
  useEffect(() => {
    wallColorTexture.colorSpace = THREE.SRGBColorSpace;
    wallColorTexture.wrapS = THREE.RepeatWrapping;
    wallARMTexture.wrapS = THREE.RepeatWrapping;
    wallNormalTexture.wrapS = THREE.RepeatWrapping;
    wallColorTexture.wrapT = THREE.RepeatWrapping;
    wallARMTexture.wrapT = THREE.RepeatWrapping;
    wallNormalTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <>
      <mesh position={[0, 2 * 0.5 + 2.5 + 0.05, 0.75 + 0.5]}>
        <boxGeometry args={[1.5, 2, 1.5]} />
        <meshStandardMaterial
          map={wallColorTexture}
          aopMap={wallARMTexture}
          roughnessMap={wallARMTexture}
          metalnessMap={wallARMTexture}
          normalMap={wallNormalTexture}
        />
      </mesh>
    </>
  );
}
