import Floor from "./components/Floor";
import FirstFloor from "./components/FirstFloor";
import FirstRoof from "./components/FirstRoof";
import SubRoof1 from "./components/SubRoof1";
import SecondFloor from "./components/SecondFloor";
import SubRoof2 from "./components/SubRoof2";
import SecondRoof from "./components/SecondRoof";
import Tower from "./components/Tower";
import TowerSubRoof1 from "./components/TowerSubRoof1";
import TowerSubRoof2 from "./components/TowerSubRoof2";
import TowerRoof1 from "./components/TowerRoof1";
import TowerRoof2 from "./components/TowerRoof2";
import GardenWall1 from "./components/GardenWall1";
import GardenWall2 from "./components/GardenWall2";
import GardenWall3 from "./components/GardenWall3";
import GardenWall4 from "./components/GardenWall4";
import Door from "./components/Door";
import Window1 from "./components/Window1";
import Window2 from "./components/Window2";
import Window3 from "./components/Window3";
import AllAnnexs from "./components/annexs/Genera";

export default function Experience() {
  return (
    <>
      <Floor />
      <FirstFloor />
      <FirstRoof />
      <SubRoof1 />
      <SecondFloor />
      <SubRoof2 />
      <SecondRoof />
      <AllAnnexs />
      <Tower />
      <TowerSubRoof1 />
      <TowerSubRoof2 />
      <TowerRoof1 />
      <TowerRoof2 />
      <GardenWall1 />
      <GardenWall2 />
      <GardenWall3 />
      <GardenWall4 />
      <Door />
      <Window1 />
      <Window2 />
      <Window3 />
    </>
  );
}
