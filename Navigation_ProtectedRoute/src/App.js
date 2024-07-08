import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import ProtectedRoute from "./pages/ProtectedRoute";
import ForPremiumusers from "./pages/ProtectedRoute/ForPremiumusers";
import FreePricing from "./pages/pricing/FreePricing";
import Freemium from "./pages/pricing/Freemium";
import PremiumPricing from "./pages/pricing/PremiumPricing";
import Pricing from "./pages/pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route path="/user/:userId/" element={<Profile />} />
        <Route path="/user/:userId/:projectId" element={<Project />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPremiumusers />} />
        </Route>

        <Route path="/pricing" element={<Pricing />}>
          <Route path="freePricing" element={<FreePricing />} />
          <Route path="premiumPricing" element={<PremiumPricing />} />
          <Route path="freemium" element={<Freemium />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
