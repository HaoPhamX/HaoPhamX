import React, { Component } from 'react'
import './Calculator.css'

export default class Calculator extends Component {

    state = {
        value: "",
        count: 0, // đây không phải là số 
        isSign: 0, // đây không phải là dấu
        isDots: 0, // không phải là dấu chấm
        currentSign: ""
    }

    input = {
        beforeSign: "", // số trước dấu
        sign: "", // dấu
        afterSign: "", // số sau dấu
    }
    calculator = () => {
        let result = 0;
        switch (this.input.sign) {
            case "+":
                result = Number(this.input.beforeSign) + Number(this.input.afterSign);
                this.input.beforeSign = result;
                this.input.sign = this.state.currentSign;
                this.input.afterSign = "";
                this.setState({
                    value: this.input.beforeSign + this.state.currentSign,
                    currentSign: "",
                    count: 0, // đây là số 
                    isSign: 1
                })
                break;
            case "*":
                result = Number(this.input.beforeSign) * Number(this.input.afterSign);
                this.input.beforeSign = result;
                this.input.sign = this.state.currentSign;
                this.input.afterSign = "";
                this.setState({
                    value: this.input.beforeSign + this.state.currentSign,
                    currentSign: "",
                    count: 0, // đây là số 
                    isSign: 1
                })
                break;
            case "/":
                result = Number(this.input.beforeSign) / Number(this.input.afterSign);
                this.input.beforeSign = result;
                this.input.sign = this.state.currentSign;
                this.input.afterSign = "";
                this.setState({
                    value: this.input.beforeSign + this.state.currentSign,
                    currentSign: "",
                    count: 0, // đây là số 
                    isSign: 1
                })
                break;
            case "-":
                result = Number(this.input.beforeSign) - Number(this.input.afterSign);
                this.input.beforeSign = result;
                this.input.sign = this.state.currentSign;
                this.input.afterSign = "";
                this.setState({
                    value: this.input.beforeSign + this.state.currentSign,
                    currentSign: "",
                    count: 0, // đây là số 
                    isSign: 1
                })
                break;
            default:
                break;
        }
    }

    inputDisplay = (number) => {
        // nhập số before và after sign
        if (number !== "+" && number !== "*" && number !== "/" && number !== "-" && number !== "." && number !== "C" && number !== "CE") {
            if (this.state.isSign === 0) {
                this.input.beforeSign += number;
                this.setState({
                    count: 1, // là số,
                    value: this.input.beforeSign + this.input.sign
                })
            } else {
                this.input.afterSign += number;
                this.setState({
                    count: 1, // là số,
                    value: this.input.beforeSign + this.input.sign + this.input.afterSign
                })
            }
        }
        //cộng trừ nhân chia
        if ((number === "+" || number === "*" || number === "/" || number === "-") & this.state.count === 1 && this.state.isSign === 0) {
            this.input.sign = number;
            this.setState({
                value: this.input.beforeSign + this.input.sign,
                count: 0, // không phải là số 
                isSign: 1, // là phép tính
                isDots: 0

            })
        }
        //thay đổi cộng trừ nhân chia
        if ((number === "+" || number === "*" || number === "/" || number === "-") && this.state.count === 0 && this.state.isSign === 1) {
            this.input.sign = number;
            this.setState({
                value: this.input.beforeSign + this.input.sign,
                count: 0, // không phải là số 
                isSign: 1, // là phép tính
                isDots: 0
            })
        }
        //dấu chấm động
        if (number === "." && this.state.count === 1 && this.state.isDots === 0) {
            if (this.state.isSign === 0) {
                this.input.beforeSign += number;
                this.setState({
                    value: this.input.beforeSign + this.input.sign,
                    isDots: 1,
                    count: 0
                })
            } else {
                this.input.afterSign += number;
                this.setState({
                    value: this.input.beforeSign + this.input.sign + this.input.afterSign,
                    isDots: 1,
                    count: 0
                })
            }

        }
        // đã nhập xong a + c và tiếp tục nhấn dấu thì cho thực hiện phép tính luôn
        if ((number === "+" || number === "*" || number === "/" || number === "-") && this.state.count === 1 && this.state.isSign === 1) {
            this.setState({
                currentSign: number
            }, () => {
                this.calculator();
            })

        }
        if (number === "C") {
            this.input.beforeSign = "";
            this.input.sign = "";
            this.input.afterSign = "";
            this.setState({
                value: "",
                count: 0,
                isSign: 0,
                isDots: 0,
                currentSign: ""
            })
        }
        if (number === "CE") {
            if (this.state.isSign === 0) {
                this.input.beforeSign = "";
                this.input.afterSign = "";
                this.setState({
                    value: ""
                })
            }else{
                this.input.afterSign = "";
                this.setState({
                    value: this.input.beforeSign + this.input.sign
                })
            }
        }
    }

