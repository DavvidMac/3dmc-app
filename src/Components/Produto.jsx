import React from 'react'
import './Produto.css'
const Produto = ({nome,url,preco}) => {
  return (
    <>
        <div className='ProdutoContainer'>
            <img src={url} alt="" />
            <div className='ProdutoDescription'>
                <h4>{nome}</h4>
                <p>{preco}</p>
            </div>
        </div>
    </>
  )
}

export default Produto