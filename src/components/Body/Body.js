import React, { useRef, useState } from 'react';
import images from '../../constants/images';
import './Body.css';

const Body = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="body-container">
            <div className="centered-box">
                <div className="centered-main-box">
                    <div className='app__body-head'>
                        <div className='app__body-head-main'>
                            <h2>Image to Text Converter</h2>
                            <p>Dastaan makes the process effortless, enabling users to effortlessly extract text from Urdu images.</p>
                        </div>
                        <div className='app__body-head-secondary'>
                            <img src={images.ncl} alt='image' />
                            <img src={images.neduet} alt='image' />
                            <img src={images.atup} alt='image' />
                        </div>
                    </div>

                    <div className='app__body-cards'>
                        <div className='app__body-card'>
                            <div className='app__body-first-card'>
                                <p>UPLOAD IMAGE</p>
                                <p>تصویر ڈالیں</p>
                            </div>
                            <div className='app__body-first-card-correct-images'>
                                <img src={images.pic1} alt='image' />
                                <img src={images.pic2} alt='image' />
                                <img src={images.pic3} alt='image' />
                            </div>
                            <div className='app__body-first-card-text-after-correct-images'>
                                <p>Dont have an image? Try these.</p>
                            </div>
                            <div className='app__body-first-card-sample-images-first'>
                                <img src={images.sample1} alt='image' />
                                <img src={images.sample2} alt='image' />
                            </div>
                            <div className='app__body-first-card-sample-images-second'>
                                <img src={images.sample3} alt='image' />
                                <img src={images.sample4} alt='image' />
                            </div>
                            <div className='app__body-first-card-button'>
                                <a href='#'>
                                    <p>GET TEXT</p>
                                    <p>متن نکالیں</p>
                                </a>
                            </div>
                        </div>
                        <div className='app__body-card'>
                            <div className='app__body-second-card'>
                                <p>Image Preview</p>
                                <p>تصویر</p>
                            </div>

                            {/* Custom file upload area */}
                            <label htmlFor="fileInput" style={{ width: '90%', height: '350px', backgroundColor: '#FFFFFF', margin: 'auto', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', cursor: 'pointer' }}>
                                {uploadedImage ? (
                                    <img src={uploadedImage} alt="uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                ) : (
                                    <div>
                                        <p>Click to Upload Image</p>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                )}
                            </label>

                        </div>
                        <div className='app__body-card'>
                            <div className='app__body-third-card'>
                                <p>Extracted Text</p>
                                <p>متن</p>
                            </div>
                            <div>
                                <textarea
                                    style={{
                                        width: '90%',
                                        height: '300px',
                                        border: 'none',
                                        resize: 'none',
                                        outline: 'none',
                                        boxShadow: 'none',
                                    }}
                                    readOnly
                                    placeholder="Text from image will appear here..."
                                ></textarea>
                            </div>
                            <div className='app__body-third-card-buttons'>
                                <a href='#'>
                                    <p>DOWNLOAD</p>
                                    <p>ڈاؤن لوڈ</p>
                                </a>
                                <a href='#'>
                                    <p>PLAY AUDIO</p>
                                    <p>آڈیو چلائیں</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
