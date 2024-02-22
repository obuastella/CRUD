import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Update } from "./Update";
import { Read } from "./Read";
import { Create } from "./Create";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
