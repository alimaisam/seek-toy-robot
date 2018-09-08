const Playground = {
    initiate: (xSize, ySize) => {
        if (xSize <= 0 || ySize <= 0 ) throw new Error ('Table size should be greater than 0');
        return {
            x: xSize,
            y: ySize
        }
    }
}

export default Playground