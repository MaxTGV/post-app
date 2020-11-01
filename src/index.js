import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
//     //this.nextYear =  this.nextYear.bind(this);
//    /*this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//       }))
//     }*/
//   }

//   nextYear = () => {
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
//   /*nextYear() {
//     //this.state.years++
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }*/

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear}>+++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// } 

// const All = () => {
//   return (
//     <>
//        <WhoAmI name="John" surname="Smith" link="www.google.com"/>
//        <WhoAmI name="Max" surname="Well" link="www.google.com"/>
//        <WhoAmI name="Bob" surname="Brom" link="www.google.com"/>
//     </>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

