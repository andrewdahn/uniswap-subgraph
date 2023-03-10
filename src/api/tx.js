import axios from 'axios';

const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';

export const txQuery = () => {
  const query = `
    {
      transactions(first: 50, orderBy: timestamp, orderDirection: desc) {
        id
        timestamp
        swaps {
          sender
          amount0
          recipient
          amount1
          token0 {
            id
            symbol
          }
          token1 {
            id
            symbol
          }
        }
      }
    }
  `;

  return axios
    .post(URL, { query })
    .then(({ data }) => data.data.transactions)
    .catch((error) => error);
};
