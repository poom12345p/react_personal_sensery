import{d as r,al as A,r as m,am as R,j as t,an as f}from"./index-CHv2Z41O.js";import{F as k}from"./index-B-UEMVgl.js";import{a1 as h,a2 as u,a4 as w,a3 as x}from"./Choices-CtCspWcM.js";const T=r("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;r("p")`
  margin: 1.5rem 0 2rem 0;
`;r(A)`
  display: flex;
  flex-direction: ${({direction:e})=>e==="left"?"row":"row-reverse"};
`;r("div")`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;r("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;const B=r("h1")`
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #3c0058;
  font-family: "Motiva Sans Light", sans-serif;
`;r("h2")`
  font-size: clamp(24px, 4vw, 30px); 
  line-height: 1.2;
  padding: 0.5rem 0;
  margin-top: 2rem;
  text-transform: uppercase;
  color: #17007e;
  font-family: "Motiva Sans Light", sans-serif;
`;r("h6")`
   font-size: clamp(14px, 4vw, 18px); 
  line-height: 1.2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: left; 
  margin: 0; 
`;r("p")`
  font-size: 13px;
`;const C=r("div")`
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
`,E=r(u)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,N=r(h.Button)`

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

`,z=r(h.Group)`
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
`,{Title:P,Text:I}=w,g=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})},L=({value:e,scaleReversed:i,onChange:l})=>t.jsx(z,{value:e,onChange:o=>l(o.target.value),children:(i===!0?x.low:x.high).map(o=>t.jsx(N,{value:o.value,children:o.text},o.text))}),O=({question:e,savedData:i,scaleReversed:l,onChange:o})=>t.jsxs(u,{id:e.id,style:{marginBottom:16},children:[t.jsx(w.Text,{strong:!0,children:e.text}),t.jsx(L,{value:i?.[e.id],scaleReversed:l,onChange:o})]}),J=({survey:e})=>{const[i,l]=m.useState({}),o=e.id;m.useEffect(()=>{const a=localStorage.getItem(o);if(a)try{l(JSON.parse(a))}catch(n){console.error("Failed to parse saved answers",n)}},[]),m.useEffect(()=>{localStorage.setItem(o,JSON.stringify(i))},[i]);const v=(a,n,s,d)=>{l(c=>({...c,[a]:{...c[a],[n]:{...c[a]?.[n],[s]:d}}}))},b=()=>{localStorage.removeItem(o),l({}),g("intro")},j=(a,n)=>a.Assessment.every(s=>s.children.every(d=>d.questions.every(c=>{var p=n?.[s.id]?.[d.id]?.[c.id]!=null;return p||(console.log("missing answer at",s.id,d.id,c.id),g(c.id)),p}))),y=R(),S=()=>{console.log("Assessment Result",i),j(e,i)?y("/result",{state:{survey:e,key:e.id}}):alert("Please complete all assessment!")};return t.jsx(T,{children:t.jsxs(k,{triggerOnce:!0,children:[t.jsx(B,{children:"แบบประเมินความต้องการรับรู้ประสาทสัมผัส"}),t.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",e.targetAge]}),e.Assessment.map(a=>t.jsx("div",{className:"mb-10",children:t.jsx(E,{title:a.title,style:{marginBottom:36},children:a.children.map(n=>t.jsx("div",{className:"mb-8",children:n.questions.map(s=>t.jsx(O,{question:s,savedData:i?.[a.id]?.[n.id],scaleReversed:n.scaleReversed,onChange:d=>v(a.id,n.id,s.id,d)},s.id))},n.id))})},a.id)),t.jsxs(C,{children:[t.jsx(f,{color:"#ff0037",onClick:b,children:"Reset"}),t.jsx(f,{onClick:S,children:"Next"})]})]})})};export{J as default};
