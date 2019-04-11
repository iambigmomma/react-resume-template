import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class Interest extends Component {

    state = {
        prices:[100,200,250],
        positions: ['Bronze','Silver','Gold'],
        desc:['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            ],
        links:['http://www.google.com','http://www.google.com','http://www.google.com'],
        delay:[500,0,500]
    }

    showBoxes = () =>(
        this.state.prices.map((box,i) =>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                       
                    </div>
                </div>

            </Zoom>
            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wraper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Interest;