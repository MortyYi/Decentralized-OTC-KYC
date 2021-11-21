import React from 'react'
import styled from 'styled-components'
import { SwapPoolTabs } from '../../components/NavigationTabs'
import { AutoColumn } from '../../components/Column'
import { ButtonLight } from '../../components/Button'
import { useActiveWeb3React } from '../../hooks'
import AppBody from '../AppBody'
import { RowBetween } from '../../components/Row'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useTranslation } from 'react-i18next'
import WaitForVerifyOrders from './WaitForVerifyOrders'
import LockedOrders from './LockedOrders'


export const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`
export const Input = styled.input`
  position: relative;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
  heigth:1px;
  white-space: nowrap;
  background: none;
  border: none;
  outline: none;
  border-radius: 1px;
  text-align: right
  -webkit-appearance: none;

  font-size: 18px;
`

export default function AllOrders() {

  const { account } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()



  const { t } = useTranslation()

  return (
    <>
      <AppBody>
        <SwapPoolTabs active={'allOrders'} />
        <AutoColumn gap="lg" justify="center">
          <AutoColumn gap="6px" style={{ width: '100%' }}>
            {!account ? (
              <ButtonLight onClick={toggleWalletModal}>{t('Connect Wallet')}</ButtonLight>)
              : (
                <>
                  <LockedOrders />
                  <WaitForVerifyOrders />
                </>


              )}
          </AutoColumn>
        </AutoColumn>
       
      </AppBody>
    </>
  )
}
