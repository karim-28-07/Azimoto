import React, { Component } from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';

class QuestionPage extends Component {
    state = {
        radio: 0
    };

    onClick = nr => () => {
        this.setState({
            radio: nr
        });
    };

    render() {
        return (
            <MDBFormInline className="my-5">
                <h5 className="col-12">
                1- Je connais bien mes qualités:
                </h5>

                <MDBInput
                    onClick={this.onClick(1)}
                    checked={this.state.radio === 1 ? true : false}
                    label='1'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}

                />
                <MDBInput
                    onClick={this.onClick(2)}
                    checked={this.state.radio === 2 ? true : false}
                    label='2'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(3)}
                    checked={this.state.radio === 3 ? true : false}
                    label='3'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(4)}
                    checked={this.state.radio === 4 ? true : false}
                    label='4'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(5)}
                    checked={this.state.radio === 5 ? true : false}
                    label='5'
                    type='radio'
                    id='radio1'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}

                />
                <MDBInput
                    onClick={this.onClick(6)}
                    checked={this.state.radio === 6 ? true : false}
                    label='6'
                    type='radio'
                    id='radio2'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(7)}
                    checked={this.state.radio === 7 ? true : false}
                    label='7'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(8)}
                    checked={this.state.radio === 8 ? true : false}
                    label='8'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(9)}
                    checked={this.state.radio === 9 ? true : false}
                    label='9'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "100%",
                        height: "15px"
                    }}
                />
                <MDBInput
                    onClick={this.onClick(10)}
                    checked={this.state.radio === 10 ? true : false}
                    label='10'
                    type='radio'
                    id='radio3'
                    containerClass='mr-5'
                    style={{
                        width: "65%",
                        height: "15px"
                    }}
                />


                    


            </MDBFormInline>
          
        );
    }
}

export default QuestionPage;

