class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event){
    console.log('got inside handleChange')
    console.log("this.state.input is: ")
    console.log(this.state.input)
    console.log('event.target.value is: ')
    console.log(event.target.value)
    
    //struggled getting this section correct because I was using the syntax
    //from the "Use State to Toggle an ElementPassed" challenge. No need for
    //that complex syntax here because we don't need to know the previous state
    //when updating the state.
    this.setState({
      
      input: event.target.value
      
    });
    console.log("got after the setState");
    console.log("this.state.input is: ")
    console.log(this.state.input)
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value = {this.state.input} onChange= {this.handleChange} /> 
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
