import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contacts } from "./components/pages/Contacts"
import { Home } from "./components/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contacts />} path="/contacts" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
