import React from 'react'
import Button from '../../../components/button/Button'
import Input from '../../../components/input/Input'
import s from "./ReferalLink.module.scss"

export const ReferalLink = () => {
  return (
    <div className={s.cont}>
      <p className={s.referal}>Реферальная ссылка</p>

      <Input
        valueLabel="Ссылка"
        minWidth="600px"
        maxWidth="600px"
        minHeight="70px"
        value="https://www.figma.com/file/g2ESTCOXgCeKng9V6hXi2m/%D0%A3%D1%88%D1%83-%E2%84%961?node-id=1172%3A27317"
      />
      <Button text="КОПИРОВАТЬ" disabled width="600px"/>
    </div>
  );
}
