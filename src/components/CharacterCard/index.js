import React from 'react'
import './style.scss'

export default function CharacterCard({
  character,
  comicClick,
}) {
  const {
    name,
    thumbnail,
    description,
    comics,
  } = character

  return (
    <div className="info-wrapper">
      {thumbnail && (
      <div className="img-wrapper">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
      </div>
      )}
      <div className="title-description">
        {name && <h1>{name}</h1>}
        {description
&& (
<>
  <p>{description}</p>
  <button type="button">VIEW MORE</button>
</>
)}
      </div>
      {comics.items.length > 0 && (
      <div className="comics">
        <h4>Related comics</h4>
        <div className="comics-wrapper">
          {comics.items.slice(0, 4).map((comic) => (
            <div tabIndex="0" onClick={() => comicClick(comic)} onKeyPress={() => comicClick(comic)} role="button">
              <p>{comic.name}</p>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
