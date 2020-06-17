import React, { Component } from 'react';

const imagesPath = {
  minus: './Toolbar/english1.png',
  plus: './Toolbar/spanish1.png',
};

class ImageClick extends Component {
  state = {
    open: true,
  };
  toggleImage = () => {
    this.setState((state) => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? 'plus' : 'minus');

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img
          style={{ Width: '150px' }}
          src={imagesPath[imageName]}
          onClick={this.toggleImage}
        />
      </div>
    );
  }
}

export default ImageClick;

{
  /* constructor(props){
        super(props)
   

    this.state = {
        message:'Hello'
    }
   }

   clickHandler= ()=> {
    this.setState({
        message:'Goodbye'
    }

    )
  }
  render(){
  
  return (
    <div>
        <div>{this.state.message}</div>
      <button onClick={this.clickHandler}>click</button>
    </div>
  );
 }*/
}
