import React, { Component } from 'react';
import Category from './Category';

class Projects extends Component {
    
  render() {
    let categoryItem
    if( this.props.category){
      categoryItem = this.props.category.map((cat,index)=>{
      
      return (
        <Category item={cat} key={index}/>
        );

    });
  }
    return (
      <div className="Projects">
      projects component<br></br> 
        {categoryItem}
      </div>
    );
  }
}

export default Projects;
