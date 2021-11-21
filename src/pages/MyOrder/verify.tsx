import React, { useState } from 'react'
import { ButtonPrimary } from '../../components/Button';
import { AutoColumn } from '../../components/Column';
import { useWrapVerifyCallback1 } from '../../hooks/useWrapCallback1';
import VerifyInfoInputPanel from './InputPanel/VerifyInfoInputPanel';


export function VerifyWithInfo() {

    const a=window.location.href

    const [veriInfo, setVeriInfo] = useState(a);
    
    const { execute: onWrap } = useWrapVerifyCallback1(veriInfo)
    function verify(){
        if (onWrap) { onWrap() }
    }

    return (
        <div>
            <AutoColumn gap="lg" justify="center">
                <AutoColumn gap="6px" style={{ width: '100%' }}>
             
            <VerifyInfoInputPanel
                value={veriInfo}
                onUserInput={setVeriInfo}
                label="验证消息"
                id="swap-currency-output"
            />   
            <ButtonPrimary onClick={verify}>Verify</ButtonPrimary>
                 
                </AutoColumn>
            </AutoColumn>

        </div>
    )
}

export function VerifyWithoutInfo() {

    

    const [veriInfo, setVeriInfo] = useState('');
    
    const { execute: onWrap } = useWrapVerifyCallback1(veriInfo)
    function verify(){
        if (onWrap) { onWrap() }
    }

    return (
        <div>
            <AutoColumn gap="lg" justify="center">
                <AutoColumn gap="6px" style={{ width: '100%' }}>
             
            <VerifyInfoInputPanel
                value={veriInfo}
                onUserInput={setVeriInfo}
                label="验证消息"
                id="swap-currency-output"
            />   
            <ButtonPrimary onClick={verify}>Verify</ButtonPrimary>
                 
                </AutoColumn>
            </AutoColumn>

        </div>
    )
}