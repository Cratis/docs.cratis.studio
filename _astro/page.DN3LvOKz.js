const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.B1vPDFXu.js","_astro/preload-helper.CVfkMyKi.js"])))=>i.map(i=>d[i]);
import{_ as te}from"./preload-helper.CVfkMyKi.js";const oe={},F=new Set,x=new WeakSet;let z=!0,W,_=!1;function re(e){_||(_=!0,z??=!1,W??="hover",ne(),se(),ae(),le())}function ne(){for(const e of["touchstart","mousedown"])document.addEventListener(e,r=>{const n=r.target.closest("a");k(n,"tap")&&L(n.href,{ignoreSlowConnection:!0})},{passive:!0})}function se(){let e;document.body.addEventListener("focusin",t=>{const s=t.target.closest("a");k(s,"hover")&&r(s.href)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),D(()=>{for(const t of document.getElementsByTagName("a"))x.has(t)||k(t,"hover")&&(x.add(t),t.addEventListener("mouseenter",s=>r(s.currentTarget.href),{passive:!0}),t.addEventListener("mouseleave",n,{passive:!0}))});function r(t){e&&clearTimeout(e),e=setTimeout(()=>{L(t)},80)}function n(){e&&(clearTimeout(e),e=0)}}function ae(){let e;D(()=>{for(const r of document.getElementsByTagName("a"))x.has(r)||k(r,"viewport")&&(x.add(r),e??=ie(),e.observe(r))})}function ie(){const e=new WeakMap;return new IntersectionObserver((r,n)=>{for(const t of r){const s=t.target,l=e.get(s);t.isIntersecting?(l&&clearTimeout(l),e.set(s,setTimeout(()=>{n.unobserve(s),e.delete(s),L(s.href)},300))):l&&(clearTimeout(l),e.delete(s))}})}function le(){D(()=>{for(const e of document.getElementsByTagName("a"))k(e,"load")&&L(e.href)})}function L(e,r){e=e.replace(/#.*/,"");const n=r?.ignoreSlowConnection??!1;if(ce(e,n))if(F.add(e),document.createElement("link").relList?.supports?.("prefetch")){const t=document.createElement("link");t.rel="prefetch",t.setAttribute("href",e),document.head.append(t)}else{const t=new Headers;for(const[s,l]of Object.entries(oe))t.set(s,l);fetch(e,{priority:"low",headers:t})}}function ce(e,r){if(!navigator.onLine||!r&&U())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!F.has(e)}catch{}return!1}function k(e,r){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:r==="tap"&&(n!=null||z)&&U()?!0:n==null&&z||n===""?r===W:n===r}function U(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function D(e){e();let r=!1;document.addEventListener("astro:page-load",()=>{if(!r){r=!0;return}e()})}const u=(...e)=>console.log("[astro-mermaid]",...e),G=(...e)=>console.error("[astro-mermaid]",...e),X=()=>document.querySelectorAll("pre.mermaid").length>0;let w=null;async function de(){return w||(u("Loading mermaid.js..."),w=te(()=>import("./mermaid.core.B1vPDFXu.js").then(e=>e.bP),__vite__mapDeps([0,1])).then(async({default:e})=>{const r=[];if(r&&r.length>0){u("Registering",r.length,"icon packs");const n=r.map(t=>t.icons?{name:t.name,icons:t.icons}:{name:t.name,loader:()=>fetch(t.url).then(s=>s.json())});await e.registerIconPacks(n)}return e}).catch(e=>{throw G("Failed to load mermaid:",e),w=null,e}),w)}const H={startOnLoad:!1,theme:"default",fontFamily:"'Inter Variable', Inter, system-ui, sans-serif",flowchart:{padding:14,nodeSpacing:50,rankSpacing:55,useMaxWidth:!0}},ue={light:"default",dark:"dark"};async function O(){u("Initializing mermaid diagrams...");const e=document.querySelectorAll("pre.mermaid");if(u("Found",e.length,"mermaid diagrams"),e.length===0)return;const r=await de();let n=H.theme;{const t=document.documentElement.getAttribute("data-theme"),s=document.body.getAttribute("data-theme");n=ue[t||s]||H.theme,u("Using theme:",n,"from",t?"html":"body")}r.initialize({...H,theme:n,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const t of e){if(t.hasAttribute("data-processed"))continue;t.hasAttribute("data-diagram")||t.setAttribute("data-diagram",t.textContent||"");const s=t.getAttribute("data-diagram")||"",l="mermaid-"+Math.random().toString(36).slice(2,11);u("Rendering diagram:",l);try{const p=document.getElementById(l);p&&p.remove();const{svg:d}=await r.render(l,s);t.innerHTML=d,t.setAttribute("data-processed","true"),u("Successfully rendered diagram:",l)}catch(p){G("Mermaid rendering error for diagram:",l,p);const d=document.createElement("div");d.style.cssText="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;";const g=document.createElement("strong");g.textContent="Error rendering diagram:";const b=document.createElement("span");b.textContent=" "+(p.message||"Unknown error"),d.appendChild(g),d.appendChild(b),t.textContent="",t.appendChild(d),t.setAttribute("data-processed","true")}}}X()?(u("Mermaid diagrams detected on initial load"),O()):u("No mermaid diagrams found on initial load");{const e=new MutationObserver(r=>{for(const n of r)n.type==="attributes"&&n.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(t=>{t.removeAttribute("data-processed")}),O())});e.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),e.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{u("View transition detected"),X()&&O()});const K=document.createElement("style");K.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(K);function me(e={}){const{position:r="right",smoothScroll:n=!0,threshold:t=300,svgPath:s="M18 15l-6-6-6 6",svgStrokeWidth:l="2",borderRadius:p="15",showTooltip:d=!1,showProgressRing:g=!1,progressRingColor:b="yellow",showOnHomepage:Y=!1}=e,q=((o,f)=>{if(typeof o=="string")return o;if(typeof o!="object"||o===null)return"Scroll to top";const i=f&&typeof f=="string"?f.toLowerCase().trim():"";if(!i){const m=o.en;return typeof m=="string"?m:"Scroll to top"}let c=o[i];if(typeof c=="string")return c;if(i.includes("-")){const m=i.split("-")[0];if(c=o[m],typeof c=="string")return c}return c=o.en,typeof c=="string"?c:"Scroll to top"})(e.tooltipText,document.documentElement.lang);let h=null;const Z=()=>document.querySelector(".hero")||document.querySelector(".sl-hero")||document.querySelector('[data-page="index"]')||document.querySelector(".landing-page")||document.querySelector(".homepage")||document.querySelector("[data-starlight-homepage]")||document.querySelector(".site-hero")||document.body.classList.contains("homepage")||document.body.classList.contains("homepage")||document.body.classList.contains("landing")||document.querySelector("main.sl-main")&&document.querySelector("main.sl-main .hero, main.sl-main .sl-hero"),J=()=>{if(h&&h(),Z()&&!Y)return;const o=document.createElement("button");o.id="scroll-to-top-button",o.ariaLabel=q,o.setAttribute("aria-describedby",d?"scroll-to-top-tooltip":""),o.setAttribute("role","button"),o.setAttribute("tabindex","0");let f=!1;o.innerHTML=`
      ${g?`
      <svg class="scroll-progress-ring" 
           width="47"   
           height="47" 
           viewBox="0 0 47 47"
           style="position: absolute; top: 0; left: 0;">
        <!-- Background circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${b}" 
                stroke-width="3" 
                opacity="0.2" />
        <!-- Progress circle -->
        <circle cx="23.5" cy="23.5" r="22" 
                fill="none" 
                stroke="${b}" 
                stroke-width="3" 
                stroke-linecap="round"
                class="scroll-progress-circle"
                style="transform: rotate(-90deg); transform-origin: center;" />
      </svg>
      `:""}
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24"            
           fill="none" 
           stroke="currentColor" 
           stroke-width="${l}" 
           stroke-linecap="round" 
           stroke-linejoin="round"
           style="position: relative; z-index: 1;">
        <path d="${s}"/>
      </svg>
    `;const i=document.createElement("div");i.id="scroll-to-top-tooltip",i.textContent=q;const c=document.createElement("div");c.style.cssText=`
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--sl-color-gray-7);
  `;const m=document.createElement("style");m.id="scroll-to-top-styles",m.textContent=`
    .scroll-to-top-button {
      position: fixed;
      bottom: 40px;
      width: 47px;
      height: 47px;
      ${r==="left"?"left: 40px;":r==="right"?"right: 35px;":"left: 50%;"}
      border-radius: ${p}%;     
      background-color: var(--sl-color-accent);       
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;      
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transform: ${r==="center"?"translateX(-50%) scale(0)":"scale(0)"};
      transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, transform 0.3s ease;      
      z-index: 100;            
      border: 1px solid var(--sl-color-accent);
      transform-origin: center;
      -webkit-tap-highlight-color: transparent; /* Disable mobile tap highlight */
      touch-action: manipulation; /* Prevent double-tap zoom */
      box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
    }
      .scroll-to-top-button:active {
        background-color: var(--sl-color-accent-dark); 
        color: var(--sl-text-white);        
        transition: background-color 0.1s ease, transform 0.1s ease; 
     }
      .scroll-to-top-button.visible {
        opacity: 1;
        visibility: visible;
        transform: ${r==="center"?"translateX(-50%) scale(1)":"scale(1)"};        
      }

      .scroll-to-top-button:hover {
        background-color: var(--sl-color-accent-low); 
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
        color: var(--sl-color-accent);
        border-color: var(--sl-color-accent);     
      }
      
      .scroll-to-top-button.keyboard-focus {
        outline: 2px solid var(--sl-color-text);
        outline-offset: 2px;
      }

      .scroll-to-top-btn-tooltip {
        position: absolute;
        ${r==="left"?"left: -25px;":"right: -22px;"}
        top: -47px;
        background-color: var(--sl-color-gray-7);
        color: var(--sl-color-text);
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.3s;
        pointer-events: none;
     }
      .scroll-to-top-btn-tooltip.visible {
        opacity: 1;
        visibility: visible;        
      }

      /* Progress ring styles */
      .scroll-progress-ring {
        pointer-events: none;
      }
      
      .scroll-progress-circle {
        stroke-dasharray: 138.23; /* 2 * π * r = 2 * π * 22 ≈ 138.23 */
        stroke-dashoffset: 138.23;
        transition: stroke-dashoffset 0.1s ease;
      }
    `,document.head.appendChild(m),o.classList.add("scroll-to-top-button"),document.body.appendChild(o),d&&(i.classList.add("scroll-to-top-btn-tooltip"),i.appendChild(c),o.appendChild(i));const T=()=>{i.classList.remove("visible")},B=()=>{d&&i.classList.add("visible")};o.addEventListener("mouseenter",()=>{B()}),o.addEventListener("mouseleave",()=>{T()});const S=()=>{T(),window.scrollTo({top:0,behavior:n?"smooth":"auto"}),o.classList.remove("active")};document.addEventListener("keydown",a=>{a.key==="Tab"&&(f=!0)}),o.addEventListener("mousedown",()=>{f=!1}),o.addEventListener("keydown",a=>{a.key==="Enter"&&(S(),o.classList.remove("keyboard-focus"))}),o.addEventListener("focus",()=>{f&&(B(),o.classList.add("keyboard-focus"))}),o.addEventListener("blur",()=>{T(),o.classList.remove("keyboard-focus")}),o.addEventListener("touchstart",a=>{a.preventDefault(),o.classList.add("active")}),o.addEventListener("touchend",a=>{a.preventDefault(),S(),o.classList.remove("active")}),o.addEventListener("click",a=>{a.preventDefault(),S()});function Q(a,A){let v;return function(){const P=arguments,M=this;v||(a.apply(M,P),v=!0,setTimeout(()=>v=!1,A))}}const I=()=>{const a=window.scrollY,A=window.innerHeight,v=document.documentElement.scrollHeight,P=a/(v-A);if(g){const j=o.querySelector(".scroll-progress-circle");if(j){let y=P*100;y>=99.5&&(y=100),y<0&&(y=0);const V=138.23,ee=V-y/100*V;j.style.strokeDashoffset=ee.toString()}}const M=t>0?t:300;a>M?o.classList.add("visible"):o.classList.remove("visible")},R=Q(I,16);window.addEventListener("scroll",R),I();const $=()=>{document.documentElement.classList.contains("theme-dark")?(i.style.backgroundColor="var(--sl-color-gray-7)",i.style.color="var(--sl-color-text)",c.style.borderTopColor="var(--sl-color-gray-7)"):(i.style.backgroundColor="black",i.style.color="white",c.style.borderTopColor="black")};$();const N=new MutationObserver($);N.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});function C(){Math.round(window.outerWidth/window.innerWidth*100)/100>3?o.style.display="none":o.style.display="flex"}return window.addEventListener("resize",C),C(),h=()=>{window.removeEventListener("scroll",R),window.removeEventListener("resize",C),N.disconnect(),o&&o.parentNode&&o.parentNode.removeChild(o);const a=document.getElementById("scroll-to-top-styles");a&&a.remove()},h},E=()=>{setTimeout(J,10)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E(),document.addEventListener("astro:page-load",E),document.addEventListener("astro:before-preparation",()=>{h&&h()})}me({position:"right",tooltipText:"Scroll to top",smoothScroll:!0,threshold:300,svgPath:"M18 15l-6-6-6 6",svgStrokeWidth:"2",borderRadius:"15",showTooltip:!0,showProgressRing:!1,progressRingColor:"yellow",showOnHomepage:!0});re();export{me as default};
