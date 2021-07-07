import { createContext, useReducer, useContext } from 'react';

const initialPokemon = {
  name: 'BUKAN BULBASAUR',
  url: '',
  skills: [],
};

const initialLocations = {
  area: 'BUKAN KALIWATES',
  url: '',
  pokemons: [],
};

export const PokemonContext = createContext();
export const LocationContext = createContext();

function pokemonReducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'url':
      return { ...state, url: action.payload };
    case 'skills':
      return { ...state, skills: action.payload };
    default:
      throw new Error();
  }
}

function locationReducer(state, action) {
  switch (action.type) {
    case 'pokemon':
      return { ...state, area: action.payload };
    default:
      throw new Error();
  }
}

export const MainProvider = ({ children }) => {
  const [pokemon, pokemonDispatch] = useReducer(pokemonReducer, initialPokemon);
  const [locations, locationDispatch] = useReducer(
    locationReducer,
    initialLocations
  );
  return (
    <PokemonContext.Provider
      value={{ states: pokemon, dispatch: pokemonDispatch }}
    >
      <LocationContext.Provider
        value={{ states: locations, dispatch: locationDispatch }}
      >
        {children}
      </LocationContext.Provider>
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
export const useLocationContext = () => useContext(LocationContext);
