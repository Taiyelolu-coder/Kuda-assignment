import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import {Link} from "react-router-dom"
import Logo from "../assets/kuda.png"
import React from "react";

import { FaCaretRight } from "react-icons/fa";

const Hamburger =({toggle, setToggle})=>{
    const test = () =>{
        setToggle(false)
    }
    return(
        <Container>
            <LogoNav>
                <img src={Logo} alt="" />
                <IoMdClose />
            </LogoNav>
            <Buttons>
                <button>Join Kuda</button>
                <button>Sign In</button>
            </Buttons>
            <Links>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Personal</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Business</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Company</span>
                    <FaCaretRight />
                </nav>
               
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Developers</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Contact Us</span>
                    <FaCaretRight />
                </nav>
              </Link>
              <Link to="/" onClick={test}>
                <nav>
                    <span>Help</span>
                    <FaCaretRight />
                </nav>
              </Link>
            </Links>
        </Container>
    )
}

export default Hamburger

const Container = styled.div`
/* display:none; */`
const LogoNav = styled.div`
img{
    width: 80px;
}`

const Links =styled.div``

const Buttons = styled.div``