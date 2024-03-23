import React, { useState } from "react";

//All the svg files
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";
import PowerOff from "../assets/power-off-solid.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';
import "../App.css"
const Container = styled.div`
  position: fixed;
  z-index:1000;
  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  z-index:10001;
  img {
    width: 100%;
    height: auto;
  }
`;

const SlickBar = styled.ul`
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color:white;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width:300px;
  height: 3rem;
  z-index:1000;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  color: var(--white);
  margin-left:100px;
  transition: all 0.3s ease;

  img {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  widith:"100%";
  display: block;
  h4 {
    display: block;
    font-size:"12px";
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;
const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--black);
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: none;
  ${Item}:hover & {
    display: block;
  }
`;
const DropdownItem = styled(NavLink)`
  /* Your styles */
`;
const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  const [active,setActive]=useState(false);
  return (
    <Container>
      <SidebarContainer>
      <Button clicked={click} onClick={() => handleClick()}>
      </Button>  
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)}
            exact
            activeClassName="active"
            to="/"
          >
            <img src={Home} alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
          onMouseOver={()=>setActive(true)}
          onMouseLeave={()=>setActive(false)}
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/annual-reports"
          >
            <img src={Team} alt="Annual Report" />
            <Text clicked={click}>{"Annual Reports"}</Text>
         <div className="helper"></div>
         {active&&<motion.div initial={{opacity:0,x:10}} animate={{opacity:1,x:-10}} exit={{opacity:0,x:10}} transition={{duration: 0.5}}>
         <div className="square-rotate"></div>
        
         <div className="container-dropdown">
           <span>Powering a billion smile</span>
           <span>About the report</span>
           <span>From Md and CEO</span>
           <span>Brand With a Purpose</span>
          </div>
         </motion.div>
}
         
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/esg-report"
          >
            <img src={Calender} alt="ESG Report" />
            <Text clicked={click}>ESG Report</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/social"
          >
            <img src={Documents} alt="Social" />
            <Text clicked={click}>Social</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/statutory-reports"
          >
            <img src={Projects} alt="Statutory Reports" />
            <Text clicked={click}>Statutory Reports</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/financial-reports"
          >
            <img src={Projects} alt="Financial Reports" />
            <Text clicked={click}>Financial Reports</Text>
          </Item>
        </SlickBar>
        <Logo>
          <img src="/CP.svg"/>
        </Logo>
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
