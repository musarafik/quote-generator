import React from 'react';
import './index.css';
import {createRoot} from "react-dom/client";
import NavigationBar from './components/navigation_bar';
import AllQuotes from './views/all_quotes';
import HomePage from './views/home_page';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route element={<NavigationBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/all" element={<AllQuotes />} />
      </Route>
    </Routes>
  </Router>
);