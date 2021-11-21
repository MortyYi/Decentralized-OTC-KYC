import React, { useMemo } from "react"
import { useGetWaitVeriOrderDataCallBack } from "../../hooks/useApproveCallback"
import Loader from '../../components/Loader'
import Card from '../../components/Card'
import { AutoColumn } from "../../components/Column"
import WaitForVerifyCard from "./WaitForVerifyCard"

export default function WaitForVerifyOrders(){
    const orders = useGetWaitVeriOrderDataCallBack()
    const ordersMemo = useMemo(() => orders, [orders])
    return(
        <>

        {ordersMemo ? ordersMemo.map((k) => {

          if (k.UserID != 0) {
            return (
              <WaitForVerifyCard key={k.id} pair={k} />
            )
          } else {
            return
          }
        }
        ) :
          <Card >
            <AutoColumn gap="12px">
              <div style={{ textAlign: "center" }}>
                <Loader></Loader>
              </div>
            </AutoColumn>
          </Card >}

      </>
    )
}