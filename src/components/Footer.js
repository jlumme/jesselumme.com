import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

const Footer = styled.footer`
  height: 40px;
  display: flex;
  justify-content: flex-end;
`

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  margin-left: 10px;
`

export default () => (
  <Footer>
    <hr />
    <a
      href="https://github.com/jlumme"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: `black` }}
    >
      <StyledIcon icon={faLinkedin} />
    </a>
    <a
      href="https://www.linkedin.com/in/jesselumme/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: `black` }}
    >
      <StyledIcon icon={faGithub} />
    </a>
  </Footer>
)
