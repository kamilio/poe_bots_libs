import{r as d,a as Y,R as O,m as we}from"./assets/vendor-891a2f54.js";import{h as Se,p as pe}from"./assets/diff2html-520d79da.js";import{H as Q}from"./assets/hljs-c6694249.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var fe={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=d,ke=Symbol.for("react.element"),Fe=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Re=$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,De={key:!0,ref:!0,__self:!0,__source:!0};function he(e,n,r){var s,o={},a=null,c=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(c=n.ref);for(s in n)Le.call(n,s)&&!De.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:ke,type:e,key:a,ref:c,props:o,_owner:Re.current}}U.Fragment=Fe;U.jsx=he;U.jsxs=he;fe.exports=U;var t=fe.exports,X={},ie=Y;X.createRoot=ie.createRoot,X.hydrateRoot=ie.hydrateRoot;const Ee="_container_1kx9n_2",Ie="_uploadZone_1kx9n_10",me={container:Ee,uploadZone:Ie},Be=({onFilesDrop:e,children:n})=>{const r=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#0969da"},s=c=>{c.currentTarget.style.borderColor="#30363d"},o=c=>{c.preventDefault(),c.currentTarget.style.borderColor="#30363d",e(c.dataTransfer.files)},a=c=>{e(c.target.files),c.target.value=""};return t.jsxs("div",{className:me.container,children:[t.jsxs("div",{className:me.uploadZone,onDragOver:r,onDragLeave:s,onDrop:o,onClick:()=>document.getElementById("fileInput").click(),children:[t.jsx("p",{children:"Drag and drop your source code files here or click to select"}),t.jsx("input",{type:"file",id:"fileInput",style:{display:"none"},multiple:!0,onChange:a})]}),n]})},Oe="_button_nc3y6_2",Pe="_small_nc3y6_15",Ae="_medium_nc3y6_22",Me="_large_nc3y6_29",Te="_primary_nc3y6_47",He="_success_nc3y6_56",We="_danger_nc3y6_65",qe="_ghost_nc3y6_75",Z={button:Oe,small:Pe,medium:Ae,large:Me,default:"_default_nc3y6_37",primary:Te,success:He,danger:We,ghost:qe},te=({variant:e="default",size:n="medium",disabled:r=!1,type:s="button",onClick:o,children:a,className:c,..._})=>{const C=[Z.button,Z[e],Z[n],c].filter(Boolean).join(" ");return t.jsx("button",{type:s,className:C,onClick:o,disabled:r,..._,children:a})},ze="_buttonWrapper_17g1b_1",Ge={buttonWrapper:ze};function _e(e,n,{openChat:r=!1,stream:s=!0,transformCompleteResponse:o=a=>a}={}){const[a,c]=d.useState(n),[_,C]=d.useState(n),[g,p]=d.useState(!1),[b,y]=d.useState(null),[l,i]=d.useState(!1);d.useEffect(()=>{if(!window.Poe){console.info("Poe not found in window object");return}return window.Poe.registerHandler(e,m=>{const h=m.responses[0];h.status==="error"?(y(h.statusText),c(n),p(!0),i(!1)):h.status==="incomplete"?(i(!0),C(h.content)):h.status==="complete"&&(i(!1),c(o(h.content)),C(h.content))})},[]);const u=d.useCallback(async m=>{if(m!=null&&m.trim()){i(!0),p(!1),y(null);try{if(console.log(m),!window.Poe){console.info("Poe not found in window object");return}await window.Poe.sendUserMessage(m,{handler:e,stream:s,openChat:r})}catch(h){console.log(h),p(!0),y(h)}}},[e,r,s]),f=d.useMemo(()=>{console.log(_);try{const m=JSON.parse(_);if(m.status)return console.log("status",m.status),m.status}catch{}},[_]);return{sendMessage:u,sendUserMessage:u,response:a,isError:g,error:b,isLoading:l,streamingResult:_,statusText:f}}const Ce=(e,n,r)=>{const s=`@${e} ${n}`,o=JSON.stringify({...r,format:"json"});return`${s}
~~~
${o}`},ee=e=>{console.log(e);const n=e.replace(/\n\n---\n\n\[Logs\]\([^\)]+\)/g,"");return console.log(n),JSON.parse(n)},ge=d.createContext(),M="~~~",ye=(e,n)=>{if(!e)return[];let r=Object.entries(e).map(([s,o])=>{const[a,c]=s.split(M);return{fileName:a,lineInfo:c,comments:o}});return n!=null&&n.content&&(r=[...r,{fileName:"global",lineInfo:"global",comments:[n]}]),r=r.filter(({comments:s})=>s.length),r},Je=({comments:e,setComments:n,globalComment:r,setGlobalComment:s,children:o})=>{const a=(l,i,u)=>{const f=`${l}${M}${i}`,m={id:Date.now(),content:u};n(h=>({...h,[f]:[...h[f]||[],m]}))},c=l=>{const i={id:Date.now(),content:l};s(i)},_=()=>(r==null?void 0:r.content)||"",C=(l,i,u,f)=>{const m=`${l}${M}${i}`;n(h=>({...h,[m]:h[m].map((x,T)=>T===u?{...x,content:f}:x)}))},g=(l,i,u)=>{const f=`${l}${M}${i}`;n(m=>({...m,[f]:m[f].filter((h,x)=>x!==u)}))},p=(l,i)=>{const u=`${l}-${i}`;return e[u]||[]},b=d.useCallback(()=>ye(e,r),[e,r]),y=d.useCallback(l=>e?Object.entries(e).filter(([u])=>u.startsWith(`${l}${M}`)).map(([u,f])=>({lineInfo:u.split(M)[1],comments:f})):[],[e]);return t.jsx(ge.Provider,{value:{addComment:a,deleteComment:g,updateComment:C,getComments:p,getAllComments:b,addGlobalComment:c,getGlobalComment:_,getAllCommentsForFile:y},children:o})},ne=()=>d.useContext(ge),xe=d.createContext(null);function Ue({children:e,initialFiles:n,initialComments:r,initialDiff:s,config:o}){const[a,c]=d.useState({}),[_,C]=d.useState(r),[g,p]=d.useState(),[b,y]=d.useState(o),l=ye(_,g),{response:i,isLoading:u,sendMessage:f,statusText:m}=_e("store",{isInitial:!0,files:n,comments:null,diff:s,description:b.description},{transformCompleteResponse:ee}),h=!!Object.keys(a).length,x=!!l.length,T=d.useCallback(()=>{if(!h&&!x)return;const H=Ce(b.botName,"/update",{files:a,comments:l});f(H,{transformCompleteResponse:ee})},[a,l,h,x]),k=h||x;d.useEffect(()=>{i.isInitial||(C(i.comments||{}),p(""),c({}),y({...b,shouldShowUpload:!1,isInitialPage:!1}))},[i]);const q={config:b,uploadedFiles:a,setUploadedFiles:c,sendSubmitMessage:T,canSubmitMessage:k,files:i.files,isLoading:u,diff:i.diff,description:i.description,statusText:m};return t.jsx(xe.Provider,{value:q,children:t.jsx(Je,{setComments:C,setGlobalComment:p,globalComment:g,comments:_,children:e})})}function oe(){return d.useContext(xe)}JSON.parse(document.getElementById("config-json-data").textContent);const de=({uploadedFiles:e,onSubmit:n,children:r,...s})=>{const{sendSubmitMessage:o,canSubmitMessage:a}=oe();return t.jsx("div",{className:Ge.buttonWrapper,children:t.jsx(te,{onClick:o,disabled:!a,variant:"success",...s,children:r})})};const Ke="_diffContainer_vza99_1",Ze="_fileContent_vza99_3",Ve="_addCommentButton_vza99_23",Ye="_commentRow_vza99_46",Qe="_commentCell_vza99_50",F={diffContainer:Ke,fileContent:Ze,"d2h-code-side-emptyplaceholder":"_d2h-code-side-emptyplaceholder_vza99_13","d2h-info":"_d2h-info_vza99_13",addCommentButton:Ve,commentRow:Ye,commentCell:Qe},Xe="_container_1jkch_2",et="_header_1jkch_14",tt="_buttonGroup_1jkch_25",nt="_content_1jkch_31",ot="_noHeader_1jkch_36",W={container:Xe,header:et,buttonGroup:tt,content:nt,noHeader:ot},K=({header:e,buttons:n,children:r})=>t.jsxs("div",{className:W.container,children:[e&&t.jsxs("div",{className:W.header,children:[e,t.jsx("div",{className:W.buttonGroup,children:n})]}),t.jsx("div",{className:`${W.content} ${e?"":W.noHeader}`,children:r})]}),se=({content:e,onCopySuccess:n,onCopyError:r,defaultLabel:s="Copy",successLabel:o="Copied!",children:a=s,...c})=>{const[_,C]=d.useState(!1),g=async()=>{try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(e);else{const p=document.createElement("textarea");p.value=e,p.style.top="0",p.style.left="0",p.style.position="fixed",p.style.opacity="0",document.body.appendChild(p),p.focus(),p.select(),document.execCommand("copy"),document.body.removeChild(p)}C(!0),n==null||n(),setTimeout(()=>C(!1),2e3)}catch(p){r==null||r(p)}};return t.jsx(te,{onClick:g,...c,children:_?o:a})},st="_commentSection_1sd2d_1",rt="_stickyComment_1sd2d_12",ct="_commentSectionHeader_1sd2d_22",at="_comment_1sd2d_1",lt="_commentList_1sd2d_38",it="_commentWrapper_1sd2d_44",mt="_deleteComment_1sd2d_50",dt="_formHeader_1sd2d_63",ut="_commentContent_1sd2d_68",pt="_commentForm_1sd2d_76",ft="_commentInput_1sd2d_84",ht="_formFooter_1sd2d_95",_t="_submitComment_1sd2d_99",Ct="_closeButton_1sd2d_111",R={commentSection:st,stickyComment:rt,commentSectionHeader:ct,comment:at,commentList:lt,commentWrapper:it,deleteComment:mt,formHeader:dt,commentContent:ut,commentForm:pt,commentInput:ft,formFooter:ht,submitComment:_t,closeButton:Ct},gt=({content:e,onDelete:n})=>t.jsx("div",{className:R.comment,children:t.jsxs("div",{className:R.commentWrapper,children:[t.jsx("div",{className:R.commentContent,children:e}),t.jsx("button",{className:R.deleteComment,onClick:n,children:"×"})]})}),yt=({onSubmit:e})=>{const[n,r]=d.useState(""),s=o=>{o.preventDefault(),n.trim()&&(e(n),r(""))};return t.jsxs("form",{className:R.commentForm,onSubmit:s,children:[t.jsx("textarea",{value:n,onChange:o=>r(o.target.value),placeholder:"Add a comment...",className:R.commentInput}),t.jsx("div",{className:R.formFooter,children:t.jsx("button",{onClick:s,className:R.submitComment,children:"Comment"})})]})},je=({lineNumber:e,comments:n,onAddComment:r,onDeleteComment:s,onClose:o})=>t.jsx(yt,{onSubmit:r}),ve=({comments:e,onDeleteComment:n})=>e.length?t.jsx("div",{className:R.commentList,children:e.map((r,s)=>t.jsx(gt,{...r,onDelete:()=>n(s)},s))}):null,be=({content:e,filename:n,children:r="Deploy",...s})=>{const{uploadedFiles:o,config:a}=oe(),{sendMessage:c,isLoading:_,response:C,statusText:g}=_e(`deploy-${n}`,"",{transformCompleteResponse:ee});return a.deploySupportedFileExtensions.includes(n.split(".").pop())?C.url?t.jsx(se,{content:C.url,...s,children:"Deployed. Click to Copy!"}):t.jsx(te,{onClick:()=>c(Ce(a.botName,"/deploy",{filename:n,files:o})),...s,children:_?g||"Deploying":"Deploy"}):null},xt={drawFileList:!1,matching:"lines",outputFormat:"line-by-line",highlight:!1,colorScheme:"dark",renderNothingWhenEmpty:!0,rawTemplates:{"generic-wrapper":'<div class="d2h-auto-color-scheme">{{{content}}}</div>',"line-by-line-file-diff":`
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
            </div>`}},jt=O.memo(({file:e,fileContent:n,commentsEnabled:r=!0})=>{const s=O.useRef(null),[o,a]=d.useState(null),c=O.useRef(null),[_,C]=d.useState([]),{addComment:g,deleteComment:p,getComments:b,getAllCommentsForFile:y}=ne(),l=d.useMemo(()=>({__html:Se([e],xt)}),[e]),i=d.useCallback(()=>{if(!s.current)return;(()=>{s.current.querySelectorAll(`.${F.commentRow}`).forEach(v=>{v!==c.current&&v.remove()})})();const H=y(e.newName).reduce((j,{lineInfo:v,comments:D})=>(j[v]=D,j),{}),P=[],S={};s.current.querySelectorAll(".d2h-code-linenumber").forEach(j=>{var E,$,N,I,w,B;const v=(N=($=(E=j.querySelector(".line-num1"))==null?void 0:E.textContent)==null?void 0:$.trim)==null?void 0:N.call($),A=((B=(w=(I=j.querySelector(".line-num2"))==null?void 0:I.textContent)==null?void 0:w.trim)==null?void 0:B.call(w))||v;S[A]||(S[A]=[]),S[A].push(j)}),Object.entries(S).forEach(([j,v])=>{const D=H[j];if(!(D!=null&&D.length))return;const E=(v[1]?v[1]:v[0]).closest("tr");if(!E)return;const $=E.closest("tbody");if(!$)return;const N=document.createElement("tr");N.className=`${F.commentRow}`,N.setAttribute("data-line",j);const I=document.createElement("div");I.className="portal-container";const w=document.createElement("td");w.className=`${F.commentCell}`,w.colSpan=3,w.appendChild(I),N.appendChild(w),E.nextSibling?$.insertBefore(N,E.nextSibling):$.appendChild(N),P.push(t.jsx(O.Fragment,{children:Y.createPortal(t.jsx(ve,{comments:D,onDeleteComment:B=>p(e.newName,j,B)}),I)},`${e.newName}-${j}`))}),C(P)},[e.newName,y,p]);O.useEffect(()=>{setTimeout(async()=>{var k;if(s.current){const q=s.current.querySelectorAll(".d2h-code-linenumber"),H=((k=e.newName)==null?void 0:k.split(".").pop())||"";q.forEach(S=>{const j=S.closest("tr");if(!j.classList.contains("d2h-del")&&r){const v=document.createElement("button");v.className=F.addCommentButton,v.innerHTML="+",j.appendChild(v),j.addEventListener("mouseenter",()=>{v.style.opacity="1"}),j.addEventListener("mouseleave",()=>{v.style.opacity="0"}),v.addEventListener("click",D=>{var B,z,re,ce,G,ae;const A=(re=(z=(B=S.querySelector(".line-num1"))==null?void 0:B.textContent)==null?void 0:z.trim)==null?void 0:re.call(z),$=((ae=(G=(ce=S.querySelector(".line-num2"))==null?void 0:ce.textContent)==null?void 0:G.trim)==null?void 0:ae.call(G))||A;if(o===$)return;c.current&&(c.current.remove(),c.current=null),a($);const N=document.createElement("tr");N.className=F.commentRow,N.innerHTML=`<td colspan="3" class="${F.commentCell}"></td>`;const I=`.${F.commentRow}[data-line="${$}"]`,w=Array.from(s.current.querySelectorAll(I));if(w.length>0){const le=w[w.length-1];le.parentNode.insertBefore(N,le.nextSibling)}else j.parentNode.insertBefore(N,j.nextSibling);c.current=N})}});const P=s.current.querySelectorAll(".d2h-code-line-ctn");P==null||P.forEach(S=>{S.dataset.highlighted||(Q.configure({ignoreUnescapedHTML:!0}),S.classList.add(`language-${H}`),Q.highlightElement(S))})}},0)},[l,e.newName,r,o]),O.useEffect(()=>{i()},[i]);const u=k=>{o&&(g(e.newName,o,k),i())},f=k=>{p(e.newName,o,k),i()},m=()=>{c.current&&(c.current.remove(),c.current=null),a(null)},h=e.isNew?e.newName:e.oldName,x=e.isRename?`${e.oldName} -> ${e.newName}`:h,T=t.jsxs(t.Fragment,{children:[t.jsx(be,{size:"small",filename:e.newName}),t.jsx(se,{size:"small",content:n})]});return t.jsx(K,{header:x,buttons:T,children:t.jsxs("div",{className:F.diffContainer,children:[t.jsx("div",{className:F.fileContent,ref:s,dangerouslySetInnerHTML:l}),_,r&&o&&c.current&&Y.createPortal(t.jsx(je,{lineNumber:o,comments:b(e.newName,o),onAddComment:u,onDeleteComment:f,onClose:m}),c.current.querySelector(`.${F.commentCell}`))]})})}),vt=({diff:e,files:n,commentsEnabled:r=!0})=>e?d.useMemo(()=>pe(e),[e]).map(o=>t.jsx(jt,{file:o,fileContent:n[o.newName],commentsEnabled:r},o.newName)):null;const bt="_container_1mk1f_1",Nt="_codeWrapper_1mk1f_7",wt="_inlineCommentSection_1mk1f_16",St="_codeLine_1mk1f_21",$t="_lineNumber_1mk1f_35",kt="_hoverable_1mk1f_48",Ft="_lineContent_1mk1f_57",Lt="_addCommentButton_1mk1f_61",L={container:bt,codeWrapper:Nt,inlineCommentSection:wt,codeLine:St,lineNumber:$t,hoverable:kt,lineContent:Ft,addCommentButton:Lt},Rt=e=>{const n=e.split(".").pop().toLowerCase();return{js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",py:"python",rb:"ruby",java:"java",cpp:"cpp",c:"c",cs:"csharp",html:"html",css:"css",scss:"scss",sass:"scss",php:"php",go:"go",rs:"rust",swift:"swift",kt:"kotlin",md:"markdown",json:"json",xml:"xml",yaml:"yaml",yml:"yaml",sql:"sql",sh:"bash",bash:"bash",dockerfile:"dockerfile"}[n]||"plaintext"},Dt=({lineNumber:e,content:n,commentsEnabled:r,onLineSelect:s,language:o,selectedLine:a,existingComments:c,onAddComment:_,onDeleteComment:C,onClose:g})=>{const[p,b]=d.useState(!1),y=d.useRef(null);return d.useEffect(()=>{!y.current||y.current.dataset.highlighted==="yes"||Q.highlightElement(y.current)},[n]),t.jsxs("div",{className:L.lineContainer,children:[t.jsxs("div",{className:L.codeLine,"data-line":e,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),onClick:()=>s(e),children:[t.jsx("span",{className:`${L.lineNumber}${r?" "+L.hoverable:""}`,children:String(e).padStart(3)}),t.jsx("span",{ref:y,className:`${L.lineContent} language-${o}`,children:n}),r&&t.jsx("button",{className:L.addCommentButton,style:{opacity:p?1:0},onClick:l=>{l.stopPropagation(),s(e)},children:"+"})]}),c&&c.length>0&&t.jsx("div",{className:L.existingComments,children:t.jsx(ve,{comments:c,onDeleteComment:l=>C(l)})}),a===e&&r&&t.jsx(je,{lineNumber:e,comments:c||[],onAddComment:_,onDeleteComment:C,onClose:g})]})},ue=({filename:e,content:n,commentsEnabled:r=!0})=>{const[s,o]=d.useState(null),{addComment:a,deleteComment:c,getAllCommentsForFile:_}=ne(),C=Rt(e),g=n.split(`
`),p=t.jsxs(t.Fragment,{children:[t.jsx(be,{size:"small",filename:e}),t.jsx(se,{size:"small",content:n})]}),y=_(e).reduce((u,{lineInfo:f,comments:m})=>(u[f]=m,u),{}),l=(u,f)=>{a(e,u,f)},i=(u,f)=>{c(e,u,f)};return t.jsx(K,{header:e,buttons:p,children:t.jsx("div",{className:L.container,children:t.jsx("pre",{className:L.codeWrapper,children:t.jsx("code",{className:`language-${C}`,children:g.map((u,f)=>{const m=f+1,h=y[m]||[];return t.jsx(Dt,{lineNumber:m,content:u,commentsEnabled:r,onLineSelect:o,language:C,selectedLine:s,existingComments:h,onAddComment:x=>l(m,x),onDeleteComment:x=>i(m,x),onClose:()=>o(null)},m)})})})})})},Et="_container_7qw4f_2",It={container:Et},Bt="_diffDescription_guii0_2",Ot={diffDescription:Bt},Ne=({markdown:e=""})=>t.jsx("div",{className:"markdown-container prose prose-sm sm:prose lg:prose-lg max-w-none",dangerouslySetInnerHTML:{__html:we(e)}}),Pt=({description:e})=>e?t.jsx(K,{children:t.jsx("div",{className:Ot.diffDescription,children:t.jsx(Ne,{markdown:e})})}):null;function At(e){return e?pe(e).map(n=>n.newName):[]}const Mt="_container_r5p9y_1",Tt="_commentForm_r5p9y_7",Ht="_commentInput_r5p9y_11",V={container:Mt,commentForm:Tt,commentInput:Ht},Wt=({children:e})=>{const{addGlobalComment:n,getGlobalComment:r}=ne(),[s,o]=d.useState(r()),a=c=>{const _=c.target.value;o(_),n(_)};return t.jsx(K,{header:"Comment",children:t.jsxs("div",{className:V.container,children:[t.jsx("div",{className:V.commentForm,children:t.jsx("textarea",{value:s,onChange:a,placeholder:"What would you like to do?",className:V.commentInput})}),e]})})},qt="_overlay_yjpva_1",zt="_content_yjpva_15",Gt="_spinner_yjpva_31",Jt="_spin_yjpva_31",J={overlay:qt,content:zt,spinner:Gt,spin:Jt};function Ut({text:e="Loading...",isVisible:n=!0}){return n?(console.log({text:e}),t.jsx("div",{className:J.overlay,children:t.jsxs("div",{className:J.content,children:[t.jsx("div",{className:J.spinner}),t.jsx("div",{className:J.text,children:t.jsx(Ne,{markdown:e})})]})})):null}const Kt=()=>{const{uploadedFiles:e,setUploadedFiles:n,files:r,diff:s,config:o,description:a,isLoading:c,statusText:_}=oe(),C=At(s),g=Object.keys(r).reduce((l,i)=>(C.includes(i)||(l[i]=r[i]),l),{}),p=async l=>{try{const i=f=>new Promise((m,h)=>{const x=new FileReader;x.onload=()=>m(x.result),x.onerror=h,x.readAsText(f)}),u=await Promise.all(Array.from(l).map(async f=>[f.name,await i(f)]));n(f=>({...f,...Object.fromEntries(u)}))}catch(i){console.error("Error reading files:",i)}},b=l=>{n(i=>{const u={...i};return delete u[l],u})},y=`# 🚀 ${o.botName}
🤯 Tired of AI bots playing hide-and-seek with your code?
Finally! A way to get AI code assistant without the endless "..." or "code continues here" nonsense. Just upload, ask, and get the job done. Simple as that! ⚡️
`;return t.jsxs("div",{className:It.container,children:[t.jsx(Ut,{isVisible:c,text:_}),t.jsx(Pt,{description:o.isInitialPage?y:a}),o.shouldShowUpload&&t.jsx(Be,{onFilesDrop:p,children:t.jsx(de,{uploadedFiles:e,size:"large",children:"Send message"})}),t.jsx(vt,{diff:s,files:r,commentsEnabled:o.shouldShowComments}),Object.keys(g).map(l=>t.jsx(ue,{filename:l,content:g[l],commentsEnabled:o.shouldShowComments},l)),Object.keys(e).map(l=>t.jsx(ue,{filename:l,content:e[l],onRemove:()=>b(l),commentsEnabled:o.shouldShowComments},l)),o.shouldShowComments&&t.jsx(Wt,{children:t.jsx(de,{uploadedFiles:e,size:"large",children:"Send message"})})]})},Zt=JSON.parse(document.getElementById("config-json-data").textContent),Vt=JSON.parse(document.getElementById("files-json-data").textContent),Yt=JSON.parse(document.getElementById("diff-json-data").textContent),Qt=JSON.parse(document.getElementById("comments-json-data").textContent);X.createRoot(document.getElementById("root")).render(t.jsx(O.StrictMode,{children:t.jsx(Ue,{initialFiles:Vt,initialComments:Qt,initialDiff:Yt,config:Zt,children:t.jsx(Kt,{})})}));
