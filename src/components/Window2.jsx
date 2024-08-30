import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Window2() {
  const windowColorTexture = useTexture(
    "/window/brown_planks_09_1k/brown_planks_09_diff_1k.jpg"
  );
  const windowARMTexture = useTexture(
    "/window/brown_planks_09_1k/brown_planks_09_arm_1k.jpg"
  );
  const windowNormalTexture = useTexture(
    "/window/brown_planks_09_1k/brown_planks_09_nor_gl_1k.jpg"
  );

  useEffect(() => {
    windowColorTexture.colorSpace = THREE.SRGBColorSpace;
    windowColorTexture.wrapS = THREE.RepeatWrapping;
    windowARMTexture.wrapS = THREE.RepeatWrapping;
    windowNormalTexture.wrapS = THREE.RepeatWrapping;
    windowColorTexture.wrapT = THREE.RepeatWrapping;
    windowARMTexture.wrapT = THREE.RepeatWrapping;
    windowNormalTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <>
      <mesh position={[-0.05, 3.98, 2.011]} rotation={[0, 0, Math.PI * 0.34]}>
        <planeGeometry args={[0.125, 0.5]} />
        <meshStandardMaterial
          map={windowColorTexture}
          aopMap={windowARMTexture}
          roughnessMap={windowARMTexture}
          metalnessMap={windowARMTexture}
          normalMap={windowNormalTexture}
        />
      </mesh>
    </>
  );
}
