import Link from 'next/link';
import useGetPokemon from '../../src/hooks/useGetPokemon';

export default function Aji() {
  const { data } = useGetPokemon('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemons } = data;
  return (
    <div>
      <h1>Pokemon List</h1>
      {pokemons?.map((pokemon, i) => (
        <Link key={pokemon.name} href={`/pokemons/${i + 1}`} passHref>
          <p>{pokemon.name}</p>
        </Link>
      ))}
    </div>
  );
}
