'use client'
import styled from 'styled-components'
import Header from '../../components/Header/index'
import List from '../../components/List/index'

export default function Home() {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  )
}

const Container = styled("div")`
  overflow-anchor: none;
  position: relative;
  isolation: isolate;
`
