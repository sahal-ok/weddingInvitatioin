import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateInvitation from "./pages/CreateInvitation";
import PublicInvitation from "./pages/PublicInvitation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/create"
        element={<CreateInvitation />}
      />

      <Route
        path="/invite/:id"
        element={<PublicInvitation />}
      />
    </Routes>
  );
}

export default App;