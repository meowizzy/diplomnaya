import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import s from "./NotRegistered.module.scss"
import { Protocol } from './Protocol'
import { Role } from './role';


export const NotRegistered = () => {
  useEffect(() => {
    localStorage.removeItem('role')
  },[]);
  return (
    <>
        
      <div className={s.wrapper}>
      <div id="dragon">
          <img
            style={{ width: "800px" }}
            className="dragon"
            src="https://i.gifer.com/XwYs.gif"
            alt=""
          />
      </div>
        <header className={s.header}>
          <div className={s.button}>
            <Link to="Auth">
              <Button width="140px" margin="40px 0px 80px" text="ВОЙТИ" />
            </Link>
          </div>
        </header>
        {/*<Role />*/}
        <Protocol />
        <Protocol />
        <footer className={s.footer}>
          <p>ФЕДЕРАЦИЯ УШУ КЫРГЫЗСКОЙ РЕСПУБЛИКИ</p>
          <p>2022</p>
        </footer>
      </div>
    </>
  );
}
