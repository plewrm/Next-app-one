'use client'
import getUsers from '../../../services/getUsers'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import DeleteUser from './deleteuser/deleteuser';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Aboutpage = async () => {
  const router = useRouter();

  const navigate = (item) => {
    router.push(item)
  }
  const userList = getUsers()
  const users = await userList;
  console.log("All User", users);
  return (
    <main style={{ textAlign: 'center' }}>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            <Nav className="ml-auto">
              <button className="btn btn-primary" onClick={() => navigate("/about/addusers")}>Add Users</button>
              {/* <Link href="/about/addusers">Add Users</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>About User data</h1>

      {
        users.map((user, index) => (
          <h3 key={index}>
            <Link href={`/about/${user.id}`}>{user.name}</Link>
            <span style={{ display: 'inline-block', width: 100 }}>
              <Link href={`/about/${user.id}/updateuser`}>Edit</Link>
            </span>
            <span style={{ display: 'inline-block', width: 100 }}>
              <DeleteUser id={user.id}/>
            </span>
          </h3>
        ))
      }
      <div style={{ textAlign: 'end', marginRight: 20 }}>

        <Link href="/">Go to home</Link>
      </div>

    </main>
  )
}

export default Aboutpage
