import styled from 'styled-components'
import Search from './component/Search';
function App() {
  return (
    <Container>
    <Search/>
    </Container>
  );
}


const Container = styled.div`
width: 100%;
background: #5d5b7d;
`;
export default App;
