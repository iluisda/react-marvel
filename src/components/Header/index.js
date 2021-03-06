import React from 'react'
import {
  Navbar,
  Form,
  FormControl,
} from 'react-bootstrap'
import './style.scss'

const Header = ({
  logo,
  parentCallback,
}) => {
  const handleInput = (input) => {
    if (input) parentCallback(input.target.value)
  }

  return (
    <Navbar className="bg-light justify-content-between">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="logo"
          alt="Rosbaco Logo"
        />
      </Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Find your hero"
          className=" mr-sm-2"
          onChange={(e) => handleInput(e)}
        />
      </Form>
      <div style={{
        width: '165px',
      }}
      />
    </Navbar>
  )
}

export default Header
