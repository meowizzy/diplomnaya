import React from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";

const Auth = () => {
  return (
    <form>
      <p className="title">ФЕДЕРАЦИЯ УШУ</p>
      <Input placeholder="email" value="email" />
    </form>
  );
};

export default Auth;
