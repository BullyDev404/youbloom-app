/////////Routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

/////////////Pages
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";

//////// Route guarding
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

////////ui lib
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
