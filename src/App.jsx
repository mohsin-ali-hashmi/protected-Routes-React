import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import { ProtectedRoute } from "./Routes/PotectedRoute";
// import { PublicRoute } from "./Routes/PublicRoutes";
import Header from "./Pages/Header";
import { NewProtected } from "./Routes/NewProtected";
import { AnotherProtectedRoute } from "./Routes/AnotherProtected";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/Dashboard"}
          
          element={
            <ProtectedRoute roleType = {'admin'}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/Header"}
          element={<AnotherProtectedRoute Component={Header} />}
        />
        <Route path={"/MyPage"} element={<NewProtected />}>
          <Route path={"/MyPage"} element={<MyPage />} />
        </Route>
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
