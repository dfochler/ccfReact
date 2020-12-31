import React, { Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { PLOTS } from '../shared/plots.js';

export default class Accordions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            plots: PLOTS
        };
}

render() {
    return (
        <React.Fragment>
        
            <Accordion allowZeroExpanded allowMultipleExpanded 
            className="ml-auto mr-3" style={{ height: '30vh', width: '30%' }}>
                <h2 style={{color:"whitesmoke"}}>Find a Plot:</h2>
                {this.state.plots.map((item) => (
                        <AccordionItem key={item.uuid}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {(item.id + 1)} - 
                                    {item.name}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="panel">
                                {item.address}<br/>
                                {item.info}<br/>
                                {item.image}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
            </Accordion>
        </React.Fragment>
    );
}
}

/*<Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>*/