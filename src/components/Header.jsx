import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'




function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <div>
      
      <Navbar expand="lg" style={{zIndex:1}} className="bg-info text-light">
      <Container>
        <Navbar.Brand > <Link to={'/'} style={{color:'white', fontWeight:'bold', textDecoration:'none'}}><i class="fa-solid fa-truck-fast fa-bounce me-2"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link> <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none', color:'red', fontWeight:'bold'}}><i class="fa-solid fa-heart fa-beat-fade me-2" ></i>Wishlist
            <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
            </Link></Nav.Link>

            <Nav.Link ><Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none', color:'red', fontWeight:'bold'}}><i class="fa-solid fa-cart-shopping fa-beat-fade me-2"></i>Cart
            <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge>
            </Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
</Navbar>
  </div>
  )
}

export default Header