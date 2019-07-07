import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"

const blinkFrames = keyframes`
  0% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  66% {
    opacity: 1;
  }
`

const LinkList = styled.ul`
  display: flex;
  flex: 1;
  flex-flow: column;
  padding-left: 10px;
  margin-bottom: 0;
`

const ListLink = styled(Link)`
  margin: 0;
`

const BlinkingCaret = styled.p`
  margin: 0;
`

const Blinker = styled.span`
  animation-name: ${blinkFrames};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

const Name = styled.h2`
  align-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  padding-right: 20px;
`

const ImgWrapper = styled.div`
  min-height: 150px;
  min-width: 150px;
`

const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`

const Divider = styled.hr`
  margin-top: 0;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jesse Lumme</title>
        <link rel="canonical" href="https://jesselumme.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ContentWrapper>
        <LeftSide>
          <Name>Jesse Lumme</Name>
          <LinkList>
            <ListLink to="/">cd /~</ListLink>
            <ListLink to="/about/">/whoami</ListLink>
            <BlinkingCaret>
              ><Blinker>_</Blinker>
            </BlinkingCaret>
          </LinkList>
        </LeftSide>
        <ImgWrapper>
          <Img fluid={data.file.childImageSharp.fluid} />
        </ImgWrapper>
      </ContentWrapper>
      <Divider />
    </header>
  )
}

export default IndexPage
