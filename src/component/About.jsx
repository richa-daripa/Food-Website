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

            <Carousel >
                <Carousel.Item >
                    <img src={about1} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h3>Your Meal, Just How You Like It</h3>
                        <p className='fs-5 w-75'>Ready When You Are.
                            From breakfast to dinner, experience the taste of home wherever you are. Your perfect meal awaits.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about2} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 ' >
                        <h3>Discover Your Next Craving</h3>
                        <p className='fs-5 w-75'>Hungry? We've Got You!
                            Freshly homemade meals cooked with love in our kitchen. Whatever you are in the mood for, we will cook for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={about3} alt="" className='d-block w-100' />
                    <Carousel.Caption className='d-flex flex-column align-items-center justify-content-center gap-4 h-100 '>
                        <h3>Crafted By Home Chefs</h3>
                        <p className='fs-5 w-75'>
                            Behind every delicious dish is a culinary master. We partner with dedicated home cooks passionate about creating meals, just for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}
export default About;