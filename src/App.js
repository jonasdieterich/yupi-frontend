import './App.css';
// import {InlineWidget} from "react-calendly";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/check-in",
    element: <div>How you doin'</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

    // <div className="App">
    //     {/*<header className="App-header">*/}
    //     {/*    <InlineWidget url="https://calendly.com/jonasdieterich/30min" />*/}
    //     {/*</header>*/}
    // </div>
  );
}

export default App;
