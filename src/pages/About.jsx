import { Carousel, Container, Row, Col } from 'react-bootstrap';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpg';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import '../style.css'
import FAQ from '../component/FAQ';

const About = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item >
                    <img src={about1} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h2 className='fs-1 heading-style'>Your Meal, Just How You Like It</h2>
                        <p className='fs-5 w-75'>Ready When You Are.
                            From breakfast to dinner, experience the taste of home wherever you are. Your perfect meal awaits.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about2} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h2 className='fs-1 heading-style'>Discover Your Next Craving</h2>
                        <p className='fs-5 w-75'>Hungry? We've Got You!
                            Freshly homemade meals cooked with love in our kitchen. Whatever you are in the mood for, we will cook for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about3} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 '>
                        <h2 className='fs-1 heading-style'>Crafted By Home Chefs</h2>
                        <p className='fs-5 w-75'>
                            Behind every delicious dish is a culinary master. We partner with dedicated home cooks passionate about creating meals, just for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='py-5 my-4'>
                <Container >
                    <h1 className='text-center mb-5'>Who We Are</h1>
                    <div className='fs-5 text-justify text-indent'>
                        <p >Are you tired of bland, uninspiring meals that leave you feeling unsatisfied? At Eatzio, we understand the need
                            of a truely wholesome meal to nourish both body and heart. Thats why through our dedicated home chefs we wants to bring
                            you delicious homemade meals straight from their homes. With Eatzio, you can indulge in the
                            comforting taste of homemeade meals, just like how your mom makes with love and care!</p>

                        <p>We believe that everyone deserves to enjoy delicious and healthy food, without compromising on taste or quality
                            and our mission is to make it easy for you to access the nutritious home-cooked meals you need to thrive. We
                            started Eatzio because we noticed a gap in the home made food experience therefore wanted to create a platform
                            that offers a wide range of healthy alternatives to restaurant-delivered food. From humble beginnings, we've
                            grown into a trusted name in the homemade food space, connecting countless happy customers with their culinary
                            cravings.</p>

                        <p>As we continue to grow, our commitment remains unchanged: to serve you meals that are not only satisfying but also crafted with heart.
                            We are constantly listening, evolving, and innovating to enhance your experience—because for us, it’s not just about food, it’s about how it
                            makes you feel.</p>

                        <p>At Eatzio, we are dedicated to making it easy for you to access healthy and delicious homemeade food, right at your doorstep.
                            So why settle for mediocre meals when you have the taste of home and the peace of mind that comes with knowing
                            you are feeding yourself with home-cooked meals? Try Eatzio today and experience the difference for yourself.
                        </p>
                    </div>

                </Container>
            </div>

            <div className='py-5 bg-warning bg-opacity-25'>
                <Container className='d-grid px-4 '>
                    <h1 className='text-center mb-4'>What is Eatzio?</h1>
                    <Row className="align-items-center my-4">
                        <div className="col-md-7">
                            <h3>A Taste of Home</h3>
                            <p className='fs-5 mt-4'>Whether you're reliving childhood flavors or exploring something entirely new, our goal is to make every bite a comforting reminder of home.
                                That’s why we prioritize seasonal ingredients, sustainable sourcing, and locally inspired menus that reflect the diversity of our communities.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={img1} alt="A Taste of Home" className="img-fluid rounded" />
                        </div>
                    </Row>

                    <Row className="align-items-center my-4">
                        <div className="col-md-5 order-2 order-md-1">
                            <img src={img2} alt="Flavors Woven with Tradition" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-7 order-1 order-md-2">
                            <h2>Flavors Woven with Tradition</h2>
                            <p className='fs-5 mt-4'>At Eatzio, we celebrate the authenticity of flavors made with love and tradition.
                                Our dishes are more than just meals—they're heartfelt expressions of heritage and home.
                            </p>
                        </div>
                    </Row>

                    <Row className="align-items-center my-4">
                        <div className="col-md-7">
                            <h2>From Their Kitchen to Your Plate</h2>
                            <p className='fs-5 mt-4'>Our talented network of home chefs ensures every dish tells a story—rich with culture, freshness, and passion.
                                With every order, you're not just enjoying a meal, you're supporting a community of talented cooks and sharing in their craft.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={img3} alt="From Their Kitchen to Your Plate" className="img-fluid rounded" />
                        </div>
                    </Row>
                </Container>
            </div>

        <FAQ/>



        </>
    )
}
export default About;