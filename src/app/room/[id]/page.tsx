'use client'
import styled from 'styled-components'
import Header from '../../../../components/Header/index'
import Detail from '../../../../components/Detail/index'

export default function Home() {
  return (
    <Container>
      <Header />
      <Detail />
    </Container>
  )
}

const Container = styled("div")`
  overflow-anchor: none;
  position: relative;
  isolation: isolate;
`
