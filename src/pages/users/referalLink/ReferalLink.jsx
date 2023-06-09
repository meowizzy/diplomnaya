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
  
  const [value, setValue] = useState(`https://wushu-federation1.herokuapp.com/registr/?token=ad@admin.com&T2uNV49AwB2BbTITL6RInQOUOHgfoD`);
  const [status, setStatus] = useState(false);
  console.log(user.referral_token)

  return (
    <div className={s.cont}>
      <p className={s.referal}>Реферальная ссылка</p>

      <Input
        valueLabel="Ссылка"
        minWidth="600px"
        maxWidth="600px"
        minHeight="70px"
        onChange
        value={value}
      />
      <CopyToClipboard text={value} onCopy={()=>setStatus(true)}>
      <Button text="КОПИРОВАТЬ" width="600px" data-clipboard-target="#foo"/>
      </CopyToClipboard>
      {status && <p style={{ color: "#3548F5" }}> Скопировано! </p>}
    </div>
  );
}
