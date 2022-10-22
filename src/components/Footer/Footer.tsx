import React from 'react'
import styled from 'styled-components';
import {data} from "../Data/Navdata"
import {IoMdArrowDropdown} from 'react-icons/io'

const Footer = () => {
  return (
    <Container>
      <Contents>
      <div className='flex justify-between'>
      <h1 className='text-blue-800 font-bold'>Me<span className='text-blue-400'>dic</span></h1>
            <div className='flex justfiy-evenly gap-3 '>
                    <ul className='flex justify-center items-center'>
                     <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                      {data && data.map((data,index)=>(
                        <div key={index} className="menu ">
                            <li >
                            <a href={data.path}>{data.name}</a>
                        </li>
                        </div>
                       
                      ))}
                    </ul>
            </div>
            <button className='flex items-center gap-3'>English  <IoMdArrowDropdown/></button>
      </div>

      <h1 className='text-start text-[14px]'>@2023 Medic. All Rights Reserverd.</h1>
      </Contents>
    </Container>
  )
}
const Container  = styled.footer`
width:100%;  

`
const Contents = styled.div`
 max-width: 960px;
 margin:0 auto;
 display:flex;
 flex-direction: column;
 gap: 10rem;
 .menu {
        width: 100%;
 display: flex;
 gap: 1em;
 display: flex;

 font-size: 14px;
}
.menu li{
    width: 70%;
    position: relative;
}
.menu li:hover::after {
position: absolute;
content: '';
margin-top: 10px;
width: 10px;
height: 10px;
bottom:0;
background-color: blue;
border-radius: 10px;
 transition: 0.3s ease;
}
.menu li {
 padding: 5px 14px;
}


input[type=checkbox]{
display: none;
} 
.hamburger {
display: none;
font-size: 24px;
user-select: none;
}


`
export default Footer