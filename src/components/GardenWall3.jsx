import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function GardenWall3() {
  const gardenWallColorTexture = useTexture(
    "/garden/broken_wall_1k/broken_wall_diff_1k.jpg"
  );
  const gardenWallARMTexture = useTexture(
    "/garden/broken_wall_1k/broken_wall_arm_1k.jpg"
  );
  const gardenWallNormalTexture = useTexture(
    "/garden/broken_wall_1k/broken_wall_nor_gl_1k.jpg"
  );

  useEffect(() => {
    gardenWallColorTexture.colorSpace = THREE.SRGBColorSpace;
    gardenWallColorTexture.wrapS = THREE.RepeatWrapping;
    gardenWallARMTexture.wrapS = THREE.RepeatWrapping;
    gardenWallNormalTexture.wrapS = THREE.RepeatWrapping;
    gardenWallColorTexture.wrapT = THREE.RepeatWrapping;
    gardenWallARMTexture.wrapT = THREE.RepeatWrapping;
    gardenWallNormalTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <>
      <mesh
        position={[-2 + 0.1, 0.7 * 0.5, 3.45]}
        rotation={[0, Math.PI * 0.5, 0]}
      >
        <boxGeometry args={[2.9, 0.7, 0.2]} />
        <meshStandardMaterial
          map={gardenWallColorTexture}
          aopMap={gardenWallARMTexture}
          roughnessMap={gardenWallARMTexture}
          metalnessMap={gardenWallARMTexture}
          normalMap={gardenWallNormalTexture}
        />
      </mesh>
    </>
  );
}
