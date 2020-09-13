const treatCells = (steps: number = 2, circle: number[] = [1, 0, 1, 1]) => {
    const neuralNetwork = { cells: [], value: [] };
    let baseCircle = circle;
    for (let i = 0; i < steps; i++) {
        neuralNetwork.cells = baseCircle.map((e, i) => {
            const leftCell =
                typeof baseCircle[i - 1] !== "undefined"
                    ? baseCircle[i - 1]
                    : baseCircle[baseCircle.length - 1];
            const rightCell =
                typeof baseCircle[i + 1] !== "undefined"
                    ? baseCircle[i + 1]
                    : baseCircle[0];
            const needToRest =
                (leftCell === 1 && rightCell === 1) ||
                (leftCell === 0 && rightCell === 0);
            const cell = {
                state: e === 1 ? "excited" : "quiet",
                willBeQuiet: needToRest
            };
            return cell;
        });
        neuralNetwork.value = neuralNetwork.cells.map(c => Number(!c.willBeQuiet));
        baseCircle = neuralNetwork.value;
        console.log(`Step${i + 1} => ${baseCircle}`);
    }
};
treatCells();