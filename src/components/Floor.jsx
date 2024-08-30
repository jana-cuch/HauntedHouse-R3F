import { useTexture } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Floor() {
  const floorAlphaTexture = useTexture("./floor/alpha.jpg");
  const floorColorTexture = useTexture(
    "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.jpg"
  );
  const floorARMTexture = useTexture(
    "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.jpg"
  );
  const floorNormalTexture = useTexture(
    "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg"
  );
  const floorDisplacementTexture = useTexture(
    "./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg"
  );

  useEffect(() => {
    floorColorTexture.colorSpace = THREE.SRGBColorSpace;

    floorColorTexture.repeat.set(8, 8);
    floorARMTexture.repeat.set(8, 8);
    floorNormalTexture.repeat.set(8, 8);
    floorDisplacementTexture.repeat.set(8, 8);

    floorColorTexture.wrapS = THREE.RepeatWrapping;
    floorARMTexture.wrapS = THREE.RepeatWrapping;
    floorNormalTexture.wrapS = THREE.RepeatWrapping;
    floorDisplacementTexture.wrapS = THREE.RepeatWrapping;

    floorColorTexture.wrapT = THREE.RepeatWrapping;
    floorARMTexture.wrapT = THREE.RepeatWrapping;
    floorNormalTexture.wrapT = THREE.RepeatWrapping;
    floorDisplacementTexture.wrapT = THREE.RepeatWrapping;
  });

  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial
        alphaMap={floorAlphaTexture}
        map={floorColorTexture}
        transparent={true}
        aopMap={floorARMTexture}
        roughnessMap={floorARMTexture}
        metalnessMap={floorARMTexture}
        normalMap={floorNormalTexture}
        displacementMap={floorDisplacementTexture}
        displacementScale={0.3}
        displacementBias={-0.2}
      />
    </mesh>
  );
}
