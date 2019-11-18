import React, { useState } from "react"
import { Button, Tooltip } from "reactstrap"
function TooltipButton(props) {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <div>
            <Button color={props.color} onClick={props.onClick} id={props.id}>{props.children}</Button>
            <Tooltip placement="top" isOpen={tooltipOpen} target={props.id} toggle={toggle}>
                {props.tooltip}
            </Tooltip>
        </div>
    )

}

export default TooltipButton