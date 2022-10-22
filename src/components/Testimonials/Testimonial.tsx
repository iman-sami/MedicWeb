import React from 'react'
import styled from 'styled-components';
import img3 from "../../assets/images/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png"
import {ImQuotesLeft,ImQuotesRight} from 'react-icons/im'
const Testimonial = () => {
  return (
     <Container>
      <Contants>
         <h1 className='font-bold text-[44px]'>
          Testimonial
         </h1>
        <div>
          
        </div>
        <div className='flex justify-evenly gap-20'>
          <div className='relative px-4 py-4 text-start w-[500px] transition-all 5s ease-in hover:scale-110 bg-white shadow-lg  shadow-blue-400 rounded-lg' id='wrapper'>
            <ImQuotesLeft className='absolute  topq top-0 left-0 bottom-0 ml-[-.8rem] mt-[-.4rem] '  size={33} />
            <ImQuotesRight className='absolute btq right-0 bottom-0 mr-[-.4rem] mb-[-.4rem]'  size={33} />

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius blandit. 
              Proin ultrices tempus scelerisque. Nulla tincidunt ultrices arcu venenatis hendrerit. 
            </p>
            <div className='flex   justify-start gap-5 mt-10'>
             <img src={img3} className='w-[40px] h-[40px] rounded-full object-cover bg-blue-500 shadow-xl shadow-slate-400' alt='img test'   />
             <div className='flex flex-col gap-4'>
              <h1>Paul Peterson</h1>
                <h4 className='text-[14px] font-bold'>Patient</h4>
             </div>
            </div>
          </div>
          <div className='relative px-4 py-4 text-start w-[500px] transition-all 5s ease-in hover:scale-110 bg-white shadow-lg  shadow-blue-400 rounded-lg' id='wrapper'>
            <ImQuotesLeft className='absolute  topq top-0 left-0 bottom-0 ml-[-.8rem] mt-[-.4rem] '  size={33} />
            <ImQuotesRight className='absolute btq right-0 bottom-0 mr-[-.4rem] mb-[-.4rem]'  size={33} />

            <p className='mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur varius blandit. 
              Proin ultrices tempus scelerisque. Nulla tincidunt ultrices arcu venenatis hendrerit. 
            </p>
            <div className='flex   justify-start gap-5 mt-10'>
             <img src={img3} className='w-[40px] h-[40px] rounded-full object-cover bg-blue-500 shadow-xl shadow-slate-400' alt='img test'   />
             <div className='flex flex-col gap-4'>
              <h1>Paul Peterson</h1>
                <h4 className='text-[14px] font-bold'>Patient</h4>
             </div>
            </div>
          </div>
        </div>
      </Contants>
     </Container>
  )
}
const Container = styled.div`
    width: 100%;
`
const Contants = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    gap:2rem;
#wrapper:hover .topq{
  color:blue;
}
#wrapper:hover .btq{
  color:blue;
}
`
export default Testimonial