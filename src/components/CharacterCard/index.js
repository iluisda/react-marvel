import React from 'react'
import './style.css'

export default function CharacterCard(props) {

	const {
		name,
		thumbnail,
		description,
		comics
	} = props.character

	let comicsArr = []

	for (let i = 0; i <= 3; i++) {
		if (comics.items && comics.items[i]) {
			comicsArr.push(comics.items[i].name)
		}
	}

	return(
		<div className="info-wrapper">
			{thumbnail && 
				<div className="img-wrapper">
						<img src={thumbnail.path + "." + thumbnail.extension} alt={name}/>
				</div>
			}
			<div className="title-description">
					{name && <h3>{name}</h3>}
					<p>{description}</p>
					<button>VIEW MORE</button>
			</div>
			<div className="comics">
				<p>Related comics</p>
				<div className="comics-wrapper">
					{comicsArr.map((comic)=>{
						return (
							<p>{comic}</p>
						)
					})}
				</div>
			</div>
		</div>
	)
}