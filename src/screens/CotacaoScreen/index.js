import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Table from "../../components/Table"
import {useHistory} from 'react-router-dom'
import "../CotacaoScreen/style.css"
import styled from 'styled-components'



const CotacaoScreen = () => {
    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({})
    const history = useHistory()

    const sendToAPI = () => {
        fetch('https://61589cd15167ba00174bbb6e.mockapi.io/cotacao',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                produtos: produtos
            })
        }).then(r => console.log(r)).catch(e => console.log(e))
    }
    return <div className='area'>
        <div className="btn">
        <Input label="Produto" value={produto.nome} onChange={(value) => {setProduto({...produto, nome: value})}}/>
        <Input label="Quantidade" value={produto.quantidade} onChange={(value) => {setProduto({...produto, quantidade: value})}}/>
        <Button text="Adicionar Produto" onClick={() => {
            setProduto({})
            setProdutos([...produtos, produto])}
            }/>
        </div>
        <Table produtos={produtos}/>
        <div>
        <Button text="Enviar" onClick={sendToAPI} />
        <Button text="Voltar" onClick={() => history.push('')}/>
        </div>
    </div>
    
    
}

export default CotacaoScreen