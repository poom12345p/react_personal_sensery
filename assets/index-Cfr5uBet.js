import{d as n,R as y,r as m,i as A,j as t,B as x}from"./index-BCzXKltb.js";import{F as T}from"./index-DuyL8lqK.js";import{R as g,C as h,T as w}from"./index-B1KRLjcb.js";const k=[{text:"ไม่เคย",value:1},{text:"น้อย",value:2},{text:"ปานกลาง",value:3},{text:"บ่อย",value:4},{text:"บ่อยมาก",value:5}],B=[{text:"ไม่เคย",value:5},{text:"น้อย",value:4},{text:"ปานกลาง",value:3},{text:"บ่อย",value:2},{text:"บ่อยมาก",value:1}],f={high:k,low:B},C=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;n("p")`
  margin: 1.5rem 0 2rem 0;
`;n(y)`
  display: flex;
  flex-direction: ${({direction:e})=>e==="left"?"row":"row-reverse"};
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
`;const E=n("h1")`
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
`;const N=n("h6")`
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
`;const z=n("div")`
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
`,L=n(h)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,O=n(g.Button)`

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

`,F=n(g.Group)`
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
`,{Title:H,Text:K}=w,u=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})},G=({value:e,scaleReversed:r,onChange:l})=>t.jsx(F,{value:e,onChange:i=>l(i.target.value),children:(r===!0?f.low:f.high).map(i=>t.jsx(O,{value:i.value,children:i.text},i.text))}),M=({question:e,savedData:r,scaleReversed:l,onChange:i})=>(console.log(r),t.jsxs(h,{id:e.id,style:{marginBottom:16},children:[t.jsx(w.Text,{strong:!0,children:e.text}),t.jsx(G,{value:r?.[e.id],scaleReversed:l,onChange:i})]})),Q=({survey:e})=>{const[r,l]=m.useState({}),i=e.id;m.useEffect(()=>{const a=localStorage.getItem(i);if(a)try{l(JSON.parse(a))}catch(o){console.error("Failed to parse saved answers",o)}},[]),m.useEffect(()=>{localStorage.setItem(i,JSON.stringify(r))},[r]);const v=(a,o,s,c)=>{l(d=>({...d,[a]:{...d[a],[o]:{...d[a]?.[o],[s]:c}}}))},b=()=>{localStorage.removeItem(i),l({}),u("intro")},j=(a,o)=>a.Assessment.every(s=>s.children.every(c=>c.questions.every(d=>{var p=o?.[s.id]?.[c.id]?.[d.id]!=null;return p||(console.log("missing answer at",s.id,c.id,d.id),u(d.id)),p}))),R=A(),S=()=>{console.log("Assessment Result",r),j(e,r)?R("/result",{state:{survey:e,key:e.id}}):alert("Please complete all assessment!")};return t.jsx(C,{children:t.jsxs(T,{triggerOnce:!0,children:[t.jsx(E,{children:e.title}),t.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",e.targetAge]}),e.Assessment.map(a=>t.jsx("div",{className:"mb-10",children:t.jsx(L,{title:a.title,style:{marginBottom:36},children:a.children.map(o=>t.jsxs("div",{className:"mb-8",children:[t.jsx(N,{children:o.title}),o.questions.map(s=>t.jsx(M,{question:s,savedData:r?.[a.id]?.[o.id],scaleReversed:o.scaleReversed,onChange:c=>v(a.id,o.id,s.id,c)},s.id))]},o.id))})},a.id)),t.jsxs(z,{children:[t.jsx(x,{color:"#ff0037",onClick:b,children:"Reset"}),t.jsx(x,{onClick:S,children:"Next"})]})]})})};export{Q as default};
