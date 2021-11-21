import React, { useMemo } from "react"
import { useGetLockedVeriOrderDataCallBack } from "../../hooks/useApproveCallback"
import LockedCard from "./LockedCard"

export default function LockedOrders(){
    const orders = useGetLockedVeriOrderDataCallBack()
    const ordersMemo = useMemo(() => orders, [orders])
    return(
        <>

        {ordersMemo ? ordersMemo.map((k) => {

          if (k.UserID != 0) {
            return (
              <LockedCard key={k.id} pair={k} />
            )
          } else {
            return
          }
        }
        ):<></>}

      </>
    )
}