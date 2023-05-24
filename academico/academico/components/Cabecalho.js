import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/filmes">Acadêmico</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/curso">Curso</Nav.Link>
              <Nav.Link href="/disciplina">Disciplina</Nav.Link>
              <Nav.Link href="/aluno">Alunos</Nav.Link>
              <Nav.Link href="/professores">Professores</Nav.Link>
              <Nav.Link href="/salas">Salas</Nav.Link>
              <Nav.Link href="/semestre">Semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho