import { Grid, Stack } from '@mui/material'
import React from 'react'
import images from '../../constants/images';

import './MidSection.css'

const MidSection = () => {
    return (
        <Grid container xs={12} mt={4} display={'flex'} direction={'column'} style={{ background: '#DEF9FF', position: 'relative', zIndex: '1', borderTopRightRadius: '20px', borderTopLeftRadius: '20px' }}>
            <Grid item xs={12} >
                <Stack className='app__midsection-imgtotext' direction={'row'} justifyContent={'space-between'}>
                    <Stack textAlign={'left'} spacing={0.5}>
                        <h2 className='app__midsection-h2'>Image to Text Converter</h2>
                        <p className='app__midsection-p'>Dastaan makes the process effortless, enabling users to effortlessly extract text from Urdu images.</p>
                    </Stack>
                    <Stack direction={'row'} spacing={3}>
                        <img src={images.ncl} alt='image' />
                        <img src={images.neduet} alt='image' />
                        <img src={images.atup} alt='image' />
                    </Stack>
                </Stack>
            </Grid>
            <Grid container item xs={12} style={{ background: '#DEF9FF', marginTop: '40px', paddingLeft: '30px', paddingRight: '30px' }}>
                <Grid item xs={12} md={4} style={{ background: '#F0FCFF', paddingRight: '25px', paddingLeft: '25px', paddingTop: '40px', borderRadius: '20px' }}>
                    <Stack direction={'row'} spacing={3} justifyContent={'center'} alignItems={'center'} height={'40px'} borderRadius={'10px'} style={{ background: '#6A6A6A', color: '#fff' }}>
                        <p>UPLOAD IMAGE</p>
                        <p>تصویر ڈالیں</p>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} style={{ background: '#F0FCFF' }}>
                    <Stack direction={'row'} spacing={25} justifyContent={'center'} alignItems={'center'} style={{ color: '#000', marginTop: '15px' }}>
                        <p className='app__midsection-image-preview'>Image Preview</p>
                        <p className='app__midsection-image-preview'>تصویر</p>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} style={{ background: '#F0FCFF' }}>
                    <Stack direction={'row'} spacing={25} justifyContent={'center'} alignItems={'center'} style={{ color: '#000', marginTop: '15px' }}>
                        <p className='app__midsection-image-preview'>Extracted Text</p>
                        <p className='app__midsection-image-preview'>متن</p>
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MidSection