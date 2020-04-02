import React, { Component } from 'react'

export class Select extends Component {
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
                <select className="form-control" onChange={this.onChange}>
                    <option value="html">Yes</option>
                    <option value=''>No</option>
                </select>
            </React.Fragment>
        )
    }
}

export default Select
