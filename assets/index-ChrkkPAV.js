import{d as n,n as A,r as m,o as T,j as e,B as x}from"./index-CPua8JTg.js";import{F as k}from"./index-D9a-HtGJ.js";import{R as g,C as h,T as w}from"./index-DyRto4kc.js";const B=[{text:"ไม่เคย",value:1},{text:"น้อย",value:2},{text:"ปานกลาง",value:3},{text:"บ่อย",value:4},{text:"บ่อยมาก",value:5}],C=[{text:"ไม่เคย",value:5},{text:"น้อย",value:4},{text:"ปานกลาง",value:3},{text:"บ่อย",value:2},{text:"บ่อยมาก",value:1}],f={high:B,low:C},E=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;n("p")`
  margin: 1.5rem 0 2rem 0;
`;n(A)`
  display: flex;
  flex-direction: ${({direction:t})=>t==="left"?"row":"row-reverse"};
`;n("div")`
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
`;const N=n("h1")`
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #3c0058;
  font-family: "Motiva Sans Light", sans-serif;
`;n("h2")`
  font-size: clamp(24px, 4vw, 30px); 
  line-height: 1.2;
  padding: 0.5rem 0;
  margin-top: 2rem;
  text-transform: uppercase;
  color: #17007e;
  font-family: "Motiva Sans Light", sans-serif;
`;const z=n("h6")`
   font-size: clamp(14px, 4vw, 18px); 
  line-height: 1.2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: left; 
  margin: 0; 
`;n("p")`
  font-size: 13px;
`;const L=n("div")`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,O=n(h)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,F=n(g.Button)`

  background: #f5f3ff;
  border-color: #4c13a8;
  color: #4c13a8;


  &:hover {
    color: #4c13a8;
  }

  &.ant-radio-button-wrapper-checked {
    background: #4c13a8 !important;
    border-color: #4c13a8 !important;
    color: #ffffff !important;
  }

`,G=n(g.Group)`
  optionType : button
  buttonStyle : solid
  background: #f5f3ff;
  border-color: #4c13a8;
   display: flex;
  width: 100%;
  .ant-radio-button-wrapper {
    flex: 1;  
    text-align: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    .ant-radio-button-wrapper {
      width: 100%;
    }
  }
`,{Title:K,Text:Q}=w,u=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})},M=({value:t,scaleReversed:r,onChange:l})=>e.jsx(G,{id:v.id,value:t,onChange:i=>l(i.target.value),children:(r===!0?f.low:f.high).map(i=>e.jsx(F,{value:i.value,children:i.text},i.text))}),P=({question:t,savedData:r,scaleReversed:l,onChange:i})=>(console.log(r),e.jsxs(h,{style:{marginBottom:16},children:[e.jsx(w.Text,{strong:!0,children:t.text}),e.jsx(M,{value:r?.[t.id],scaleReversed:l,onChange:i})]})),V=({survey:t})=>{const[r,l]=m.useState({}),i=t.id;m.useEffect(()=>{const o=localStorage.getItem(i);if(o)try{l(JSON.parse(o))}catch(a){console.error("Failed to parse saved answers",a)}},[]),m.useEffect(()=>{localStorage.setItem(i,JSON.stringify(r))},[r]);const b=(o,a,s,c)=>{l(d=>({...d,[o]:{...d[o],[a]:{...d[o]?.[a],[s]:c}}}))},j=()=>{localStorage.removeItem(i),l({}),u("intro")},S=(o,a)=>o.Assessment.every(s=>s.children.every(c=>c.questions.every(d=>{var p=a?.[s.id]?.[c.id]?.[d.id]!=null;return p||(console.log("missing answer at",s.id,c.id,d.id),u(d.id)),p}))),y=T(),R=()=>{console.log("Assessment Result",r),S(t,r)?y("/result",{state:{survey:t,key:t.id}}):alert("Please complete all assessment!")};return e.jsx(E,{children:e.jsxs(k,{triggerOnce:!0,children:[e.jsx(N,{children:t.title}),e.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",t.targetAge]}),t.Assessment.map(o=>e.jsx("div",{className:"mb-10",children:e.jsx(O,{title:o.title,style:{marginBottom:36},children:o.children.map(a=>e.jsxs("div",{className:"mb-8",children:[e.jsx(z,{children:a.title}),a.questions.map(s=>e.jsx(P,{question:s,savedData:r?.[o.id]?.[a.id],scaleReversed:a.scaleReversed,onChange:c=>b(o.id,a.id,s.id,c)},s.id))]},a.id))})},o.id)),e.jsxs(L,{children:[e.jsx(x,{color:"#ff0037",onClick:j,children:"Reset"}),e.jsx(x,{onClick:R,children:"Next"})]})]})})};export{V as default};
