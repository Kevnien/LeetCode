function isValidSudoku(board: string[][]): boolean {
    const subBoxMap: Map<string, Set<number>> = new Map<string, Set<number>>();
    const rowMap: Map<number, Set<number>> = new Map<number, Set<number>>();
    const colMap: Map<number, Set<number>> = new Map<number, Set<number>>();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            subBoxMap.set(`${i}${j}`, new Set<number>());
        }
    }
    for (let i: number = 0; i < 9; i++) {
        rowMap.set(i, new Set<number>());
        colMap.set(i, new Set<number>());
    }
    for (let row: number = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const value: string = board[row][col];
            if (value === '.' ) {
                continue;
            }
            const valueAsNumber: number = +value;
            const subBoxSet: Set<number> = subBoxMap.get(`${Math.floor(row/3)}${Math.floor(col/3)}`);
            const rowSet: Set<number> = rowMap.get(row);
            const colSet: Set<number> = colMap.get(col);
            if (subBoxSet.has(valueAsNumber) || rowSet.has(valueAsNumber) || colSet.has(valueAsNumber)) {
                return false;
            }
            subBoxSet.add(valueAsNumber);
            rowSet.add(valueAsNumber);
            colSet.add(valueAsNumber);
        }
    }
    return true;
};
