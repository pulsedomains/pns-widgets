import { useEffect, useMemo, useState } from 'react'
import { useChainId, useProvider } from 'wagmi'
import BigNumber from 'bignumber.js'
import { Contract } from 'ethers'

const ORACLES: Record<string, string> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '369': '0x080e01843C4b77B9a390B1dC312B7D729885015C',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '943': '0xA2a0CFc7d3eAecd233B94CcCD2BA0f8895727904',
}

export const usePlsPrice = () => {
  const [plsPrice, setPlsPrice] = useState<BigNumber | null>(null)

  const provider = useProvider()
  const chainId = useChainId()

  useEffect(() => {
    const calls = async () => {
      const address = ORACLES[chainId.toString()]

      if (!address) {
        throw new Error('Contract address not found')
      }
      if (!address) throw new Error('Contract address not found')
      if (typeof address !== 'string')
        throw new Error('Contract address is wrong type')
      const oracle = new Contract(
        address,
        ['function latestAnswer() view returns (int256)'],
        provider
      )
      const latest = await oracle.latestAnswer()
      setPlsPrice(new BigNumber(latest?.toString() || 0))
    }

    calls()
  }, [])

  const result = useMemo(() => ({ plsPrice }), [plsPrice])
  return result
}
