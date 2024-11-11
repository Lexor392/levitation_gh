import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getParallaxPosition = (baseSpeed) => {
        return scrollPosition * baseSpeed;
    };

    return (
        <main className="main">
            <section className="section main-section">
                <div className="container">
                    <div className="main-section-content" style={{ transform: `translateY(${getParallaxPosition(0.6)}px)` }}>
                        <div className="block-the">
                            <img src="./images/main-section/THE.png" alt="" />
                        </div>
                        <div className="block-levitation">
                            <img src="./images/main-section/LEVITATION.png" alt="" />
                        </div>
                        <h3>Mushroom Trip Project</h3>
                        <p>He world's first trip project where music and psychedelics merge to give you an unforgettable experience.</p>
                    </div>
                </div>
                {/* Параллакс-эффект для изображений ground с разными шагами */}
                <img
                    className='ground ground_0_1'
                    src="./images/main-section/ground_0_1.png"
                    alt=""
                    style={{ transform: `translateY(${getParallaxPosition(0.4)}px)` }}
                />
                <img
                    className='ground ground_0_2'
                    src="./images/main-section/ground_0_2.png"
                    alt=""
                    style={{ transform: `translateY(${getParallaxPosition(0)}px)` }}
                />
                <img
                    className='ground ground_3_1'
                    src="./images/main-section/ground_3_1.png"
                    alt=""
                    style={{ transform: `translateY(${getParallaxPosition(0.2)}px)` }}
                />
            </section>
            <section className="section recieve-section">
                <div className="container"></div>
            </section>
        </main>
    );
}

export default Home;
