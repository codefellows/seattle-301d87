# Class 04 - React Forms and Modals

## Warm Up

Find all the mistakes:

```jsx
import Header from './header.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter: 0,
    }
  }

  addCount = () => {
    // counter = counter + 1;
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return(
      <>
        <button onClick={this.addCount}>Click Me</button>
        <p>{this.state.counter}</p>
        <Header title="the best counter app in the world!"/>
      </>
    )
  }
}

export default App;

```

```jsx
class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <h1>{this.props.title}</h1>
    )
  }
}

export default Header;
```

## Code Review

- notInFirstArray

- Horned Beast Modal (display a selected horned beast)
- STRETCH: fuzzy search

## Array.sort

## React Forms and Modals
