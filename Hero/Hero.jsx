import React, { useState, useEffect } from 'react'
import './Hero.css'
import { Tilt } from 'react-tilt';
import Navbar from '../Navbar/Navbar'
import Carousel from 'react-bootstrap/Carousel';
import { motion } from 'framer-motion'

const Hero = ({ index }) => {

    const [showPolygonBg, setShowPolygonBg] = useState(false);
    const [showStroke, setShowStroke] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPolygonBg(true);
            setShowStroke(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='hero1'>
            <Navbar />
            <svg className='outline-svg' width="640" height="100%" viewBox="0 0 640 594" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M639 297.004C639 306.792 633.695 315.355 625.801 319.965L173.139 580.769C158.899 588.568 142.567 593 125.194 593C116.552 593 108.15 591.881 100.14 589.829L-35 555.118L378.448 316.9C385.639 313.179 390.561 305.664 390.561 297.004C390.561 288.344 385.639 280.83 378.448 277.091L-35 38.8732L100.14 4.17091C108.15 2.11914 116.552 1 125.194 1C142.567 1 158.899 5.44104 173.139 13.2218L625.801 274.035C633.695 278.645 639 287.207 639 297.004Z" stroke="white" stroke-opacity="0.4" stroke-miterlimit="10" class="svg-elem-1"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M-23.5 139C64.029 139 135 209.754 135 296.996C135 384.237 64.029 455 -23.5 455C-111.029 455 -182 384.228 -182 296.996C-182 209.763 -111.011 139 -23.5 139Z" stroke="white" stroke-opacity="0.4" stroke-miterlimit="10" class="svg-elem-2"></path>
            </svg>
            <motion.p className='outer-p1 inter-medium'
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? 20 : -20
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 0.50 // Animation duration
                    }
                }}
            >
                <strong>Fostering</strong> a sense of <strong>empowerment </strong>and collective action</motion.p>
            <motion.p className='outer-p2 inter-medium'
            initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 20 : -20
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 0.50 // Animation duration
                }
            }}
            >
                Empower Your Health, Empower Your Life</motion.p>
                <motion.p className='outer-p3 inter-medium'
            initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 20 : -20
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 0.50 // Animation duration
                }
            }}
            >
                Track, Transform, Thrive</motion.p>
            <motion.p className='outer-p4 inter-medium'
            initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: index % 2 === 0 ? 20 : -20
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 0.50 // Animation duration
                }
            }}
            > 
            Chart Your Progress, Celebrate Your Success</motion.p>
            {showPolygonBg && (
                <div className='polygon-bg-wrap animate'>
                    <img className='polygon-bg animate' src="./polygon-bg.svg" alt="" />

                    <div className='hero-content animate'>
                        <motion.h1 className='inter-medium'
                            initial={{
                                opacity: 0,
                                // if odd index card,slide from right instead of left
                                x: index % 2 === 0 ? 20 : -20
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0, // Slide in to its original position
                                transition: {
                                    duration: 0.50, // Animation duration
                                    delay: 0.40
                                }
                            }}
                        >
                            Sustainable <br /> practices empow<span className='span1'>er</span>  <br /> joyful living</motion.h1>
                        <p className='inter-medium'>Leading with innovative products, sustainable practices, <br /> and impactful CSR initiatives, fostering happiness.</p>
                        <div className='hero-strip flex'>
                            <button className='inter-bold'>Know More</button>
                            <img src="./users.svg" alt="" />
                            <p><span>1M+</span> Happy Customers</p>
                        </div>
                    </div>

                    <Carousel fade className='appliances-slide animate' controls={false} interval={1000} style={{ zIndex: '1', overflow: 'hidden', borderRadius: '20px' }}>
                        {/* <img cl src="./bajaj-text-outline.svg" alt="" /> */}
                        <Carousel.Item>
                            <img src="./111.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: '-1' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./222.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./333.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </Carousel.Item>
                    </Carousel>
                    
                    <Tilt className="tilt-card" options={{scale: 1, speed: 2000, reverse: false, max: 20, easing: "ease-in-out"}}> 
                    <img className='green-square animate'src="./green-square.svg" alt="" />

                    </Tilt>
                    <Tilt className="tilt-card2" options={{scale: 1, speed: 2000, reverse: false, max: 20, easing: "ease-in-out"}}> 
                    <img className='appliances2 animate' src="./appliances2.svg" alt="" />
                    </Tilt>

               
                    <div className='life-card flex animate'>
                    <span className='span3 inter-medium animate'>Life @ Bajaj</span>
                    <img src="./life-img.svg" alt="" />
                    <p className='inter-medium'>
                        Nurturing, <br />
                        Passion <br />
                        Inspiring <br />
                        Trust <br />
                        Creating <br />
                        Delight
                    </p>
                </div>
                     
                </div>
            )}

            {showStroke && (
                <svg className='polygon-bg-stroke' width="100%" height="100%" viewBox="0 0 1242 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M191 589H23C10.8497 589 1 579.15 1 567V87.5C1 75.3497 10.8497 65.5 23 65.5H297.5C309.65 65.5 319.5 55.6503 319.5 43.5V23C319.5 10.8497 329.35 1 341.5 1H396.5H768H867C879.15 1 889 10.8497 889 23V43.5C889 55.6503 898.85 65.5 911 65.5H1219C1231.15 65.5 1241 75.3497 1241 87.5V448C1241 460.15 1231.15 470 1219 470H1053C1040.85 470 1031 479.85 1031 492V632C1031 644.15 1021.15 654 1009 654H948C935.85 654 926 663.85 926 676V697.5C926 709.65 916.15 719.5 904 719.5H341.5C329.35 719.5 319.5 709.65 319.5 697.5V676C319.5 663.85 309.65 654 297.5 654H235C222.85 654 213 644.15 213 632V611C213 598.85 203.15 589 191 589Z" stroke="white" class="svg-elem-1"></path>
                </svg>
            )}
        </div>
    )
}

export default Hero