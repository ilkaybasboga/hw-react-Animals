import { useState } from "react";
import Card from "react-bootstrap/Card";

const AnimalCard = ({ name, description, species, img, thumbnail }) => {
 const [image, setImage] = useState(true)
 
    return (
    <Card className="rounded-2 m-auto animal-card" role="button">
   {image &&   <Card.Img variant="top" src={img} className="animal-logo" onClick={()=>setImage(false)} />}
     {!image && <p onClick={()=>setImage(true)} className="text-success bg-dark">{description}</p>}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default AnimalCard;
