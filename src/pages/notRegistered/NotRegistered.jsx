import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import s from "./NotRegistered.module.scss"
import { Protocol } from './Protocol'


export const NotRegistered = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <div className={s.button}>
          <Link to="Auth">
            <Button width="140px" margin="40px 0px 80px" text="ВОЙТИ" />
          </Link>
        </div>
      </header>
      <Protocol />
      <Protocol />
      <footer className={s.footer}>
        <p>ФЕДЕРАЦИЯ УШУ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
        <p>2022</p>
      </footer>
    </div>
  );
}
