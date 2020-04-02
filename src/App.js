import React, { Component } from 'react';
import axios from 'axios';
import Output from './component/Output';
import Select from './component/Controls/Select';
import Text from './component/Controls/Text';


export class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      paras:4,
      html:'html',
      text: ''
    }


  }
  componentDidMount(){
    this.getSampleText();
  }
  getSampleText(){
    const paras =this.state.paras;
    const html = this.state.html;
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1&format=${html} `)
    .then(res => {
      this.setState({text: res.data}, ()=>{
        // console.log(this.state)
      });
    })
    .catch(err =>{
      console.log(err);
    })
  }

  showHtml = (x)=>{
    this.setState({html: x}, this.getSampleText)
  }
  changeParas = (x)=>{
    this.setState({paras: x}, this.getSampleText)
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">React Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text value={this.state.paras} onChange={this.changeParas} />
          </div>
          <div className="form-group">
            <label>Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHtml} />
          </div>
        </form>
        <br/> <br/>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App
