import { AppBar , Toolbar , styled } from '@mui/material'

const Container = styled(AppBar)`
    background:#060606;
    height:9vh;
`


const Header = () => {
    
    return (
        <Container position='static'>
            <Toolbar style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1>FrontEnd Code Editor</h1>
            </Toolbar>
        </Container>
    )
}

export default Header

