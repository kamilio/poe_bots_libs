import{r as C,a as Y,R as E}from"./assets/react-57209f9c.js";import{h as ye,p as ue}from"./assets/diff2html-520d79da.js";import{H as Q}from"./assets/hljs-b99628a4.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();var pe={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=C,be=Symbol.for("react.element"),je=Symbol.for("react.fragment"),ve=Object.prototype.hasOwnProperty,Ne=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,we={key:!0,ref:!0,__self:!0,__source:!0};function fe(e,n,r){var s,o={},l=null,c=null;r!==void 0&&(l=""+r),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(c=n.ref);for(s in n)ve.call(n,s)&&!we.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:be,type:e,key:l,ref:c,props:o,_owner:Ne.current}}U.Fragment=je;U.jsx=fe;U.jsxs=fe;pe.exports=U;var t=pe.exports,X={},re=Y;X.createRoot=re.createRoot,X.hydrateRoot=re.hydrateRoot;const Se="_container_1kx9n_2",$e="_uploadZone_1kx9n_10",le={container:Se,uploadZone:$e},ke=({onFilesDrop:e,children:n})=>{const r=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#0969da"},s=c=>{c.currentTarget.style.borderColor="#30363d"},o=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#30363d",e(c.dataTransfer.files)},l=c=>{e(c.target.files),c.target.value=""};return t.jsxs("div",{className:le.container,children:[t.jsxs("div",{className:le.uploadZone,onDragOver:r,onDragLeave:s,onDrop:o,onClick:()=>document.getElementById("fileInput").click(),children:[t.jsx("p",{children:"Drag and drop your source code files here or click to select"}),t.jsx("input",{type:"file",id:"fileInput",style:{display:"none"},multiple:!0,onChange:l})]}),n]})},Fe="_button_nc3y6_2",De="_small_nc3y6_15",Le="_medium_nc3y6_22",Re="_large_nc3y6_29",Be="_primary_nc3y6_47",Oe="_success_nc3y6_56",Ee="_danger_nc3y6_65",Ie="_ghost_nc3y6_75",K={button:Fe,small:De,medium:Le,large:Re,default:"_default_nc3y6_37",primary:Be,success:Oe,danger:Ee,ghost:Ie},ee=({variant:e="default",size:n="medium",disabled:r=!1,type:s="button",onClick:o,children:l,className:c,...g})=>{const a=[K.button,K[e],K[n],c].filter(Boolean).join(" ");return t.jsx("button",{type:s,className:a,onClick:o,disabled:r,...g,children:l})},Ae="_buttonWrapper_17g1b_1",qe={buttonWrapper:Ae},he=C.createContext(),z="~~~",Pe={"banana_sequence.py~~~1":[{id:1736520433506,content:"Hello"}],"banana_sequence.py~~~7":[{id:1736520444771,content:"Hi"}],"example.js~~~2":[{id:1736520433506,content:"Comment"}]},ze=({children:e})=>{const[n,r]=C.useState(Pe),[s,o]=C.useState(),l=(i,d,u)=>{const p=`${i}${z}${d}`;console.log("Adding comment to:",p);const h={id:Date.now(),content:u};r(S=>({...S,[p]:[...S[p]||[],h]}))},c=i=>{const d={id:Date.now(),content:i};o(d)},g=()=>(s==null?void 0:s.content)||"",a=(i,d,u,p)=>{const h=`${i}${z}${d}`;console.log("Updating comment at:",h),r(S=>({...S,[h]:S[h].map(($,k)=>k===u?{...$,content:p}:$)}))},f=(i,d,u)=>{const p=`${i}${z}${d}`;console.log("Deleting comment from:",p),r(h=>({...h,[p]:h[p].filter((S,$)=>$!==u)}))},m=(i,d)=>{const u=`${i}-${d}`;return n[u]||[]},_=C.useCallback(()=>{const i=Object.entries(n).map(([d,u])=>{const[p,h]=d.split(z);return{fileName:p,lineInfo:h,comments:u}});return s!=null&&s.content?[...i,{fileName:"global",lineInfo:"global",comments:[s]}]:i},[n,s]),x=C.useCallback(i=>Object.entries(n).filter(([u])=>u.startsWith(`${i}${z}`)).map(([u,p])=>({lineInfo:u.split(z)[1],comments:p})),[n]);return t.jsx(he.Provider,{value:{addComment:l,deleteComment:f,updateComment:a,getComments:m,getAllComments:_,addGlobalComment:c,getGlobalComment:g,getAllCommentsForFile:x},children:e})},W=()=>C.useContext(he),ae=JSON.parse(document.getElementById("config-json-data").textContent),He=()=>{window.scrollTo({top:0,behavior:"smooth"})},Te=({uploadedFiles:e,onSubmit:n,children:r,...s})=>{const{getAllComments:o}=W(),l=o(),c=!!Object.keys(e).length,g=!!l.length,a=async()=>{let m=`@${ae.botName} /update`,_=JSON.stringify({files:e,comments:l}),x=`${m}
~~~
${_}`;if(c&&!g&&(m=`@${ae.botName} /set`,_=JSON.stringify({files:e}),x=`${m}
~~~
${_}`),console.log("Message",x),He(),window.Poe){const i=await window.Poe.sendUserMessage(x);console.log("Update sent",i)}},f=!c&&!g;return t.jsx("div",{className:qe.buttonWrapper,children:t.jsx(ee,{onClick:a,disabled:!!f,variant:"success",...s,children:r})})};const Me="_diffContainer_vza99_1",Ue="_fileContent_vza99_3",We="_addCommentButton_vza99_23",Je="_commentRow_vza99_46",Ge="_commentCell_vza99_50",F={diffContainer:Me,fileContent:Ue,"d2h-code-side-emptyplaceholder":"_d2h-code-side-emptyplaceholder_vza99_13","d2h-info":"_d2h-info_vza99_13",addCommentButton:We,commentRow:Je,commentCell:Ge},Ke="_container_1jkch_2",Ze="_header_1jkch_14",Ve="_buttonGroup_1jkch_25",Ye="_content_1jkch_31",Qe="_noHeader_1jkch_36",H={container:Ke,header:Ze,buttonGroup:Ve,content:Ye,noHeader:Qe},J=({header:e,buttons:n,children:r})=>t.jsxs("div",{className:H.container,children:[e&&t.jsxs("div",{className:H.header,children:[e,t.jsx("div",{className:H.buttonGroup,children:n})]}),t.jsx("div",{className:`${H.content} ${e?"":H.noHeader}`,children:r})]}),_e=({content:e,onCopySuccess:n,onCopyError:r,defaultLabel:s="Copy",successLabel:o="Copied!",children:l=s,...c})=>{const[g,a]=C.useState(!1),f=async()=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const m=document.createElement("textarea");m.value=e,m.style.top="0",m.style.left="0",m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.focus(),m.select(),document.execCommand("copy"),document.body.removeChild(m)}a(!0),n==null||n(),setTimeout(()=>a(!1),2e3)}catch(m){r==null||r(m)}};return t.jsx(ee,{onClick:f,...c,children:g?o:l})},Xe="_commentSection_zs6q7_1",et="_stickyComment_zs6q7_12",tt="_commentSectionHeader_zs6q7_22",nt="_comment_zs6q7_1",ot="_commentList_zs6q7_37",st="_commentHeader_zs6q7_41",ct="_commentContent_zs6q7_48",rt="_commentForm_zs6q7_54",lt="_commentInput_zs6q7_59",at="_submitComment_zs6q7_70",mt="_deleteComment_zs6q7_81",it="_closeButton_zs6q7_90",I={commentSection:Xe,stickyComment:et,commentSectionHeader:tt,comment:nt,commentList:ot,commentHeader:st,commentContent:ct,commentForm:rt,commentInput:lt,submitComment:at,deleteComment:mt,closeButton:it},dt=({content:e,onDelete:n})=>t.jsx("div",{className:I.comment,children:t.jsxs("div",{className:I.commentHeader,children:[t.jsx("div",{className:I.commentContent,children:e}),t.jsx("button",{className:I.deleteComment,onClick:n,children:"×"})]})}),ut=({onSubmit:e})=>{const[n,r]=C.useState(""),s=o=>{o.preventDefault(),n.trim()&&(e(n),r(""))};return t.jsxs("form",{className:I.commentForm,onSubmit:s,children:[t.jsx("textarea",{value:n,onChange:o=>r(o.target.value),placeholder:"Add a comment...",className:I.commentInput}),t.jsx("button",{onClick:s,className:I.submitComment,children:"Comment"})]})},Ce=({lineNumber:e,comments:n,onAddComment:r,onDeleteComment:s,onClose:o})=>t.jsx(ut,{onSubmit:r}),ge=({comments:e,onDeleteComment:n})=>e.length?t.jsx("div",{className:I.commentList,children:e.map((r,s)=>t.jsx(dt,{...r,onDelete:()=>n(s)},s))}):null,pt={drawFileList:!1,matching:"lines",outputFormat:"line-by-line",highlight:!1,colorScheme:"dark",renderNothingWhenEmpty:!0,rawTemplates:{"generic-wrapper":'<div class="d2h-auto-color-scheme">{{{content}}}</div>',"line-by-line-file-diff":`
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
            </div>`}},ft=E.memo(({file:e,fileContent:n,commentsEnabled:r=!0})=>{const s=E.useRef(null),[o,l]=C.useState(null),c=E.useRef(null),[g,a]=C.useState([]),{addComment:f,deleteComment:m,getComments:_,getAllCommentsForFile:x}=W(),i=C.useMemo(()=>({__html:ye([e],pt)}),[e]),d=C.useCallback(()=>{if(!s.current)return;(()=>{s.current.querySelectorAll(`.${F.commentRow}`).forEach(b=>{b!==c.current&&b.remove()})})();const G=x(e.newName).reduce((y,{lineInfo:b,comments:B})=>(y[b]=B,y),{}),q=[],w={};s.current.querySelectorAll(".d2h-code-linenumber").forEach(y=>{var O,v,j,L,N,A;const b=(j=(v=(O=y.querySelector(".line-num1"))==null?void 0:O.textContent)==null?void 0:v.trim)==null?void 0:j.call(v),P=((A=(N=(L=y.querySelector(".line-num2"))==null?void 0:L.textContent)==null?void 0:N.trim)==null?void 0:A.call(N))||b;w[P]||(w[P]=[]),w[P].push(y)}),Object.entries(w).forEach(([y,b])=>{const B=G[y];if(!(B!=null&&B.length))return;const O=(b[1]?b[1]:b[0]).closest("tr");if(!O)return;const v=O.closest("tbody");if(!v)return;const j=document.createElement("tr");j.className=`${F.commentRow}`,j.setAttribute("data-line",y);const L=document.createElement("div");L.className="portal-container";const N=document.createElement("td");N.className=`${F.commentCell}`,N.colSpan=3,N.appendChild(L),j.appendChild(N),O.nextSibling?v.insertBefore(j,O.nextSibling):v.appendChild(j),q.push(t.jsx(E.Fragment,{children:Y.createPortal(t.jsx(ge,{comments:B,onDeleteComment:A=>m(e.newName,y,A)}),L)},`${e.newName}-${y}`))}),a(q)},[e.newName,x,m]);E.useEffect(()=>{setTimeout(async()=>{var k;if(s.current){const te=s.current.querySelectorAll(".d2h-code-linenumber"),G=((k=e.newName)==null?void 0:k.split(".").pop())||"";te.forEach(w=>{const y=w.closest("tr");if(!y.classList.contains("d2h-del")&&r){const b=document.createElement("button");b.className=F.addCommentButton,b.innerHTML="+",y.appendChild(b),y.addEventListener("mouseenter",()=>{b.style.opacity="1"}),y.addEventListener("mouseleave",()=>{b.style.opacity="0"}),b.addEventListener("click",B=>{var A,T,ne,oe,M,se;const P=(ne=(T=(A=w.querySelector(".line-num1"))==null?void 0:A.textContent)==null?void 0:T.trim)==null?void 0:ne.call(T),v=((se=(M=(oe=w.querySelector(".line-num2"))==null?void 0:oe.textContent)==null?void 0:M.trim)==null?void 0:se.call(M))||P;if(console.log("clicked",o,v),o===v)return;c.current&&(c.current.remove(),c.current=null),l(v);const j=document.createElement("tr");j.className=F.commentRow,j.innerHTML=`<td colspan="3" class="${F.commentCell}"></td>`;const L=`.${F.commentRow}[data-line="${v}"]`;console.log("selector",L);const N=Array.from(s.current.querySelectorAll(L));if(N.length>0){const ce=N[N.length-1];ce.parentNode.insertBefore(j,ce.nextSibling)}else y.parentNode.insertBefore(j,y.nextSibling);c.current=j})}});const q=s.current.querySelectorAll(".d2h-code-line-ctn");q==null||q.forEach(w=>{w.dataset.highlighted||(Q.configure({ignoreUnescapedHTML:!0}),w.classList.add(`language-${G}`),Q.highlightElement(w))})}},0)},[i,e.newName,r,o]),E.useEffect(()=>{d()},[d]);const u=k=>{o&&(f(e.newName,o,k),d())},p=k=>{m(e.newName,o,k),d()},h=()=>{c.current&&(c.current.remove(),c.current=null),l(null)},S=e.isNew?e.newName:e.oldName,$=e.isRename?`${e.oldName} -> ${e.newName}`:S;return t.jsx(J,{header:$,buttons:t.jsx(_e,{size:"small",content:n}),children:t.jsxs("div",{className:F.diffContainer,children:[t.jsx("div",{className:F.fileContent,ref:s,dangerouslySetInnerHTML:i}),g,r&&o&&c.current&&Y.createPortal(t.jsx(Ce,{lineNumber:o,comments:_(e.newName,o),onAddComment:u,onDeleteComment:p,onClose:h}),c.current.querySelector(`.${F.commentCell}`))]})})}),ht=({diff:e,files:n,commentsEnabled:r=!0})=>C.useMemo(()=>ue(e),[e]).map(o=>t.jsx(ft,{file:o,fileContent:n[o.newName],commentsEnabled:r},o.newName));const _t="_container_1mk1f_1",Ct="_codeWrapper_1mk1f_7",gt="_inlineCommentSection_1mk1f_16",yt="_codeLine_1mk1f_21",xt="_lineNumber_1mk1f_35",bt="_hoverable_1mk1f_48",jt="_lineContent_1mk1f_57",vt="_addCommentButton_1mk1f_61",R={container:_t,codeWrapper:Ct,inlineCommentSection:gt,codeLine:yt,lineNumber:xt,hoverable:bt,lineContent:jt,addCommentButton:vt},Nt=JSON.parse(document.getElementById("config-json-data").textContent),wt=({content:e,filename:n,children:r="Deploy",...s})=>{const o=async()=>{let l=`@${Nt.botName} /deploy`,c=JSON.stringify({filename:n}),g=`${l}
