import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./AppRoutes";

import { Footer } from "./components/Footer";


import "./MainApp.css";
import { NavBar2Prueba } from "./components/NavBar2Prueba";

export const MainApp = () => {
  return (
    <>
      <NavBar />
      <AppRoutes/>
      <Footer />
    </>
  );
};
