import React, { Component } from 'react';
import calculatorImg from '../../calculator.png';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false
        }

        this.calculate = this.calculate.bind(this);
        this.clearDisplay = this.clearDisplay.bind(this);
    }

    updateHeader(val) {
        this.setState({ 
            header: val 
        });
    }

    setDisplay(num) {
        console.log(this.state.resetDisplay);
        if(this.state.resetDisplay){
            this.setState({
                display: num,
                operator: '',
                temp: 0,
                resetDisplay: false
            })
        }else{
            let display = this.state.display === '0' ? num : this.state.display + num;
            
            this.state.display.length < 13 && this.setState({
                display: display,
                resetDisplay: false
            })
        }
    }

    setOperator(operator){
        !this.state.operator && this.setState({
            operator: operator,
            temp: Number(this.state.display),
            display: '0'
        })
    }

    calculate(){
        let result;

        switch ( this.state.operator ) {
            case '':
              return;
            case '+':
              result = this.state.temp + Number(this.state.display);
              break;
            case '-':
              result = this.state.temp - Number(this.state.display);
              break;
            case '*':
              result = this.state.temp * Number(this.state.display);
              break;
            case '/':
              result = this.state.temp / Number(this.state.display);
              break;
            default:
              return;
          }

          this.setState({
               display: String(result),
               resetDisplay: true
            });
        
    }

    clearDisplay(){
        this.setState({
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false
        })
    }

    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={e => this.updateHeader(e.target.value)} />
                <h1 id="header"> {this.state.header} </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">{this.state.display}</span>
                    </div>

                    <div className="btn clear" onClick={this.clearDisplay}></div>

                    <div onClick={()=> this.setDisplay(0)} className="btn zero"></div>
                    <div onClick={this.setDisplay.bind(this, '1')} className="btn one"></div>
                    <div onClick={this.setDisplay.bind(this, '2')} className="btn two"></div>
                    <div onClick={this.setDisplay.bind(this, '3')} className="btn three"></div>
                    <div onClick={this.setDisplay.bind(this, '4')} className="btn four"></div>
                    <div onClick={this.setDisplay.bind(this, '5')} className="btn five"></div>
                    <div onClick={this.setDisplay.bind(this, '6')} className="btn six"></div>
                    <div onClick={this.setDisplay.bind(this, '7')} className="btn seven"></div>
                    <div onClick={this.setDisplay.bind(this, '8')} className="btn eight"></div>
                    <div onClick={this.setDisplay.bind(this, '9')} className="btn nine"></div>

                    <div onClick={this.calculate} className="btn equal"></div>
                    <div onClick={()=>this.setOperator('*')} className="btn multiply"></div>
                    <div onClick={()=>this.setOperator('/')} className="btn divide"></div>
                    <div onClick={()=>this.setOperator('-')} className="btn subtract"></div>
                    <div onClick={()=>this.setOperator('+')} className="btn add"></div>
                </div>
            </div>
        );
    }
}