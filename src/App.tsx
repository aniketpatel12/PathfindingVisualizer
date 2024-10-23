import { useRef } from "react";
import { Grid } from "./componenets/Grid";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Grid isVisualizationRunningRef= {isVisualizationRunningRef}/>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
