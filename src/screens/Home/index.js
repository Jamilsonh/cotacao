import './../../App.css';
import Button from '../../components/Button';
import {useHistory} from 'react-router-dom'

const Home = () => {
    const history = useHistory()
  return (
    <div className="App">
      <Button text="Criar cotação" onClick={() => history.push('cotacao')}/>
      <Button text="Acompanhar cotação em aberto"/>
      <Button text="Finalizar cotação"/>
      <Button text="TESTE"/>
    </div>
  );
}

export default Home;
