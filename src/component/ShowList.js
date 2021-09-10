import React, {useState, useEffect} from 'react'

import styled from 'styled-components'
function ShowList({list}) {

    const [forks, setForks] = useState(0)
    const [language, setLanguage] = useState('')

  
    const showList = list.map((url, id)=>{
        return(
          <div key={id}>
          <li style={{ padding: 5, borderRadius:5, border: '1px solid grey'}} onClick={()=>{setForks(url?.forks); setLanguage(url?.language)}}>{url?.git_url}</li>
          </div>
        )})
  return (
    <Container>
  <Ul>
  {showList}
  </Ul>
  <Stats>
  <p style={{fontSize: 24, fontWeight:'bold', borderRadius:5, border: '1px solid grey', padding: 10, cursor:'none'}}>Statistics:</p>
  <li>Nos of Forks: {forks}</li>
  <li>Language used: {language}</li>
  </Stats>
    </Container>
  );
}


const Container = styled.div`
display: flex;
justify-content: space-around;
padding: 20px 20px;


@media (max-width: 952px) {
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 0px
    }
`;

const Ul = styled.ul`
width: 40%;
list-style-type: none;
cursor:pointer;
`;

const Stats = styled.ul`
width: 40%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
height: 200px;
padding: 0px 30px;
list-style-type: none;
cursor:pointer;
`;
export default ShowList;
