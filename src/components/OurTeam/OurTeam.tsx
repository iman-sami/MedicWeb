import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/images/austin-distel-7bMdiIqz_J4-unsplash-removebg-preview.png"
import img2 from "../../assets/images/bruno-rodrigues-279xIHymPYY-unsplash-removebg-preview.png"
import img3 from "../../assets/images/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png"
import img4 from "../../assets/images/usman-yousaf-pTrhfmj2jDA-unsplash-removebg-preview.png"
const OurTeam = () => {
  return (
    <Container className=''>
      <Contents>
         <h1 className='font-bold text-[44px] text-center '>Meet Medic Physicians</h1>
          <p className='font-bold text-center w-[620px]'>if you want to find a Doctor, we can assist you in choosing from our diverse pool of health specialists</p>
          <div className='flex justify-evenly items-center gap-5'>
            <div className='flex flex-col shadow-lg bg-white rounded-lg transition-all  5s ease-in ' id='wrapper'>
              <img src={img1} alt='doc' className=' bg-blue-400 w-[220px] h-[220px] object-cover rounded-t-lg'/>
              <h1 className='font-bold text-[19px] text-start p-2'>Dr. Max Turner</h1>
              <h1 className='p-2 text-start text-[14px] font-ligther text-black'>Cardiologist</h1>
              <button className='btn text-blue-600  text-[14px] text-left pl-3'>Learn More</button>
            </div>
            <div className='flex flex-col shadow-lg bg-white rounded-lg transition-all 5s ease-in ' id='wrapper'>
              <img src={img2} alt='doc' className='bg-green-300 w-[220px] h-[220px] object-cover rounded-t-lg'/>
              <h1 className='font-bold text-[19px] text-start p-2'>Dr. Max Turner</h1>
              <h1 className='p-2 text-start text-[14px] font-ligther text-black'>Cardiologist</h1>
              <button className='btn text-blue-600  text-[14px] text-left pl-3'>Learn More</button>
            </div>
            <div className='flex flex-col shadow-lg bg-white rounded-lg transition-all  5s ease-in ' id='wrapper'>
              <img src={img3} alt='doc' className=' bg-orange-400 w-[220px] h-[220px] object-cover rounded-t-lg'/>
              <h1 className='font-bold text-[19px] text-start p-2'>Dr. Max Turner</h1>
              <h1 className='p-2 text-start text-[14px] font-ligther text-black'>Cardiologist</h1>
              <button className='btn text-blue-600  text-[14px] text-left pl-3'>Learn More</button>
            </div>
            <div className='flex flex-col shadow-lg bg-white rounded-lg transition-all  5s ease-in ' id='wrapper'>
              <img src={img4} alt='doc' className=' bg-slate-400 w-[220px] h-[220px] object-cover rounded-t-lg'/>
              <h1 className='font-bold text-[19px] text-start p-2'>Dr. Max Turner</h1>
              <h1 className='p-2 text-start text-[14px] font-ligther text-black'>Cardiologist</h1>
              <button className='btn text-blue-600  text-[14px] text-left pl-3'>Learn More</button>
            </div>
          </div>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contents = styled.div`
max-width: 960px;
display: flex;
flex-direction: column;
margin: 0 auto;
justify-content: space-evenly;
align-items: center;
gap: 2rem;
#wrapper .btn{
  display: none;
}
#wrapper:hover .btn{
  display: block;
  
}
`
export default OurTeam