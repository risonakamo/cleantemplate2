import React from "react";
import {createRoot} from "react-dom/client";

import "./index.less";

function IndexMain():JSX.Element
{
  return <>

  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(<IndexMain/>);
}

window.onload=main;
