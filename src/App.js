import Container from 'react-bootstrap/Container';
import CardContainer from './components/CardContainer';
import Header from "./components/Header";

function App() {
  return (
< Container fluid className="text-center m-auto mt-2">
<Header/>
<CardContainer/>
</Container>
  );
}

export default App;
