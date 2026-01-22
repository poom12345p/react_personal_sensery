import{d as o,al as A,r as m,am as R,j as t,an as f}from"./index-CXEGJ_6O.js";import{F as k}from"./index-CSoBBZ-Y.js";import{a1 as h,a2 as u,a4 as w,a3 as x}from"./Choices-BObsdhHw.js";const T=o("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;o("p")`
  margin: 1.5rem 0 2rem 0;
`;o(A)`
  display: flex;
  flex-direction: ${({direction:e})=>e==="left"?"row":"row-reverse"};
`;o("div")`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;o("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;const B=o("h1")`
  font-size: clamp(24px, 4vw, 40px);
  line-height: 1.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #3c0058;
  font-family: "Motiva Sans Light", sans-serif;
`;o("h2")`
  font-size: clamp(24px, 4vw, 30px); 
  line-height: 1.2;
  padding: 0.5rem 0;
  margin-top: 2rem;
  text-transform: uppercase;
  color: #17007e;
  font-family: "Motiva Sans Light", sans-serif;
`;o("h6")`
   font-size: clamp(14px, 4vw, 18px); 
  line-height: 1.2rem;
  padding: 1rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: left; 
  margin: 0; 
`;o("p")`
  font-size: 13px;
`;const C=o("div")`
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
`,E=o(u)`
  .ant-card-head {
    background: #2e186a; /* purple */
    border-bottom: none;
  }

  .ant-card-head-title {
    color: #ffffff; /* white text */
    font-weight: 600;
  }
`,N=o(h.Button)`

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

`,z=o(h.Group)`
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
`,{Title:P,Text:I}=w,g=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})},L=({value:e,scaleReversed:n,onChange:l})=>t.jsx(z,{value:e,onChange:i=>l(i.target.value),children:(n===!0?x.low:x.high).map(i=>t.jsx(N,{value:i.value,children:i.text},i.text))}),O=({question:e,savedData:n,scaleReversed:l,onChange:i})=>(console.log(n),t.jsxs(u,{id:e.id,style:{marginBottom:16},children:[t.jsx(w.Text,{strong:!0,children:e.text}),t.jsx(L,{value:n?.[e.id],scaleReversed:l,onChange:i})]})),J=({survey:e})=>{const[n,l]=m.useState({}),i=e.id;m.useEffect(()=>{const a=localStorage.getItem(i);if(a)try{l(JSON.parse(a))}catch(r){console.error("Failed to parse saved answers",r)}},[]),m.useEffect(()=>{localStorage.setItem(i,JSON.stringify(n))},[n]);const v=(a,r,s,d)=>{l(c=>({...c,[a]:{...c[a],[r]:{...c[a]?.[r],[s]:d}}}))},b=()=>{localStorage.removeItem(i),l({}),g("intro")},j=(a,r)=>a.Assessment.every(s=>s.children.every(d=>d.questions.every(c=>{var p=r?.[s.id]?.[d.id]?.[c.id]!=null;return p||(console.log("missing answer at",s.id,d.id,c.id),g(c.id)),p}))),y=R(),S=()=>{console.log("Assessment Result",n),j(e,n)?y("/result",{state:{survey:e,key:e.id}}):alert("Please complete all assessment!")};return t.jsx(T,{children:t.jsxs(k,{triggerOnce:!0,children:[t.jsx(B,{children:"แบบประเมินความต้องการรับรู้ประสาทสัมผัส"}),t.jsxs("p",{className:"text-gray-600 mb-8",children:["Target age: ",e.targetAge]}),e.Assessment.map(a=>t.jsx("div",{className:"mb-10",children:t.jsx(E,{title:a.title,style:{marginBottom:36},children:a.children.map(r=>t.jsx("div",{className:"mb-8",children:r.questions.map(s=>t.jsx(O,{question:s,savedData:n?.[a.id]?.[r.id],scaleReversed:r.scaleReversed,onChange:d=>v(a.id,r.id,s.id,d)},s.id))},r.id))})},a.id)),t.jsxs(C,{children:[t.jsx(f,{color:"#ff0037",onClick:b,children:"Reset"}),t.jsx(f,{onClick:S,children:"Next"})]})]})})};export{J as default};
