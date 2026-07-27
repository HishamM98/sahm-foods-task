import{a as ke,b as Kt,c as Jt,d as en,e as tn}from"./chunk-LV423YRD.js";import{a as Je,b as ft,c as vt,e as qt,f as Wt}from"./chunk-BMTHXP3Y.js";import{$ as Le,A as pt,D as ut,E as Pe,F as qe,G as mt,J as gt,K as Yt,L as bt,M as Xt,N as Zt,O as Te,P as ht,R as Qt,T as _t,U as V,W as oe,Y as Gt,Z as We,_ as re,a as Lt,b as Bt,ba as ae,ca as B,d as Ee,da as D,e as Ze,ea as Ke,f as Qe,fa as we,g as ne,i as ie,j as At,l as Ft,n as Nt,s as $t,t as Ut,u as dt,v as ct,x as me}from"./chunk-EXHWYQAN.js";import{a as jt}from"./chunk-NP6UHOD5.js";import{$ as wt,$a as I,A as Ve,Aa as m,Ba as ce,Bb as Pt,C as f,Ca as pe,Da as ue,E as Tt,Ea as ee,Fa as te,Ga as F,Ha as Q,I as He,Ia as xe,Ka as L,La as c,Ma as Ce,Na as he,Nb as Rt,Oa as $e,Pa as Ue,Qa as w,R as r,Ra as k,Ua as Mt,Va as Ye,Wa as Xe,Wb as Vt,Xa as ze,Xb as Ht,Ya as C,Za as u,_ as je,_a as h,ab as St,bb as zt,cb as Ot,d as A,e as le,ea as T,eb as N,fa as de,fb as De,g as W,ga as K,gb as Oe,h as Fe,hb as st,i as g,ia as J,ib as y,ja as x,jb as E,ka as b,kb as lt,lb as G,n as M,o as S,ob as U,p as j,pa as kt,q as Et,qa as v,r as fe,ra as z,sa as O,sb as R,u as $,ua as at,v as Ne,va as ve,wa as ye,xa as d,ya as a,yb as _,z as Z,za as s,zb as Ie}from"./chunk-AUPPKFA4.js";import{C as Re,F as Se,R as Ge,d as se,k as Ae,p as rt,v as It}from"./chunk-7PXU7FYF.js";import{a as X}from"./chunk-EOULDKCD.js";var nn=(()=>{class t extends B{autofocus=!1;focused=!1;platformId=g(He);document=g(fe);host=g(Tt);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ie(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Je.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275dir=K({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[x]})}return t})();var on=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var An=`
    ${on}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Rn={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,i=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,n=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":Ut(o)&&String(o).length===1,"p-badge-dot":$t(o),"p-badge-sm":e==="small"||i==="small","p-badge-lg":e==="large"||i==="large","p-badge-xl":e==="xlarge"||i==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},rn=(()=>{class t extends oe{name="badge";style=An;classes=Rn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var an=new W("BADGE_INSTANCE");var yt=(()=>{class t extends B{componentName="Badge";$pcBadge=g(an,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=R();badgeSize=R();size=R();severity=R();value=R();badgeDisabled=R(!1,{transform:_});_componentStyle=g(rn);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(i,n){i&2&&(v("data-p",n.dataP),C(n.cn(n.cx("root"),n.styleClass())),Ye("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[N([rn,{provide:an,useExisting:t},{provide:ae,useExisting:t}]),J([D]),x],decls:1,vars:1,template:function(i,n){i&1&&u(0),i&2&&h(n.value())},dependencies:[ne,re,Ke],encapsulation:2,changeDetection:0})}return t})(),sn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=de({type:t});static \u0275inj=le({imports:[yt,re,re]})}return t})();var Nn=["*"],Vn={root:"p-fluid"},ln=(()=>{class t extends oe{name="fluid";classes=Vn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var dn=new W("FLUID_INSTANCE"),cn=(()=>{class t extends B{componentName="Fluid";$pcFluid=g(dn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=g(ln);static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,n){i&2&&C(n.cx("root"))},features:[N([ln,{provide:dn,useExisting:t},{provide:ae,useExisting:t}]),J([D]),x],ngContentSelectors:Nn,decls:1,vars:0,template:function(i,n){i&1&&(Ce(),he(0))},dependencies:[ne],encapsulation:2,changeDetection:0})}return t})();var Hn=["data-p-icon","spinner"],pn=(()=>{class t extends ke{pathId;onInit(){this.pathId="url(#"+V()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["","data-p-icon","spinner"]],features:[x],attrs:Hn,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(j(),ce(0,"g"),ue(1,"path",0),pe(),ce(2,"defs")(3,"clipPath",1),ue(4,"rect",2),pe()()),i&2&&(v("clip-path",n.pathId),r(3),xe("id",n.pathId))},encapsulation:2})}return t})();var jn=["data-p-icon","window-maximize"],un=(()=>{class t extends ke{pathId;onInit(){this.pathId="url(#"+V()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["","data-p-icon","window-maximize"]],features:[x],attrs:jn,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(j(),ce(0,"g"),ue(1,"path",0),pe(),ce(2,"defs")(3,"clipPath",1),ue(4,"rect",2),pe()()),i&2&&(v("clip-path",n.pathId),r(3),xe("id",n.pathId))},encapsulation:2})}return t})();var $n=["data-p-icon","window-minimize"],mn=(()=>{class t extends ke{pathId;onInit(){this.pathId="url(#"+V()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["","data-p-icon","window-minimize"]],features:[x],attrs:$n,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(j(),ce(0,"g"),ue(1,"path",0),pe(),ce(2,"defs")(3,"clipPath",1),ue(4,"rect",2),pe()()),i&2&&(v("clip-path",n.pathId),r(3),xe("id",n.pathId))},encapsulation:2})}return t})();var gn=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Un=`
    ${gn}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Yn={root:"p-ink"},bn=(()=>{class t extends oe{name="ripple";style=Un;classes=Yn;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var hn=(()=>{class t extends B{componentName="Ripple";zone=g(Ne);_componentStyle=g(bn);animationListener;mouseDownListener;timeout;constructor(){super(),Ve(()=>{ie(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(!this.$unstyled()&&me(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!bt(i)&&!ht(i)){let P=Math.max(Pe(this.el.nativeElement),Te(this.el.nativeElement));i.style.height=P+"px",i.style.width=P+"px"}let n=Zt(this.el.nativeElement),l=e.pageX-n.left+this.document.body.scrollTop-ht(i)/2,p=e.pageY-n.top+this.document.body.scrollLeft-bt(i)/2;this.renderer.setStyle(i,"top",p+"px"),this.renderer.setStyle(i,"left",l+"px"),!this.$unstyled()&&ct(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let P=this.getInk();P&&(!this.$unstyled()&&me(P,"p-ink-active"),P.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&me(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&me(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Qt(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=K({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[N([bn]),x]})}return t})();var _n=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Xn=["content"],Zn=["loadingicon"],Qn=["icon"],Gn=["*"],xn=(t,o)=>({class:t,pt:o});function qn(t,o){t&1&&F(0)}function Wn(t,o){if(t&1&&m(0,"span",7),t&2){let e=c(3);C(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),d("pBind",e.ptm("loadingIcon")),v("aria-hidden",!0)}}function Kn(t,o){if(t&1&&(j(),m(0,"svg",8)),t&2){let e=c(3);C(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),d("pBind",e.ptm("loadingIcon"))("spin",!0),v("aria-hidden",!0)}}function Jn(t,o){if(t&1&&(ee(0),b(1,Wn,1,4,"span",3)(2,Kn,1,5,"svg",6),te()),t&2){let e=c(2);r(),d("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),r(),d("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function ei(t,o){}function ti(t,o){if(t&1&&b(0,ei,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ni(t,o){if(t&1&&(ee(0),b(1,Jn,3,2,"ng-container",2)(2,ti,1,1,null,5),te()),t&2){let e=c();r(),d("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),r(),d("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",st(3,xn,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function ii(t,o){if(t&1&&m(0,"span",7),t&2){let e=c(2);C(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),d("pBind",e.ptm("icon")),v("data-p",e.dataIconP)}}function oi(t,o){}function ri(t,o){if(t&1&&b(0,oi,0,0,"ng-template",9),t&2){let e=c(2);d("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ai(t,o){if(t&1&&(ee(0),b(1,ii,1,4,"span",3)(2,ri,1,1,null,5),te()),t&2){let e=c();r(),d("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),r(),d("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",st(3,xn,e.cx("icon"),e.ptm("icon")))}}function si(t,o){if(t&1&&(a(0,"span",7),u(1),s()),t&2){let e=c();C(e.cx("label")),d("pBind",e.ptm("label")),v("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),r(),h(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function li(t,o){if(t&1&&m(0,"p-badge",10),t&2){let e=c();d("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var di={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},fn=(()=>{class t extends oe{name="button";style=_n;classes=di;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var vn=new W("BUTTON_INSTANCE");var Cn=(()=>{class t extends B{componentName="Button";hostName="";$pcButton=g(vn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});_componentStyle=g(fn);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=R(void 0,{transform:_});onClick=new $;onFocus=new $;onBlur=new $;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=g(cn,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-button"]],contentQueries:function(i,n,l){if(i&1&&$e(l,Xn,5)(l,Zn,5)(l,Qn,5)(l,We,4),i&2){let p;w(p=k())&&(n.contentTemplate=p.first),w(p=k())&&(n.loadingIconTemplate=p.first),w(p=k())&&(n.iconTemplate=p.first),w(p=k())&&(n.templates=p)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",_],raised:[2,"raised","raised",_],rounded:[2,"rounded","rounded",_],text:[2,"text","text",_],plain:[2,"plain","plain",_],outlined:[2,"outlined","outlined",_],link:[2,"link","link",_],tabindex:[2,"tabindex","tabindex",Ie],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",_],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",_],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[N([fn,{provide:vn,useExisting:t},{provide:ae,useExisting:t}]),J([D]),x],ngContentSelectors:Gn,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(i,n){i&1&&(Ce(),a(0,"button",0),L("click",function(p){return n.onClick.emit(p)})("focus",function(p){return n.onFocus.emit(p)})("blur",function(p){return n.onBlur.emit(p)}),he(1),b(2,qn,1,0,"ng-container",1)(3,ni,3,6,"ng-container",2)(4,ai,3,6,"ng-container",2)(5,si,2,6,"span",3)(6,li,1,4,"p-badge",4),s()),i&2&&(C(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),d("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),v("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),r(2),d("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),r(),d("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),r(),d("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),r(),d("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),r(),d("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))))},dependencies:[ne,Ee,Qe,Ze,hn,nn,pn,sn,yt,re,D],encapsulation:2,changeDetection:0})}return t})();var Dn=(()=>{class t extends B{pFocusTrapDisabled=!1;platformId=g(He);document=g(fe);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){ie(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(e){e.pFocusTrapDisabled&&ie(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let i=n=>mt("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,l=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Yt(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;gt(l)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,l=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Xt(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;gt(l)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275dir=K({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",_]},features:[x]})}return t})();var In=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var ci=["header"],En=["content"],Tn=["footer"],pi=["closeicon"],ui=["maximizeicon"],mi=["minimizeicon"],gi=["headless"],bi=["titlebar"],hi=["*",[["p-footer"]]],_i=["*","p-footer"],fi=t=>({ariaLabelledBy:t});function vi(t,o){t&1&&F(0)}function yi(t,o){if(t&1&&(ee(0),b(1,vi,1,0,"ng-container",11),te()),t&2){let e=c(3);r(),d("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function xi(t,o){if(t&1){let e=Q();a(0,"div",16),L("mousedown",function(n){M(e);let l=c(4);return S(l.initResize(n))}),s()}if(t&2){let e=c(4);C(e.cx("resizeHandle")),Ye("z-index",90),d("pBind",e.ptm("resizeHandle"))}}function Ci(t,o){if(t&1&&(a(0,"span",21),u(1),s()),t&2){let e=c(5);C(e.cx("title")),d("id",e.ariaLabelledBy)("pBind",e.ptm("title")),r(),h(e.header)}}function Di(t,o){t&1&&F(0)}function Ii(t,o){if(t&1&&m(0,"span",25),t&2){let e=c(7);d("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function Ei(t,o){t&1&&(j(),m(0,"svg",28))}function Ti(t,o){t&1&&(j(),m(0,"svg",29))}function wi(t,o){if(t&1&&(ee(0),b(1,Ei,1,0,"svg",26)(2,Ti,1,0,"svg",27),te()),t&2){let e=c(7);r(),d("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),r(),d("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function ki(t,o){}function Mi(t,o){t&1&&b(0,ki,0,0,"ng-template")}function Si(t,o){if(t&1&&(ee(0),b(1,Mi,1,0,null,11),te()),t&2){let e=c(7);r(),d("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function zi(t,o){}function Oi(t,o){t&1&&b(0,zi,0,0,"ng-template")}function Pi(t,o){if(t&1&&(ee(0),b(1,Oi,1,0,null,11),te()),t&2){let e=c(7);r(),d("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function Li(t,o){if(t&1&&b(0,Ii,1,1,"span",23)(1,wi,3,2,"ng-container",24)(2,Si,2,1,"ng-container",24)(3,Pi,2,1,"ng-container",24),t&2){let e=c(6);d("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),r(),d("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),r(),d("ngIf",!e.maximized),r(),d("ngIf",e.maximized)}}function Bi(t,o){if(t&1){let e=Q();a(0,"p-button",22),L("onClick",function(){M(e);let n=c(5);return S(n.maximize())})("keydown.enter",function(){M(e);let n=c(5);return S(n.maximize())}),b(1,Li,4,4,"ng-template",null,4,G),s()}if(t&2){let e=c(5);d("pt",e.ptm("pcMaximizeButton"))("styleClass",e.cx("pcMaximizeButton"))("ariaLabel",e.maximized?e.minimizeLabel:e.maximizeLabel)("tabindex",e.maximizable?"0":"-1")("buttonProps",e.maximizeButtonProps)("unstyled",e.unstyled()),v("data-pc-group-section","headericon")}}function Ai(t,o){if(t&1&&m(0,"span"),t&2){let e=c(8);C(e.closeIcon)}}function Ri(t,o){t&1&&(j(),m(0,"svg",32))}function Fi(t,o){if(t&1&&(ee(0),b(1,Ai,1,2,"span",30)(2,Ri,1,0,"svg",31),te()),t&2){let e=c(7);r(),d("ngIf",e.closeIcon),r(),d("ngIf",!e.closeIcon)}}function Ni(t,o){}function Vi(t,o){t&1&&b(0,Ni,0,0,"ng-template")}function Hi(t,o){if(t&1&&(a(0,"span"),b(1,Vi,1,0,null,11),s()),t&2){let e=c(7);r(),d("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function ji(t,o){if(t&1&&b(0,Fi,3,2,"ng-container",24)(1,Hi,2,1,"span",24),t&2){let e=c(6);d("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),r(),d("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function $i(t,o){if(t&1){let e=Q();a(0,"p-button",22),L("onClick",function(n){M(e);let l=c(5);return S(l.close(n))})("keydown.enter",function(n){M(e);let l=c(5);return S(l.close(n))}),b(1,ji,2,2,"ng-template",null,4,G),s()}if(t&2){let e=c(5);d("pt",e.ptm("pcCloseButton"))("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)("unstyled",e.unstyled()),v("data-pc-group-section","headericon")}}function Ui(t,o){if(t&1){let e=Q();a(0,"div",16,3),L("mousedown",function(n){M(e);let l=c(4);return S(l.initDrag(n))}),b(2,Ci,2,5,"span",17)(3,Di,1,0,"ng-container",18),a(4,"div",19),b(5,Bi,3,7,"p-button",20)(6,$i,3,7,"p-button",20),s()()}if(t&2){let e=c(4);C(e.cx("header")),d("pBind",e.ptm("header")),r(2),d("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),r(),d("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT)("ngTemplateOutletContext",Oe(11,fi,e.ariaLabelledBy)),r(),C(e.cx("headerActions")),d("pBind",e.ptm("headerActions")),r(),d("ngIf",e.maximizable),r(),d("ngIf",e.closable)}}function Yi(t,o){t&1&&F(0)}function Xi(t,o){t&1&&F(0)}function Zi(t,o){if(t&1&&(a(0,"div",19,5),he(2,1),b(3,Xi,1,0,"ng-container",11),s()),t&2){let e=c(4);C(e.cx("footer")),d("pBind",e.ptm("footer")),r(3),d("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function Qi(t,o){if(t&1&&(b(0,xi,1,5,"div",12)(1,Ui,7,13,"div",13),a(2,"div",14,2),he(4),b(5,Yi,1,0,"ng-container",11),s(),b(6,Zi,4,4,"div",15)),t&2){let e=c(3);d("ngIf",e.resizable),r(),d("ngIf",e.showHeader),r(),C(e.cn(e.cx("content"),e.contentStyleClass)),d("ngStyle",e.contentStyle)("pBind",e.ptm("content")),r(3),d("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),r(),d("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function Gi(t,o){if(t&1){let e=Q();a(0,"div",9,0),L("pMotionOnBeforeEnter",function(n){M(e);let l=c(2);return S(l.onBeforeEnter(n))})("pMotionOnAfterEnter",function(n){M(e);let l=c(2);return S(l.onAfterEnter(n))})("pMotionOnBeforeLeave",function(n){M(e);let l=c(2);return S(l.onBeforeLeave(n))})("pMotionOnAfterLeave",function(n){M(e);let l=c(2);return S(l.onAfterLeave(n))}),b(2,yi,2,1,"ng-container",10)(3,Qi,7,8,"ng-template",null,1,G),s()}if(t&2){let e=Mt(4),i=c(2);ze(i.sx("root")),C(i.cn(i.cx("root"),i.styleClass)),d("ngStyle",i.style)("pBind",i.ptm("root"))("pFocusTrapDisabled",i.focusTrap===!1)("pMotion",i.visible)("pMotionAppear",!0)("pMotionName","p-dialog")("pMotionOptions",i.computedMotionOptions()),v("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0)("data-p",i.dataP),r(2),d("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function qi(t,o){if(t&1){let e=Q();a(0,"div",7),L("pMotionOnAfterLeave",function(){M(e);let n=c();return S(n.onMaskAfterLeave())}),z(1,Gi,5,17,"div",8),s()}if(t&2){let e=c();ze(e.sx("mask")),C(e.cn(e.cx("mask"),e.maskStyleClass)),d("ngStyle",e.maskStyle)("pBind",e.ptm("mask"))("pMotion",e.maskVisible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.modal?"p-overlay-mask-enter-active":"")("pMotionLeaveActiveClass",e.modal?"p-overlay-mask-leave-active":"")("pMotionOptions",e.computedMaskMotionOptions()),v("data-p-scrollblocker-active",e.modal||e.blockScroll)("data-p",e.dataP),r(),O(e.renderDialog()?1:-1)}}var Wi={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Ki={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return["p-dialog-mask",{"p-overlay-mask":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},tt=(()=>{class t extends oe{name="dialog";style=In;classes=Ki;inlineStyles=Wi;static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var wn=new W("DIALOG_INSTANCE"),xt=(()=>{class t extends B{componentName="Dialog";hostName="";$pcDialog=g(wn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}header;draggable=!0;resizable=!0;contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";maskMotionOptions=R(void 0);computedMaskMotionOptions=U(()=>X(X({},this.ptm("maskMotion")),this.maskMotionOptions()));motionOptions=R(void 0);computedMotionOptions=U(()=>X(X({},this.ptm("motion")),this.motionOptions()));closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",variant:"text",rounded:!0};maximizeButtonProps={severity:"secondary",variant:"text",rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0,this.renderMask.set(!0),this.renderDialog.set(!0))}get style(){return this._style}set style(e){e&&(this._style=X({},e),this.originalStyle=e)}position;role="dialog";appendTo=R(void 0);onShow=new $;onHide=new $;visibleChange=new $;onResizeInit=new $;onResizeEnd=new $;onDragEnd=new $;onMaximize=new $;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;$appendTo=U(()=>this.appendTo()||this.config.overlayAppendTo());renderMask=Z(!1);renderDialog=Z(!1);_visible=!1;maskVisible;container=Z(null);wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=V("pn_id_");_style={};originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=g(tt);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;zIndexForLayering;get maximizeLabel(){return this.config.getTranslation(Le.ARIA).maximizeLabel}get minimizeLabel(){return this.config.getTranslation(Le.ARIA).minimizeLabel}zone=g(Ne);overlayService=g(Gt);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}onInit(){this.breakpoints&&this.createStyle()}templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?V("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,l;for(;(l=i.exec(e))!==null;){let p=parseFloat(l[1]),P=l[2];P==="ms"?n+=p:P==="s"&&(n+=p*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=Je.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e=this.contentViewChild?.nativeElement){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visible=!1,this.visibleChange.emit(this.visible),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&ft()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll('[data-p-scrollblocker-active="true"]');this.modal&&e&&e.length==1&&vt(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?ft():vt()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex?(we.set("modal",this.container(),this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container().style.zIndex,10)-1)):this.zIndexForLayering=we.generateZIndex("modal",(this.baseZIndex??0)+this.config.zIndex.modal)}createStyle(){if(ie(this.platformId)&&!this.styleElement&&!this.$unstyled()){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",_t(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),_t(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){e.target.closest("div")?.getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container().style.margin="0",this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&ut(this.document.body,{"user-select":"none"}))}onDrag(e){if(this.dragging&&this.container()){let i=Pe(this.container()),n=Te(this.container()),l=e.pageX-this.lastPageX,p=e.pageY-this.lastPageY,P=this.container().getBoundingClientRect(),Y=getComputedStyle(this.container()),q=parseFloat(Y.marginLeft),Be=parseFloat(Y.marginTop),ge=P.left+l-q,be=P.top+p-Be,Me=pt();this.container().style.position="fixed",this.keepInViewport?(ge>=this.minX&&ge+i<Me.width&&(this._style.left=`${ge}px`,this.lastPageX=e.pageX,this.container().style.left=`${ge}px`),be>=this.minY&&be+n<Me.height&&(this._style.top=`${be}px`,this.lastPageY=e.pageY,this.container().style.top=`${be}px`)):(this.lastPageX=e.pageX,this.container().style.left=`${ge}px`,this.lastPageY=e.pageY,this.container().style.top=`${be}px`),this.overlayService.emitParentDrag(this.container())}}endDrag(e){this.dragging&&(this.dragging=!1,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container().style.position="",this.container().style.left="",this.container().style.top="",this.container().style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&ut(this.document.body,{"user-select":"none"}),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,l=Pe(this.container()),p=Te(this.container()),P=Te(this.contentViewChild?.nativeElement),Y=l+i,q=p+n,Be=this.container().style.minWidth,ge=this.container().style.minHeight,be=this.container().getBoundingClientRect(),Me=pt();(!parseInt(this.container().style.top)||!parseInt(this.container().style.left))&&(Y+=i,q+=n),(!Be||Y>parseInt(Be))&&be.left+Y<Me.width&&(this._style.width=Y+"px",this.container().style.width=this._style.width),(!ge||q>parseInt(ge))&&be.top+q<Me.height&&(this.contentViewChild.nativeElement.style.height=P+q-p+"px",this._style.height&&(this._style.height=q+"px",this.container().style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{if(i.key=="Escape"){let n=this.container();if(!n)return;let l=we.getCurrent();(parseInt(n.style.zIndex)==l||this.zIndexForLayering==l)&&this.close(i)}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.$appendTo()!=="self"&&qe(this.document.body,this.wrapper)}restoreAppend(){this.container()&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onBeforeEnter(e){this.container.set(e.element),this.wrapper=this.container()?.parentElement,this.$attrSelector&&this.container()?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container()?.setAttribute(this.id,""),this.modal&&this.enableModality()}onAfterEnter(){this.focusOnShow&&this.focus(),this.onShow.emit({})}onBeforeLeave(){this.modal&&(this.maskVisible=!1)}onAfterLeave(){this.onContainerDestroy(),this.renderDialog.set(!1),this.modal?this.renderMask.set(!1):this.maskVisible=!1,this.onHide.emit({}),this.cd.markForCheck()}onMaskAfterLeave(){this.renderDialog()||this.renderMask.set(!1)}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maximized&&(me(this.document.body,"p-overflow-hidden"),this.document.body.style.removeProperty("--scrollbar-width"),this.maximized=!1),this.modal&&this.disableModality(),dt(this.document.body,"p-overflow-hidden")&&me(this.document.body,"p-overflow-hidden"),this.container()&&this.autoZIndex&&we.clear(this.container()),this.zIndexForLayering&&we.revertZIndex(this.zIndexForLayering),this.container.set(null),this.wrapper=null,this._style=this.originalStyle?X({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.container()&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}get dataP(){return this.cn({maximized:this.maximized,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,l){if(i&1&&$e(l,ci,4)(l,En,4)(l,Tn,4)(l,pi,4)(l,ui,4)(l,mi,4)(l,gi,4)(l,We,4),i&2){let p;w(p=k())&&(n._headerTemplate=p.first),w(p=k())&&(n._contentTemplate=p.first),w(p=k())&&(n._footerTemplate=p.first),w(p=k())&&(n._closeiconTemplate=p.first),w(p=k())&&(n._maximizeiconTemplate=p.first),w(p=k())&&(n._minimizeiconTemplate=p.first),w(p=k())&&(n._headlessTemplate=p.first),w(p=k())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&Ue(bi,5)(En,5)(Tn,5),i&2){let l;w(l=k())&&(n.headerViewChild=l.first),w(l=k())&&(n.contentViewChild=l.first),w(l=k())&&(n.footerViewChild=l.first)}},inputs:{hostName:"hostName",header:"header",draggable:[2,"draggable","draggable",_],resizable:[2,"resizable","resizable",_],contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",_],closeOnEscape:[2,"closeOnEscape","closeOnEscape",_],dismissableMask:[2,"dismissableMask","dismissableMask",_],rtl:[2,"rtl","rtl",_],closable:[2,"closable","closable",_],breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",_],blockScroll:[2,"blockScroll","blockScroll",_],autoZIndex:[2,"autoZIndex","autoZIndex",_],baseZIndex:[2,"baseZIndex","baseZIndex",Ie],minX:[2,"minX","minX",Ie],minY:[2,"minY","minY",Ie],focusOnShow:[2,"focusOnShow","focusOnShow",_],maximizable:[2,"maximizable","maximizable",_],keepInViewport:[2,"keepInViewport","keepInViewport",_],focusTrap:[2,"focusTrap","focusTrap",_],transitionOptions:"transitionOptions",maskMotionOptions:[1,"maskMotionOptions"],motionOptions:[1,"motionOptions"],closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",appendTo:[1,"appendTo"],headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[N([tt,{provide:wn,useExisting:t},{provide:ae,useExisting:t}]),J([D]),x],ngContentSelectors:_i,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"class","style","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[3,"pMotionOnAfterLeave","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],["pFocusTrap","",3,"class","style","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],["pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnBeforeLeave","pMotionOnAfterLeave","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"class","pBind","z-index","mousedown",4,"ngIf"],[3,"class","pBind","mousedown",4,"ngIf"],[3,"ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],[3,"mousedown","pBind"],[3,"id","class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled","onClick","keydown.enter",4,"ngIf"],[3,"id","pBind"],[3,"onClick","keydown.enter","pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["data-p-icon","window-maximize",4,"ngIf"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize"],[3,"class",4,"ngIf"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(Ce(hi),z(0,qi,2,14,"div",6)),i&2&&O(n.renderMask()?0:-1)},dependencies:[ne,Lt,Ee,Qe,Ze,Cn,Dn,Kt,un,mn,re,D,en,Jt],encapsulation:2,changeDetection:0})}return t})();var kn=()=>({severity:"secondary",variant:"text",rounded:!0});function Ji(t,o){t&1&&F(0)}function eo(t,o){if(t&1&&b(0,Ji,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.headerTemplate)}}function to(t,o){t&1&&b(0,eo,1,1,"ng-template",null,0,G)}function no(t,o){t&1&&F(0)}function io(t,o){if(t&1&&b(0,no,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.contentTemplate)}}function oo(t,o){t&1&&b(0,io,1,1,"ng-template",null,1,G)}function ro(t,o){t&1&&F(0)}function ao(t,o){if(t&1&&b(0,ro,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.footerTemplate)}}function so(t,o){t&1&&b(0,ao,1,1,"ng-template",null,2,G)}function lo(t,o){t&1&&F(0)}function co(t,o){if(t&1&&b(0,lo,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.closeIconTemplate)}}function po(t,o){t&1&&b(0,co,1,1,"ng-template",null,3,G)}function uo(t,o){t&1&&F(0)}function mo(t,o){if(t&1&&b(0,uo,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.maximizeIconTemplate)}}function go(t,o){t&1&&b(0,mo,1,1,"ng-template",null,4,G)}function bo(t,o){t&1&&F(0)}function ho(t,o){if(t&1&&b(0,bo,1,0,"ng-container",8),t&2){let e=c(2);d("ngComponentOutlet",e.minimizeIconTemplate)}}function _o(t,o){t&1&&b(0,ho,1,1,"ng-template",null,5,G)}function fo(t,o){}function vo(t,o){t&1&&b(0,fo,0,0,"ng-template",9)}function yo(t,o){if(t&1&&(a(0,"div"),u(1),s()),t&2){let e=c();r(),h(e.ddconfig.footer)}}var Mn=(()=>{class t{viewContainerRef;constructor(e){this.viewContainerRef=e}static \u0275fac=function(i){return new(i||t)(je(wt))};static \u0275dir=K({type:t,selectors:[["","pDynamicDialogContent",""]]})}return t})(),Sn=(()=>{class t extends tt{name="dialog";static \u0275fac=(()=>{let e;return function(n){return(e||(e=f(t)))(n||t)}})();static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var nt=class{data;inputValues;header;ariaLabelledBy;footer;width;height;closeOnEscape=!1;focusOnShow=!0;focusTrap=!0;baseZIndex;autoZIndex=!1;dismissableMask=!1;rtl=!1;style;contentStyle;styleClass;transitionOptions;closable=!1;showHeader=!1;modal=!1;maskStyleClass;resizable=!1;draggable=!1;keepInViewport=!1;minX;minY;maximizable=!1;maximizeIcon;minimizeIcon;position;closeAriaLabel;appendTo;duplicate=!1;breakpoints;templates;pt;unstyled},_e=class{constructor(){}close(o){this._onClose.next(o),setTimeout(()=>{this._onClose.complete()},1e3)}destroy(){this._onDestroy.next(null)}dragStart(o){this._onDragStart.next(o)}dragEnd(o){this._onDragEnd.next(o)}resizeInit(o){this._onResizeInit.next(o)}resizeEnd(o){this._onResizeEnd.next(o)}maximize(o){this._onMaximize.next(o)}_onClose=new se;onClose=this._onClose.asObservable();_onDestroy=new se;onDestroy=this._onDestroy.asObservable();_onDragStart=new se;onDragStart=this._onDragStart.asObservable();_onDragEnd=new se;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new se;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new se;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new se;onMaximize=this._onMaximize.asObservable();onChildComponentLoaded=new se},zn=new W("DYNAMIC_DIALOG_INSTANCE"),xo=(()=>{class t extends B{ddconfig;dialogRef;componentName="Dialog";_componentStyle=g(Sn);$pcDynamicDialog=g(zn,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}visible=!0;componentRef;id=V("pn_id_");insertionPoint;dialog;childComponentType;inputValues;get minX(){return this.ddconfig.minX?this.ddconfig.minX:0}get minY(){return this.ddconfig.minY?this.ddconfig.minY:0}get keepInViewport(){return this.ddconfig.keepInViewport}get maximizable(){return this.ddconfig.maximizable}get maximizeIcon(){return this.ddconfig.maximizeIcon}get minimizeIcon(){return this.ddconfig.minimizeIcon}get closable(){return this.ddconfig.closable}get position(){return this.ddconfig.position}get defaultCloseAriaLabel(){return this.config.getTranslation(Le.ARIA).close}get breakpoints(){return this.ddconfig.breakpoints}get footerTemplate(){return this.ddconfig?.templates?.footer}get headerTemplate(){return this.ddconfig?.templates?.header}get contentTemplate(){return this.ddconfig?.templates?.content}get minimizeIconTemplate(){return this.ddconfig?.templates?.minimizeicon}get maximizeIconTemplate(){return this.ddconfig?.templates?.maximizeicon}get closeIconTemplate(){return this.ddconfig?.templates?.closeicon}get dialogStyle(){return X(X(X({},this.ddconfig?.style||{}),this.ddconfig?.width&&{width:this.ddconfig.width}),this.ddconfig?.height&&{height:this.ddconfig.height})}get header(){return this.ddconfig.header}get data(){return this.ddconfig.data}get dialogId(){return this.$attrSelector}get isUnstyled(){return this.ddconfig.unstyled||this.$unstyled()}maximized;dragging;resizing;ariaLabelledBy;_style={};styleElement;lastPageX;lastPageY;contentViewChild;footerViewChild;headerViewChild;maskViewChild;maskClickListener;documentDragListener;documentDragEndListener;documentResizeListener;documentResizeEndListener;documentEscapeListener;constructor(e,i){super(),this.ddconfig=e,this.dialogRef=i}onVisibleChange(e){e||this.dialogRef.close()}onAfterViewInit(){this.loadChildComponent(this.childComponentType),this.ariaLabelledBy=this.getAriaLabelledBy(),this.cd.detectChanges()}getAriaLabelledBy(){let{header:e,showHeader:i}=this.ddconfig;return e===null||i===!1?null:V("pn_id_")+"_header"}loadChildComponent(e){let i=this.insertionPoint?.viewContainerRef;i?.clear(),this.componentRef=i?.createComponent(e),this.inputValues&&this.componentRef&&Object.entries(this.inputValues).forEach(([n,l])=>{this.componentRef.setInput(n,l)}),this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance)}onDialogHide(e){this.dialogRef.destroy()}onDialogMaximize(e){this.maximized=e.maximized,this.dialogRef.maximize(e)}onDialogResizeInit(e){this.resizing=!0,this.dialogRef.resizeInit(e)}onDialogResizeEnd(e){this.resizing=!1,this.dialogRef.resizeEnd(e)}onDialogDragEnd(e){this.dragging=!1,this.dialogRef.dragEnd(e)}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}get _parent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>1)return e.pop()}get parentContent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>0){let i=e[e.length-1].querySelector(".p-dialog-content");if(i)return Array.isArray(i)?i[0]:i}}container;wrapper;unbindGlobalListeners(){this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}onAnimationStart(e){e.toState==="visible"&&(this._parent&&this.unbindGlobalListeners(),this.ddconfig.modal&&this.enableModality())}onAnimationEnd(e){e.toState==="void"&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.ddconfig.modal&&this.disableModality(),this.container=null}bindDocumentDragListener(){this.documentDragListener||(this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",e=>{this.onDrag(e)}))}bindDocumentDragEndListener(){this.documentDragEndListener||(this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",e=>{this.endDrag(e)}))}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}initDrag(e){if(e.target instanceof HTMLElement){let i=e.target;if(i.closest(".p-dialog-header-icon")||i.closest(".p-dialog-header-icons"))return}this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.dialogRef.dragStart(e),this.bindDocumentDragListener(),this.bindDocumentDragEndListener()}onDrag(e){this.dragging&&(this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.ddconfig.keepInViewport&&this.container&&(this.container.style.position="fixed"))}endDrag(e){this.dragging&&(this.dragging=!1,this.dialogRef.dragEnd(e),this.cd.detectChanges())}resetPosition(){this.container&&(this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin="")}bindDocumentResizeListeners(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",e=>{this.onResize(e)})),this.documentResizeEndListener||(this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",e=>{this.resizeEnd(e)}))}unbindDocumentResizeListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null),this.documentResizeEndListener&&(this.documentResizeEndListener(),this.documentResizeEndListener=null)}initResize(e){this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.dialogRef.resizeInit(e)}onResize(e){this.resizing&&(this.lastPageX=e.pageX,this.lastPageY=e.pageY)}resizeEnd(e){this.resizing&&(this.resizing=!1,this.dialogRef.resizeEnd(e))}maximize(){this.maximized=!this.maximized,this.dialogRef.maximize({maximized:this.maximized})}enableModality(){this.ddconfig.dismissableMask&&this.wrapper&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.hide()}))}disableModality(){this.unbindMaskClickListener(),this.cd.detectChanges()}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}bindDocumentEscapeListener(){this.ddconfig.closeOnEscape&&(this.documentEscapeListener=this.renderer.listen(this.document,"keydown",e=>{e.key==="Escape"&&this.container&&this.hide()}))}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}createStyle(){if(!this.styleElement&&this.breakpoints){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                    @media screen and (max-width: ${i}) {
                        .p-dialog[${this.dialogId}] {
                            width: ${this.breakpoints[i]} !important;
                        }
                    }
                `;this.renderer.setProperty(this.styleElement,"innerHTML",e)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.onContainerDestroy(),this.componentRef&&typeof this.componentRef.destroy=="function"&&this.componentRef.destroy(),this.destroyStyle()}static \u0275fac=function(i){return new(i||t)(je(nt),je(_e))};static \u0275cmp=T({type:t,selectors:[["p-dynamicDialog"],["p-dynamicdialog"],["p-dynamic-dialog"]],viewQuery:function(i,n){if(i&1&&Ue(Mn,5)(xt,5),i&2){let l;w(l=k())&&(n.insertionPoint=l.first),w(l=k())&&(n.dialog=l.first)}},features:[N([Sn,{provide:zn,useExisting:t},{provide:ae,useExisting:t}]),J([D]),x],decls:9,vars:43,consts:[["header",""],["content",""],["footer",""],["closeicon",""],["maximizeicon",""],["minimizeicon",""],["appendTo","self","hostName","DynamicDialog",3,"visibleChange","onHide","onMaximize","onResizeInit","onResizeEnd","onDragEnd","visible","header","draggable","resizable","contentStyle","modal","closeOnEscape","dismissableMask","rtl","closable","breakpoints","styleClass","maskStyleClass","showHeader","autoZIndex","baseZIndex","minX","minY","focusOnShow","maximizable","keepInViewport","focusTrap","transitionOptions","closeAriaLabel","minimizeIcon","maximizeIcon","closeButtonProps","maximizeButtonProps","position","pt","unstyled"],[4,"ngIf"],[4,"ngComponentOutlet"],["pDynamicDialogContent",""]],template:function(i,n){i&1&&(a(0,"p-dialog",6),Ot("visibleChange",function(p){return zt(n.visible,p)||(n.visible=p),p}),L("onHide",function(p){return n.onDialogHide(p)})("onMaximize",function(p){return n.onDialogMaximize(p)})("onResizeInit",function(p){return n.onDialogResizeInit(p)})("onResizeEnd",function(p){return n.onDialogResizeEnd(p)})("onDragEnd",function(p){return n.onDialogDragEnd(p)})("visibleChange",function(p){return n.onVisibleChange(p)}),b(1,to,2,0,null,7)(2,oo,2,0,null,7)(3,so,2,0,null,7)(4,po,2,0,null,7)(5,go,2,0,null,7)(6,_o,2,0,null,7)(7,vo,1,0,null,7)(8,yo,2,1,"div",7),s()),i&2&&(ze(n.dialogStyle),St("visible",n.visible),d("header",n.ddconfig==null?null:n.ddconfig.header)("draggable",(n.ddconfig==null?null:n.ddconfig.draggable)!==!1)("resizable",(n.ddconfig==null?null:n.ddconfig.resizable)!==!1)("contentStyle",n.ddconfig==null?null:n.ddconfig.contentStyle)("modal",(n.ddconfig==null?null:n.ddconfig.modal)!==!1)("closeOnEscape",(n.ddconfig==null?null:n.ddconfig.closeOnEscape)!==!1)("dismissableMask",n.ddconfig==null?null:n.ddconfig.dismissableMask)("rtl",n.ddconfig==null?null:n.ddconfig.rtl)("closable",n.closable)("breakpoints",n.breakpoints)("styleClass",n.ddconfig==null?null:n.ddconfig.styleClass)("maskStyleClass",n.ddconfig==null?null:n.ddconfig.maskStyleClass)("showHeader",(n.ddconfig==null?null:n.ddconfig.showHeader)!==!1)("autoZIndex",(n.ddconfig==null?null:n.ddconfig.autoZIndex)!==!1)("baseZIndex",(n.ddconfig==null?null:n.ddconfig.baseZIndex)||0)("minX",n.minX)("minY",n.minY)("focusOnShow",(n.ddconfig==null?null:n.ddconfig.focusOnShow)!==!1)("maximizable",n.maximizable)("keepInViewport",n.keepInViewport)("focusTrap",(n.ddconfig==null?null:n.ddconfig.focusTrap)!==!1)("transitionOptions",(n.ddconfig==null?null:n.ddconfig.transitionOptions)||"150ms cubic-bezier(0, 0, 0.2, 1)")("closeAriaLabel",(n.ddconfig==null?null:n.ddconfig.closeAriaLabel)||n.defaultCloseAriaLabel)("minimizeIcon",n.minimizeIcon)("maximizeIcon",n.maximizeIcon)("closeButtonProps",De(41,kn))("maximizeButtonProps",De(42,kn))("position",n.position)("pt",n.ddconfig.pt)("unstyled",n.isUnstyled),r(),d("ngIf",n.headerTemplate),r(),d("ngIf",n.contentTemplate),r(),d("ngIf",n.footerTemplate),r(),d("ngIf",n.closeIconTemplate),r(),d("ngIf",n.maximizeIconTemplate),r(),d("ngIf",n.minimizeIconTemplate),r(),d("ngIf",!n.contentTemplate),r(),d("ngIf",n.ddconfig.footer&&!n.footerTemplate))},dependencies:[ne,Bt,Ee,re,Mn,xt,Ke],encapsulation:2})}return t})();var Ct=class{_parentInjector;_additionalTokens;constructor(o,e){this._parentInjector=o,this._additionalTokens=e}get(o,e,i){let n=this._additionalTokens.get(o);return n||this._parentInjector.get(o,e)}},Dt=(()=>{class t{appRef;injector;document;dialogComponentRefMap=new Map;constructor(e,i,n){this.appRef=e,this.injector=i,this.document=n}open(e,i){if(!this.duplicationPermission(e,i))return null;let n=this.appendDialogComponentToBody(i,e),l=this.dialogComponentRefMap.get(n);return l&&(l.instance.childComponentType=e,l.instance.inputValues=i.inputValues||{}),n}getInstance(e){return this.dialogComponentRefMap.get(e)?.instance}appendDialogComponentToBody(e,i){let n=new WeakMap;n.set(nt,e);let l=new _e;n.set(_e,l);let p=l.onClose.subscribe(()=>{this.dialogComponentRefMap.get(l)?.instance.close()}),P=l.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(l),P.unsubscribe(),p.unsubscribe()}),Y=Pt(xo,{environmentInjector:this.appRef.injector,elementInjector:new Ct(this.injector,n)});this.appRef.attachView(Y.hostView);let q=Y.hostView.rootNodes[0];return!e.appendTo||e.appendTo==="body"?this.document.body.appendChild(q):qe(e.appendTo,q),this.dialogComponentRefMap.set(l,Y),l}removeDialogComponentFromBody(e){if(!e||!this.dialogComponentRefMap.has(e))return;let i=this.dialogComponentRefMap.get(e);i&&(this.appRef.detachView(i.hostView),i.destroy(),i.changeDetectorRef.detectChanges()),this.dialogComponentRefMap.delete(e)}duplicationPermission(e,i){if(i.duplicate)return!0;let n=!0;for(let[l,p]of this.dialogComponentRefMap)if(p.instance.childComponentType===e){n=!1;break}return n}static \u0275fac=function(i){return new(i||t)(Fe(kt),Fe(Et),Fe(fe))};static \u0275prov=A({token:t,factory:t.\u0275fac})}return t})();var it=class t{http=g(Rt);getSuggestions(o){return this.http.get(`${Ge.apiBaseUrl}/ai/orders/${o}/suggestions`).pipe(rt(e=>e.data))}getSuggestionsStream(o){return this.http.get(`${Ge.apiBaseUrl}/ai/orders/${o}/suggestions`,{params:{stream:"true"},responseType:"text"})}retrySuggestions(o){return this.http.post(`${Ge.apiBaseUrl}/ai/orders/${o}/suggestions/retry`,{}).pipe(rt(e=>e.data))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"})};var On=()=>[1,2,3],Pn=t=>({number:t}),Do=(t,o)=>o.productId+"-"+t,Io=(t,o)=>o.labelKey+"-"+t,Eo=(t,o)=>o.id;function To(t,o){t&1&&(a(0,"li",25)(1,"div",50),m(2,"p-skeleton",51),a(3,"div",52),m(4,"p-skeleton",53)(5,"p-skeleton",54),s()(),m(6,"p-skeleton",55),s())}function wo(t,o){t&1&&(a(0,"div",28),m(1,"p-skeleton",56)(2,"p-skeleton",57),s())}function ko(t,o){if(t&1&&(a(0,"div",0)(1,"div",3)(2,"header",4)(3,"div",5)(4,"div",6),m(5,"p-skeleton",7)(6,"p-skeleton",8),s(),a(7,"div",9),m(8,"p-skeleton",10),s()(),m(9,"p-skeleton",11),s(),a(10,"div",12)(11,"section",13),m(12,"p-skeleton",14),a(13,"div",15)(14,"div",16),m(15,"p-skeleton",17),a(16,"div",18),m(17,"p-skeleton",19)(18,"p-skeleton",20),s()(),a(19,"div",16),m(20,"p-skeleton",17),a(21,"div",18),m(22,"p-skeleton",21)(23,"p-skeleton",22),s()()()(),a(24,"section",13),m(25,"p-skeleton",23),a(26,"ul",24),ve(27,To,7,0,"li",25,at),s()(),a(29,"section",13),m(30,"p-skeleton",26),a(31,"div",27),ve(32,wo,3,0,"div",28,at),s()()(),a(34,"footer",29)(35,"div",30),m(36,"p-skeleton",31)(37,"p-skeleton",32),s(),m(38,"p-skeleton",33),s()(),a(39,"aside",34)(40,"header",35),m(41,"p-skeleton",36)(42,"p-skeleton",37),s(),a(43,"div",38)(44,"div",39)(45,"div",40),m(46,"p-skeleton",41)(47,"p-skeleton",42),s(),m(48,"p-skeleton",43)(49,"p-skeleton",44)(50,"p-skeleton",45),s(),a(51,"div",39),m(52,"p-skeleton",46)(53,"p-skeleton",47),s()(),a(54,"div",48),m(55,"p-skeleton",49),s()()()),t&2){let e=c();d("dir",e.i18n.dir()),r(27),ye(De(1,On)),r(5),ye(De(2,On))}}function Mo(t,o){if(t&1){let e=Q();a(0,"div",1)(1,"p"),u(2),s(),a(3,"button",58),L("click",function(){M(e);let n=c();return S(n.close())}),u(4),y(5,"translate"),s()()}t&2&&(r(2),h(o),r(2),I(" ",E(5,2,"ORDER_DETAILS.ACTIONS.CLOSE")," "))}function So(t,o){if(t&1&&(a(0,"p",96),u(1),s()),t&2){let e=c(2);r(),h(e.customer.addressLine1)}}function zo(t,o){if(t&1&&(a(0,"p",96),u(1),s()),t&2){let e=c(2);r(),h(e.customer.addressLine2)}}function Oo(t,o){if(t&1&&(a(0,"div",16)(1,"div",68),m(2,"i",95),s(),a(3,"div")(4,"p",70),u(5),y(6,"translate"),s(),z(7,So,2,1,"p",96),z(8,zo,2,1,"p",96),s()()),t&2){let e=c();r(5),I(" ",E(6,3,"ORDER_DETAILS.CUSTOMER.ADDRESS")," "),r(2),O(e.customer.addressLine1?7:-1),r(),O(e.customer.addressLine2?8:-1)}}function Po(t,o){if(t&1&&(a(0,"p",101),u(1),s()),t&2){let e=c().$implicit;r(),h(e.notes)}}function Lo(t,o){if(t&1&&(a(0,"li",75)(1,"div",97)(2,"span",98),u(3),s(),a(4,"div",99)(5,"p",100),u(6),s(),z(7,Po,2,1,"p",101),s()(),a(8,"span",102),u(9),s()()),t&2){let e=o.$implicit,i=c(2);r(3),I("",e.quantity,"x"),r(3),h(e.name),r(),O(e.notes?7:-1),r(2),I(" ",i.lineTotal(e.unitPrice,e.quantity)," ")}}function Bo(t,o){if(t&1&&(a(0,"li",103)(1,"p",104),u(2),y(3,"translate"),s(),a(4,"p",105),u(5),s()()),t&2){let e=o.$implicit,i=c(2);Xe("order-details__timeline-item--pending",e.inProgress),r(2),h(E(3,4,e.labelKey)),r(3),I(" ",i.timelineTime(e.at,e.inProgress)," ")}}function Ao(t,o){if(t&1){let e=Q();a(0,"button",106),L("click",function(){M(e);let n=c(2);return S(n.advanceStatus())}),u(1),y(2,"translate"),s()}if(t&2){let e=c(2);d("disabled",e.actionBusy()),r(),I(" ",E(2,2,o)," ")}}function Ro(t,o){if(t&1&&(a(0,"button",112),u(1),s()),t&2){let e=c(2).$implicit;r(),I(" ",e.actionLabel," ")}}function Fo(t,o){if(t&1&&(a(0,"div",107)(1,"span",108),u(2),y(3,"translate"),s(),m(4,"i",109),s(),a(5,"p",110),u(6),s(),a(7,"p",111),u(8),s(),z(9,Ro,2,1,"button",112)),t&2){let e=c().$implicit;r(2),I(" ",e.tag||E(3,4,"ORDER_DETAILS.AI.TAGS.UPSELL")," "),r(4),h(e.title),r(2),h(e.message),r(),O(e.actionLabel?9:-1)}}function No(t,o){if(t&1&&(a(0,"button",117),u(1),s()),t&2){let e=c(2).$implicit;r(),I(" ",e.actionLabel," ")}}function Vo(t,o){t&1&&(a(0,"button",118),y(1,"translate"),m(2,"i",119),s()),t&2&&v("aria-label",E(1,1,"ORDER_DETAILS.AI.CALL"))}function Ho(t,o){if(t&1&&(a(0,"div",113),m(1,"i",114),a(2,"p",115),u(3),s()(),a(4,"p",111),u(5),s(),a(6,"div",116),z(7,No,2,1,"button",117),z(8,Vo,3,3,"button",118),s()),t&2){let e=c().$implicit;r(3),I(" ",e.title," "),r(2),h(e.message),r(2),O(e.actionLabel?7:-1),r(),O(e.showSecondaryAction?8:-1)}}function jo(t,o){if(t&1&&(a(0,"button",122),m(1,"i",123),u(2),s()),t&2){let e=c(2).$implicit;r(2),I(" ",e.actionLabel," ")}}function $o(t,o){if(t&1&&(a(0,"div",113),m(1,"i",120),a(2,"p",121),u(3),s()(),a(4,"p",111),u(5),s(),z(6,jo,3,1,"button",122)),t&2){let e=c().$implicit;r(3),I(" ",e.title," "),r(2),h(e.message),r(),O(e.actionLabel?6:-1)}}function Uo(t,o){if(t&1&&(a(0,"span",126),u(1),s()),t&2){let e=c(2).$implicit;r(),h(e.tag)}}function Yo(t,o){if(t&1&&(a(0,"div",107)(1,"div",124),m(2,"span",125),a(3,"p",110),u(4),s()(),z(5,Uo,2,1,"span",126),s(),a(6,"div",127),m(7,"span")(8,"span"),s(),a(9,"p",128),u(10),s()),t&2){let e=c().$implicit;r(4),h(e.title),r(),O(e.tag?5:-1),r(5),h(e.message)}}function Xo(t,o){if(t&1&&(a(0,"div",113),m(1,"i",129),a(2,"p",130),u(3),s()(),a(4,"p",111),u(5),s()),t&2){let e=c().$implicit;r(3),I(" ",e.title," "),r(2),h(e.message)}}function Zo(t,o){if(t&1&&(a(0,"article"),z(1,Fo,10,6)(2,Ho,9,4)(3,$o,7,3)(4,Yo,11,3)(5,Xo,6,2),s()),t&2){let e,i=o.$implicit,n=c(2);C(n.suggestionClass(i.type)),r(),O((e=i.type)==="upsell"?1:e==="allergy"?2:e==="missing-info"?3:e==="delivery-risk"?4:e==="kitchen-overload"?5:-1)}}function Qo(t,o){t&1&&(a(0,"div",89),m(1,"img",131)(2,"div",132)(3,"div",133),a(4,"div",134)(5,"p",135),u(6),y(7,"translate"),s(),a(8,"p",136),u(9),y(10,"translate"),s()()()),t&2&&(r(6),h(E(7,2,"ORDER_DETAILS.AI.ROUTE")),r(3),h(E(10,4,"ORDER_DETAILS.AI.DISTANCE")))}function Go(t,o){if(t&1){let e=Q();a(0,"div",2),y(1,"translate"),a(2,"div",3)(3,"header",4)(4,"div",59)(5,"div",60)(6,"h2",61),u(7),y(8,"translate"),s(),a(9,"span",62),u(10),y(11,"translate"),s()(),a(12,"p",63),u(13),s()(),a(14,"button",64),y(15,"translate"),L("click",function(){M(e);let n=c();return S(n.close())}),m(16,"i",65),s()(),a(17,"div",12)(18,"section",66)(19,"h3",67),u(20),y(21,"translate"),s(),a(22,"div",15)(23,"div",16)(24,"div",68),m(25,"i",69),s(),a(26,"div")(27,"p",70),u(28),s(),a(29,"p",71),u(30),s()()(),z(31,Oo,9,5,"div",16),s()(),a(32,"section",72)(33,"h3",73),u(34),y(35,"translate"),s(),a(36,"ul",74),ve(37,Lo,10,4,"li",75,Do),s()(),a(39,"section",76)(40,"h3",77),u(41),y(42,"translate"),s(),a(43,"ol",78),ve(44,Bo,6,6,"li",79,Io),s()()(),a(46,"footer",29)(47,"div",80)(48,"button",81),u(49),y(50,"translate"),s(),a(51,"button",82),u(52),y(53,"translate"),s()(),z(54,Ao,3,4,"button",83),s()(),a(55,"aside",34),y(56,"translate"),a(57,"header",84),m(58,"i",85),a(59,"h3",86),u(60),y(61,"translate"),s()(),a(62,"div",87),ve(63,Zo,6,3,"article",88,Eo),z(65,Qo,11,6,"div",89),s(),a(66,"div",90)(67,"label",91),u(68),y(69,"translate"),s(),a(70,"input",92),y(71,"translate"),L("input",function(n){M(e);let l=c();return S(l.onAiPromptInput(n))}),s(),a(72,"button",93),y(73,"translate"),m(74,"i",94),s()()()()}if(t&2){let e,i=o,n=c();d("dir",n.i18n.dir()),v("aria-label",lt(1,24,"ORDER_DETAILS.ARIA.DIALOG",Oe(54,Pn,i.number))),r(7),I(" ",lt(8,27,"ORDER_DETAILS.TITLE",Oe(56,Pn,i.number))," "),r(3),h(E(11,30,n.channelKey())),r(3),h(n.metaLine()),r(),v("aria-label",E(15,32,"ORDER_DETAILS.ACTIONS.CLOSE")),r(6),I(" ",E(21,34,"ORDER_DETAILS.CUSTOMER.TITLE")," "),r(2),Xe("order-details__customer--single",!n.hasAddress()),r(6),h(i.customer.name),r(2),h(i.customer.phone),r(),O(n.hasAddress()?31:-1),r(3),I(" ",E(35,36,"ORDER_DETAILS.ITEMS.TITLE")," "),r(3),ye(i.items),r(4),I(" ",E(42,38,"ORDER_DETAILS.TIMELINE.TITLE")," "),r(3),ye(i.timeline),r(5),I(" ",E(50,40,"ORDER_DETAILS.ACTIONS.CANCEL")," "),r(3),I(" ",E(53,42,"ORDER_DETAILS.ACTIONS.PRINT")," "),r(2),O((e=n.canAdvance()&&n.primaryActionKey())?54:-1,e),r(),v("aria-label",E(56,44,"ORDER_DETAILS.AI.TITLE")),r(5),h(E(61,46,"ORDER_DETAILS.AI.TITLE")),r(3),ye(n.suggestions()),r(2),O(n.showMap()?65:-1),r(3),I(" ",E(69,48,"ORDER_DETAILS.AI.PROMPT_LABEL")," "),r(2),d("value",n.aiPrompt())("placeholder",E(71,50,"ORDER_DETAILS.AI.PROMPT_PLACEHOLDER")),r(2),v("aria-label",E(73,52,"ORDER_DETAILS.AI.SEND"))}}var Ln={received:"preparing",preparing:"ready",ready:"delivered",delivered:"completed"},qo={received:"ORDER_DETAILS.ACTIONS.MOVE_TO_PREPARING",preparing:"ORDER_DETAILS.ACTIONS.MOVE_TO_READY",ready:"ORDER_DETAILS.ACTIONS.MOVE_TO_DELIVERED",delivered:"ORDER_DETAILS.ACTIONS.MOVE_TO_COMPLETED"},Wo={delivery:"LIVE_ORDERS.CHANNEL.DELIVERY","walk-in":"LIVE_ORDERS.CHANNEL.WALK_IN",online:"LIVE_ORDERS.CHANNEL.ONLINE"},ot=class t{orderId=R.required();ordersApi=g(jt);aiApi=g(it);translate=g(Vt);dialogRef=g(_e,{optional:!0});i18n=g(tn);order=Z(null);suggestions=Z([]);loading=Z(!0);error=Z(null);actionBusy=Z(!1);aiPrompt=Z("");channelKey=U(()=>{let o=this.order()?.channel;return o?Wo[o]:""});metaLine=U(()=>{let o=this.order();if(!o)return"";let e=this.formatTime(o.createdAt);if(!o.etaAt)return this.translate.instant("ORDER_DETAILS.PLACED",{time:e});let i=this.formatTime(o.etaAt),n=Math.max(0,Math.round((new Date(o.etaAt).getTime()-Date.now())/6e4));return this.translate.instant("ORDER_DETAILS.PLACED_ETA",{time:e,eta:i,remaining:n})});hasAddress=U(()=>{let o=this.order()?.customer;return!!(o?.addressLine1||o?.addressLine2)});showMap=U(()=>this.order()?.channel==="delivery");primaryActionKey=U(()=>{let o=this.order()?.status;return o?qo[o]??null:null});canAdvance=U(()=>{let o=this.order()?.status;return o!=null&&Ln[o]!=null});ngOnInit(){this.load()}close(){this.dialogRef?.close()}onAiPromptInput(o){let e=o.target.value;this.aiPrompt.set(e)}lineTotal(o,e){return this.formatMoney(o*e)}formatMoney(o){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(o)}timelineTime(o,e){return e||!o?this.translate.instant("ORDER_DETAILS.TIMELINE.IN_PROGRESS"):this.formatTime(o)}suggestionClass(o){return`order-details__ai-card order-details__ai-card--${o}`}advanceStatus(){let o=this.order();if(!o||this.actionBusy())return;let e=Ln[o.status];e&&(this.actionBusy.set(!0),this.ordersApi.updateStatus(o.id,e).pipe(Se(1),Re(()=>(this.error.set(this.translate.instant("ORDER_DETAILS.ERRORS.MOVE_FAILED")),this.actionBusy.set(!1),Ae(null)))).subscribe(i=>{this.actionBusy.set(!1),i&&this.dialogRef?.close(i)}))}load(){let o=this.orderId();if(!o){this.loading.set(!1),this.error.set(this.translate.instant("ORDER_DETAILS.ERRORS.LOAD_FAILED"));return}this.loading.set(!0),this.error.set(null),It({order:this.ordersApi.getById(o).pipe(Re(()=>Ae(null))),ai:this.aiApi.getSuggestions(o).pipe(Re(()=>Ae({orderId:o,suggestions:[],generatedAt:new Date().toISOString()})))}).pipe(Se(1)).subscribe(({order:e,ai:i})=>{if(this.loading.set(!1),!e){this.error.set(this.translate.instant("ORDER_DETAILS.ERRORS.LOAD_FAILED"));return}this.order.set(e),this.suggestions.set(i.suggestions)})}formatTime(o){let e=this.translate.getCurrentLang()||"en";return new Intl.DateTimeFormat(e==="ar"?"ar-EG":"en-US",{hour:"numeric",minute:"2-digit"}).format(new Date(o))}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-order-details"]],hostAttrs:[1,"order-details"],inputs:{orderId:[1,"orderId"]},decls:3,vars:1,consts:[["role","status","aria-busy","true",1,"order-details__shell",3,"dir"],["role","alert",1,"order-details__state","order-details__state--error"],["role","dialog",1,"order-details__shell",3,"dir"],[1,"order-details__main"],[1,"order-details__header"],[1,"order-details__header-text",2,"width","100%"],[1,"order-details__title-row",2,"display","flex","gap","0.75rem","align-items","center"],["width","180px","height","1.75rem"],["width","80px","height","1.25rem","borderRadius","1rem"],[2,"margin-top","0.5rem"],["width","240px","height","1rem"],["shape","circle","size","2rem"],[1,"order-details__body"],[1,"order-details__section"],["width","120px","height","1.25rem","styleClass","mb-3"],[1,"order-details__customer"],[1,"order-details__customer-block"],["shape","circle","size","2.5rem"],[2,"display","flex","flex-direction","column","gap","0.35rem","flex","1"],["width","140px","height","1.1rem"],["width","100px","height","0.875rem"],["width","120px","height","1.1rem"],["width","80%","height","0.875rem"],["width","100px","height","1.25rem","styleClass","mb-3"],[1,"order-details__items",2,"list-style","none","padding","0","margin","0"],[1,"order-details__item",2,"display","flex","justify-content","space-between","align-items","center","padding","0.75rem 0"],["width","110px","height","1.25rem","styleClass","mb-3"],[2,"display","flex","flex-direction","column","gap","1rem","padding-inline-start","0.5rem"],[2,"display","flex","flex-direction","column","gap","0.25rem"],[1,"order-details__footer"],[1,"order-details__footer-left",2,"display","flex","gap","0.5rem"],["width","90px","height","2.25rem","borderRadius","0.375rem"],["width","80px","height","2.25rem","borderRadius","0.375rem"],["width","130px","height","2.25rem","borderRadius","0.375rem"],[1,"order-details__ai"],[1,"order-details__ai-header",2,"display","flex","gap","0.5rem","align-items","center"],["shape","circle","size","1.25rem"],["width","100px","height","1.25rem"],[1,"order-details__ai-scroll",2,"display","flex","flex-direction","column","gap","1rem","padding","1rem 0"],[2,"padding","1rem","border-radius","0.5rem","border","1px solid var(--surface-border, #e5e7eb)","display","flex","flex-direction","column","gap","0.5rem"],[2,"display","flex","justify-content","space-between","align-items","center"],["width","70px","height","1rem","borderRadius","1rem"],["shape","circle","size","1rem"],["width","70%","height","1.1rem"],["width","90%","height","0.875rem"],["width","100%","height","2rem","borderRadius","0.375rem","styleClass","mt-2"],["width","60%","height","1.1rem"],["width","85%","height","0.875rem"],[1,"order-details__ai-footer",2,"display","flex","gap","0.5rem"],["width","100%","height","2.25rem","borderRadius","0.375rem"],[1,"order-details__item-main",2,"display","flex","gap","0.75rem","align-items","center","flex","1"],["width","24px","height","1.25rem"],[2,"display","flex","flex-direction","column","gap","0.25rem","flex","1"],["width","60%","height","1rem"],["width","40%","height","0.8rem"],["width","60px","height","1.25rem"],["width","130px","height","1rem"],["width","90px","height","0.8rem"],["type","button",1,"order-details__btn","order-details__btn--ghost",3,"click"],[1,"order-details__header-text"],[1,"order-details__title-row"],[1,"order-details__title"],[1,"order-details__channel"],[1,"order-details__meta"],["type","button",1,"order-details__icon-btn",3,"click"],["aria-hidden","true",1,"fa-solid","fa-xmark"],["aria-labelledby","od-customer-heading",1,"order-details__section"],["id","od-customer-heading",1,"order-details__section-title"],["aria-hidden","true",1,"order-details__avatar"],[1,"fa-solid","fa-user"],[1,"order-details__customer-name"],["dir","auto",1,"order-details__customer-sub"],["aria-labelledby","od-items-heading",1,"order-details__section"],["id","od-items-heading",1,"order-details__section-title"],[1,"order-details__items"],[1,"order-details__item"],["aria-labelledby","od-timeline-heading",1,"order-details__section"],["id","od-timeline-heading",1,"order-details__section-title"],[1,"order-details__timeline"],[1,"order-details__timeline-item",3,"order-details__timeline-item--pending"],[1,"order-details__footer-left"],["type","button",1,"order-details__btn","order-details__btn--danger"],["type","button",1,"order-details__btn","order-details__btn--ghost"],["type","button",1,"order-details__btn","order-details__btn--primary",3,"disabled"],[1,"order-details__ai-header"],["aria-hidden","true",1,"fa-solid","fa-sparkles"],[1,"order-details__ai-title"],[1,"order-details__ai-scroll"],[3,"class"],[1,"order-details__map"],[1,"order-details__ai-footer"],["for","od-ai-prompt",1,"order-details__sr-only"],["id","od-ai-prompt","type","text",1,"order-details__ai-input",3,"input","value","placeholder"],["type","button",1,"order-details__ai-send"],["aria-hidden","true",1,"fa-solid","fa-paper-plane"],[1,"fa-solid","fa-location-dot"],[1,"order-details__customer-sub"],[1,"order-details__item-main"],[1,"order-details__qty"],[1,"order-details__item-text"],[1,"order-details__item-name"],[1,"order-details__item-notes"],[1,"order-details__item-price"],[1,"order-details__timeline-item"],[1,"order-details__timeline-label"],[1,"order-details__timeline-time"],["type","button",1,"order-details__btn","order-details__btn--primary",3,"click","disabled"],[1,"order-details__ai-card-top"],[1,"order-details__ai-tag"],["aria-hidden","true",1,"fa-solid","fa-burger"],[1,"order-details__ai-card-title"],[1,"order-details__ai-card-message"],["type","button",1,"order-details__ai-action","order-details__ai-action--primary"],[1,"order-details__ai-card-top","order-details__ai-card-top--start"],["aria-hidden","true",1,"fa-solid","fa-triangle-exclamation"],[1,"order-details__ai-card-title","order-details__ai-card-title--error"],[1,"order-details__ai-actions"],["type","button",1,"order-details__ai-action","order-details__ai-action--danger"],["type","button",1,"order-details__ai-icon-action"],["aria-hidden","true",1,"fa-solid","fa-phone"],["aria-hidden","true",1,"fa-solid","fa-circle-exclamation"],[1,"order-details__ai-card-title","order-details__ai-card-title--warn"],["type","button",1,"order-details__ai-action","order-details__ai-action--warn"],["aria-hidden","true",1,"fa-solid","fa-rotate"],[1,"order-details__ai-stream-label"],["aria-hidden","true",1,"order-details__ai-spinner"],[1,"order-details__ai-status"],["aria-hidden","true",1,"order-details__ai-skeleton"],[1,"order-details__ai-card-stream"],["aria-hidden","true",1,"fa-solid","fa-circle-info"],[1,"order-details__ai-card-title","order-details__ai-card-title--info"],["ngSrc","/assets/images/order-delivery-map.png","width","288","height","288","alt","",1,"order-details__map-img"],["aria-hidden","true",1,"order-details__map-overlay"],["aria-hidden","true",1,"order-details__map-pin"],[1,"order-details__map-caption"],[1,"order-details__map-eyebrow"],[1,"order-details__map-distance"]],template:function(e,i){if(e&1&&z(0,ko,56,3,"div",0)(1,Mo,6,4,"div",1)(2,Go,75,58,"div",2),e&2){let n;O(i.loading()?0:(n=i.error())?1:(n=i.order())?2:-1,n)}},dependencies:[At,Wt,qt,Ht],styles:['[_nghost-%COMP%]{display:block;width:min(1100px,96vw);max-height:min(900px,90vh);color:var(--on-surface)}.order-details__shell[_ngcontent-%COMP%]{display:flex;align-items:stretch;width:100%;max-height:min(900px,90vh);overflow:hidden;background:var(--surface);border:1px solid var(--outline-variant);border-radius:var(--radius-lg);box-shadow:0 25px 50px -12px #00000040}.order-details__main[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;min-width:0;border-inline-end:1px solid var(--outline-variant)}.order-details__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:var(--space-md);padding:var(--space-lg);background:var(--surface-container-low);border-bottom:1px solid var(--outline-variant)}.order-details__header-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-xs);min-width:0}.order-details__title-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-sm)}.order-details__title[_ngcontent-%COMP%]{margin:0;font-size:18px;font-weight:700;line-height:24px;letter-spacing:-.01em;color:var(--on-surface)}.order-details__channel[_ngcontent-%COMP%]{display:inline-flex;padding:4px 8px;border-radius:12px;background:color-mix(in srgb,var(--primary-container) 10%,transparent);color:var(--primary);font-size:11px;font-weight:500;line-height:14px;letter-spacing:.03em;text-transform:uppercase}.order-details__meta[_ngcontent-%COMP%]{margin:0;color:var(--on-surface-variant);font-size:13px;line-height:18px}.order-details__icon-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:0;border-radius:12px;background:transparent;color:var(--on-surface-variant);cursor:pointer}.order-details__icon-btn[_ngcontent-%COMP%]:hover, .order-details__icon-btn[_ngcontent-%COMP%]:focus-visible{color:var(--on-surface);background:var(--surface-container-high);outline:none}.order-details__body[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;gap:var(--space-lg);padding:var(--space-lg);overflow:auto}.order-details__section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-md)}.order-details__section-title[_ngcontent-%COMP%]{margin:0;color:var(--primary);font-size:12px;font-weight:600;line-height:16px;letter-spacing:.05em;text-transform:uppercase}.order-details__customer[_ngcontent-%COMP%]{display:flex;gap:var(--space-lg);padding:17px;background:var(--surface-container-low);border:1px solid var(--outline-variant);border-radius:var(--radius-sm)}.order-details__customer--single[_ngcontent-%COMP%]   .order-details__customer-block[_ngcontent-%COMP%]{flex:1}.order-details__customer-block[_ngcontent-%COMP%]{display:flex;flex:1;gap:var(--space-md);align-items:flex-start;min-width:0}.order-details__avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:12px;background:var(--secondary-container);color:var(--on-secondary-container);flex-shrink:0}.order-details__customer-name[_ngcontent-%COMP%]{margin:0;font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--on-surface)}.order-details__customer-sub[_ngcontent-%COMP%]{margin:0;color:var(--on-surface-variant);font-size:13px;line-height:18px}.order-details__items[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;overflow:hidden;background:var(--surface-container-low);border:1px solid var(--outline-variant);border-radius:var(--radius-sm)}.order-details__item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:var(--space-md);padding:var(--space-md)}.order-details__item[_ngcontent-%COMP%] + .order-details__item[_ngcontent-%COMP%]{border-top:1px solid var(--outline-variant)}.order-details__item-main[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md);min-width:0}.order-details__qty[_ngcontent-%COMP%]{width:32px;flex-shrink:0;color:var(--primary);font-size:18px;font-weight:600;line-height:24px;letter-spacing:-.01em}.order-details__item-name[_ngcontent-%COMP%]{margin:0;font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--on-surface)}.order-details__item-notes[_ngcontent-%COMP%]{margin:0;color:var(--on-surface-variant);font-size:13px;font-style:italic;line-height:18px}.order-details__item-price[_ngcontent-%COMP%]{flex-shrink:0;font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--on-surface)}.order-details__timeline[_ngcontent-%COMP%]{position:relative;list-style:none;margin:0;border-inline-start:2px solid var(--outline-variant)}.order-details__timeline-item[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:2px;padding-inline-start:1rem}.order-details__timeline-item[_ngcontent-%COMP%] + .order-details__timeline-item[_ngcontent-%COMP%]{margin-top:var(--space-md)}.order-details__timeline-item[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-inline-start:-1px;top:2px;width:12px;height:12px;border-radius:var(--radius-full);background:var(--primary);box-shadow:0 0 0 4px var(--surface);transform:translate(-50%)}[dir=rtl][_ngcontent-%COMP%]   .order-details__timeline-item[_ngcontent-%COMP%]:before{transform:translate(50%)}.order-details__timeline-item--pending[_ngcontent-%COMP%]:before{background:var(--outline)}.order-details__timeline-label[_ngcontent-%COMP%]{margin:0;font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--on-surface)}.order-details__timeline-time[_ngcontent-%COMP%]{margin:0;color:var(--on-surface-variant);font-size:11px;font-weight:500;line-height:14px;letter-spacing:.03em}.order-details__footer[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-md);padding:var(--space-lg);background:var(--surface-container);border-top:1px solid var(--outline-variant)}.order-details__footer-left[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--space-md)}.order-details__btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:0 25px;border-radius:var(--radius-sm);border:1px solid transparent;background:transparent;font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;cursor:pointer}.order-details__btn[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:not-allowed}.order-details__btn--danger[_ngcontent-%COMP%]{border-color:var(--error);color:var(--error)}.order-details__btn--ghost[_ngcontent-%COMP%]{border-color:var(--outline-variant);color:var(--on-surface)}.order-details__btn--primary[_ngcontent-%COMP%]{min-height:48px;padding:0 var(--space-lg);background:var(--primary);color:var(--on-primary);box-shadow:0 10px 15px -3px color-mix(in srgb,var(--primary) 20%,transparent),0 4px 6px -4px color-mix(in srgb,var(--primary) 20%,transparent)}.order-details__btn--primary[_ngcontent-%COMP%]:hover:not(:disabled), .order-details__btn--primary[_ngcontent-%COMP%]:focus-visible{filter:brightness(1.05);outline:none}.order-details__ai[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:320px;flex-shrink:0;background:var(--surface-container-lowest)}.order-details__ai-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-sm);padding:var(--space-md);background:var(--surface-container-high);border-bottom:1px solid var(--outline-variant);color:var(--primary)}.order-details__ai-title[_ngcontent-%COMP%]{margin:0;color:var(--on-surface);font-size:12px;font-weight:600;line-height:16px;letter-spacing:.1em;text-transform:uppercase}.order-details__ai-scroll[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;gap:var(--space-md);padding:var(--space-md);overflow:auto}.order-details__ai-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--space-sm);padding:17px;border-radius:var(--radius-sm);border:1px solid transparent}.order-details__ai-card--upsell[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--primary) 10%,transparent);border-color:color-mix(in srgb,var(--primary) 30%,transparent)}.order-details__ai-card--allergy[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--error-container) 20%,transparent);border-color:color-mix(in srgb,var(--error) 30%,transparent)}.order-details__ai-card--missing-info[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--tertiary-container) 10%,transparent);border-color:color-mix(in srgb,var(--tertiary) 30%,transparent)}.order-details__ai-card--delivery-risk[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--surface-variant) 40%,transparent);border-color:var(--outline-variant)}.order-details__ai-card--kitchen-overload[_ngcontent-%COMP%]{background:color-mix(in srgb,var(--secondary-container) 10%,transparent);border-color:color-mix(in srgb,var(--secondary) 30%,transparent)}.order-details__ai-card-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:var(--space-sm)}.order-details__ai-card-top--start[_ngcontent-%COMP%]{justify-content:flex-start}.order-details__ai-tag[_ngcontent-%COMP%]{display:inline-flex;padding:4px 8px;border-radius:2px;background:var(--primary);color:var(--on-primary);font-size:10px;font-weight:700;line-height:15px;text-transform:uppercase}.order-details__ai-card-title[_ngcontent-%COMP%]{margin:0;font-size:13px;font-weight:400;line-height:18px;color:var(--on-surface)}.order-details__ai-card-title--error[_ngcontent-%COMP%]{font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--error)}.order-details__ai-card-title--warn[_ngcontent-%COMP%]{font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--tertiary)}.order-details__ai-card-title--info[_ngcontent-%COMP%]{font-size:12px;font-weight:600;line-height:16px;letter-spacing:.02em;color:var(--secondary)}.order-details__ai-card-message[_ngcontent-%COMP%]{margin:0;color:var(--on-surface-variant);font-size:11px;font-weight:500;line-height:14px;letter-spacing:.03em}.order-details__ai-card-stream[_ngcontent-%COMP%]{margin:0;color:var(--primary);font-size:11px;font-weight:700;font-style:italic;line-height:14px;letter-spacing:.03em}.order-details__ai-action[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:4px;width:100%;min-height:32px;padding:0 var(--space-sm);border-radius:var(--radius-md);border:1px solid transparent;font-size:11px;font-weight:700;line-height:14px;letter-spacing:.03em;cursor:pointer}.order-details__ai-action--primary[_ngcontent-%COMP%]{background:var(--primary);color:var(--on-primary)}.order-details__ai-action--danger[_ngcontent-%COMP%]{background:var(--error);color:var(--on-error)}.order-details__ai-action--warn[_ngcontent-%COMP%]{background:transparent;border-color:color-mix(in srgb,var(--tertiary) 50%,transparent);color:var(--tertiary)}.order-details__ai-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.order-details__ai-actions[_ngcontent-%COMP%]   .order-details__ai-action[_ngcontent-%COMP%]{flex:1}.order-details__ai-icon-action[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:var(--radius-md);border:1px solid color-mix(in srgb,var(--error) 50%,transparent);background:transparent;color:var(--error);cursor:pointer}.order-details__ai-stream-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-sm)}.order-details__ai-spinner[_ngcontent-%COMP%]{width:16px;height:16px;border:2px solid color-mix(in srgb,var(--primary) 30%,transparent);border-top-color:var(--primary);border-radius:var(--radius-full);animation:_ngcontent-%COMP%_od-spin .8s linear infinite}.order-details__ai-status[_ngcontent-%COMP%]{color:var(--on-surface-variant);font-size:11px;font-weight:500;line-height:14px;letter-spacing:.03em}.order-details__ai-skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.order-details__ai-skeleton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:8px;border-radius:12px;background:linear-gradient(90deg,var(--surface-container) 0%,var(--surface-variant) 50%,var(--surface-container) 100%);background-size:200% 100%;animation:_ngcontent-%COMP%_od-shimmer 1.4s ease-in-out infinite}.order-details__ai-skeleton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{width:66%}.order-details__map[_ngcontent-%COMP%]{position:relative;border:1px solid var(--outline-variant);border-radius:var(--radius-sm)}.order-details__map-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:var(--radius-sm)}.order-details__map-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:linear-gradient(to top,var(--surface) 0%,transparent 60%);opacity:.6}.order-details__map-pin[_ngcontent-%COMP%]{position:absolute;top:47%;left:50%;width:16px;height:16px;border-radius:var(--radius-full);background:var(--primary);transform:translate(-50%,-50%);box-shadow:0 0 0 6px color-mix(in srgb,var(--primary) 25%,transparent)}.order-details__map-caption[_ngcontent-%COMP%]{position:absolute;inset-inline:8px;bottom:8px;z-index:1}.order-details__map-eyebrow[_ngcontent-%COMP%]{margin:0;color:var(--primary);font-size:10px;font-weight:700;line-height:15px;text-transform:uppercase;text-shadow:0 2px 1px rgba(0,0,0,.2)}.order-details__map-distance[_ngcontent-%COMP%]{margin:0;color:var(--on-surface);font-size:11px;font-weight:700;line-height:14px;letter-spacing:.03em}.order-details__ai-footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--space-md);padding:var(--space-md);background:var(--surface-container-high);border-top:1px solid var(--outline-variant)}.order-details__ai-input[_ngcontent-%COMP%]{flex:1;min-width:0;height:32px;padding:0 var(--space-md);border:0;border-radius:12px;background:var(--surface-container-highest);color:var(--on-surface);font-size:10px;line-height:15px}.order-details__ai-input[_ngcontent-%COMP%]::placeholder{color:var(--on-surface-variant)}.order-details__ai-input[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--primary);outline-offset:1px}.order-details__ai-send[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:0;border-radius:12px;background:var(--primary);color:var(--on-primary);cursor:pointer;flex-shrink:0}.order-details__state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--space-md);min-height:240px;padding:var(--space-lg);background:var(--surface);border:1px solid var(--outline-variant);border-radius:var(--radius-lg);color:var(--on-surface-variant)}.order-details__state--error[_ngcontent-%COMP%]{color:var(--error)}.order-details__sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@keyframes _ngcontent-%COMP%_od-spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_od-shimmer{0%{background-position:100% 0}to{background-position:-100% 0}}@media(max-width:900px){[_nghost-%COMP%]{width:min(100vw - 16px,720px)}.order-details__shell[_ngcontent-%COMP%]{flex-direction:column;max-height:min(920px,94vh)}.order-details__main[_ngcontent-%COMP%]{border-inline-end:0;border-bottom:1px solid var(--outline-variant);max-height:58vh}.order-details__ai[_ngcontent-%COMP%]{width:100%;min-height:280px}.order-details__customer[_ngcontent-%COMP%]{flex-direction:column}}'],changeDetection:0})};var Bn=class t{dialogService=g(Dt);route=g(Ft);router=g(Nt);ref=null;ngOnInit(){let o=this.route.snapshot.paramMap.get("id");this.ref=this.dialogService.open(ot,{showHeader:!1,modal:!0,dismissableMask:!0,closable:!0,styleClass:"order-details-dialog",contentStyle:{padding:"0",overflow:"hidden",background:"transparent"},style:{width:"auto",maxWidth:"96vw"},inputValues:{orderId:o}}),this.ref?.onClose.pipe(Se(1)).subscribe(()=>{this.router.navigate(["/",{outlets:{modal:null}}])})}ngOnDestroy(){this.ref?.close()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],features:[N([Dt])],decls:0,vars:0,template:function(e,i){},encapsulation:2})};export{Bn as OrderDetailRouteComponent};
