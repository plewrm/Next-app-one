'use client'
import Link from "next/link"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);

    const router = useRouter();
    const navigate = (item) => {
        router.push(item)
    }
    return (
        <div >
            <Navbar expand="lg" className="bg-body-secondary">
                <Container fluid>
                    <Navbar.Brand as={Link} href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* </Nav> */}
                            {/* <Nav className="ml-auto"> */}
                            <Nav.Link as={Link} href="/login/loginteacher">Login Teacher</Nav.Link>
                            <Nav.Link as={Link} href="/login/loginstudent">Login Student</Nav.Link>
                        </Nav>
                        {/* <Nav>
                        <Nav.Link className="ml-auto btn btn-primary" as={Link} href="/login">Login</Nav.Link>
                        </Nav> */}
                        <button className="btn btn-primary" onClick={() => navigate("/login")}>Login</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </div>
    )
}