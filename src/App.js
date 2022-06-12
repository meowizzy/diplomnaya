import Auth from "./pages/auth/Auth";
import { Registr } from "./pages/register/Registr";
import "./App.scss";
import { Route, Routes } from "react-router";
import { NotRegistered } from "./pages/notRegistered/NotRegistered";
import { Main } from "./pages/Main";
import DefaultNews from "./pages/news/defaultNews/DefaultNews";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/*" element={<NotRegistered />}/>
          {/*<Route path="/*" element={<DefaultNews />}/>*/}
        <Route path="/main/*" element={<Main />}/>
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
