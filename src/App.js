import React, { Component } from 'react';
import Projects from './components/Projects';
import AddCategory from './components/AddCategory';
import Hoc from './Hoc';
class App extends Component {
  constructor(){
    super();
    this.state={
        cats:[
            {model:"Amaze",maker:"Honda"},
            {model:"Ciez",maker:"Maruti"},
            {model:"Terano",maker:"Nissan"},
            {model:"Duster",maker:"Renault"},
            {model:"Passat",maker:"Foxwagon"}
        ]
    };

} AddCategory(category){
  let { cats }=this.state;
  cats.push(category)
  this.setState({cats:cats});
}
  render() {
    return (
      <div className="App">
          <h1>High Order Component</h1>  <Hoc />
            <h1>Return data from Child component to Parent</h1>
            <Projects category={this.state.cats} />
            <AddCategory addCategory={this.AddCategory.bind(this)}/>

      </div>
    );
  }
}

export default App;
