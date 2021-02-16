import React, {
  useState, useEffect,
} from 'react'
import CharacterCard from '../../components/CharacterCard'
import getCharacters from '../../API/getCharacters'
import MydModalWithGrid from '../../components/Modal'
import './style.scss'

export default function Main(props) {
  const [characters, setCharacters] = useState(null)
  const [comic, setComic] = useState(null)

  useEffect(() => {
    getCharacters().then((res) => {
      if (res.data.data.results) setCharacters(res.data.data.results)
    })
  }, [])

  const {
    inputValue,
  } = props

  return (
    <>
      <div className="cards-wrapper">
        {characters && characters.map((char, i) => (
          !!char.name.toLowerCase().includes(inputValue.toLowerCase())
            && (
            <CharacterCard
              character={char}
              key={i.toString()}
              comicClick={(selectedComic) => {
                setComic(selectedComic)
              }}
            />
            )
        ))}
      </div>
      <MydModalWithGrid
        show={comic}
        onHide={() => setComic(null)}
        comic={comic}
      />
    </>
  )
}
