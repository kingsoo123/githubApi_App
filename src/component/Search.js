import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ShowList from './ShowList'


const Search = ()=>{
    const [username, setUsername] = useState('')
    const [list, setList] = useState([])
console.log(list)
    const SearchUser = ()=>{
        axios.get(`https://api.github.com/users/${username}/repos`).then(res=>{
            //console.log(res?.data)
        setList(res?.data)
        }).catch(error=>{console.log(error)})
    }
    return(
        <>
        <Container>
        <Input placeholder="Enter user name here..." onChange={(e)=>{setUsername(e.target.value)}}/>
        <Button onClick={SearchUser}>Search</Button>
        </Container>

        <ShowList list={list}/>
        </>
    )
}


const Container = styled.div`
background: #5d5b7d;
display: flex;
justify-content: space-around;
padding: 20px 0px;
`;



const Input = styled.input`
width: 65%;
height: 50px;
border: none;
padding-left: 10px;
border-radius: 10px;
font-size: 20px;
`;

const Button = styled.button`
width: 25%;
height: 50px;
border: none;
border-radius: 10px;
background: #E75239;
cursor: pointer;
color: #fff;
font-size: 20px;
font-weight: bold;

&:hover {
    background: #fff;
    color:#E75239;
`;
export default Search;