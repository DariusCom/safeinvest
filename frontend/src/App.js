import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProfilePage2 from "./pages/ProfilePage2";
import InvestingPage from "./pages/InvestingPage";
import LandingPage from "./pages/LandingPage";
import PrivateRouting from "./components/PrivateRouting";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<PrivateRouting />}>
            <Route path="/profile" element={<ProfilePage2 />} />
          </Route>
          <Route path="/invest" element={<PrivateRouting />}>
            <Route path="/invest" element={<InvestingPage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Outlet />
      </AnimatePresence>
    </>
  );
}

export default App;
