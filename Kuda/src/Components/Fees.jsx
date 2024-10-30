import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa";
import Image from "../assets/Fees.png"

const Fees = () =>{
    return(
        <Container>
            <Wrapper>
            <ImageBox>
                <img src={Image} alt="" />
            </ImageBox>
            <TextBox>
                <h1>Fees as clear as glass.</h1>
                <p>We're serious about free banking, and we will never, ever charge you for anything without your consent.</p>
                <nav>
                    <span>See all our fees</span>
                    <FaChevronRight />
                </nav>
            </TextBox>
            </Wrapper>
        </Container>
    )
}


export default Fees


const Container = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-left: auto;
margin-right: auto;
max-width: 1280px;
padding: 0px 10px;
/* border: 1px solid black; */

`

const Wrapper = styled.div`
    display: flex;
    justify-content:space-between;
    width: 85%;
    gap:100px;
    /* border: 1px solid red; */
    padding: 10px;
    @media (max-width: 800px){
        /* display: flex; */
        flex-wrap: wrap-reverse;
        justify-content: center;
        align-items: center;
    }
`


const ImageBox = styled.div`
/* width:50%; */
/* border: 1px solid green; */


img{
    /* border: 1px solid yellow; */
    width: 600px;
    height: auto;
    @media (max-width: 800px){
        width: 400px;

    }
}
`


const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
line-height: 2ch;
text-align: start;
@media (max-width: 800px){
    text-align: center;
}
h1{
    font-size:33px;
    font-weight: 800;
    color:#40196d;
    @media (max-width: 800px){
        font-size: 27px;
    }
}

p{
    font-size: 15px;
    line-height:2ch;
    font-weight: 400;
    text-align: start;
    @media (max-width: 800px){
        font-size: 14px;
    }
}
nav{
    color:#40196d;
    font-size: 16px;
    font-weight: 600;
}
`

