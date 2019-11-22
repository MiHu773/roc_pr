import React from "react"
import { Table } from "reactstrap"

import "./ErrorMatrix.css"

function renderHeader(row) {
    return (
        <tr >
            <th >
                {row.threshold}
            </th>
            <th >
                {row.TP}
            </th>
            <th >
                {row.FP}
            </th>
            <th >
                {row.FN}
            </th>
            <th >
                {row.TN}
            </th>
            <th >
                {row.recall}
            </th>
            <th >
                {row.specifity}
            </th>
            <th >
                {row.precision}
            </th>
        </tr>
    )
}

function renderRow(row) {
    return (
        <tr >
            <td >
                {row.threshold}
            </td>
            <td >
                {row.TP}
            </td>
            <td >
                {row.FP}
            </td>
            <td >
                {row.FN}
            </td>
            <td >
                {row.TN}
            </td>
            <td >
                {formatFloat(row.recall)}
            </td>
            <td >
                {formatFloat(row.specifity)}
            </td>
            <td >
                {formatFloat(row.precision)}
            </td>
        </tr>
    )
}

function ErrorMatrix(props) {

    let headers = {
        threshold: "Próg", TP: "Tp", FP: "Fp", TN: "Tn", FN: "Fn",
        recall: "czułość", specifity: "swoistość", precision: "precyzja"
    }
    let data = props.data;
    data.sort((a, b) => a.threshold < b.threshold ? -1 : 1);
    let content = data.map(row => renderRow(row));

    return (
        <div className="table-data-container">
            <Table>
                <thead>
                    {renderHeader(headers)}
                </thead>

                <tbody >

                    {content}
                </tbody>

            </Table>
        </div>
    )
}

function formatFloat(val) {
    return isNaN(val) ? "-" : val.toFixed(2);
}

export default ErrorMatrix