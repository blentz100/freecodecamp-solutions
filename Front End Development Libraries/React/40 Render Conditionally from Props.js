/*
Render Conditionally from Props So far, you've seen how to use if/else, &&, and
the ternary operator (condition ? expressionIfTrue : expressionIfFalse) to make
conditional decisions about what to render and when. However, there's one
important topic left to discuss that lets you combine any or all of these
concepts with another powerful React feature: props. Using props to
conditionally render code is very common with React developers — that is, they
use the value of a given prop to automatically make decisions about what to
render.

In this challenge, you'll set up a child component to make rendering decisions
based on props. You'll also use the ternary operator, but you can see how
several of the other concepts that were covered in the last few challenges
might be just as useful in this context.

The code editor has two components that are partially defined for you: a parent
called GameOfChance, and a child called Results. They are used to create a
simple game where the user presses a button to see if they win or lose.

First, you'll need a simple expression that randomly returns a different value
every time it is run. You can use Math.random(). This method returns a value
between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50
odds, use Math.random() >= .5 in your expression. Statistically speaking, this
expression will return true 50% of the time, and false the other 50%. In the
render method, replace null with the above expression to complete the variable
declaration.

Now you have an expression that you can use to make a randomized decision in
the code. Next you need to implement this. Render the Results component as a
child of GameOfChance, and pass in expression as a prop called fiftyFifty. In
the Results component, write a ternary expression to render the h1 element with
the text You Win! or You Lose! based on the fiftyFifty prop that's being passed
in from GameOfChance. Finally, make sure the handleClick() method is correctly
counting each turn so the user knows how many times they've played. This also
serves to let the user know the component has actually updated in case they win
or lose twice in a row.
*/ 

class Results extends React.Component {
  constructor(props) {
    super(props);
    console.log('props is:', props);
    console.log('props.fiftyFifty is:', props.fiftyFifty);
    console.log('props.fiftyFifty.expression is:', props.fiftyFifty.expression);
  }
  render() {
    {/* Change code below this line */}
    const youWin = <div>You Win!</div>
    const youLose = <div>You Lose!</div>
    return (<h1>{this.props.fiftyFifty.expression == true ? youWin: youLose}</h1>);
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: this.state.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5; // Change this line
    console.log('expression', expression)
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={{expression}} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}



