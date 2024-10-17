import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product({item}) {
  return (
    <Card style={{ width: "18rem" }}>
        <Card.Title className="text-center">Album</Card.Title>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Card.Text>
         ${item.price}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
