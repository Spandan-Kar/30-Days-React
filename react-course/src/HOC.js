//const EnhancedComponent= higherOrderComponent(OriginalComponent)

//const Batman= WithBatSuit(BruceWayne)

import React from "react"
import ClickCounterWithoutHOC from "./ClickCounter"
import HoverCounterWithoutHOC from "./HoverCounter";

export default function HOC() {
    return (
        <div>
            <ClickCounterWithoutHOC />
            <HoverCounterWithoutHOC />
        </div>
    );
}