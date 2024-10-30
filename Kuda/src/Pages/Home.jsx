import styled from "styled-components"

import Card from "../Components/Card"
import Hero from "../Components/Hero"
import OpenAccount from "../Components/OpenAccount";
import Details from "../Components/Details";
import Icon1 from "../assets/creditcard.jpg"
import Icon2 from "../assets/time.jpg"
import Icon3 from "../assets/organisation.jpg"
import Icon4 from "../assets/send.jpg"
import Icon5 from "../assets/piggy.jpg"
import Save from "../Components/Save";
import BlockCard from "../Components/BlockCard";
import Fees from "../Components/Fees";
import Help from "../Components/Help";
import Sponsors from "../Components/Sponsors";
import Partners from "../Components/Partners";
import MoreCards from "../Components/MoreCards";
import Briefcase from "../assets/briefcase.jpg"


const Home = () => {

    return (
      <Container>
       
       <Hero />
       <CardContent>
       <Card image={Icon1} title="Order a Kuda card on the app with pickup and delivery options."/>
       <Card  image={Icon2} title="Enjoy cashless payment options online and offline."/>
       <Card image={Icon3} title="Order a Kuda card on the app with pickup and delivery options."/>
       <Card  image={Icon4} title="Enjoy cashless payment options online and offline."/> 
       <Card image={Icon5} title="Order a Kuda card on the app with pickup and delivery options."/>
       </CardContent>
       <OpenAccount />
       <Details />
       <Save />
       <BlockCard />
       <Help />
       <Fees />
       <Sponsors />
       <Partners />
       <MoreCards image={Briefcase} heading="Kuda Business" text="Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more." />
       <MoreCards image/>
      </Container>
    )
  }
  
  export default Home
  

const Container = styled.div``
const CardContent = styled.div`
/* background-color: pink; */
display:flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
gap: 25px;
margin: 150px;
padding: 30px;
@media (max-width: 800px){
width: auto;
align-items: center;
margin: auto;
}
`
