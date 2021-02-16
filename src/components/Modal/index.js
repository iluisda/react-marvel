/* eslint-disable react/prop-types */
import React, {
  useEffect, useState,
} from 'react'
import {
  Modal, Container, Col, Row, Button,
} from 'react-bootstrap'
import {
  getComic,
} from '../../API/getCharacters'

import './style.scss'

export default function MydModalWithGrid({
  comic, onHide, show,
}) {
  const [comicFetch, setComicFetch] = useState(null)

  useEffect(() => {
    if (comic && comic.resourceURI) {
      getComic(comic.resourceURI).then((res) => {
        if (res) setComicFetch(res.data.data.results[0])
      })
    }
  }, [comic])

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {comic && comic.name && comic.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={4} md={4}>
              { comicFetch && comicFetch.images && (
                <div className="comic-image">
                  <img
                    alt={comic && comic.name && comic.name}
                    src={`${comicFetch.images[0].path}.${comicFetch.images[0].extension}`}
                  />
                </div>
              )}
            </Col>
            <Col xs={8} md={8}>
              <div className="comic-info">
                {comicFetch && comicFetch.dates && (<p className="comic-date">{comicFetch.dates[0].date.split('T', 1).pop()}</p>)}
                {comicFetch && comicFetch.description && (<p className="comic-description">{comicFetch.description}</p>)}
                {comicFetch && comicFetch.characters.items && (
                  <div>
                    <h4>Characters in this comic: </h4>
                    <p>{`${comicFetch.characters.items.map((element) => ` ${element.name}`)}`}</p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
