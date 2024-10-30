import styled from "styled-components"
import Header from "./Static/Header"
import Home from "./Pages/Home/Home"
import Footer from "./Static/Footer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = ()=> {
  

  return (
    <Container>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </Container>

  )
}

export default App


const Container = styled.div``