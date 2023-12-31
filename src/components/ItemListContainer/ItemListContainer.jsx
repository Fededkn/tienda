import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./ItemListContainer.css";
import "../../css/common.css"

const ItemListContainer = ({ productsData }) => {
    const navigate = useNavigate();

    return (
        <div className="containerCommon">
            {productsData.map((product) => {
                return (
                    <Card key={product.id}>
                    <Card.Img  className="cardImg" variant="top" src={product.thumbnail} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button
                        variant="primary"
                        onClick={() => navigate(`/item/${product.id}`)}
                        >
                        Detalles
                        </Button>
                    </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainer;