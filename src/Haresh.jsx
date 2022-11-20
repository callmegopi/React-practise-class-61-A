import { Component } from "react";

export class Harish extends Component {
    render() {
        return <div>
            <h2>hello from harish class components</h2>
        </div>
    }
}
export class Naveen extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome to Naveen Component",
            welcome:"hell from welcome component" 
        }
    }
    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.welcome}</h2>
            </div>
        )
    }
}
export default Naveen