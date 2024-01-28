import BigNumber from 'bignumber.js'
import { utils } from 'ethers'
import { useContractRead, useNetwork } from 'wagmi'
import { parseDuration, parseName } from '../utils'
import {
  getRegistrarAddress,
  REGISTRAR_ABI,
  TOTAL_GAS_AMOUNT,
} from '../contracts'
import useGasPrice from './useGasPrice'
import { usePlsPrice } from './usePlsPrice'

interface Cost {
  name: string
  duration: string
  isConnected: boolean
}

interface CostReturn {
  rentEth: string | null
  cost: string | null
  isLoading: boolean
  isError: boolean
}

export const useCost = ({
  name: _name,
  duration,
  isConnected,
}: Cost): CostReturn => {
  const enabled = isConnected && _name && duration ? true : false

  const { chain } = useNetwork()

  const name = parseName(_name)
  const seconds = parseDuration(duration)
  const registrar = getRegistrarAddress(chain?.id)

  const { data: rentPrice, isError: isRentPriceError } = useContractRead({
    abi: REGISTRAR_ABI,
    address: registrar,
    functionName: 'rentPrice',
    args: [name, seconds as any],
    enabled,
  })

  const { gasPrice, isLoading } = useGasPrice()
  const { plsPrice } = usePlsPrice()

  const rentPriceInEth = rentPrice ? utils.formatEther(rentPrice.base) : null
  const gasCostInGwei = gasPrice
    ? new BigNumber(gasPrice.toString()).multipliedBy(TOTAL_GAS_AMOUNT)
    : null
  const gasCostInEth = gasCostInGwei ? gasCostInGwei.dividedBy(1e18) : null
  const finalCostEth = gasCostInEth
    ? gasCostInEth.plus(rentPriceInEth || 0)
    : null
  const finalCostUSD =
    plsPrice && rentPriceInEth
      ? new BigNumber(plsPrice.toString())
          .multipliedBy(finalCostEth || 0)
          .div(1e8)
      : null

  return {
    rentEth: rentPriceInEth,
    cost: finalCostUSD ? `$${finalCostUSD.decimalPlaces(2).toString()}` : null,
    isLoading:
      enabled &&
      !isRentPriceError &&
      (isLoading || !rentPriceInEth || !gasPrice || !plsPrice),
    isError: isRentPriceError,
  }
}
