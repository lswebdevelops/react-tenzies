import React, { Component } from 'react';
import MyComponent from "./Components/MyComponent";
import "./Styles/Style.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.onClickBtn = this.onClickBtn.bind(this);
    }

    onClickBtn(){
        console.clear();
        console.log("Button was heavily clicked on!");
    }

    render(){
        return(
            <div>
                <MyComponent 
                    title="React"
                    onButtonClicked={this.onClickBtn}
                />
            </div>
        )
    }

}
export default App;
