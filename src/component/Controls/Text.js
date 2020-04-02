import React, { Component } from 'react'

export class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange = (e)=>{
        this.setState({value: e.target.value}, ()=>{
            this.props.onChange(this.state.value)
        });
    }
    render() {
        return (
            <React.Fragment>
                <input className="form-control" type="number" value={this.state.value} onChange={this.onChange} style={{marginRight: '20px'}} />
            </React.Fragment>
        )
    }
}

export default Text;