~~~
${c}`;if(console.log("Message",g),window.Poe){const a=await window.Poe.sendUserMessage(g);console.log("Update sent",a)}};return n.endsWith(".html")?t.jsx(ee,{onClick:o,...s,children:"Deploy"}):null},St=e=>{const n=e.split(".").pop().toLowerCase();return{js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",rb:"ruby",java:"java",cpp:"cpp",c:"c",cs:"csharp",html:"html",css:"css",scss:"scss",sass:"scss",php:"php",go:"go",rs:"rust",swift:"swift",kt:"kotlin",md:"markdown",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",sql:"sql",sh:"bash",bash:"bash",dockerfile:"dockerfile"}[n]||"plaintext"},$t=({lineNumber:e,content:n,commentsEnabled:r,onLineSelect:s,language:o,selectedLine:l,existingComments:c,onAddComment:g,onDeleteComment:a,onClose:f})=>{const[m,_]=C.useState(!1),x=C.useRef(null);return C.useEffect(()=>{!x.current||x.current.dataset.highlighted==="yes"||Q.highlightElement(x.current)},[n]),t.jsxs("div",{className:R.lineContainer,children:[t.jsxs("div",{className:R.codeLine,"data-line":e,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),onClick:()=>s(e),children:[t.jsx("span",{className:`${R.lineNumber}${r?" "+R.hoverable:""}`,children:String(e).padStart(3)}),t.jsx("span",{ref:x,className:`${R.lineContent} language-${o}`,children:n}),r&&t.jsx("button",{className:R.addCommentButton,style:{opacity:m?1:0},onClick:i=>{i.stopPropagation(),s(e)},children:"+"})]}),c&&c.length>0&&t.jsx("div",{className:R.existingComments,children:t.jsx(ge,{comments:c,onDeleteComment:i=>a(i)})}),l===e&&r&&t.jsx(Ce,{lineNumber:e,comments:c||[],onAddComment:g,onDeleteComment:a,onClose:f})]})},me=({filename:e,content:n,commentsEnabled:r=!0})=>{const[s,o]=C.useState(null),{addComment:l,deleteComment:c,getAllCommentsForFile:g}=W(),a=St(e),f=n.split(`
`),m=t.jsxs(t.Fragment,{children:[t.jsx(wt,{size:"small",filename:e}),t.jsx(_e,{size:"small",content:n})]}),x=g(e).reduce((u,{lineInfo:p,comments:h})=>(u[p]=h,u),{}),i=(u,p)=>{l(e,u,p)},d=(u,p)=>{c(e,u,p)};return t.jsx(J,{header:e,buttons:m,children:t.jsx("div",{className:R.container,children:t.jsx("pre",{className:R.codeWrapper,children:t.jsx("code",{className:`language-${a}`,children:f.map((u,p)=>{const h=p+1,S=x[h]||[];return t.jsx($t,{lineNumber:h,content:u,commentsEnabled:r,onLineSelect:o,language:a,selectedLine:s,existingComments:S,onAddComment:$=>i(h,$),onDeleteComment:$=>d(h,$),onClose:()=>o(null)},h)})})})})})},kt="_container_7qw4f_2",Ft={container:kt},Dt="_diffDescription_guii0_2",Lt={diffDescription:Dt},ie=({description:e})=>e?t.jsx(J,{children:t.jsx("div",{className:Lt.diffDescription,children:e})}):null;function Rt(e){return e?ue(e).map(n=>n.newName):[]}const Bt="_container_r5p9y_1",Ot="_commentForm_r5p9y_7",Et="_commentInput_r5p9y_11",Z={container:Bt,commentForm:Ot,commentInput:Et},It=()=>{const{addGlobalComment:e,getGlobalComment:n}=W(),[r,s]=C.useState(n()),o=l=>{const c=l.target.value;s(c),e(c)};return t.jsx(J,{header:"Comment",children:t.jsx("div",{className:Z.container,children:t.jsx("div",{className:Z.commentForm,children:t.jsx("textarea",{value:r,onChange:o,placeholder:"What would you like to do?",className:Z.commentInput})})})})},D=JSON.parse(document.getElementById("config-json-data").textContent),V=JSON.parse(document.getElementById("files-json-data").textContent),de=JSON.parse(document.getElementById("diff-json-data").textContent),At=()=>{const[e,n]=C.useState({}),r=Rt(de),s=Object.keys(V).reduce((a,f)=>(r.includes(f)||(a[f]=V[f]),a),{}),o=async a=>{try{const f=_=>new Promise((x,i)=>{const d=new FileReader;d.onload=()=>x(d.result),d.onerror=i,d.readAsText(_)}),m=await Promise.all(Array.from(a).map(async _=>[_.name,await f(_)]));n(_=>({..._,...Object.fromEntries(m)}))}catch(f){console.error("Error reading files:",f)}},l=async()=>{const a=JSON.stringify({files:e}),m=`${`@${D.botName} /set`}
~~~
${a}`;if(console.log("Message:",m),window.Poe){const _=await window.Poe.sendUserMessage(m);console.log("Files sent",_)}};E.useEffect(()=>{D.shouldAutoSubmitUpload&&Object.keys(e).length>0&&l()},[e]);const c=a=>{n(f=>{const m={...f};return delete m[a],m})},g=()=>t.jsxs(t.Fragment,{children:[t.jsxs("h1",{children:["🚀 ",D.botName]}),t.jsx("p",{children:"🤯 Tired of AI bots playing hide-and-seek with your code?"}),t.jsx("p",{children:'Finally! A way to get AI code assistant without the endless "..." or "code continues here" nonsense. Just upload, ask, and get the job done. Simple as that! ⚡️'})]});return t.jsx(ze,{children:t.jsxs("div",{className:Ft.container,children:[D.isInitialPage&&t.jsx(ie,{description:t.jsx(g,{})}),t.jsx(ie,{description:D.description}),D.shouldShowUpload&&t.jsx(ke,{onFilesDrop:o}),t.jsx(ht,{diff:de,files:V,commentsEnabled:D.shouldShowComments}),Object.keys(s).map(a=>t.jsx(me,{filename:a,content:s[a],commentsEnabled:D.shouldShowComments},a)),Object.keys(e).map(a=>t.jsx(me,{filename:a,content:e[a],onRemove:()=>c(a),commentsEnabled:D.shouldShowComments},a)),D.shouldShowComments&&t.jsx(It,{}),t.jsx(Te,{uploadedFiles:e,size:"large",children:"Send message"})]})})};X.createRoot(document.getElementById("root")).render(t.jsx(E.StrictMode,{children:t.jsx(At,{})}));