import React from "react"
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, Label } from "recharts"

function Chart(props) {

    var data = props.data.sort((a, b) => a.x > b.x)

    return (
        <div className="text-center">
            <h4>{props.title}</h4>
            <ResponsiveContainer width={400} height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"x"} domain={[0, 1]} type="number">
                        <Label value={props.xLabel} offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis domain={[0, 1]} type="number">
                        <Label value={props.yLabel} angle={-90} position="insideLeft" />
                    </YAxis>
                    <Tooltip />
                    <Line type="linear"  dataKey="y"  stroke="#874BBA" strokeWidth="2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;