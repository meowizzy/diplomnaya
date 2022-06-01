import Auth from "./pages/auth/Auth";
import { Registr } from "./pages/register/Registr";
import "./App.scss";
import ForgotPassword from "./pages/auth/ForgotPassword";
import FeedBack from "./pages/auth/FeedBack";
import NewPassword from "./pages/auth/NewPassword";
function App() {
  return (
    <div className="App">
      <Auth />
      {/* <ForgotPassword /> */}
      {/* <FeedBack /> */}
      {/* <NewPassword /> */}
      {/* <Registr /> */}
    </div>
  );
}

export default App;
