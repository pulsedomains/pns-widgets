import { useEffect, useMemo, useState } from 'react'
import { useProvider } from 'wagmi'

export function useResolveName(name?: string) {
  const [address, setAddress] = useState<string | undefined>(undefined)

  const provider = useProvider()

  useEffect(() => {
    const calls = async () => {
      if (!name) {
        return
      }

      try {
        const address = await provider.resolveName(name)
        if (!!address) {
          setAddress(address)
        }
      } catch (err) {
        console.log('useResolveName::ERR', err)
      }
    }

    calls()
  }, [name])

  const result = useMemo(() => address, [address])
  return result
}
