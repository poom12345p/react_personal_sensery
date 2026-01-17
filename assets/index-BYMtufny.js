import{d as n,n as y,r as m,o as R,j as e,B as x}from"./index-Dlf65v-i.js";import{F as A}from"./index-Cs9v0XsC.js";import{R as u,C as g,T as h}from"./index-CoTDm7EX.js";const T=[{text:"ไม่เคย",value:1},{text:"น้อย",value:2},{text:"ปานกลาง",value:3},{text:"บ่อย",value:4},{text:"บ่อยมาก",value:5}],k=[{text:"ไม่เคย",value:5},{text:"น้อย",value:4},{text:"ปานกลาง",value:3},{text:"บ่อย",value:2},{text:"บ่อยมาก",value:1}],f={high:T,low:k},B=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;n("p")`
  margin: 1.5rem 0 2rem 0;
`;n(y)`
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
`;const C=n("h1")`
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
`;const E=n("h6")`
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
`;const N=n("div")`
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
`,z=n(g)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,L=n(u.Button)`

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

`,O=n(u.Group)`
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
`,{Title:H,Text:K}=h,F=t=>{document.getElementById(t).scrollIntoView({behavior:"smooth"})},G=({value:t,scaleReversed:r,onChange:l})=>e.jsx(O,{value:t,onChange:s=>l(s.target.value),children:(r===!0?f.low:f.high).map(s=>e.jsx(L,{value:s.value,children:s.text},s.text))}),M=({question:t,savedData:r,scaleReversed:l,onChange:s})=>(console.log(r),e.jsxs(g,{style:{marginBottom:16},children:[e.jsx(h.Text,{strong:!0,children:t.text}),e.jsx(G,{value:r?.[t.id],scaleReversed:l,onChange:s})]})),Q=({survey:t})=>{const[r,l]=m.useState({}),s=t.id;m.useEffect(()=>{const o=localStorage.getItem(s);if(o)try{l(JSON.parse(o))}catch(a){console.error("Failed to parse saved answers",a)}},[]),m.useEffect(()=>{localStorage.setItem(s,JSON.stringify(r))},[r]);const w=(o,a,i,c)=>{l(d=>({...d,[o]:{...d[o],[a]:{...d[o]?.[a],[i]:c}}}))},v=()=>{localStorage.removeItem(s),l({}),F("intro")},b=(o,a)=>o.Assessment.every(i=>i.children.every(c=>c.questions.every(d=>{var p=a?.[i.id]?.[c.id]?.[d.id]!=null;return p||console.log("missing answer at",i.id,c.id,d.id),p}))),j=R(),S=()=>{console.log("Assessment Result",r),b(t,r)?j("/result",{state:{survey:t,key:t.id}}):alert("Please complete all assessment!")};return e.jsx(B,{children:e.jsxs(A,{triggerOnce:!0,children:[e.jsx(C,{children:t.title}),e.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",t.targetAge]}),t.Assessment.map(o=>e.jsx("div",{className:"mb-10",children:e.jsx(z,{title:o.title,style:{marginBottom:36},children:o.children.map(a=>e.jsxs("div",{className:"mb-8",children:[e.jsx(E,{children:a.title}),a.questions.map(i=>e.jsx(M,{question:i,savedData:r?.[o.id]?.[a.id],scaleReversed:a.scaleReversed,onChange:c=>w(o.id,a.id,i.id,c)},i.id))]},a.id))})},o.id)),e.jsxs(N,{children:[e.jsx(x,{color:"#ff0037",onClick:v,children:"Reset"}),e.jsx(x,{onClick:S,children:"Next"})]})]})})};export{Q as default};
