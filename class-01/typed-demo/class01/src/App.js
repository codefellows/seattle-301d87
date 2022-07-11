import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <h1>My First Component</h1>
      {/** some js expression -> any valid js code that returns a value */}
      <Grid />
      <Grid />
    </div>
  );
}

export default App;
