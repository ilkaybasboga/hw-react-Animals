import animal from "../assets/ANİMAL1.png"
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Header= ()=>{
    return(
<Container className="text-light">
    <Image src={animal} width="100%" height="400px"></Image>
    <hr />
    <hr />
    <h1 className="header m-3 text-warning">ANİMALS</h1>
    <hr />
    <hr />
</Container>
    )
}

export default Header;