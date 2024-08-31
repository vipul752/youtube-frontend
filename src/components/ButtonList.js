import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Live" />
      <Button name="Valentines" />
      <Button name="Music" />
      <Button name="Movie" />
      <Button name="Javascript" />
      <Button name="C++" />
    </div>
  );
};

export default ButtonList;
