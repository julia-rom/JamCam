// import React, { Component } from 'react';
// import Track from './track'
// import { uniqueID } from '../services/helpers';
// import { startLoop } from '../services/tone_manager.js';
// import trackTriggerAreas from '../services/track_trigger_areas.js';

// class TrackBoard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             trackNames: ['kick', 'bass', 'clap', 'hat', 'perc', 'vocal'],
//             loops: {
//                 kick: { active: false },
//                 bass: { active: false },
//                 clap: { active: false },
//                 hat: { active: false },
//                 perc: { active: false },
//                 vocal: { active: false },
//             },
//             previousTrack: 'none'
//         };
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.rightWrist !== prevProps.rightWrist) {
//             trackTriggerAreas(this.props.rightWrist, this.receiveLoopPress)
//         }
//     };

//     //Callback provided to LoopsSection. Passes state to loopCheck & calls startLoop function
//     receiveLoopPress = loop => {
//         if (
//             loop !== 'none' &&
//             loop !== 'movedOut' &&
//             this.state.previousTrack !== loop
//         ) {
//             let loops = { ...this.state.loops };
//             startLoop(loop, this.loopCheck);
//             this.setState({ previousTrack: loop, loops });
//         } else if (loop === 'movedOut') {
//             this.setState({ previousTrack: 'none' });
//         }
//     };

//     //Checks if loop active, then updates the state of loops
//     loopCheck = (loop, state) => {
//         let loops = { ...this.state.tracks };
//         loops[loop].active = state;
//         this.setState({ loops });
//     };


//     render() {
//         return (
//             <div id="loops_container">
//                 {this.state.trackNames.map(e => (<Track key={uniqueID()} name={e} loopState={this.state.loops[e].active} />))}
//             </div>
//         );
//     }
// }

// export default TrackBoard;