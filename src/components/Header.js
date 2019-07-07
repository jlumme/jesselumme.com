import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import Img from "gatsby-image"

const LinkList = styled.ul`
  display: flex;
  flex: 1;
`

const NavLink = styled(Link)`
  display: inline;
`

const ListLink = styled(NavLink)`
  margin: 10px;
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
  display: flex;
  flex: 1;
`

const LeftSide = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const IndexPage = ({ data }) => {
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jesse Lumme</title>
        <link rel="canonical" href="https://jesselumme.com" />
      </Helmet>
      <ContentWrapper>
        <LeftSide>
          <Name>Jesse Lumme</Name>
          <LinkList>
            <ListLink to="/">cd /~</ListLink>
            <ListLink to="/about/">/whoami</ListLink>
          </LinkList>
        </LeftSide>
        <ImgWrapper>
          <Img fluid={data.file.childImageSharp.fixed} />
        </ImgWrapper>
      </ContentWrapper>
      <hr />
    </header>
  )
}

export default IndexPage
