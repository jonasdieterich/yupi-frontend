import './App.css';
// import {InlineWidget} from "react-calendly";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Homepage";
import CheckInPage from "./page/CheckInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/check-in",
    element: <CheckInPage />,
  },
]);

function App() {
  return (
    <div className="flex justify-center h-screen m-auto max-w-screen-lg">
      <RouterProvider router={router} />
    </div>

    // <div className="App">
    //     {/*<header className="App-header">*/}
    //     {/*    <InlineWidget url="https://calendly.com/jonasdieterich/30min" />*/}
    //     {/*</header>*/}
    // </div>
  );
}

export default App;
