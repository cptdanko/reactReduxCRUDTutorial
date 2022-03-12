import React from "react";
import PropTypes from 'prop-types';
import "./modal.css";
import { dataStore } from "../reduxStore";

export default class Modal extends React.Component {

    state = {
        name: "It's name?",
        text: "Type your text here"
    }
    formElemClick = (e) => {
        if((e.target.id === "newEntryTitle"
        && e.target.value === this.state.name)
        || (e.target.id === "newEntryText"
        && e.target.value === this.state.text)) {
            e.target.value = "";    
        }
    }
    handleSubmit = (e) => {
        console.log(e);
        console.log(`Submit is -> ${this.state.name}`);
        const newContent = {
            title: e.target[0].value,
            content: e.target[1].value
        };
        dataStore.dispatch({
            type: "ADD",
            payload: newContent
        });
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if(!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                <form onSubmit={this.handleSubmit}>
                    <div style={{ paddingTop: 20 }} >
                    <div>New Content</div>
                    <div> 
                        <input placeholder={this.state.name} 
                            onChange={this.valueChanged}
                            defaultValue={this.state.name} 
                            onClick={this.formElemClick}
                            id="newEntryTitle"></input> 
                    </div>
                    <div>
                        <textarea onChange={this.valueChanged}
                            onClick={this.formElemClick}
                            placeholder={this.state.text}
                            defaultValue={this.state.text} 
                            rows={5} cols={40} id="newEntryText"></textarea>
                    </div>
                    <div className="addFormBtnContainer">
                        <button type="submit" className="button" >Save Entry</button>
                        <button className="button" onClick={this.onClose}>
                            Close Modal
                        </button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};