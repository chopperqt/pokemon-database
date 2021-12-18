import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import {
    fetchPokemonList
 } from 'src/api/pokemons'
import { PokemonList } from 'src/components'
import { IStore } from 'src/services/rootStore'

const Home = () => {
    const pokemonList = useSelector((store: IStore) => store.pokemons.pokemonList) 
    const [limit , setLimit] = useState<number>(15)
    const [offset, setOffset] = useState<number>(0) 

    useEffect(() => {
        fetchPokemonList(limit, offset)
    }, [])

    if (!pokemonList.length) {
        <div>
            Loading... 
        </div>
    }

    return (
        <div>
            <PokemonList pokemonList={pokemonList} />
        </div>
    )
}

export default Home