    render() {
        return (
            <div className="container-fluid text-center">
                <h1>CHƯƠNG TRÌNH MÁY TÍNH ONLINE</h1>
                <div className="row justify-content-center m-0">
                    <div className="col-3">
                        <div className="border p-4 text-left">
                            <div className="row">
                                <div className="col-12 p-0">
                                    <input disabled style={{ width: '100%' }} id="text" className="text-right" value={this.state.value} />
                                </div>
                            </div>
                            <div className="click">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary " onClick={() => {
                                                        this.inputDisplay("7");
                                                    }}>7</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("8");
                                                    }}>8</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("9");
                                                    }}>9</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("/");
                                                    }}>/</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("CE");
                                                    }}>CE</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="click">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary " onClick={() => {
                                                        this.inputDisplay("4");
                                                    }}>4</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("5");
                                                    }}>5</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("6");
                                                    }}>6</button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("*");
                                                    }}>*</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col">
                                                <div className="button">
                                                    <button className="btn btn-secondary" onClick={() => {
                                                        this.inputDisplay("C");
                                                    }}>C</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="click">
                                <div className="row">
                                    <div className="col-10">
                                        <div className="click mt-0">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="button">
                                                        <button className="btn btn-secondary " onClick={() => {
                                                            this.inputDisplay("1");
                                                        }}>1</button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay("2");
                                                        }}>2</button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay("3");
                                                        }}>3</button>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay("-");
                                                        }}> - </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="click">
                                            <div className="row">
                                                <div className="col-6 p-0">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay("0");
                                                        }}>0</button>
                                                    </div>
                                                </div>
                                                <div className="col-3 p-0 ">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay(".");
                                                        }}>.</button>
                                                    </div>
                                                </div>
                                                <div className="col-3 p-0 ">
                                                    <div className="button">
                                                        <button className="btn btn-secondary" onClick={() => {
                                                            this.inputDisplay("+");
                                                        }}> + </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <div className="col">
                                                <div className="button">
                                                    <button style={{ height: '96px' }} className="btn btn-secondary" onClick={() => {
                                                        this.calculator();
                                                    }}> = </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button onClick={() => {
                    this.inputDisplay("1");
                }}>1</button>
                <button onClick={() => {
                    this.inputDisplay("2");
                }}>2</button>
                <button onClick={() => {
                    this.inputDisplay("+");
                }}>+</button>
                <button onClick={() => {
                    this.inputDisplay("-");
                }}>-</button>
                <button onClick={() => {
                    this.inputDisplay("*");
                }}>*</button>
                <button onClick={() => {
                    this.inputDisplay("/");
                }}>/</button>
                <button onClick={() => {
                    this.inputDisplay(".");
                }}>.</button>
                <button onClick={() => {
                    this.inputDisplay("C");
                }}>C</button>
                <button onClick={() => {
                    this.inputDisplay("CE");
                }}>CE</button>
                <button onClick={() => { this.calculator() }}>=</button> */}
            </div>
        )
    }
}
