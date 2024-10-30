import styled from "styled-components"

const MoreCards =(props) =>{
    return(
        <Container>
            <Logo>
                <img src={props.image} alt="" />
            </Logo>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>

        </Container>
    )
}

export default MoreCards

const Container = styled.div``
const Logo = styled.div`
img{
    width: 20px;
}`