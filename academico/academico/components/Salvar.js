import React from 'react'

const Salvar = () => {
  return (
    function salvar(dados){
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos',JSON.stringify(cursos))
      }
  )
}

export default Salvar