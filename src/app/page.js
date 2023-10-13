'use client'
import { useState } from 'react'
import styles from './page.module.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Profimg from "../../public/vercel.svg"
import Link from 'next/link';
import outerhome from '@/style/outerhome.module.css'
import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  text: 'capitalize',
})
export default function Home() {
  const [titleColor, setTitleColor] = useState({ color: 'orange' })
  const router = useRouter();

  const navigate = (item) => {
    router.push(item)
  }

  return (
    <main >
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
          <Navbar.Brand href="#">Next Js</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Nav className="ml-auto">
              <Nav.Link as={Link} href="/about">About</Nav.Link>
              <Nav.Link as={Link} href="/study">Study</Nav.Link>
              <NavDropdown title="Product" id="navbarScrollingDropdown">
                <Nav.Link as={Link} href="/productlist">Product</Nav.Link>
              </NavDropdown>
              <NavDropdown title="Student" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} href="/contact/studcontact">Student</NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/authorization">
                  Authorization
                </NavDropdown.Item>
              </NavDropdown>

              <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>&nbsp;
              <button className="btn btn-primary" onClick={() => navigate("/contact")}>Contact</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={outerhome.bgcolorimage}>
        <div className="container ">
          <div className="row mb-5">
            <div className="col-12 mt-5 mt-lg-0 text-center text-lg-start order-lg-1 order-0 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
              <div className="text-center text-lg-end">
                {/* <Image src={Profimg} alt='Not Dispaly' className="object-fit-contain hero-video--section" autoPlay /> */}
                <Image
                  // src={Profimg}
                  src="https://www.clker.com/cliparts/x/0/p/o/d/v/next-arrow-hi.png"
                  width={100}
                  height={100}
                  style={{ marginLeft: 150 }}
                  alt='not found'
                />
              </div>
            </div>
            <div className="col-12 mt-5 order-lg-1 order-0 col-md-12 col-lg-6">
              <h1 className={roboto.className} style={titleColor} >Welcome to Next World, Hello Visit Change</h1>
              <p className={outerhome.p} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque similique inventore?
                Blanditiis delectus ab, alias ea iste rerum repellendus sint quidem cum beatae voluptas temporibus omnis ut est corrupti.
              </p>

              <div className="text-center w-100 text-md-start">

                <button className='btn btn-secondary' onClick={() => setTitleColor({ color: 'white' })} >Change</button>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* <div style={{ textAlign: 'center' }}>
        <h1 style={titleColor}>Hello Welcome to next js world</h1>
        <Image
        // src={Profimg}
        src="https://www.clker.com/cliparts/x/0/p/o/d/v/next-arrow-hi.png"
        width={100}
        height={100}
        />
        <p className={outerhome.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque similique inventore? 
          Blanditiis delectus ab, alias ea iste rerum repellendus sint quidem cum beatae voluptas temporibus omnis ut est corrupti.
        </p>
        <button className='btn btn-secondary' onClick={() => setTitleColor({ color: 'orange' })} >Change</button>
      </div> */}

    </main>
  )
}
