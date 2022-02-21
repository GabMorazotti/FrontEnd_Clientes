import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./pages/list/list";
import { Link } from "react-router-dom";
import InsertPage from "./pages/new/new";
import SearchID from "./pages/search/search";
import Edit from "./pages/edit/edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">CRUD do Gabriel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="/">Ver Lista</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="new">Create </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to="search">Pesquisar </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="new" element={<InsertPage />} />
            <Route path="search" element={<SearchID />} />
            <Route path="edit">
              <Route path=":id" element={<Edit />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
