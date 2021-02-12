import React, {Fragment, useState, useEffect} from 'react'
import CharacterCard from '../../components/CharacterCard'
import getCharacters from '../../API/getCharacters'
import './style.scss'


export default function Main() {

	const [characters, setCharacters] = useState(null)

	useEffect(()=>{
		getCharacters().then(res => {
			res.data.data.results && setCharacters(res.data.data.results)
		})
	}, [])

	useEffect(()=>{
		console.log('characters', characters)
	}, [characters])

	return(
		<Fragment>
			<div className="cards-wrapper">
				{characters &&
					characters.map((char, i)=>{
						return (
							<CharacterCard character={char} key={i.toString()}/>
						)
					})
				}
			</div>
		</Fragment>
	)
}