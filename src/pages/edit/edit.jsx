import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const formRef = React.useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValues, setFormValues] = React.useState({
    nome: "",
    email: "",
    cidade: "",
    telefone: "",
    cpf: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    return axios
      .put("http://localhost:5200/api/Cliente", formValues)
      .then((result) => {
        alert("Registro alterado com sucesso");
        navigate(`/`, { replace: true });
      })
      .catch((error) => error);
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function getClienteByID() {
    return axios
      .get(`http://localhost:5200/api/Cliente/${id}`)
      .then((result) => {
        setFormValues(result.data);
      })
      .catch((error) => {});
  }

  React.useEffect(async () => {
    await getClienteByID();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form ref={formRef}>
              <Form.Group className="mb-3 mx-5" controlId="inputID">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  value={formValues.id}
                  type="number"
                  maxLength={11}
                  disabled
                  name="id"
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-5" controlId="inputNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  value={formValues.nome}
                  onChange={handleChange}
                  type="text"
                  name="nome"
                  placeholder="Nome Completo"
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="inputEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  value={formValues.email}
                  type="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="E-mail"
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="inputCidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  value={formValues.cidade}
                  type="text"
                  onChange={handleChange}
                  name="cidade"
                  placeholder="Cidade"
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="inputTelefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  value={formValues.telefone}
                  type="number"
                  onChange={handleChange}
                  maxLength={11}
                  step="1"
                  name="telefone"
                  placeholder="Telefone"
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="inputCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  value={formValues.cpf}
                  type="number"
                  onChange={handleChange}
                  maxLength={11}
                  step="1"
                  name="cpf"
                  placeholder="CPF"
                />
              </Form.Group>

              <Button
                variant="dark"
                className="mx-5"
                type="submit"
                onClick={onSubmit}
              >
                Atualizar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Edit;
