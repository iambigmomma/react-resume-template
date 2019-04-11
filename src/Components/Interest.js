import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

class Interest extends Component {
    state = {
        icons_address:["images/interest/cloud-computing.png","images/interest/video-editing.png","images/interest/history.png"],
        titles: ['Cloud Computing','Video Editing','History'],
        desc:['Automation is future!',
              'Treasure memorable moments',
              'Understand the script of mankind'
            ],
        delay:[500,0,500]
    }
    
    showBoxes = () =>(
        this.state.titles.map((box,i) =>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="interest_item">
                    <div className="interest_inner_wrapper">
                    <div className="row">
                        {/* <div className="interest_icon">
                            <img align="middle" alt={this.state.titles[i]} src={this.state.icons_address[i]} />
                        </div> */}
                        <div className="interest_title">
                            <span>{this.state.titles[i]}</span>
                        </div>
                        <div className="interest_description">
                            {this.state.desc[i]}
                        </div>
                        </div>
                       
                    </div>
                </div>

            </Zoom>
            
        ))
    )

    render() {
        return (<div key={this.state.titles[0]} className="row">
                    <div className="bck_black">
                        <div className="center_wraper interest_section">
                            <h2>interest</h2>
                            <div className="interest_wrapper">
                                {this.showBoxes()}
                            </div>
                        </div>
                    </div>
                </div>
        )
        }
        // return (
            
        // );
    
    }

export default Interest;