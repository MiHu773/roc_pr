import React from "react"
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Label } from "recharts"

function Chart(props) {

    return (
        <div className="text-center">
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={props.data}  margin={{ top: 5, right: 5, left: 5, bottom: 35 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"x"} domain={[0, 1]} type="number" name={props.xLabel}>
                        <Label value={props.xLabel} offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis domain={[0, 1]} type="number">
                        <Label value={props.yLabel} angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip labelFormatter={(label) => props.xLabel + ": " + label}/>
                    <Line type="linear"  dataKey="y"  stroke="#874BBA" strokeWidth="2" name={props.yLabel} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;