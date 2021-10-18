class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment(){
    console.log('got inside increment')
    console.log('count is:')
    console.log(this.state.count);
    this.setState(state => ({
      count: this.state.count + 1
    }));
    console.log('got to the end of increment')
    console.log('count is:')
    console.log(this.state.count);
  }
  decrement(){
    console.log('got inside decrement')
    console.log('count is:')
    console.log(this.state.count);
    this.setState(state => ({
      count: this.state.count - 1
    }));
    console.log('got to the end of decrement')
    console.log('count is:')
    console.log(this.state.count);
  }
  reset(){
    console.log('got inside reset')
    console.log('count is:')
    console.log(this.state.count);
    this.setState(state => ({
      count: 0
    }));
    console.log('got to the end of reset')
    console.log('count is:')
    console.log(this.state.count);
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};