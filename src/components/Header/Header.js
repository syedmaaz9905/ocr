import React from 'react'
import images from '../../constants/images';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img className='app__header-logo-image' src={images.logo} alt='image' />
            <div className='app__header-header-main'>
                <div className='app__header-header-secondary'>
                    <div className='app__header-header-home'>
                        <a>HOME</a>
                    </div>
                    <div className='app__header-header-ocr'>
                        <a>OCR</a>
                    </div>
                    <div className='app__header-header-team'>
                        <a>TEAM</a>
                    </div>
                    <div className='app__header-header-contributions'>
                        <a>CONTRIBUTIONS</a>
                    </div>
                    <div className='app__header-header-contact'>
                        <a>CONTACT</a>
                    </div>
                    <div className='app__header-header-about'>
                        <a>ABOUT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header