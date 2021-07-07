import { useRouter } from 'next/router';
import useGetPokemon from '../../src/hooks/useGetPokemon';
import { usePokemonContext } from '../../src/provider/main';

export default function PokemonDetail() {
  const { query } = useRouter();
  const { states } = usePokemonContext();
  const id = query?.id;
  const { data, isLoading } = useGetPokemon(
    id ? `https://pokeapi.co/api/v2/pokemon/${id}` : ''
  );
  const pokemonName = data?.name;
  const pokemonImage =
    data?.sprites?.other?.['official-artwork']?.front_default;
  console.log('data', data);
  if (isLoading) {
    return <h1>LAGI LOADING....</h1>;
  }
  return (
    <div>
      <img className="pk-image" src={pokemonImage} alt="Pokemon" />
      <h1 className="pk-name">{pokemonName?.toUpperCase()}</h1>
      <h1>{states?.name}</h1>
      <style jsx>
        {`
          .pk-image {
            margin: 0 auto;
            display: block;
          }
          .pk-name {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
