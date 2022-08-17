import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { getUserForProfilePage } from '../../../redux/slices/userSlice'
import s from "./ReferalLink.module.scss"

export const ReferalLink = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserForProfilePage())
  },[])
  const user = useSelector(state=>state.user.user)
  console.log(user)
  return (
    <div className={s.cont}>
      <p className={s.referal}>Реферальная ссылка</p>

      <Input
        valueLabel="Ссылка"
        minWidth="600px"
        maxWidth="600px"
        minHeight="70px"
        onChange
        value={user.referral_token}
      />
      <Button text="КОПИРОВАТЬ" disabled width="600px"/>
    </div>
  );
}
