import React, { Component } from 'react';

class AddCategory extends Component {
    static defaultProps = {category:["Honda","Maruti","Nissan","Renault","Foxwagon"]};

    submitHandler(e){
        this.setState({addCategory:{model:this.refs.model.value,maker:this.refs.maker.value}},function(){
            this.props.addCategory(this.state.addCategory);
        })
        e.preventDefault();
    }
  render() {

      let options;
      if(this.props.category){
                options = this.props.category.map((cat,index)=>{
                return <option value={cat} key={index}>{cat}</option>
            })
      }
    return (
                <div className="Addcategory">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <label>Name: </label>
                    <input type="text" ref="model"/><br/><br/>
                    <label>Maker: </label>
                    <select ref="maker">
                        {options}
                    </select><br/>
                    <input type="submit" value="Save"/>
                 </form>

                </div>
    );
  }
}

export default AddCategory;
