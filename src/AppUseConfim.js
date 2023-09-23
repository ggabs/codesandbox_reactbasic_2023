import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const linstener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", linstener);
  const disablePreve = () =>
    window.removeEventListener("beforeunload", linstener);
  return { enablePreve, disablePreve };
};

const AppUseConfirm = () => {
  const { enablePreve, disablePreve } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePreve}>protect</button>
      <button onClick={disablePreve}>unprotect</button>
    </div>
  );
};

export default AppUseConfirm;
