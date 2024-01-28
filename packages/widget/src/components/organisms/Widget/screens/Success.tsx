import { Typography } from '@pnsdomains/thorin'
import { useAccount } from 'wagmi'
import styled, { css } from 'styled-components'

import { Link } from '../../../atoms/Link'
import { truncateAddress } from '../../../../utils'

import logo from '../../../../assets/images/pns-logo.png'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.space[4]};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;

    p:not(:last-of-type) {
      margin-bottom: ${theme.space[3]};
    }

    .head {
      display: flex;
      align-items: center;
      gap: ${theme.space[2]};
      flex-direction: column;
    }
  `
)

const Heading = styled(Typography)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.headingThree};
    font-weight: ${theme.fontWeights.bold};
  `
)

const LogoWrapper = styled.div`
  width: 2.25rem;

  svg {
    width: 100%;
    height: 100%;
  }
`

interface RegistrationSuccessProps {
  name: string
}

export const Success = ({ name }: RegistrationSuccessProps) => {
  const { address } = useAccount()

  return (
    <Container>
      <div className="head">
        <LogoWrapper>
          <img src={logo} width={24} height={24} />
        </LogoWrapper>

        <Heading>Registration Complete!</Heading>
      </div>

      <div>
        {address && (
          <Typography asProp="p">
            {name}.pls will now point to{' '}
            <span title={address}>{truncateAddress(address)}</span> across web3.
          </Typography>
        )}

        <Typography asProp="p">
          Configure your name further at{' '}
          <Link to={`https://app.pulse.domains/${name}.pls`}>
            app.pulse.domains
          </Link>
          .
        </Typography>
      </div>
    </Container>
  )
}
