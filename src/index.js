import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataInput from "./DataInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {Row, Col} from 'reactstrap';

const columns = [{id: "state", display: "Stan"}, {id: "result", display: "Wynik testu"}];
const rows = [{state: 1, result: 0.8}, {state: 0, result: 0.3}, {state: 1, result: 0.5}];

const columnsThresh = [{id: "threshold", display: "Próg"}];
const rowsThresh = [{threshold: 0.2}, {threshold: 0.4}, {threshold: 0.6}, {threshold: 0.8}];

ReactDOM.render(<Row>
    <Col><DataInput columns={columns} rows={rows}/></Col>
    <Col><DataInput columns={columnsThresh} rows={rowsThresh}/></Col>
</Row>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
