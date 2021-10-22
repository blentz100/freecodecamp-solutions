'use strict';

const e = React.createElement;

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility(){
    if (this.state.visibility == false){
      console.log("visibility is false");
      this.setState(state => ({
        visibility: true
      }));
    }
    else {
      console.log("visibility is true")
        this.setState(state => ({
        visibility: false
      }));
    }
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
const domContainer = document.querySelector('#create-a-controlled-form');
ReactDOM.render(e(MyComponent), domContainer);
