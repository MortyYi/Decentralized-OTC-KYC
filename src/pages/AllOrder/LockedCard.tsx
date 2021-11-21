import { darken } from 'polished'
import React, { useContext, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import styled, { ThemeContext } from 'styled-components'
import { TYPE } from '../../theme'
import Card from '../../components/Card'
import { AutoColumn } from '../../components/Column'
import Row, { RowBetween, RowFixed } from '../../components/Row'
import QuestionHelper from '../../components/QuestionHelper'
import { ethers, providers } from 'ethers'
import { ButtonSecondary } from '../../components/Button'
import { useActiveWeb3React } from '../../hooks'

export const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

export const HoverCard = styled(Card)`
background:${({ theme }) => theme.bg2};
border: 1px solid ${({ theme }) => theme.bg2};
:hover {
  border: 1px solid ${({ theme }) => darken(0.06, theme.bg2)};
}
`




export default function LockedCard(props: any, border: any) {
  const theme = useContext(ThemeContext)
  const [showMore, setShowMore] = useState(false)
  const { connector } = useActiveWeb3React()
  const [verifyInfo,setVerifyInfo]=useState<string>()
  // const ellipsisPriceAndNumber = (a: string) => {
  //   if (a.length > 10) {
  //     return a.substring(0, 10) + "..."
  //   }
  //   return a
  // }
  function sign() {
    connector?.getProvider().then(async (a) => {
      const provider = new providers.Web3Provider(a);
      const signer = provider.getSigner()
      const originalMessage = props.pair.id.toString()
      const signedMessage = await signer.signMessage(originalMessage)
      const s = ethers.utils.splitSignature(signedMessage)
      setVerifyInfo(s.v.toString()+'?'+s.r.toString()+'?'+s.s.toString()+'?'+originalMessage)
      console.log("dddddd",verifyInfo)
    }
    
    )
    
  }
  return (
    <HoverCard border={border}>
      <AutoColumn gap="12px">
        <FixedHeightRow onClick={() => setShowMore(!showMore)} style={{ cursor: 'pointer' }}>
          <RowFixed>

          </RowFixed>
        
          <RowFixed>
            <Row>
              <TYPE.main id="price">{ethers.utils.formatEther(props.pair.price)}HYK</TYPE.main>
            </Row>
          </RowFixed>
          <RowFixed>
            {showMore ? (
              <ChevronUp size="20" style={{ marginLeft: '10px' }} />
            ) : (
              <ChevronDown size="20" style={{ marginLeft: '10px' }} />
            )}
          </RowFixed>
        </FixedHeightRow>
        {showMore && (
          <AutoColumn gap="8px">
           <FixedHeightRow>
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
                    编号
                  </TYPE.black>
                  <QuestionHelper text="Each order has a unique ID." />
                </RowFixed>
                <TYPE.black fontSize={14} color={theme.text1}>
                  {props.pair.id.toString()}
                </TYPE.black>
              </RowBetween>
            </FixedHeightRow>


            <FixedHeightRow>
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
                    区号
                  </TYPE.black>
                  <QuestionHelper text="Each order has a unique ID." />
                </RowFixed>
                <TYPE.black fontSize={14} color={theme.text1}>
                  {props.pair.countrycode.toString()}
                </TYPE.black>
              </RowBetween>
            </FixedHeightRow>

            <FixedHeightRow>
              <RowBetween>
                <RowFixed>
                  <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
                    电话号码
                  </TYPE.black>
                  <QuestionHelper text="Each order has a unique ID." />
                </RowFixed>
                <TYPE.black fontSize={14} color={theme.text1}>
                  {props.pair.phonenumber.toString()}
                </TYPE.black>
              </RowBetween>
            </FixedHeightRow>

            <ButtonSecondary width="100%" onClick={sign}>
              签名
            </ButtonSecondary>

            <a  style={{textDecoration:'none'}}  href={"sms:+86"+props.pair.phonenumber.toString()+"?body=http://192.168.1.148:3000/#/myBuyOrders/"+verifyInfo}
             >
           
            <ButtonSecondary disabled={verifyInfo?false:true} width="100%" >
              发送
            </ButtonSecondary>
            </a>
          </AutoColumn>
        )}
      </AutoColumn>
    </HoverCard>
  )
}
