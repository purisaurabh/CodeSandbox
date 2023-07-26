import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled(Box)`
    height:41vh;
`

const Result = () => {

    const { html , css , js } = useContext(DataContext)
    const [src, setSrc] = useState('');

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() => {
        const timeOut = setTimeout(() =>{
            setSrc(srcCode);
        } , 1000)

        return () => clearTimeout(timeOut);
    }, [html,css,js]);

  return (
    <Container>
        <iframe 
            srcDoc={src}
            title='Output'
            sandbox='allow-scripts'
            frameBorder={0}
            width='100%'
            height='100%'
        />  
    </Container>
  )
}

export default Result