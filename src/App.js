import React, { useState } from "react";
import Accordion from "./Accordion";
import Modal from "./components/modal";
import { dataStore } from "./reduxStore";

const App = () => {
    let d = dataStore.getState();
    const [show, setShow] = useState(false);
    const [data, setData] = useState(d);

    dataStore.subscribe(() => {
        setData(dataStore.getState());
    });

    function addEntryForm() {
        setShow(!show);
    };
    
    return (
        <div>
            <h1> React Accordion/Redux Store Demo</h1>
            <div className="accordion">
                {data.map(({title, content}) => (
                    <Accordion id={title} title={title} content={content} />
                ))}

                <div className="addFormBtnContainer">
                    <button className="button" onClose={addEntryForm} onClick={addEntryForm}>Add Entry</button>
                </div>
                
                <Modal show={show} onClose={addEntryForm} />
                <hr />
            </div>
        </div>
    )
};

export default App;
