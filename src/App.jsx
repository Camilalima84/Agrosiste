
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './pages/login';
import { Register } from './components/Resgister';
import { Dashboard } from './pages/dashboard';
import { AnimalRegister } from './pages/AnimalRegister';
import { AlimentacaoRegister} from './pages/AlimentacaoRegister';
import {EventovetRegister} from './pages/EventovetRegister';
import { ProducaoRegister } from "./pages/ProducaoRegister";
import { AlimentacaoConsultar } from "./pages/AlimentacaoConsultar";
import { EventoConsultar} from "./pages/EventoConsultar";
import { ProducaoConsultar } from "./pages/ProducaoConsultar";
import { SeusAnimais } from "./pages/Seusanimais";
import { TotalRebanho } from "./pages/Totaldorebanho";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/animal-register",
      element: <AnimalRegister />,
    },

    {
      path: "/alimentacao-animal",
      element: <AlimentacaoRegister />,
    },

    {
      path: "/evento-register",
      element: <EventovetRegister/>,
    },

    {
      path: "/producao-register",
      element: <ProducaoRegister/>,
    },

    {
      path: "/alimentacao",
      element: <AlimentacaoConsultar/>,
    },

    {
      path: "/eventos",
      element: <EventoConsultar/>,
    },

    {
      path: "/producao-leite",
      element: <ProducaoConsultar/>,
    },
    {
      path: "/meus-animais",
      element: <SeusAnimais/>,
    },
    {
      path: "/producao-rebanho",
      element: <TotalRebanho />,
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
