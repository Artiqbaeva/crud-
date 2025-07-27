import { useRoutes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Detail from "./pages/Detail";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "likes",
              element: <Likes />,
            },
            {
              path: "detail",
              element: <Detail />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
      ])}
    </>
  );
};

export default App;
