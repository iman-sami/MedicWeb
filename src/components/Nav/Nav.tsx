import React from 'react'
import styled from "styled-components";
import {data} from "../Data/Navdata"
const Nav = () => {
  return (
    <Container>
        <Contents>
            <h1 className='text-blue-800 font-bold'>Me<span className='text-blue-400'>dic</span></h1>
            <div className='flex justfiy-evenly gap-3 '>
                    <ul className='flex justify-center items-center'>
                    <input type="checkbox" id="checkbox_toggle" />
                     <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                      {data && data.map((data,index)=>(
                        <div key={index} className="menu ">
                            <li >
                            <a href={data.path}>{data.name}</a>
                        </li>
                        </div>
                       
                      ))}

                    </ul>
                    <button className='px-2 py-1 bg-blue-500 text-white rounded-2xl'>Contact us</button>

            </div>
        </Contents>
    </Container>
  )
}
const Container = styled.div`
    width: 100%;
    height: 70px;

`
const Contents = styled.div`
    margin: 0 auto;
    max-width: 960px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

@media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 10px;
    max-width: 768px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .menu{
        display: none;
        background-color:teal;
        right: 0;
        left: 0;
        text-align: center;
        padding: 16px 0;
    }
    .menu li:hover {
     display: inline-block;
     background-color:#4c9e9e;
     transition: 0.3s ease;
}
.menu li + li {
 margin-top: 12px;
}
input[type=checkbox]:checked ~ .menu{
 display: flex;
 flex-direction: column;
}
.hamburger {
 display: block;
}
}


`
export default Nav