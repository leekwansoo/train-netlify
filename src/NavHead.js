import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'

const NavHead = () => {
    let navigate = useNavigate(); 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/')}}>Login</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/main')}}>Main</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/dataupload')}}>Upload Data</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavHead;
