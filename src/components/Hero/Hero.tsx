import React from 'react'
import styled from 'styled-components'
import img2 from '../../assets/images/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.webp'
const Hero = () => {
  return (
<Container>
  <Contents>
    <div className='  flex w-[50%] flex-col left-items gap-3 items-start'>
      <h1 className='flex justify-evenly gap-5  text-[18px]  font-bold pt-10 items-center'><hr className='bg-blue-600 rounded-xl h-[3rem] w-[.2rem] '/>A range of programs for healthcare</h1>
      <h1 className='text-[44px] font-bold ml-3'>Special Touch</h1>
      <p className='text-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius blandit. 
        Proin ultrices tempus scelerisque. Nulla tincidunt ultrices arcu venenatis hendrerit. 
        </p>
        <button className='mt-10 text-white hover:font-bold bg-blue-500 px-4 py-3 rounded-sm transition-all 5s ease-in-out hover:scale-110'>Make An Appointment.</button>
    </div>
    <div className='w-[50%] relative flex justify-center'>
    <img src={img2} className='absolute object-cover h-[60vh]' alt='nnn'/> 
    </div>
  </Contents>
</Container>
    )
}
const Container = styled.div`
  width:100%
`

const Contents = styled.div`
max-width:960px;
height: 90vh;
margin: 0 auto;
display: flex;
justify-content: space-evenly;
gap:3rem;
@media screen and (max-width:768px){
  max-width:768px;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  gap:3rem;
  align-items: center;
  .left-items{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 15px;
  }
}
`
export default Hero
