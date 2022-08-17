import { Registr } from "./pages/register/Registr";
import "./App.scss";
import { Route, Routes } from "react-router";
import { NotRegistered } from "./pages/notRegistered/NotRegistered";
import { Routing } from "./pages/auth/Routing";
import {Main} from "./pages/Main";
import EmptyProtocol from "./pages/notRegistered/EmptyProtocol";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<NotRegistered />} />
        {/*<Route path="/*" element={<DefaultNews />}/>*/}
        <Route path="/main/*" element={<Main />} />
        <Route path="/auth/*" element={<Routing />} />
        <Route path="/registr" element={<Registr />} />
          <Route path="/empty_protocol" element={<EmptyProtocol />} />
      </Routes>
    </div>
  );
}

export default App;
