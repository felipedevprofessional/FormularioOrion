import Link from 'next/link'
import Pagina from '../../components/Pagina'
import React, { useEffect } from 'react'
import {Button, Form, Table} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import {AiOutlineCheck} from 'react-icons/ai'
import {IoMdArrowBack} from 'react-icons/io'

export const form = () => {

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  const {push, query} = useRouter()

  const { register, handleSubmit, setValue } = useForm()

  useEffect(()=>{
    if(query.id){

      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[query.id]
      
    setValue('nome', curso.nome)
    setValue('duracao', curso.duracao)
    setValue('modalidade', curso.modalidade)
  }
  },[query.id])

  function salvar(dados){
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id,1,dados)
    window.localStorage.setItem('cursos',JSON.stringify(cursos))
    push('/cursos')
  }


    return (
        <Pagina titulo="Formulário">
      <Form>
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="" {...register('nome')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duracao">
        <Form.Label>Duração</Form.Label>
        <Form.Control type="text" placeholder="" {...register('duracao')}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="modalidade">
        <Form.Label>Modalidade</Form.Label>
        <Form.Control type="text" placeholder="" {...register('modalidade')} />
      </Form.Group>

      <div className='text-center'>
      <Button variant="primary" type="submit" onClick={handleSubmit(salvar)}>
      <AiOutlineCheck className='text-white me-1'/>
        Enviar
      </Button>
      <Link href='./' className='btn btn-danger ms-2'>
      <IoMdArrowBack className='text-white me-1'/>
            Voltar
      </Link>
      </div>
    </Form>
        </Pagina>
    )}

export default form