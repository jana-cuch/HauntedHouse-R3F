import {
  Environment,
  Grid,
  OrbitControls,
  RoundedBox,
  Sky,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Grid args={[100, 100]} position={[0, 0.1, 0]} />
        <Experience />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
