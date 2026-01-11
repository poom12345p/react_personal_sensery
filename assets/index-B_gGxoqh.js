import{j as r,d as l,r as n}from"./index-C8_9Vxy0.js";const c=({src:e,width:t,height:o})=>r.jsx("img",{src:`./react_personal_sensery/img/svg/${e}`,alt:e,width:t,height:o}),a=l("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e?"visible":"hidden"};
  opacity: ${e=>e?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`,p=()=>{const[e,t]=n.useState(!1),o=n.useCallback(()=>{const s=window.scrollY;!e&&s>350?t(!0):s<=350&&t(!1)},[e]);n.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[o]);const i=()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};return r.jsx(a,{$display:e,onClick:i,children:r.jsx(c,{src:"/react_personal_sensery/scroll-top.svg",width:"20px",height:"20px"})})};export{p as default};
