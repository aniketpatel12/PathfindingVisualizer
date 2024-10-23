import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid( {isVisualizationRunningRef } : {isVisualizationRunningRef : MutableRefObject<boolean>}){
    const {grid, setGrid } = usePathfinding();
    const [ isMouseDown, setIsMoudDown ] = useState(false);
    
    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;

        setIsMoudDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const hadnelMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;

        setIsMoudDown(false);
    };

    const handleMouseEnter = (row: number, col: number) =>{
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) return;

        if (isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };

    return (
        <div 
            className={twMerge(
                // Base Classes
                "flex items-center flex-col justify-center border-sky-300",
                // Control Heights of Grids
                `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 17}px]`,
                // Control Girds Width
                `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 17}px]`
            )}
        >
            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const {row, col, isStart, isEnd, isWall, isPath, isTraversed} = tile;
                        return (
                            <Tile 
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isStart={isStart}
                                isEnd={isEnd}
                                isWall={isWall}
                                isPath={isPath}
                                isTraversed={isTraversed}
                                handleMouseDown={() => handleMouseDown(row, col)}
                                handleMouseUp={() => hadnelMouseUp(row, col)}
                                handleMouseEnter={() => handleMouseEnter(row, col)}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )
}