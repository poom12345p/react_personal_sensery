import{j as i,d as l,r as n}from"./index-BCzXKltb.js";const c=({src:e,width:t,height:o})=>i.jsx("img",{src:`./img/svg/${e}`,alt:e,width:t,height:o}),a=l("div")`
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
`,p=()=>{const[e,t]=n.useState(!1),o=n.useCallback(()=>{const s=window.scrollY;!e&&s>350?t(!0):s<=350&&t(!1)},[e]);n.useEffect(()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[o]);const r=()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})};return i.jsx(a,{$display:e,onClick:r,children:i.jsx(c,{src:"scroll-top.svg",width:"20px",height:"20px"})})};export{p as default};
