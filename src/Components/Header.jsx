import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
       <Navbar className="bg-primary">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://www.pngplay.com/wp-content/uploads/8/Video-Player-Icon-Transparent-Background.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Play yok
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
