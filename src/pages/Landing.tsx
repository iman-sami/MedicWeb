import React from 'react'
import styled from 'styled-components'
import Aboutus from '../components/AboutUs/Aboutus'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import OurTeam from '../components/OurTeam/OurTeam'
import Service from '../components/Service/Service'
import Subscribe from '../components/Subscribe/Subscribe'
import Teams from '../components/Teams/Teams'
import Testimonial from '../components/Testimonials/Testimonial'
const Landing = () => {
  return (
    <Container>
        <Nav/>
        <Hero/>
        <Service/>
        <Aboutus/>
        <OurTeam/>
        <Testimonial/>
        <Subscribe/>
        <Footer/>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap:3rem;
  
`
export default Landing