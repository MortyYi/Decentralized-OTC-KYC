import React from 'react'
import { ButtonLight } from '../../components/Button'
import { MySaleBuyOrdersTabs, SwapPoolTabs } from '../../components/NavigationTabs'
import AppBody from '../AppBody'
import {VerifyWithInfo, VerifyWithoutInfo} from './verify'
import styled from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import { useWalletModalToggle } from '../../state/application/hooks'
import { useTranslation } from 'react-i18next'

export const Button = styled.button`
  width: 50%;
  font-size: 16px;
  border: none;
  background: none;
  hover:true;
  cursor:pointer;
`

export default function Verify(props:any) {
    const { account } = useActiveWeb3React()
    const toggleWalletModal = useWalletModalToggle()
    const { t } = useTranslation()
    return (
        <AppBody>
            <SwapPoolTabs active={'myOrders'} />
        
            <MySaleBuyOrdersTabs  active={'myBuyOrders'}/>
            {!account ? <ButtonLight onClick={toggleWalletModal}>{t('Connect Wallet')}</ButtonLight>
                :(props.withInfo? <VerifyWithInfo/>: <VerifyWithoutInfo/>)
            }

        </AppBody>
    )
}

