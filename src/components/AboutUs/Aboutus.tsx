import React from 'react'
import styled from 'styled-components'
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
        <div className='w-[50%]'>

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