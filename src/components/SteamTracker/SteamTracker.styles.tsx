import styled from 'styled-components'

export const LiveBlinker = styled.li`
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
    0px 0px 10px 2px rgba(255, 0, 0, 0.3);
  -webkit-animation: pulse 1s alternate infinite;
  -moz-animation: pulse 1s alternate infinite;
  animation: pulse 1s alternate infinite;

  @keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }

  @-webkit-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }

  @-moz-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }
`
