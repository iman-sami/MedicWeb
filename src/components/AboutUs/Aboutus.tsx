import React from 'react'
import styled from 'styled-components'
import img1 from "../../assets/images/3568984-removebg-preview.png"
import img2 from "../../assets/images/28122184-removebg-preview.png"
import img3 from "../../assets/images/4928409-removebg-preview.png"
const Aboutus = () => {
  return (
    <Container>
      <Contents>
        <div className='flex flex-col justify-center gap-3 items-start w-[50%]'>
          <h1 className='text-[40px] font-bold'>Why Choose Our Clinic.</h1>
          <p className='text-start text-[16px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius blandit. 
        Proin ultrices tempus scelerisque. Nulla tincidunt ultrices arcu venenatis hendrerit. 
        </p>
        <button className='mt-10 hover:scale-110 bg-blue-500 text-white px-4 py-2 font-bold rounded-sm'>
          Learn More
        </button>
        </div>
        <div className='w-[50%]  p-10 mt-20 flex gap-10 justify-center items-start'>
          <div className='flex flex-col justify-evenly gap-5 items-center'>
            <div className='relative h-[190]'>
              <div className='w-[150px]  mt-20 p-3 h-[160px] shadow-2xl shadow-blue-400 rounded-md bg-slate-200'>
              </div>
              <img className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] object-cover   ' alt='img' src={img1}/>
              <h1 className='absolute bottom-0 text-[14px] font-bold left-1/2 transform -translate-x-1/2 text-center'>Proffessinal Doctors</h1>
            </div>
            <div className='relative h-[190]'>
              <div className='w-[150px]  mt-10 p-3 h-[160px] shadow-2xl shadow-blue-400 rounded-md bg-slate-200'>
              </div>
              <img className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] object-cover  ' alt='img' src={img3}/>
              <h1 className='absolute bottom-0 text-[14px] font-bold left-1/2 transform -translate-x-1/2 text-center'>Family Medicine</h1>
            </div>
          </div>
          <div className='flex flex-col h-[80vh] justify-center   items-center'>
          <div className='relative h-[190]'>
              <div className='w-[150px]  mt-10 p-3 h-[160px] shadow-2xl shadow-blue-400 rounded-md bg-slate-200'>
              </div>
              <img className='absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] object-cover  ' alt='img' src={img2}/>
              <h1 className='absolute bottom-0 text-[14px] font-bold left-1/2 transform -translate-x-1/2 text-center'>24/7 support</h1>
            </div>
          </div>
        </div>
      </Contents>
    </Container>
  )
}

const Container = styled.div`
  
  width:100%;

`
const Contents = styled.div`
max-width:960px;
height: 90vh;
margin:0 auto;
display:flex;
align-items: center;
`


export default Aboutus