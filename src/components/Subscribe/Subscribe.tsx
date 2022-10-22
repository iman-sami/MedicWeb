import React from 'react'
import styled from 'styled-components';
const Subscribe = () => {
  return (
    <Container>
        <Contents className='bg-blue-600 rounded-xl py-5 gap-8 text-white'>
            <h1 className='text-[24px] font-semibold'>Subscribe to NewsLetter.</h1>
            <p className='text-[14px]'>Stay up to date with our leatest news, update and special offers</p>
            <div className='ml-[10rem] mr-[10rem] py-4 bg-white relative flex justify-between px-10 items-center rounded-sm'>
                <input type='email' placeholder='Enter your email address ' className=''/>
                <button className='px-5 py-3 bg-blue-500 rounded-lg'>Send Now</button>
            </div>
        </Contents>
    </Container>
  )
}
const Container = styled.div`
    
    width:100%;
    height: auto;

`
const Contents = styled.div`
    max-width:960px;
    margin: 0 auto;
    display: flex;
    height: 60vh;
    flex-direction: column;
    justify-content: center;

`
export default Subscribe