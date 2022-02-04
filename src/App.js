import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./Components/Header";
import { Watchlist } from "./Components/Watchlist";
import { Watched } from "./Components/Watched";
import { Add } from "./Components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/watched" element={<Watched />}/>
        </Routes>
      </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
