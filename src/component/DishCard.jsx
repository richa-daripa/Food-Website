import { StoreContext } from '../contextapi/ContextAPI';
import { useContext } from 'react';
import { Card, Button,CardImgOverlay } from 'react-bootstrap';
import '../style.css'
import rating_star from '../assets/rating_starts.png';

const DishCard = ({id, name, image, price, description, setShow}) => {
    const { addToCart} = useContext(StoreContext);

    const handleClick=()=>{
        addToCart(id);
        setShow(true);
    }

    return (
            <Card className="bg-dark shadow border-0 h-100 rounded-4" style={{width:"18rem"}}>
                <Card.Img variant="top" src={image} className='rounded-top-4' />
                <CardImgOverlay className='d-flex align-items-end justify-content-end'>
                    <Button variant="warning" size='sm' className='w-50 ' onClick={handleClick}>Add</Button>
                </CardImgOverlay>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className="text-white fs-4">
                        <div className="d-flex align-items-center justify-content-between">
                            <p>{name}</p>
                            <img src={rating_star} alt='Rating star' className='w-25' />
                        </div>
                    </Card.Title>
                    <div className="text-secondary flex-grow-1 mb-1">{description}</div>
                    <div className="text-danger fs-3 mt-2"><span className='fs-5 me-1'>Rs</span>{price}</div>
                </Card.Body>
            </Card>
        
    )
}
export default DishCard;