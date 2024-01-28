import { Chain, ChainProviderFn, configureChains, createClient } from 'wagmi'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const providerArray: ChainProviderFn[] = []

const mainnet: Chain = {
  id: 369,
  name: 'PulseChain',
  network: 'pulse',
  nativeCurrency: {
    name: 'Pulse Coin',
    symbol: 'PLS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.pulsechain.com']
    },
    public: {
      http: ['https://rpc.pulsechain.com']
    },
  },
  blockExplorers: {
    default: {
      name: 'PulseChain Explorer',
      url: 'https://otter.pulsechain.com',
    }
  },
  contracts: {
    ensRegistry: {
      address: '0xbd5133993FCDED5945c5539D9f032261F0d13170'
    },
  }
}

const testnet: Chain = {
  id: 943,
  name: 'PulseChain Testnet V4',
  network: 'tpulse',
  nativeCurrency: {
    name: 'Pulse Coin',
    symbol: 'tPLS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.v4.testnet.pulsechain.com'],
    },
    public: {
      http: ['https://rpc.v4.testnet.pulsechain.com'],
    }
  },
  blockExplorers: {
    default: {
      name: 'View in Explorer',
      url: 'https://scan.v4.testnet.pulsechain.com',
    }
  },
  contracts: {
    ensRegistry: {
      address: '0x20256721c9543eC129C1202c047eB7b194d4703E'
    },
  }
}

providerArray.push(
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.id === 369) {
        return { http: 'https://rpc.pulsechain.com' }
      }

      if (chain.id === 943) {
        return { http: 'https://rpc.v4.testnet.pulsechain.com' }
      }

      return null
    },
  })
)

export const { chains, provider } = configureChains(
  [mainnet, testnet],
  providerArray
)

const { connectors } = getDefaultWallets({
  appName: 'PulseChain Name Services',
  projectId: '912f5bdd0ef231abe53d39210b11efd0',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
