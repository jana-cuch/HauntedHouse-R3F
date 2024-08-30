import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Door() {
  const doorAlphaTexture = useTexture("./door/alpha.jpg");
  const doorColorTexture = useTexture("./door/color.jpg");
  const doorAmbientOcclusionTexture = useTexture("./door/ambientOcclusion.jpg");
  const doorNormalTexture = useTexture("./door/normal.jpg");
  const doorRoughnessTexture = useTexture("./door/roughness.jpg");
  const doorMetalnessTexture = useTexture("./door/metalness.jpg");
  const doorHeightTexture = useTexture("./door/height.jpg");

  useEffect(() => {
    doorColorTexture.colorSpace = THREE.SRGBColorSpace;

    doorColorTexture.repeat.set(1, 1);
    doorAlphaTexture.repeat.set(1, 1);
    doorNormalTexture.repeat.set(1, 1);
    doorAmbientOcclusionTexture.repeat.set(1, 1);
    doorRoughnessTexture.repeat.set(1, 1);
    doorMetalnessTexture.repeat.set(1, 1);
    doorHeightTexture.repeat.set(1, 1);

    doorColorTexture.wrapS = THREE.RepeatWrapping;
    doorAlphaTexture.wrapS = THREE.RepeatWrapping;
    doorNormalTexture.wrapS = THREE.RepeatWrapping;
    doorAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
    doorRoughnessTexture.wrapS = THREE.RepeatWrapping;
    doorMetalnessTexture.wrapS = THREE.RepeatWrapping;
    doorHeightTexture.wrapS = THREE.RepeatWrapping;

    doorColorTexture.wrapT = THREE.RepeatWrapping;
    doorAlphaTexture.wrapT = THREE.RepeatWrapping;
    doorNormalTexture.wrapT = THREE.RepeatWrapping;
    doorAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
    doorRoughnessTexture.wrapT = THREE.RepeatWrapping;
    doorMetalnessTexture.wrapT = THREE.RepeatWrapping;
    doorHeightTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <>
      <mesh position={[0, 2.2 * 0.5, 1.96]}>
        <boxGeometry args={[2, 2.5, 0.1]} />
        <meshStandardMaterial
          map={doorColorTexture}
          transparent={true}
          alphaMap={doorAlphaTexture}
          aopMap={doorAmbientOcclusionTexture}
          displacementMap={doorHeightTexture}
          roughnessMap={doorRoughnessTexture}
          metalnessMap={doorMetalnessTexture}
          normalMap={doorNormalTexture}
        />
      </mesh>
    </>
  );
}
