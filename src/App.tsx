import React, { useState, useEffect } from 'react';
import './styles/App.css';
import axios from 'axios';
import { Header, BigButton, TypeBtn } from './styled-components';
import PokemonsList from './components/pokemons-list';
import PokemonDetails from './components/pokemon-details';

interface iServerData {
next: string;
results: Array<Object>;
}

function App() {
  const [typesData, setTypesData] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [serverData, setServerData] = useState<iServerData>(
    {
      next: "",
      results:[],
    }
    );
    const getTypesFromServer = () => {
      axios.get("https://pokeapi.co/api/v2/type").then(res=>setTypesData(res.data.results))
    }
    const geListFromServer = (url: string) => {
      setPokemonDetails(null);
      axios.get(url).then(res=>setServerData(res.data))
    }
    const getFilteredByType = (url:string) =>{
      axios.get(url).then(res=>{
        const finalData = res.data.pokemon.map((p: any) => p.pokemon);
        setServerData({...serverData, results: finalData})
      })
    }

    useEffect(() => {
      getTypesFromServer();
      geListFromServer('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    }
    , []);

  return (
    <div className="App">
      <Header>Pokedex</Header>
      <div>
      <div className='pokemonData'>
        <PokemonsList pokemonsData={serverData.results} onItemClick={setPokemonDetails}/>
        <div>
           {pokemonDetails && <PokemonDetails data={pokemonDetails}/>}
           {
           typesData.length>0 && <div>
            <h3>Filter by type</h3>
            <div>
            <div className='typesContainer'>
              {typesData.map(
                (t:any, i:number) => <TypeBtn key={t.name+i} pokeType={t.name} onClick={() => getFilteredByType(t.url)}>{t.name}</TypeBtn>
              )}
             </div>
            </div>
           </div>
           }
        </div>
       
      </div>
      <BigButton onClick={()=>geListFromServer(serverData.next)}>Load more</BigButton>
      </div>
    </div>
  );
}

export default App;
