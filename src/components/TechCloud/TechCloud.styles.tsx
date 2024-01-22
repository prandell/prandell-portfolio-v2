import styled from 'styled-components'

export const StyledTechCloud = styled.div`
  grid-area: sidemain;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  * {
    margin: auto;
    width: 68%;
  }
  @media screen and (max-width: 800px) {
    align-self: center;
    height: 70%;
    width: unset;
    * {
      width: 90%;
    }
  }
`