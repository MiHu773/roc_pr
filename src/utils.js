
function compareRows(a, b) {
    if (a.state < b.state) return -1
    else if (a.state > b.state) return 1
    else if (a.result < b.result) return -1
    else if (a.result > b.result) return 1
    else return 0
}

function compareThreshold(a, b) {
    if (a.threshold < b.threshold) return -1
    else if (a.threshold > b.threshold) return 1
    else return 0
}

export {compareRows}
export {compareThreshold} 