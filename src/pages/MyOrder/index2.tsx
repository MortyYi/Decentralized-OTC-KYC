import React from 'react'
import { ButtonLight } from '../../components/Button'
import { MySaleBuyOrdersTabs, SwapPoolTabs } from '../../components/NavigationTabs'
import AppBody from '../AppBody'
import styled from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useTranslation } from 'react-i18next'
import { PutVerify } from './put'

export const Button = styled.button`
  width: 50%;
  font-size: 16px;
  border: none;
  background: none;
  hover:true;
  cursor:pointer;
`

export default function Put() {
    const { account } = useActiveWeb3React()
    const toggleWalletModal = useWalletModalToggle()
    const { t } = useTranslation()
    return (
        <AppBody>
            <SwapPoolTabs active={'myOrders'} />

            <MySaleBuyOrdersTabs  active={'mySaleOrders'}/>
            {!account ? <ButtonLight onClick={toggleWalletModal}>{t('Connect Wallet')}</ButtonLight>
                : <PutVerify/>
            }
        </AppBody>
    )
}
