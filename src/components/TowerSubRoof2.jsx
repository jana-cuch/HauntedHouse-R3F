import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function TowerSubRoof2() {
  const roofColorTexture = useTexture(
    "./roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg"
  );
  const roofARMTexture = useTexture(
    "./roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg"
  );
  const roofNormalTexture = useTexture(
    "./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg"
  );

  useEffect(() => {
    roofColorTexture.colorSpace = THREE.SRGBColorSpace;

    roofColorTexture.wrapS = THREE.RepeatWrapping;
    roofARMTexture.wrapS = THREE.RepeatWrapping;
    roofNormalTexture.wrapS = THREE.RepeatWrapping;

    roofColorTexture.wrapT = THREE.RepeatWrapping;
    roofARMTexture.wrapT = THREE.RepeatWrapping;
    roofNormalTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <>
      <mesh position={[1.9, 0.05 * 0.5 + 4.1, 1.9]}>
        <cylinderGeometry args={[1, 1, 0.05, 6]} />
        <meshStandardMaterial
          map={roofColorTexture}
          aopMap={roofARMTexture}
          roughnessMap={roofARMTexture}
          metalnessMap={roofARMTexture}
          normalMap={roofNormalTexture}
        />
      </mesh>
    </>
  );
}
