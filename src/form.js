import { Component } from "react";
import { dataStore } from "./reduxStore";

class Form extends Component {

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
    valueChanged = (e) => {
        console.log(`The new entry is -> ${this.state.name} -> 
        ${this.state.text}`);
    }

    render(){
        return (
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
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default Form;