import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Calender from "./Pages/Calender";
import Documents from "./Pages/Documents";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import Finincal from './Pages/FinincalReport';

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #d2010d 30%, #9b0e0e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/annual-reports" element={<Team />} />
            <Route path="/esg-report" element={<Calender />} />
            <Route path="/social" element={<Documents />} />
            <Route path="/statutory-reports" element={<Projects />} />
            <Route path="/financial-reports" element={<Finincal />} />
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
