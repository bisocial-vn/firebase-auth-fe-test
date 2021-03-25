import { CssBaseline } from "@material-ui/core";

import { BrowserRouter } from "react-router-dom";
import RoutersRoot from "./routers/RoutersRoot";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <RoutersRoot />
      </BrowserRouter>
    </>
  );
}

export default App;
