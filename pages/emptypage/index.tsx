import React from "react";
import {createRoot,Root} from "react-dom/client";

import "./index.less";

function IndexMain():JSX.Element
{
  return <>

  </>;
}

function main()
{
  const root:Root=createRoot(document.querySelector(".main")!);
  root.render(<IndexMain/>);
}

window.onload=main;
