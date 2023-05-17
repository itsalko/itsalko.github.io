import { List } from "../styled-components";
import PokemonItem from "./pokemon-item";

interface pokemonsListProps {
  onItemClick: Function;
  pokemonsData: Array<Object>
}
const PokemonsList = ({pokemonsData, onItemClick}:pokemonsListProps) => {

  return (
    <List>
      {
      pokemonsData.map(
        (p: any, i: Number)=><PokemonItem pokemonData={p} key={p.name+i} onClick={onItemClick}/>
        )
      }
      
    </List>
  )

}

export default PokemonsList;