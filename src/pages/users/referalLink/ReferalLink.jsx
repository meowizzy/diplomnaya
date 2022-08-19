import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import { getUserForProfilePage } from '../../../redux/slices/userSlice'
import s from "./ReferalLink.module.scss"
import CopyToClipboard from 'react-copy-to-clipboard'
export const ReferalLink = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserForProfilePage())
  },[])
  const user = useSelector(state=>state.user.user)
  console.log(user)

  const [value, setValue] = useState(user.referral_token);
  const [status, setStatus] = useState(false);

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
      <CopyToClipboard text={value} onCopy={()=>setStatus(true)}>
      <Button text="КОПИРОВАТЬ" width="600px" data-clipboard-target="#foo"/>
      </CopyToClipboard>
      {status && <p style={{ color: "red" }}> Скопировано!</p>}
    </div>
  );
}
