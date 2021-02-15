import React, {Fragment} from 'react'
import './style.scss'

export default function CharacterCard(props) {

	const {
		name,
		thumbnail,
		description,
		comics
	} = props.character

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
			{comics.items.length > 0 && <div className="comics">
				<h4>Related comics</h4>
				<div className="comics-wrapper">
					{comics.items.slice(0,4).map((comic)=>{
						return (
							<p>{comic.name}</p>
						)
					})}
				</div>
			</div>}
		</div>
	)
}