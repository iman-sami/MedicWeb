import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'
import Service from '../components/Service/Service'
const Landing = () => {
  return (
    <Container>
        <Nav/>
        <Hero/>
        <Service/>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: auto;


`
export default Landing