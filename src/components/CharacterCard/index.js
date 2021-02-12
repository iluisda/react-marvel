import React, {Fragment} from 'react'
import './style.scss'

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
					{name && <h1>{name}</h1>}
					{description && 
						<Fragment>
							<p>{description}</p>
							<button>VIEW MORE</button>
						</Fragment>
					}
			</div>
			{comicsArr.length > 0 && <div className="comics">
				<h4>Related comics</h4>
				<div className="comics-wrapper">
					{comicsArr.map((comic)=>{
						return (
							<p>{comic}</p>
						)
					})}
				</div>
			</div>}
		</div>
	)
}