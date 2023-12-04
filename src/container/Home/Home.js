import React from 'react';
import Body from '../../components/Body/Body';
import Header from '../../components/Header/Header';
// import MidSection from '../../components/MidSection/MidSection';
import images from '../../constants/images';

import './Home.css'

const Home = () => {
    const containerStyle = {
        height: '100vh',
    };

    const imageContainerStyle = {
        height: '80vh',
        position: 'relative',
        overflow: 'hidden',
        overflowY: 'auto',
    };

    const rightTopImageStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '200px',
        height: '200px',
        backgroundImage: `url(${images.bg_image_right_top})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        zIndex: '-1',
    };

    const leftBottomImageStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '200px',
        height: '300px',
        backgroundImage: `url(${images.bg_image_left_bottom})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        zIndex: '-1',
    };

    const greyBackgroundStyle = {
        height: '30vh',
        backgroundColor: '#B2B2B2',
        overflowY: 'auto'
    };

    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}>
                <Header />
                <Body />
                {/* <div className='app__home-midsection'>
                    <MidSection />
                </div> */}
                <div style={rightTopImageStyle}></div>
                <div style={leftBottomImageStyle}></div>
            </div>

            <div className='app__home-greybg' style={greyBackgroundStyle}>

                <div className='app__home-greybg-first'>
                    <div className='app__home-navs'>
                        <a>Home</a>
                        <a>Image to Text</a>
                        <a>Team</a>
                        <a>About</a>
                        <a>Contact</a>
                        <a>Contributions</a>
                    </div>

                    <div className='app__home-ncl-neduet-atup'>
                        <div className='app__home-ncl-logo'>
                            <img src={images.ncl} alt='image' />
                        </div>
                        <div className='app__home-neduet-atup-logo'>
                            <img src={images.neduet} alt='image' />
                            <img src={images.atup} alt='image' />
                        </div>
                    </div>

                </div>


                <div className='app__home-greybg-second'>
                    <div className='app__socials-main'>
                        <div className='app__home-socials'>
                            <img src={images.facebook} alt='image' />
                            <a href="#" style={{ paddingLeft: '8px' }}>Dastaan.io</a>
                        </div>
                        <div className='app__home-socials'>
                            <img src={images.instagram} alt='image' />
                            <a href="#" style={{ paddingLeft: '8px' }}>dastaan.io</a>
                        </div>
                        <div className='app__home-socials'>
                            <img src={images.gmail} alt='image' />
                            <a href="mailto:contact@dastaan.io" style={{ paddingLeft: '8px' }}>contact@dastaan.io</a>
                        </div>
                    </div>

                    <div className='app__home-bottom-logo'>
                        <img src={images.logo} alt='image' />
                        <p>Dastaan opens up a world of possibilities<br />
                            by effortlessly converting images into editable<br />
                            text, breaking down language barriers with<br />
                            its powerful optical character recognition<br />
                            technology.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
