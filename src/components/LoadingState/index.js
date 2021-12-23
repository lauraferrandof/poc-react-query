import styled from 'styled-components';

// Credit: https://projects.lukehaas.me/css-loaders/
export const LoadingState = styled.div`
  animation: loading 1.1s infinite ease;
  border-radius: 50%;
  font-size: 25px;
  height: 1em;
  margin: 150px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 1em;

  @keyframes loading {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #965abf,
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.2),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.2),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.2),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.5),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.7),
        1.8em -1.8em 0 0em #965abf, 2.5em 0em 0 0em rgba(150, 90, 191, 0.2),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.2),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.2),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.5),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.7), 2.5em 0em 0 0em #965abf,
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.2),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.2),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.2),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.5),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.7), 1.75em 1.75em 0 0em #965abf,
        0em 2.5em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.2),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.2),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.5),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.7), 0em 2.5em 0 0em #965abf,
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.2),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.2),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.2),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.5),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.7), -1.8em 1.8em 0 0em #965abf,
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.2),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.2),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.2),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.5),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.7), -2.6em 0em 0 0em #965abf,
        -1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(150, 90, 191, 0.2),
        1.8em -1.8em 0 0em rgba(150, 90, 191, 0.2),
        2.5em 0em 0 0em rgba(150, 90, 191, 0.2),
        1.75em 1.75em 0 0em rgba(150, 90, 191, 0.2),
        0em 2.5em 0 0em rgba(150, 90, 191, 0.2),
        -1.8em 1.8em 0 0em rgba(150, 90, 191, 0.5),
        -2.6em 0em 0 0em rgba(150, 90, 191, 0.7), -1.8em -1.8em 0 0em #965abf;
    }
  }
`;
