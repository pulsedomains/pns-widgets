import { Address, Chain } from 'wagmi'
import { SECONDS_PER_YEAR } from './contracts'
import { SendTransactionResult } from '@wagmi/core'
import { AbiCoder, namehash } from 'ethers/lib/utils.js'

/**
 * Parses a string of years and returns a string of seconds
 * @param duration string of years to register for e.g. '1 year'
 * @returns string of seconds to register for e.g. '31556952'
 */
export const parseDuration = (duration: string): string => {
  const [yearsStr] = duration.split(' ')
  const years = parseFloat(yearsStr)
  const seconds = years * SECONDS_PER_YEAR
  return seconds.toString()
}

/**
 * Parses a name and returns a string of the name without the .pls suffix
 * @param name PNS name with or without .pls suffix e.g. 'wagmi.pls' or 'wagmi'
 * @returns string of name without .pls suffix e.g. 'wagmi'
 */
export const parseName = (name: string): string => {
  return name.endsWith('.pls') ? name.split('.pls')[0] : name
}

export const getEtherscanLink = (
  tx: SendTransactionResult | Address | undefined,
  chain: Chain | undefined
) => {
  const hash = typeof tx === 'string' ? tx : tx?.hash

  if (chain?.id === 943) {
    return `https://scan.v4.testnet.pulsechain.com/tx/${hash}`
  }

  return `https://otter.pulsechain.com/tx/${hash}`
}

export const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

const abiCoder = new AbiCoder()

export const getSetAddrData = (address?: string, name?: string) => {
  if (!name || !address) {
    return '0x'
  }

  const encodedData = abiCoder.encode(
    ['bytes32', 'uint256', 'bytes'],
    [namehash(name + '.pls'), 1028, address]
  ) as `0x${string}`

  const formattedData = '0x8b95dd71' + encodedData.slice(2) // TODO: check me
  return formattedData as `0x${string}`
}
