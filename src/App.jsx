import { BrowserRouter, Route, Routes } from "react-router-dom";

/////////////Pages
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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





        <Route >

        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
