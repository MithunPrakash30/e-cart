import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {
  
  
 
  MDBInput,

  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' outline color='dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

       
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='<i class="fa-solid fa-play fa-beat me-2"></i>' className='me-3' />
                Media Player
              </h6>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolore totam corporis enim ipsum voluptate repudiandae numquam ipsa dicta optio, eaque, molestiae quos natus. Fuga mollitia magnam dolores nisi nam.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset text-lg-start text-muted'>
                <Link to={'/wishlist'} style={{textDecoration:'nonenpm install react-bootstrap bootstrap',color:'gray'}}>
        Wishlist
        </Link>
                
                 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                <Link to={'/cart'} style={{textDecoration:'none',color:'gray'}}>
        Cart
        </Link>
                </a>
              </p>
             
             
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Bootswatch
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <p>
                
                <input type="text"  /><br /><br />
                <button  className="btn btn-warning ms-1">Subscribe</button>

              </p>


             
            </MDBRow>
          </form>
        </section>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>
      <center>
      <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
        </center>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          E-CART.Built with React
        </a>
      </div>
    </MDBFooter>

       </div>
  )
}

export default Footer