import { SupportedChain } from '../types/module';

const internalChainIds: Record<SupportedChain, number> = {
  ethereum: 1,
  binance: 2,
  polygon: 3,
  fantom: 4,
  arbitrum: 5,
  avalanche: 6,
  gnosis: 7,
  celo: 8,
  moonriver: 9,
  harmony: 10,
  heco: 11,
  okx: 13,
  cronos: 14,
  boba: 15,
  kucoin: 16,
  optimism: 17,
  aurora: 18,
  klaytn: 20,
  fuse: 21,
  cardano: 22,
  iotex: 29,
  'kava-evm': 41,
  metis: 23,
  milkomeda: 30,
  cosmos: 25,
  juno: 34,
  moonbeam: 31,
  kava: 26,
  osmosis: 27,
  secret: 28,
  thor: 32,
  sifchain: 33,
  stargaze: 35,
  akash: 36,
  kujira: 37,
  evmos: 38,
  agoric: 39,
  crescent: 43,
  'terra-2': 40,
  solana: 12,
  tezos: 46,
  zksync_era: 47,
};

export function getInternalChainId(chain: SupportedChain): number {
  return internalChainIds[chain];
}
