import axios from 'axios';
import { useEffect, useState } from "react";
import { Card, TypeBtn } from "../styled-components";

interface pokemonItemProps {
  onClick: Function;
  pokemonData: {
    url: string;
    name: string;
  }
} 
interface iServerData {
  id: String;
  name: string;
  types: Array<Object>;
  sprites:{
    other:{
  'official-artwork': {
    front_default:string
      }
    }
  }
}

const PokemonItem = ({pokemonData, onClick}: pokemonItemProps) => {
  const [pokemonFullData, setPokemonFullData] = useState<iServerData>({
    id:'',
    name:'',
    types: [],
    sprites:{
      other:{
    'official-artwork': {
      front_default:''
    }
  }
}
  });
  useEffect(
  () => {
    if(pokemonData.url) {
      axios.get(pokemonData.url).then(res => {
        setPokemonFullData(res.data);
      })
    }
  },
  [pokemonData.url]
  )
  return (
    <Card onClick={() => onClick(pokemonFullData)}>
      <img src={pokemonFullData.sprites.other['official-artwork'].front_default} alt={pokemonFullData.name} />
      <h5>{pokemonFullData.name}</h5>
      <div className='typesContainer'>
        {pokemonFullData.types.map(
        (t:any, i:number) => <TypeBtn key={t.type.name+i} pokeType={t.type.name}>{t.type.name}</TypeBtn>
      )}
      </div>
      
    </Card>
  )

}

export default PokemonItem;