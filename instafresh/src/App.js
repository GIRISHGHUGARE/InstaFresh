import './App.css';
import Home from './screens/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from './screens/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;