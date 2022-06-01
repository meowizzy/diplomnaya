import React from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";

const Auth = () => {
  return (
    <form>
      <p className="title">ФЕДЕРАЦИЯ УШУ</p>
      <Input placeholder="email" value="email" />
      <Input placeholder="email" value="email" />
      <p>Забыли пароль?</p>
      <button>ВОЙТИ</button>
      <p>Зарегистрироваться</p>
    </form>
  );
};

export default Auth;
