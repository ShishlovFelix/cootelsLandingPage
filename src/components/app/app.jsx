import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "../mainPage/mainPage";
import Rooms from "../roomsPage/rooms/rooms";
import NavBar from "../mainPage/navBar/navBar";
import Reservation from "../reservationPage/reservation/reservation";
import Contacs from "../contacsPage/contacs/contacs";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="rooms" element={<Rooms />} />
      </Routes>
      <Routes>
        <Route path="reservation" element={<Reservation />} />
      </Routes>
      <Routes>
        <Route path="contacs" element={<Contacs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
