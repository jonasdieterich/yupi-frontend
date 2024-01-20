import './App.css';
import {InlineWidget} from "react-calendly";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <InlineWidget url="https://calendly.com/jonasdieterich/30min" />
      </header>
    </div>
  );
}

export default App;
