import {createRoot} from "react-dom/client";

import "./index.module.less";

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
