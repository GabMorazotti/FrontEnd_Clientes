import React from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function List(props) {
  const [clientes, setClientes] = React.useState([]);

  const navigate = useNavigate();

  async function getClientes() {
    return axios
      .get("http://localhost:5200/api/Cliente")
      .then((result) => setClientes(result.data))
      .catch((error) => error);
  }
  function deletaLinha(id) {
    return axios
      .delete(`http://localhost:5200/api/Cliente/${id}`)
      .then(() => {
        alert("Registro deletado com sucesso");
        getClientes();
      })
      .catch((error) => error);
  }
  function alteraLinha(id) {
    navigate(`/edit/${id}`, { replace: true });
    //history.push(`/edit/${id}`);
  }

  React.useEffect(async () => {
    await getClientes();
  }, []);

  return (
    <>
      <h2>Clientes</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.cidade}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
              <td>
                <Container>
                  <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                      <Stack align="right" direction="horizontal" gap={3}>
                        <Button
                          variant="light"
                          icon="check"
                          onClick={() => alteraLinha(cliente.id)}
                        >
                          ✎
                        </Button>
                        <div className="vr" />
                        <Button
                          variant="light"
                          onClick={() => deletaLinha(cliente.id)}
                        >
                          🗑
                        </Button>
                      </Stack>
                    </Col>
                  </Row>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default List;
