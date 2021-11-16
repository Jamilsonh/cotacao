import './../../App.css';
import Button from '../../components/Button';
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()
  return (
    <>
    <div className='topo'> COTAÇÃO SUPERMERCADO BUENO</div>
    
      <div className="Area-home">
        <div className="App">
          <div className='titulo'>BEM VINDO</div>
          <Button text="CRIAR COTAÇÃO" onClick={() => history.push('cotacao')}/>
          <Button text="ACOMPANHAR COTAÇÃO EM ABERTO" onClick={() => history.push('cotacaoabert')}/>
          <Button text="FINALIZAR COTAÇÃO"/>
          <Button text="TESTE"/>
        </div>
      </div>
    </>
  );
}

export default Home;
