import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import { useFeeData } from 'wagmi'

const useGasPrice = () => {
  const { data, isLoading, isFetching } = useFeeData({ watch: true })
  const [gasPrice, setGasPrice] = useState<BigNumber | undefined>(undefined)

  useEffect(() => {
    if (data) {
      setGasPrice(
        new BigNumber(data.lastBaseFeePerGas?.toString() || 0).plus(
          data.maxPriorityFeePerGas!.toString()
        )
      )
    }
  }, [data])

  return { gasPrice, isLoading, isFetching }
}

export default useGasPrice
