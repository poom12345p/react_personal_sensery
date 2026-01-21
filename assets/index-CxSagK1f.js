import{d as n,al as A,r as m,am as R,j as t,an as f}from"./index-ketY-7vE.js";import{F as k}from"./index-Cx2kM9dZ.js";import{a1 as h,a2 as u,a4 as w,a3 as x}from"./Choices-B88pE9_3.js";const T=n("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;n("p")`
  margin: 1.5rem 0 2rem 0;
`;n(A)`
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
`;const B=n("h1")`
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
`;const C=n("h6")`
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
`;const E=n("div")`
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
`,N=n(u)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,z=n(h.Button)`

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

`,L=n(h.Group)`
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
`,{Title:I,Text:J}=w,g=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})},O=({value:e,scaleReversed:r,onChange:l})=>t.jsx(L,{value:e,onChange:i=>l(i.target.value),children:(r===!0?x.low:x.high).map(i=>t.jsx(z,{value:i.value,children:i.text},i.text))}),F=({question:e,savedData:r,scaleReversed:l,onChange:i})=>(console.log(r),t.jsxs(u,{id:e.id,style:{marginBottom:16},children:[t.jsx(w.Text,{strong:!0,children:e.text}),t.jsx(O,{value:r?.[e.id],scaleReversed:l,onChange:i})]})),H=({survey:e})=>{const[r,l]=m.useState({}),i=e.id;m.useEffect(()=>{const a=localStorage.getItem(i);if(a)try{l(JSON.parse(a))}catch(o){console.error("Failed to parse saved answers",o)}},[]),m.useEffect(()=>{localStorage.setItem(i,JSON.stringify(r))},[r]);const b=(a,o,s,d)=>{l(c=>({...c,[a]:{...c[a],[o]:{...c[a]?.[o],[s]:d}}}))},j=()=>{localStorage.removeItem(i),l({}),g("intro")},v=(a,o)=>a.Assessment.every(s=>s.children.every(d=>d.questions.every(c=>{var p=o?.[s.id]?.[d.id]?.[c.id]!=null;return p||(console.log("missing answer at",s.id,d.id,c.id),g(c.id)),p}))),S=R(),y=()=>{console.log("Assessment Result",r),v(e,r)?S("/result",{state:{survey:e,key:e.id}}):alert("Please complete all assessment!")};return t.jsx(T,{children:t.jsxs(k,{triggerOnce:!0,children:[t.jsx(B,{children:e.title}),t.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",e.targetAge]}),e.Assessment.map(a=>t.jsx("div",{className:"mb-10",children:t.jsx(N,{title:a.title,style:{marginBottom:36},children:a.children.map(o=>t.jsxs("div",{className:"mb-8",children:[t.jsx(C,{children:o.title}),o.questions.map(s=>t.jsx(F,{question:s,savedData:r?.[a.id]?.[o.id],scaleReversed:o.scaleReversed,onChange:d=>b(a.id,o.id,s.id,d)},s.id))]},o.id))})},a.id)),t.jsxs(E,{children:[t.jsx(f,{color:"#ff0037",onClick:j,children:"Reset"}),t.jsx(f,{onClick:y,children:"Next"})]})]})})};export{H as default};
