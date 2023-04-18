import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function submit(e) {
    if (e.key == "Enter" && e.target.value.trim() != "") {
      onSubmit(e.target.value);
      setValue(""); //set 0 after key pressed
    }
  }

  function handleChange(e) {
    setValue(e.target.value); //set 0 in search bar after Enter
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        value={value}
        placeholder={"Search a tv show you may like!"}
      />
    </>
  );
}
