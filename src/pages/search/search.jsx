import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormSelect } from "react-bootstrap";

function SearchID() {
  const formRef = React.useRef();
  const [formValues, setFormValues] = React.useState({
    nome: "",
    email: "",
    cidade: "",
    telefone: "",
    cpf: "",
    id: "",
  });

  function onSubmit(e) {
    e.preventDefault();

    if (formValues.id === "") {
      alert("Digite o id a ser procurado!");
    } else {
      //console.log(formRef);
      return axios
        .get(`http://localhost:5200/api/Cliente/${formValues.id}`)
        .then((result) => {
          setFormValues(result.data);
        })
        .catch((error) => {
          alert("Registro não encontrado!");
        });
    }
  }

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form ref={formRef}>
              <Form.Group className="mb-3 mx-5" controlId="inputId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  value={formValues.id}
                  onChange={handleChange}
                  type="text"
                  name="id"
                  placeholder="Seu ID"
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-5" controlId="inputNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  value={formValues.nome}
                  onChange={handleChange}
                  type="text"
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                  placeholder="Telefone"
                />
              </Form.Group>

              <Form.Group className="mb-3 mx-5" controlId="inputCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  value={formValues.cpf}
                  type="number"
                  disabled
                  onChange={handleChange}
                  maxLength={11}
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
                Pesquisar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SearchID;
