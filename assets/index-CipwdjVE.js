import{d as n,al as m,am as x,j as e,ap as h,an as f}from"./index-B449nxKw.js";import{F as g}from"./index-CFGZKV1d.js";const j=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,u=n("p")`
  margin: 1.5rem 0 2rem 0;
`,w=n(m)`
  display: flex;
  flex-direction: ${({direction:i})=>i==="left"?"row":"row-reverse"};
`,y=n("div")`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;n("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;n("p")`
  font-size: 13px;
`;const v=n("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,B=({icon:i,title:s,content:o,section:C,button:a,id:d,direction:r})=>{const l=x(),c=t=>{l(t)};return e.jsx(j,{children:e.jsx(g,{direction:r,triggerOnce:!0,children:e.jsx(w,{justify:"center",align:"middle",id:d,direction:r,children:e.jsx(h,{xs:24,sm:24,md:20,lg:16,xl:14,children:e.jsxs(y,{children:[e.jsx("h6",{children:s}),e.jsx(u,{children:o}),e.jsx(v,{children:typeof a=="object"&&a.map((t,p)=>e.jsx(f,{color:t.color,onClick:()=>t.link&&c(t.link),children:t.title},p))})]})})})})})};export{B as default};
