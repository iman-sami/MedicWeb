import React from 'react'
import styled from 'styled-components'
import { ServiceData } from '../Data/Servicedata'
import heart from '../../assets/images/heart.svg'
import {GrFormNextLink} from 'react-icons/gr'
const Service = () => {
  return (
   <Container id='services'>
    <Contents>
      <h1 className='text-[44px] font-bold'>Our Services</h1>
      <p className='text-center font-bold text-[14px]'>We offer Complete healthcare to indivisual with various <br/> health concerns</p>
      <div className='flex mt-3 gap-5'>
          {ServiceData.map((items,index)=>{
            return (
              <div id='wrapper' className='w-[230px] card flex flex-col justify-between items-start h-[260px] p-5 rounded-lg transition-all 5s ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-blue-400 hover:bg-blue-500 bg-slate-300'>
              <img src={items.img} alt="img_medic" className=' w-[100px] h-[100px] hover:text-white '/>
              <div className='flex flex-col items-start ml-5 gap-1 hover:text-white'>
               <h1 className='text-[19px] font-bold text1 text-start'>{items.name}</h1>
               <button className='text flex gap-4 justify-center items-center text-[16px] font-light '>Learn More <GrFormNextLink color="blue"/> </button>
             </div>
             </div>
            )
          })}
   

      </div>
    </Contents>
   </Container>
  )
}

const Container = styled.div`
  width: 100%;
`

const Contents = styled.div`
max-width: 960px;
display: flex;
margin: 0 auto;
flex-direction: column;
gap:.5rem;
justify-content: space-evenly;
align-items: center;
#wrapper .text{
  visibility: hidden;
}
#wrapper .text1{
  color:black;
} 
#wrapper:hover .text1{
  color:white;
} 
#wrapper:hover .text{
  visibility: visible;
  color: white;
}
`
export default Service