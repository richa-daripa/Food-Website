import { Carousel, Container } from 'react-bootstrap';
import about1 from '../assets/about1.jpeg';
import about2 from '../assets/about2.jpeg';
import about3 from '../assets/about3.jpg';
import '../style.css'

const About = () => {
    return (
        <>
            <div className='py-5 my-4'>

                <Container >
                    <h2 className='text-center mb-5'>About Us</h2>
                    <div className='fs-5 text-justify text-indent'>
                        <p >We believe that good
                            food brings people together, and our mission is to make ordering your favorite meals as easy, convenient, and enjoyable as
                            possible. We started Eatzio because we noticed a gap in the home made food experience. We wanted to create a platform that not
                            only offered a wide variety of cuisines but also focused on seamless ordering, reliable delivery, and exceptional customer
                            service. From humble beginnings, we've grown into a trusted name in the homemade food space, connecting countless happy customers with their culinary cravings.
                        </p>
                        <p>At Eatzio, we celebrate the authenticity of flavors made with love and tradition. Our carefully curated network of home chefs ensures every dish tells a story—rich with culture, freshness, and passion. Whether you're reliving childhood flavors or exploring something entirely new, our goal is to make every bite a comforting reminder of home.
                            With every order, you're not just enjoying a meal—you’re supporting a community of talented cooks and sharing in their craft. <br />
                        </p>
                        <p>As we continue to grow, our commitment remains unchanged: to serve you meals that are not only satisfying but also crafted with heart.
                            We’re constantly listening, evolving, and innovating to enhance your experience—because for us, it’s not just about food, it’s about how it
                            makes you feel.</p>
                        <p>Whether it’s a quick lunch between meetings, dinner with the family, or a spontaneous snack craving—Eatzio is here to
                            make every moment a little more flavorful.</p>
                        <p>Your trust feeds our passion. And your hunger inspires our mission.</p>
                    </div>

                </Container>
            </div>

            <Carousel >
                <Carousel.Item >
                    <img src={about1} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h3>Your Meal, Just How You Like It</h3>
                        <p className='fs-5'>Ready When You Are.
                            From breakfast to dinner, and everything in between – simply choose, click, and enjoy. Your perfect meal awaits.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about2} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h3>Discover Your Next Craving</h3>
                        <p className='fs-5'>Hungry? We've Got You!
                            Filter by cuisine, dietary needs, or restaurant. Whatever you're in the mood for, we'll help you find it fast.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about3} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 '>
                        <h3>Crafted by Experts</h3>
                        <p className='fs-5'>
                            Behind every delicious dish is a culinary master. We partner with skilled chefs dedicated to crafting perfect meals, just for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}
export default About;