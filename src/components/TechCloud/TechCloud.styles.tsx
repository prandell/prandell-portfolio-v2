import styled from 'styled-components'

export const StyledTechCloud = styled.div`
  grid-area: sidemain;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  * {
    margin: auto;
    width: 80%;
  }
  @media (max-width: 800px) {
    align-self: center;
    width: unset;
    * {
      width: 90%;
    }
  }

  @media (max-width: 300px) {
    align-self: center;
    width: unset;
    * {
      width: 100%;
    }
  }
`
