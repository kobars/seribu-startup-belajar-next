import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Firaz() {
  const [pokemonName, setPokemonName] = useState("BUKAN BULBASAUR");
  const { query } = useRouter();
  const id = query?.id;
  console.log("query", query);
  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await resp.json();
      console.log("data", data);
      const { name } = data;
      setPokemonName(name);
    };
    if (id) {
      // handle ketika id undefined
      getPokemon();
    }
  }, [id]);
  return <h1>{pokemonName}</h1>;
}
