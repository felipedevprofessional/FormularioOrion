import Link from 'next/link'
import Pagina from '../../components/Pagina'
import React, { useEffect, useState } from 'react'
import {Button, Table} from 'react-bootstrap'
import {AiFillDelete} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'


export const index = () => {


  const[cursos, setCursos] = useState([])

  useEffect(()=>{
    setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
  },[])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id){
    if(confirm('Deseja realmente excluir')){
    const cursos = getAll()
    cursos.splice(id,1)
    window.localStorage.setItem('cursos',JSON.stringify(cursos))
    setCursos(cursos)
  }
  }


    return (
        <Pagina titulo="Curso">
          

            <Link href={'/cursos/form'} className="btn btn-primary mb2" >NOVO</Link>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Deletar</th>
          <th>nome</th>
          <th>duracao</th>
          <th>modalidade</th>
        </tr>
      </thead>
     
      <tbody>
      {cursos.map((item,i) => (
        <tr key={i}>
          <td>
            <div>
              <Link href={'/cursos/' + i}>
                <Button className='me-2' variant="light">
                <BsFillPencilFill className='text-primary'/>
                </Button>
          </Link>
            <Button variant="danger" onClick={() => excluir(i)}>
            <AiFillDelete className='text-white'/>
            </Button>
            </div>
          </td>
          <td>{item.nome}</td>
          <td>{item.duracao}</td>
          <td>{item.modalidade}</td>
        </tr>
         ))}
      </tbody>
      
    </Table>
   
        </Pagina>
    )}

export default index