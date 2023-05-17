import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 120px;
  margin: 10px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  flex-direction: column;
  border: 1px solid black;
`;

const Details = styled.div`
  width: 300px;
  margin: 10px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  height: fit-content;
  flex-direction: column;
  border: 1px solid black;
`;

const BigButton = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  height: fit-content;
  background: lightblue;
  flex-direction: column;
  border: 1px solid black;
`;

const Header = styled.h1`
  color: black;
`;

const palette:Record<string, string> = {
  'ice': 'white',
  'bug': 'green',
  'fairy': 'pink',
  'fire': 'orange',
  'grass': 'green',
  'shadow': '333333',
  'poison': 'yellow',
  'electric': 'blue',
  'ground': '#666666',
  'dragon': 'magenta',
  'psychic': 'purple',
  'water': 'lightblue',
  'flying': 'lightblue',
}

const TypeBtn = styled.button<{pokeType: string}>`
margin: 2px;
border: none;
cursor: pointer;
width: fit-content;
background: ${({pokeType}) => palette[pokeType]};
`

export {
  List,
  Card,
  Header,
  TypeBtn,
  Details,
  BigButton
};