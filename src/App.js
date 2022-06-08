import { Routing } from "./pages/auth/Routing";
import Auth from "./pages/auth/Auth";
import { Registr } from "./pages/register/Registr";
import "./App.scss";
import { Protocol } from "./pages/protocol/Protocol";
import FeedBack from "./pages/auth/FeedBack"
import ForgotPassword from "./pages/auth/ForgotPassword"
import NewPassword from "./pages/auth/NewPassword"
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Protocol />}/>
        <Route path="/auth" element={<Auth />}/>
        <Route path="/registr" element={<Registr />}/>
      </Routes>
      {/* <Auth /> */}
      {/* <Registr /> */}
      {/* <Protocol /> */}
      {/* <ForgotPassword /> */}
      {/* <FeedBack /> */}
      {/* <NewPassword /> */}
    </div>
  );
}

export default App;
