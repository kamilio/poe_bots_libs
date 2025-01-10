import{r as _,a as Q,R as I}from"./assets/react-57209f9c.js";import{h as ye,p as ue}from"./assets/diff2html-520d79da.js";import{H as X}from"./assets/hljs-b99628a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();var pe={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=_,be=Symbol.for("react.element"),je=Symbol.for("react.fragment"),ve=Object.prototype.hasOwnProperty,Ne=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,we={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,o,r){var s,n={},l=null,c=null;r!==void 0&&(l=""+r),o.key!==void 0&&(l=""+o.key),o.ref!==void 0&&(c=o.ref);for(s in o)ve.call(o,s)&&!we.hasOwnProperty(s)&&(n[s]=o[s]);if(e&&e.defaultProps)for(s in o=e.defaultProps,o)n[s]===void 0&&(n[s]=o[s]);return{$$typeof:be,type:e,key:l,ref:c,props:n,_owner:Ne.current}}J.Fragment=je;J.jsx=fe;J.jsxs=fe;pe.exports=J;var t=pe.exports,ee={},re=Q;ee.createRoot=re.createRoot,ee.hydrateRoot=re.hydrateRoot;const Se="_container_1kx9n_2",$e="_uploadZone_1kx9n_10",le={container:Se,uploadZone:$e},ke=({onFilesDrop:e,children:o})=>{const r=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#0969da"},s=c=>{c.currentTarget.style.borderColor="#30363d"},n=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#30363d",e(c.dataTransfer.files)},l=c=>{e(c.target.files),c.target.value=""};return t.jsxs("div",{className:le.container,children:[t.jsxs("div",{className:le.uploadZone,onDragOver:r,onDragLeave:s,onDrop:n,onClick:()=>document.getElementById("fileInput").click(),children:[t.jsx("p",{children:"Drag and drop your source code files here or click to select"}),t.jsx("input",{type:"file",id:"fileInput",style:{display:"none"},multiple:!0,onChange:l})]}),o]})},Fe="_button_nc3y6_2",De="_small_nc3y6_15",Le="_medium_nc3y6_22",Re="_large_nc3y6_29",Be="_primary_nc3y6_47",Oe="_success_nc3y6_56",Ee="_danger_nc3y6_65",Ie="_ghost_nc3y6_75",Z={button:Fe,small:De,medium:Le,large:Re,default:"_default_nc3y6_37",primary:Be,success:Oe,danger:Ee,ghost:Ie},te=({variant:e="default",size:o="medium",disabled:r=!1,type:s="button",onClick:n,children:l,className:c,...C})=>{const a=[Z.button,Z[e],Z[o],c].filter(Boolean).join(" ");return t.jsx("button",{type:s,className:a,onClick:n,disabled:r,...C,children:l})},Ae="_buttonWrapper_17g1b_1",Pe={buttonWrapper:Ae},he=_.createContext(),T="~~~",He=({initialComments:e,children:o})=>{const[r,s]=_.useState(e),[n,l]=_.useState(),c=(i,d,u)=>{const p=`${i}${T}${d}`;console.log("Adding comment to:",p);const b={id:Date.now(),content:u};s($=>({...$,[p]:[...$[p]||[],b]}))},C=i=>{const d={id:Date.now(),content:i};l(d)},a=()=>(n==null?void 0:n.content)||"",f=(i,d,u,p)=>{const b=`${i}${T}${d}`;console.log("Updating comment at:",b),s($=>({...$,[b]:$[b].map((N,W)=>W===u?{...N,content:p}:N)}))},m=(i,d,u)=>{const p=`${i}${T}${d}`;console.log("Deleting comment from:",p),s(b=>({...b,[p]:b[p].filter(($,N)=>N!==u)}))},h=(i,d)=>{const u=`${i}-${d}`;return r[u]||[]},y=_.useCallback(()=>{const i=Object.entries(r).map(([d,u])=>{const[p,b]=d.split(T);return{fileName:p,lineInfo:b,comments:u}});return n!=null&&n.content?[...i,{fileName:"global",lineInfo:"global",comments:[n]}]:i},[r,n]),j=_.useCallback(i=>Object.entries(r).filter(([u])=>u.startsWith(`${i}${T}`)).map(([u,p])=>({lineInfo:u.split(T)[1],comments:p})),[r]);return t.jsx(he.Provider,{value:{addComment:c,deleteComment:m,updateComment:f,getComments:h,getAllComments:y,addGlobalComment:C,getGlobalComment:a,getAllCommentsForFile:j},children:o})},z=()=>_.useContext(he),ae=JSON.parse(document.getElementById("config-json-data").textContent),Te=()=>{window.scrollTo({top:0,behavior:"smooth"})},Me=({uploadedFiles:e,onSubmit:o,children:r,...s})=>{const{getAllComments:n}=z(),l=n(),c=!!Object.keys(e).length,C=!!l.length,a=async()=>{let m=`@${ae.botName} /update`,h=JSON.stringify({files:e,comments:l}),y=`${m}
~~~
${h}`;if(c&&!C&&(m=`@${ae.botName} /set`,h=JSON.stringify({files:e}),y=`${m}
~~~
${h}`),console.log("Message",y),Te(),window.Poe){const j=await window.Poe.sendUserMessage(y);console.log("Update sent",j)}},f=!c&&!C;return t.jsx("div",{className:Pe.buttonWrapper,children:t.jsx(te,{onClick:a,disabled:!!f,variant:"success",...s,children:r})})};const We="_diffContainer_vza99_1",qe="_fileContent_vza99_3",Ue="_addCommentButton_vza99_23",Je="_commentRow_vza99_46",ze="_commentCell_vza99_50",F={diffContainer:We,fileContent:qe,"d2h-code-side-emptyplaceholder":"_d2h-code-side-emptyplaceholder_vza99_13","d2h-info":"_d2h-info_vza99_13",addCommentButton:Ue,commentRow:Je,commentCell:ze},Ge="_container_1jkch_2",Ke="_header_1jkch_14",Ze="_buttonGroup_1jkch_25",Ve="_content_1jkch_31",Ye="_noHeader_1jkch_36",M={container:Ge,header:Ke,buttonGroup:Ze,content:Ve,noHeader:Ye},G=({header:e,buttons:o,children:r})=>t.jsxs("div",{className:M.container,children:[e&&t.jsxs("div",{className:M.header,children:[e,t.jsx("div",{className:M.buttonGroup,children:o})]}),t.jsx("div",{className:`${M.content} ${e?"":M.noHeader}`,children:r})]}),_e=({content:e,onCopySuccess:o,onCopyError:r,defaultLabel:s="Copy",successLabel:n="Copied!",children:l=s,...c})=>{const[C,a]=_.useState(!1),f=async()=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const m=document.createElement("textarea");m.value=e,m.style.top="0",m.style.left="0",m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.focus(),m.select(),document.execCommand("copy"),document.body.removeChild(m)}a(!0),o==null||o(),setTimeout(()=>a(!1),2e3)}catch(m){r==null||r(m)}};return t.jsx(te,{onClick:f,...c,children:C?n:l})},Qe="_commentSection_1sd2d_1",Xe="_stickyComment_1sd2d_12",et="_commentSectionHeader_1sd2d_22",tt="_comment_1sd2d_1",nt="_commentList_1sd2d_38",ot="_commentWrapper_1sd2d_44",st="_deleteComment_1sd2d_50",ct="_formHeader_1sd2d_63",rt="_commentContent_1sd2d_68",lt="_commentForm_1sd2d_76",at="_commentInput_1sd2d_84",mt="_formFooter_1sd2d_95",it="_submitComment_1sd2d_99",dt="_closeButton_1sd2d_111",B={commentSection:Qe,stickyComment:Xe,commentSectionHeader:et,comment:tt,commentList:nt,commentWrapper:ot,deleteComment:st,formHeader:ct,commentContent:rt,commentForm:lt,commentInput:at,formFooter:mt,submitComment:it,closeButton:dt},ut=({content:e,onDelete:o})=>t.jsx("div",{className:B.comment,children:t.jsxs("div",{className:B.commentWrapper,children:[t.jsx("div",{className:B.commentContent,children:e}),t.jsx("button",{className:B.deleteComment,onClick:o,children:"×"})]})}),pt=({onSubmit:e})=>{const[o,r]=_.useState(""),s=n=>{n.preventDefault(),o.trim()&&(e(o),r(""))};return t.jsxs("form",{className:B.commentForm,onSubmit:s,children:[t.jsx("textarea",{value:o,onChange:n=>r(n.target.value),placeholder:"Add a comment...",className:B.commentInput}),t.jsx("div",{className:B.formFooter,children:t.jsx("button",{onClick:s,className:B.submitComment,children:"Comment"})})]})},Ce=({lineNumber:e,comments:o,onAddComment:r,onDeleteComment:s,onClose:n})=>t.jsx(pt,{onSubmit:r}),ge=({comments:e,onDeleteComment:o})=>e.length?t.jsx("div",{className:B.commentList,children:e.map((r,s)=>t.jsx(ut,{...r,onDelete:()=>o(s)},s))}):null,ft={drawFileList:!1,matching:"lines",outputFormat:"line-by-line",highlight:!1,colorScheme:"dark",renderNothingWhenEmpty:!0,rawTemplates:{"generic-wrapper":'<div class="d2h-auto-color-scheme">{{{content}}}</div>',"line-by-line-file-diff":`
            <div id="{{fileHtmlId}}" data-lang="{{file.language}}">
                <div class="d2h-file-list-wrapper">
                    <div class="d2h-file-list-header">
                        <span class="d2h-file-name-wrapper">
                            <span class="d2h-file-name">{{file.fileName}}</span>
                        </span>
                    </div>
                </div>
                <div class="d2h-file-diff">
                    <div class="d2h-code-wrapper">
                        <table class="d2h-diff-table">
                            <tbody class="d2h-diff-tbody">
                                {{{diffs}}}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`}},ht=I.memo(({file:e,fileContent:o,commentsEnabled:r=!0})=>{const s=I.useRef(null),[n,l]=_.useState(null),c=I.useRef(null),[C,a]=_.useState([]),{addComment:f,deleteComment:m,getComments:h,getAllCommentsForFile:y}=z(),j=_.useMemo(()=>({__html:ye([e],ft)}),[e]),i=_.useCallback(()=>{if(!s.current)return;(()=>{s.current.querySelectorAll(`.${F.commentRow}`).forEach(x=>{x!==c.current&&x.remove()})})();const K=y(e.newName).reduce((g,{lineInfo:x,comments:O})=>(g[x]=O,g),{}),P=[],k={};s.current.querySelectorAll(".d2h-code-linenumber").forEach(g=>{var E,w,v,L,S,A;const x=(v=(w=(E=g.querySelector(".line-num1"))==null?void 0:E.textContent)==null?void 0:w.trim)==null?void 0:v.call(w),H=((A=(S=(L=g.querySelector(".line-num2"))==null?void 0:L.textContent)==null?void 0:S.trim)==null?void 0:A.call(S))||x;k[H]||(k[H]=[]),k[H].push(g)}),Object.entries(k).forEach(([g,x])=>{const O=K[g];if(!(O!=null&&O.length))return;const E=(x[1]?x[1]:x[0]).closest("tr");if(!E)return;const w=E.closest("tbody");if(!w)return;const v=document.createElement("tr");v.className=`${F.commentRow}`,v.setAttribute("data-line",g);const L=document.createElement("div");L.className="portal-container";const S=document.createElement("td");S.className=`${F.commentCell}`,S.colSpan=3,S.appendChild(L),v.appendChild(S),E.nextSibling?w.insertBefore(v,E.nextSibling):w.appendChild(v),P.push(t.jsx(I.Fragment,{children:Q.createPortal(t.jsx(ge,{comments:O,onDeleteComment:A=>m(e.newName,g,A)}),L)},`${e.newName}-${g}`))}),a(P)},[e.newName,y,m]);I.useEffect(()=>{setTimeout(async()=>{var N;if(s.current){const W=s.current.querySelectorAll(".d2h-code-linenumber"),K=((N=e.newName)==null?void 0:N.split(".").pop())||"";W.forEach(k=>{const g=k.closest("tr");if(!g.classList.contains("d2h-del")&&r){const x=document.createElement("button");x.className=F.addCommentButton,x.innerHTML="+",g.appendChild(x),g.addEventListener("mouseenter",()=>{x.style.opacity="1"}),g.addEventListener("mouseleave",()=>{x.style.opacity="0"}),x.addEventListener("click",O=>{var A,q,ne,oe,U,se;const H=(ne=(q=(A=k.querySelector(".line-num1"))==null?void 0:A.textContent)==null?void 0:q.trim)==null?void 0:ne.call(q),w=((se=(U=(oe=k.querySelector(".line-num2"))==null?void 0:oe.textContent)==null?void 0:U.trim)==null?void 0:se.call(U))||H;if(console.log("clicked",n,w),n===w)return;c.current&&(c.current.remove(),c.current=null),l(w);const v=document.createElement("tr");v.className=F.commentRow,v.innerHTML=`<td colspan="3" class="${F.commentCell}"></td>`;const L=`.${F.commentRow}[data-line="${w}"]`;console.log("selector",L);const S=Array.from(s.current.querySelectorAll(L));if(S.length>0){const ce=S[S.length-1];ce.parentNode.insertBefore(v,ce.nextSibling)}else g.parentNode.insertBefore(v,g.nextSibling);c.current=v})}});const P=s.current.querySelectorAll(".d2h-code-line-ctn");P==null||P.forEach(k=>{k.dataset.highlighted||(X.configure({ignoreUnescapedHTML:!0}),k.classList.add(`language-${K}`),X.highlightElement(k))})}},0)},[j,e.newName,r,n]),I.useEffect(()=>{i()},[i]);const d=N=>{n&&(f(e.newName,n,N),i())},u=N=>{m(e.newName,n,N),i()},p=()=>{c.current&&(c.current.remove(),c.current=null),l(null)},b=e.isNew?e.newName:e.oldName,$=e.isRename?`${e.oldName} -> ${e.newName}`:b;return t.jsx(G,{header:$,buttons:t.jsx(_e,{size:"small",content:o}),children:t.jsxs("div",{className:F.diffContainer,children:[t.jsx("div",{className:F.fileContent,ref:s,dangerouslySetInnerHTML:j}),C,r&&n&&c.current&&Q.createPortal(t.jsx(Ce,{lineNumber:n,comments:h(e.newName,n),onAddComment:d,onDeleteComment:u,onClose:p}),c.current.querySelector(`.${F.commentCell}`))]})})}),_t=({diff:e,files:o,commentsEnabled:r=!0})=>_.useMemo(()=>ue(e),[e]).map(n=>t.jsx(ht,{file:n,fileContent:o[n.newName],commentsEnabled:r},n.newName));const Ct="_container_1mk1f_1",gt="_codeWrapper_1mk1f_7",yt="_inlineCommentSection_1mk1f_16",xt="_codeLine_1mk1f_21",bt="_lineNumber_1mk1f_35",jt="_hoverable_1mk1f_48",vt="_lineContent_1mk1f_57",Nt="_addCommentButton_1mk1f_61",R={container:Ct,codeWrapper:gt,inlineCommentSection:yt,codeLine:xt,lineNumber:bt,hoverable:jt,lineContent:vt,addCommentButton:Nt},wt=JSON.parse(document.getElementById("config-json-data").textContent),St=({content:e,filename:o,children:r="Deploy",...s})=>{const n=async()=>{let l=`@${wt.botName} /deploy`,c=JSON.stringify({filename:o}),C=`${l}
