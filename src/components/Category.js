import React, { Component } from 'react';

class Category extends Component {
    
  render() {console.log("====",this.props)
    return (
      <ul className="Projects">
      <li>Model : {this.props.item.model}</li>
      <li>Maker : {this.props.item.maker}</li>
      </ul>
    );
  }
}

export default Category;
