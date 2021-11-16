import './../../App.css';
import Button from '../../components/Button';
import {useHistory} from 'react-router-dom'


const Home = () => {
    const history = useHistory()
  return (
    <div className="App">
      <Button text="CRIAR COTAÇÃO" onClick={() => history.push('cotacao')}/>
      <Button text="ACOMPANHAR COTAÇÃO EM ABERTO" onClick={() => history.push('cotacaoabert')}/>
      <Button text="FINALIZAR COTAÇÃO"/>
      <Button text="TESTE"/>
    </div>
  );
}

export default Home;
