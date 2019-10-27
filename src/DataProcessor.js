
function processRows(results, thresholds) {
    let processedRows = [];
    for (let i = 0; i < thresholds.length; i++) {
        let TP = 0;
        let FP = 0;
        let TN = 0;
        let FN = 0;
        for (let j = 0; j < results.length; j++) {
            if (results[j].state == 1) {
                if (results[j].result >= thresholds[i].threshold) TP++;
                else FN++;
            } else {
                if (results[j].result >= thresholds[i].threshold) FP++;
                else TN++;
            }
        }
        processedRows.push(new ProcessedRow(thresholds[i].threshold, TP, FP, TN, FN));
    }
    return (processedRows);
}

export function prepareRocData(rawData) {
    return rawData.map((data) => {return {x: 1 - data.specifity, y: data.recall}});
}

export function prepareRpData(rawData) {
    return rawData.map((data) => {return {x: data.recall, y: data.precision }});
}

class ProcessedRow {
    constructor(threshold, TP, FP, TN, FN) {
        this.threshold = threshold;
        this.TP = TP;
        this.FP = FP;
        this.TN = TN;
        this.FN = FN;
        this.recall = TP / (TP + FN);
        this.specifity = TN / (TN + FP);
        this.precision = TP / (TP + FP);
        this.dokladnosc = (TP + TN) / (TP + TN + FP + FN);
        this.error = 1 - this.dokladnosc;
        this.F1 = 2 * this.precision * this.recall / (this.precision + this.recall);
    }
}

export default processRows;
