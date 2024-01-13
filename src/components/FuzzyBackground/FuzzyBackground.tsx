import styled from 'styled-components'

export const FuzzyBackground = styled.div`
  background-image: url('./fuzzybackground.png');
  background-position: 0px 0px;
  background-repeat: repeat;
  opacity: 10%;
  pointer-events: none;

  animation: shift 0.2s linear infinite both;

  @keyframes shift {
    from {
      background-position: 50% 50%;
    }
    to {
      background-position: 60% 60%;
    }
  }
`

export default FuzzyBackground
