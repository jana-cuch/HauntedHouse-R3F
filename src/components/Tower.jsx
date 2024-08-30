import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Tower() {
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
      <mesh position={[1.9, 4 * 0.5, 1.9]}>
        <cylinderGeometry args={[0.8, 0.8, 4, 6]} />
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
