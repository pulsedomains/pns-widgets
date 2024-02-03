import { mq, Typography } from '@pnsdomains/thorin'
import styled, { css } from 'styled-components'

import logo from '../../assets/images/pns-logo.png'

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.fontSizes.large};

    ${mq.xs.max(css`
      font-size: ${theme.fontSizes.body};
    `)}
  `
)

const Title = styled(Typography)(
  ({ theme }) => css`
    color: ${theme.colors.textTertiary};
    font-size: ${theme.fontSizes.large};

    ${mq.xs.max(css`
      font-size: ${theme.fontSizes.body};
    `)}
  `
)

const LogoWrapper = styled.div`
  width: 1.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const Header = () => {
  return (
    <Container>
      <Title asProp="label" weight="bold" style={{ lineHeight: 1 }}>
        Register an .pls name
      </Title>
      <LogoWrapper as="a" href="https://pulse.domains" target="_blank">
        <img src={logo} width={24} height={24} />
      </LogoWrapper>
    </Container>
  )
}
