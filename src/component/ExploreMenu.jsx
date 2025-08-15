
import { menu_list } from '../food_list';
import { Container, Card, Row, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import '../style.css'

const ExploreMenu = () => {
    
    const navigate=useNavigate();

    const handleClickCard=(menuName)=>{
        navigate('/menu', { state: { category: menuName } });
    }

    return (
        <div className='py-5 mt-5'>
            <h2 className='text-center'>Our Menu Categories</h2>
            <Container>
                <Row className="align-items-center justify-content-center g-4 mt-5">
                    {
                        menu_list.map((i,index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">

                                <Card className="text-white border-0 zoom-card explore-menu-card-style" onClick={()=>handleClickCard(i.menu_name)}>
                                    <div className='explore-card-style'>
                                        <Card.Img
                                            src={i.menu_image}
                                            alt={i.menu_name}
                                            className="zoom-image menu-card-custom-style"
                                        />
                                        <Card.ImgOverlay className="d-flex align-items-center justify-content-center bg-linear-gradient">
                                            <Card.Text className="text-center fs-5">
                                                {i.menu_name.toUpperCase()}
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
export default ExploreMenu;