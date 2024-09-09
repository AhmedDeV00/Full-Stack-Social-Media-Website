//import Login from "./pages/login/Login";
import LeftBar from "./componants/leftBar/LeftBar";
import Navbar from "./componants/navbar/Navbar";
import RightBar from "./componants/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom"
import Profile from "./pages/profile/Profile";
import { useTheme } from "./componants/theme/ThemeContext";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./componants/auth/AuthContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {

  const { theme } = useTheme();

  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`app ${theme}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: "6" }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>

    )
  }

  // to protect my route 
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
