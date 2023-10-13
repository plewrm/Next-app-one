'use client'
import Link from "next/link"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
 const Layout=({ children }) =>{
    const pathName = usePathname();
    console.log(pathName);

    const router = useRouter();
    const navigate = (item) => {
        router.push(item)
    }
    return (
        <div >
            <Navbar expand="lg"style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 100 }} className="bg-body-secondary ">
                <Container fluid>
                    <Navbar.Brand as={Link} href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            </Nav>
                            <Nav className="ml-auto">
                            <Nav.Link as={Link} href="/authorization/clientauth">Client Auth</Nav.Link>
                            <Nav.Link as={Link} href="/authorization/serverauth">Server Auth</Nav.Link>
                        </Nav>
                        {/* <Nav>
                        <Nav.Link className="ml-auto btn btn-primary" as={Link} href="/login">Login</Nav.Link>
                        </Nav> */}
                        {/* <button className="btn btn-primary" onClick={() => navigate("/productlist")}> &lt;&lt; Back</button> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}
export default Layout