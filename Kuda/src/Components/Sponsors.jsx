import styled from "styled-components"
import Image1 from "../assets/tc.jpg"
import Image2 from "../assets/world.jpg"
import Image3 from "../assets/fintech.png"
import Image4 from "../assets/bbc.png"
import Image5 from "../assets/cnbc.jpg"
import Image6 from "../assets/euro.jpg"               
const Sponsors = ()=>{
    return(
        <Container>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
        </Container>
    )
}

export default Sponsors

const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

margin:50px;
@media (max-width: 800px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
img{
    width: 120px;
    height:auto;
}
`