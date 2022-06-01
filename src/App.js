import Auth from "./pages/auth/Auth";
import { Registr } from "./pages/register/Registr";
import "./App.scss"
import { Protocol } from "./pages/protocol/Protocol";
function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Registr /> */}
      <Protocol/>
    </div>
  );
}

export default App;
