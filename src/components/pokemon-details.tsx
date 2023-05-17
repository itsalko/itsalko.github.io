import { Details } from "../styled-components";

interface pokemonDetailsProps {
  data: any
}


const PokemonDetails = ({data={}}:pokemonDetailsProps) => {
  return (
    <Details>
      <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />
      <h2>{data.name}</h2>
      <table className="detailsTable">
        <tbody>
        <tr>
          <td>Type</td>
          <td>{data.types[0].type.name}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>{data.height}</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>{data.weight}</td>
        </tr>
        {data.stats.map((s:any, i:Number)=>
          <tr>
          <td>{s.stat.name}</td>
          <td>{s.base_stat}</td>
        </tr>
        )}
        <tr>
          <td>Total moves</td>
          <td>{data.moves.length}</td>
        </tr>
        </tbody>
      </table>
    </Details>
  )

}

export default PokemonDetails;