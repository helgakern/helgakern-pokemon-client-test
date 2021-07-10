import React, {useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native'; // React Native API Reference -> https://facebook.github.io/react-native/docs/activityindicator
import { Header, ScrollableList } from './components'

const POKEMON_API = `https://pokeapi.co/api/v2/`
const GET_50_POKEMON_PATH = `pokemon?limit=50`

export default function App() {
  const [pokemonList, setPokemonList] = useState([])
  // on componentDidMount grab list of pokemon and set the state to the list
  useEffect(() => {
    fetch(`${POKEMON_API}${GET_50_POKEMON_PATH}`)
      .then(res => res.json())
      .then(payload => {
        setPokemonList(payload.results)
      })
      .catch(e => console.log(e))
  }, [])
  console.log(pokemonList)
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollableList list={pokemonList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});