import React, { useState } from "react";
import Accordion from "./Accordion";
import Form from "./form";
import Modal from "./components/modal";
import { dataStore } from "./reduxStore";

const App = () => {
    let d = dataStore.getState();
    const [show, setShow] = useState(false);
    const [data, setData] = useState(d);

    dataStore.subscribe(() => {
        setData(dataStore.getState());
    });

    function showModal() {
        setShow(!show);
    };
    
    return (
        <div>
            <h1> React Accordion Demo</h1>
            <div className="accordion">
                {data.map(({title, content}) => (
                    <Accordion id={title} title={title} content={content} />
                ))}
                <Form />

                <div>
                    <button onClose={showModal} onClick={showModal}>Show Modal</button>
                </div>
                
                <Modal show={show} onClose={showModal} />
                <hr />
            </div>
        </div>
    )
};

export default App;
