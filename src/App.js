import './App.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Homepage from "./page/Homepage";
import CheckInPage from "./page/CheckInPage";
import ActivityBookingPage from "./page/ActivityBookingPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/check-in",
    element: <CheckInPage />,
  },
  {
    path: "/activity-booking",
    element: <ActivityBookingPage />
  },
  //  TODO: Sort proper routing based on GH pages URL suffix
  {
    path: "/yupi-frontend",
    element: <Homepage />
  },
  {
    path: "/yupi-frontend/check-in",
    element: <CheckInPage />,
  },
  {
    path: "/yupi-frontend/activity-booking",
    element: <ActivityBookingPage />
  }
]);

function App() {
  return (
    <div className="flex justify-center h-screen m-auto max-w-screen-lg">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
