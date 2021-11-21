import { ethers } from 'ethers';
import React, { useCallback, useState } from 'react'
import { ButtonPrimary } from '../../components/Button';
import { AutoColumn } from '../../components/Column';
import { useWrapPutVeriCallback1 } from '../../hooks/useWrapCallback1';
import PhoneInputPanel from './InputPanel/PhoneInputPanel';
import PutInputPanel from './InputPanel/putInputPanel';


export function PutVerify() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [price, setPrice] = useState('');
    const handleSetPrice = useCallback(
        (value: string) => {
            if (value == ".") {
                setPrice("0.")
            } else {
                if (value.indexOf('.') != -1) {
                    if (value.length - value.indexOf('.') - 1 <= 18) {
                        setPrice(value)
                    }
                } else {
                    if (value.length <= 78) {
                        setPrice(value)
                    }
                }
            }
        }, []
    )
    const parsePrice = useCallback(() => {
        if (price == "") {
            return "0";
        } else {
            return ethers.utils.parseEther(price).toString()
        }
    }, [price])
    const { execute: onWrap } = useWrapPutVeriCallback1('86',phoneNumber,parsePrice())
    function put(){
        if (onWrap) { onWrap() }
    }

    return (
        <div>
            <AutoColumn gap="lg" justify="center">
                <AutoColumn gap="6px" style={{ width: '100%' }}>
             
            <PhoneInputPanel
                value={phoneNumber}
                onUserInput={setPhoneNumber}
                label="电话"
                id="swap-currency-output"
            />   
                        
            <PutInputPanel
                value={price}
                onUserInput={handleSetPrice}
                label={'price'}
                id="swap-currency-output"
            /> 
          
            <ButtonPrimary onClick={put}>Put</ButtonPrimary>
                 
                 </AutoColumn>
             </AutoColumn>

        </div>
    )
}