~~~
${c}`;if(console.log("Message",C),window.Poe){const a=await window.Poe.sendUserMessage(C);console.log("Update sent",a)}};return o.endsWith(".html")?t.jsx(te,{onClick:n,...s,children:"Deploy"}):null},$t=e=>{const o=e.split(".").pop().toLowerCase();return{js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",rb:"ruby",java:"java",cpp:"cpp",c:"c",cs:"csharp",html:"html",css:"css",scss:"scss",sass:"scss",php:"php",go:"go",rs:"rust",swift:"swift",kt:"kotlin",md:"markdown",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",sql:"sql",sh:"bash",bash:"bash",dockerfile:"dockerfile"}[o]||"plaintext"},kt=({lineNumber:e,content:o,commentsEnabled:r,onLineSelect:s,language:n,selectedLine:l,existingComments:c,onAddComment:C,onDeleteComment:a,onClose:f})=>{const[m,h]=_.useState(!1),y=_.useRef(null);return _.useEffect(()=>{!y.current||y.current.dataset.highlighted==="yes"||X.highlightElement(y.current)},[o]),t.jsxs("div",{className:R.lineContainer,children:[t.jsxs("div",{className:R.codeLine,"data-line":e,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onClick:()=>s(e),children:[t.jsx("span",{className:`${R.lineNumber}${r?" "+R.hoverable:""}`,children:String(e).padStart(3)}),t.jsx("span",{ref:y,className:`${R.lineContent} language-${n}`,children:o}),r&&t.jsx("button",{className:R.addCommentButton,style:{opacity:m?1:0},onClick:j=>{j.stopPropagation(),s(e)},children:"+"})]}),c&&c.length>0&&t.jsx("div",{className:R.existingComments,children:t.jsx(ge,{comments:c,onDeleteComment:j=>a(j)})}),l===e&&r&&t.jsx(Ce,{lineNumber:e,comments:c||[],onAddComment:C,onDeleteComment:a,onClose:f})]})},me=({filename:e,content:o,commentsEnabled:r=!0})=>{const[s,n]=_.useState(null),{addComment:l,deleteComment:c,getAllCommentsForFile:C}=z(),a=$t(e),f=o.split(`
`),m=t.jsxs(t.Fragment,{children:[t.jsx(St,{size:"small",filename:e}),t.jsx(_e,{size:"small",content:o})]}),y=C(e).reduce((d,{lineInfo:u,comments:p})=>(d[u]=p,d),{}),j=(d,u)=>{l(e,d,u)},i=(d,u)=>{c(e,d,u)};return t.jsx(G,{header:e,buttons:m,children:t.jsx("div",{className:R.container,children:t.jsx("pre",{className:R.codeWrapper,children:t.jsx("code",{className:`language-${a}`,children:f.map((d,u)=>{const p=u+1,b=y[p]||[];return t.jsx(kt,{lineNumber:p,content:d,commentsEnabled:r,onLineSelect:n,language:a,selectedLine:s,existingComments:b,onAddComment:$=>j(p,$),onDeleteComment:$=>i(p,$),onClose:()=>n(null)},p)})})})})})},Ft="_container_7qw4f_2",Dt={container:Ft},Lt="_diffDescription_guii0_2",Rt={diffDescription:Lt},ie=({description:e})=>e?t.jsx(G,{children:t.jsx("div",{className:Rt.diffDescription,children:e})}):null;function Bt(e){return e?ue(e).map(o=>o.newName):[]}const Ot="_container_r5p9y_1",Et="_commentForm_r5p9y_7",It="_commentInput_r5p9y_11",V={container:Ot,commentForm:Et,commentInput:It},At=()=>{const{addGlobalComment:e,getGlobalComment:o}=z(),[r,s]=_.useState(o()),n=l=>{const c=l.target.value;s(c),e(c)};return t.jsx(G,{header:"Comment",children:t.jsx("div",{className:V.container,children:t.jsx("div",{className:V.commentForm,children:t.jsx("textarea",{value:r,onChange:n,placeholder:"What would you like to do?",className:V.commentInput})})})})},D=JSON.parse(document.getElementById("config-json-data").textContent),Y=JSON.parse(document.getElementById("files-json-data").textContent),de=JSON.parse(document.getElementById("diff-json-data").textContent),Pt=JSON.parse(document.getElementById("comments-json-data").textContent),Ht=()=>{const[e,o]=_.useState({}),r=Bt(de),s=Object.keys(Y).reduce((a,f)=>(r.includes(f)||(a[f]=Y[f]),a),{}),n=async a=>{try{const f=h=>new Promise((y,j)=>{const i=new FileReader;i.onload=()=>y(i.result),i.onerror=j,i.readAsText(h)}),m=await Promise.all(Array.from(a).map(async h=>[h.name,await f(h)]));o(h=>({...h,...Object.fromEntries(m)}))}catch(f){console.error("Error reading files:",f)}},l=async()=>{const a=JSON.stringify({files:e}),m=`${`@${D.botName} /set`}
~~~
${a}`;if(console.log("Message:",m),window.Poe){const h=await window.Poe.sendUserMessage(m);console.log("Files sent",h)}};I.useEffect(()=>{D.shouldAutoSubmitUpload&&Object.keys(e).length>0&&l()},[e]);const c=a=>{o(f=>{const m={...f};return delete m[a],m})},C=()=>t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:["🚀 ",D.botName]}),t.jsx("p",{children:"🤯 Tired of AI bots playing hide-and-seek with your code?"}),t.jsx("p",{children:'Finally! A way to get AI code assistant without the endless "..." or "code continues here" nonsense. Just upload, ask, and get the job done. Simple as that! ⚡️'})]});return t.jsx(He,{initialComments:Pt,children:t.jsxs("div",{className:Dt.container,children:[D.isInitialPage&&t.jsx(ie,{description:t.jsx(C,{})}),t.jsx(ie,{description:D.description}),D.shouldShowUpload&&t.jsx(ke,{onFilesDrop:n}),t.jsx(_t,{diff:de,files:Y,commentsEnabled:D.shouldShowComments}),Object.keys(s).map(a=>t.jsx(me,{filename:a,content:s[a],commentsEnabled:D.shouldShowComments},a)),Object.keys(e).map(a=>t.jsx(me,{filename:a,content:e[a],onRemove:()=>c(a),commentsEnabled:D.shouldShowComments},a)),D.shouldShowComments&&t.jsx(At,{}),t.jsx(Me,{uploadedFiles:e,size:"large",children:"Send message"})]})})};ee.createRoot(document.getElementById("root")).render(t.jsx(I.StrictMode,{children:t.jsx(Ht,{})}));
