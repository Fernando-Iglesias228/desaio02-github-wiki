import gitLogo from '../../assets/github.png'
import Button from '../../components/Button';
import Input  from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { api } from '../../services/api';
import { Container } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () =>{
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
          setRepos(prev => [...prev, data]);
        setCurrentRepo('')
      }

      return
    }
    alert('Repositório não encontrado')
  }

  function handleRemoveRepo(id) {
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container>
          <img src={gitLogo} id="logo" alt="Logo git"/>
          <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
          <Button onClick={handleSearchRepo}/>
          {repos.map(repo => <ItemRepo repo={repo} removeRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
