import { useEffect, useState } from "react"
import Button from "../../components/Button"
import Table from "../../components/Table"
import {useParams} from 'react-router-dom'

const CotacaoFornecedorScreen = () => {
    const [produtos, setProdutos] = useState([])
    const params = useParams()

    useEffect(async () => {
        const response = await fetch('https://61589cd15167ba00174bbb6e.mockapi.io/cotacao/' + params.id,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const body = await response.json()
        setProdutos(body.produtos)
    }, [])

    return <div>
        <Table produtos={produtos}/>
    </div>
}

export default CotacaoFornecedorScreen