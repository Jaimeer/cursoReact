import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDom.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDom.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDom.findDOMNode(this.refs.blue.refs.inp).value,
        })
    }

    render() {
        return (
            <div>
                <h1>Curso React</h1>
                <Slider ref="red" update={this.update}/>
                {this.state.red}
                <br/>
                <Slider ref="green" update={this.update}/>
                {this.state.green}
                <br/>
                <Slider ref="blue" update={this.update}/>
                {this.state.blue}
                <br/>
            </div>
        )
    }
}

class Slider extends React.Component {
    render() {
        return (
            <div>
                <input type="range"
                       ref="inp"
                       min="0"
                       max="255"
                       onChange={this.props.update}/>
            </div>
        )
    }
}

export default App;