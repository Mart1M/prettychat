import "./index.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
