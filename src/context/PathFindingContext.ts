import { createContext, ReactNode, useState } from "react";
import { AlgorithmType, MazeType, GridType } from "../utils/types";

interface PathFindingContext {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    gird: GridType;
    setGrid: (gird: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext = createContext<PathFindingContext | undefined>(undefined);

export const PathFunctionProvider = ({childern}: {childern: ReactNode}) => {
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [gird, GridType] = useState<GridType>([]);
}