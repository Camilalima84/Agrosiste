
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login'
import { Express } from "express";

//SQL middleware
App.use(express.sql());

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
