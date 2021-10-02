import './style.css'
const Table = ({produtos}) => {
    return <table>

  <tr>
    <th>Produto</th>
    <th>Quantidade</th>
    <th>Valor</th>
  </tr>
        {produtos.map((produto) => 
  <tr>
      <td>{produto.nome}</td>
      <td>{produto.quantidade}</td>
  </tr>)}
    </table>
}

export default Table