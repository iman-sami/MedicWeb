import React from 'react'
import styled from "styled-components";
import {data} from "../Data/Navdata"
const Nav = () => {
  return (
    <Container>
        <Contents>
            <h1 className='text-blue-800 font-bold'>Me<span className='text-blue-400'>dic</span></h1>
            <div className='flex justfiy-evenly gap-3 '>
                    <ul>
                      {data && data.map((data,index)=>(
                        <li key={index}>
                            <a href={data.path}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
            </div>
        </Contents>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Contents = styled.div`
    margin: 0 auto;
    max-width: 960px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export default Nav