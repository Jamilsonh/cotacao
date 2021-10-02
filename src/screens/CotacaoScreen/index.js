import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Table from "../../components/Table"

const CotacaoScreen = () => {
    const [produtos, setProdutos] = useState([])
    const [produto, setProduto] = useState({})

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
    return <div>
        <Input label="Produto" value={produto.nome} onChange={(value) => {setProduto({...produto, nome: value})}}/>
        <Input label="Quantidade" value={produto.quantidade} onChange={(value) => {setProduto({...produto, quantidade: value})}}/>
        <Button text="Adicionar Produto" onClick={() => {
            setProduto({})
            setProdutos([...produtos, produto])}
            }/>

        <Table produtos={produtos}/>
        <Button text="Enviar" onClick={sendToAPI}/>
    </div>
}

export default CotacaoScreen