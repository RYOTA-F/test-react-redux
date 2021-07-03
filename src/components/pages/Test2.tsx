import React, { Component } from 'react'
import styled from 'styled-components'

class Test2 extends Component {
  render() {
    return (
      <div>
        <Container>テストページ2</Container>
      </div>
    )
  }
}

const Container = styled.div`
  margin: 0 atuo;
  text-align: center;
`

export default Test2
