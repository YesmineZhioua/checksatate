import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Yass from './yassou.jpg';


 export default class App extends Component{
  constructor() {
    super()
    this.state = {
      Person: {
        fullName: 'yassmine zhioua',
        bio: 'bijzjoeioe',
        imgSrc:  Yass ,//<img src={Yass} height={400} width={200} alt="yas"/>,
        profession: 'etudiante',

      },
      show: true,
      count: 0,
    }

  };
 
  componentDidMount() {
    //setInterval f°
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }, 1000) //count kdima tzid 1 kol 1000s
  }

  /* ComponentWillUnmount(){
     this.setState({
       ...this.state,
       count:0,
     })
   } */

  render() {

    const count = this.state.count
    return (

      <div className='App'>{
        this.state.show ?
          <h1> {this.state.Person.bio} </h1>
          : null
      }
        <button onClick={() => this.setState({ ...this.state, show: !this.state.show })}>hide</button>
        <h1>current count : {count}</h1>
      </div>
    
  
    )

};

}


