import React from 'react'
import styled from 'styled-components'
import Aboutus from '../components/AboutUs/Aboutus'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import OurTeam from '../components/OurTeam/OurTeam'
import Service from '../components/Service/Service'
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
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap:3rem;
  
`
export default Landing