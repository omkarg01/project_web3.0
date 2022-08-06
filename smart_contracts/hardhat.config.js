// https://eth-goerli.g.alchemy.com/v2/gelKVdjyvXRU9A4eLAXs_QD0CskBqIAS

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/gelKVdjyvXRU9A4eLAXs_QD0CskBqIAS',
      accounts:['ad8741f075ce0d99c6cab2999c870413f156796b0fcfc29c1377dd63a5183fa1']
    }
  }
}