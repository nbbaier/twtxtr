#!/usr/bin/env node
var A0=Object.create;var{defineProperty:T0,getPrototypeOf:B0,getOwnPropertyNames:E0}=Object;var F0=Object.prototype.hasOwnProperty;var G0=(H,j,E)=>{E=H!=null?A0(B0(H)):{};const S=j||!H||!H.__esModule?T0(E,"default",{value:H,enumerable:!0}):E;for(let X of E0(H))if(!F0.call(S,X))T0(S,X,{get:()=>H[X],enumerable:!0});return S};var I0=(H,j)=>()=>(j||H((j={exports:{}}).exports,j),j.exports);var Z0=I0((l,i)=>{(function(H,j){typeof l=="object"&&typeof i!="undefined"?i.exports=j():typeof define=="function"&&define.amd?define(j):(H=typeof globalThis!="undefined"?globalThis:H||self).dayjs=j()})(l,function(){var H=1000,j=60000,E=3600000,S="millisecond",X="second",P="minute",T="hour",Z="day",K="week",Y="month",G="quarter",Q="year",I="date",F="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(z){var W=["th","st","nd","rd"],J=z%100;return"["+z+(W[(J-20)%10]||W[J]||W[0])+"]"}},$=function(z,W,J){var q=String(z);return!q||q.length>=W?z:""+Array(W+1-q.length).join(J)+z},s={s:$,z:function(z){var W=-z.utcOffset(),J=Math.abs(W),q=Math.floor(J/60),V=J%60;return(W<=0?"+":"-")+$(q,2,"0")+":"+$(V,2,"0")},m:function z(W,J){if(W.date()<J.date())return-z(J,W);var q=12*(J.year()-W.year())+(J.month()-W.month()),V=W.clone().add(q,Y),A=J-V<0,B=W.clone().add(q+(A?-1:1),Y);return+(-(q+(J-V)/(A?V-B:B-V))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:Y,y:Q,w:K,d:Z,D:I,h:T,m:P,s:X,ms:S,Q:G}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},c="en",D={};D[c]=R;var r="$isDayjsObject",o=function(z){return z instanceof m||!(!z||!z[r])},d=function z(W,J,q){var V;if(!W)return c;if(typeof W=="string"){var A=W.toLowerCase();D[A]&&(V=A),J&&(D[A]=J,V=A);var B=W.split("-");if(!V&&B.length>1)return z(B[0])}else{var U=W.name;D[U]=W,V=U}return!q&&V&&(c=V),V||!q&&c},L=function(z,W){if(o(z))return z.clone();var J=typeof W=="object"?W:{};return J.date=z,J.args=arguments,new m(J)},N=s;N.l=d,N.i=o,N.w=function(z,W){return L(z,{locale:W.$L,utc:W.$u,x:W.$x,$offset:W.$offset})};var m=function(){function z(J){this.$L=d(J.locale,null,!0),this.parse(J),this.$x=this.$x||J.x||{},this[r]=!0}var W=z.prototype;return W.parse=function(J){this.$d=function(q){var{date:V,utc:A}=q;if(V===null)return new Date(NaN);if(N.u(V))return new Date;if(V instanceof Date)return new Date(V);if(typeof V=="string"&&!/Z$/i.test(V)){var B=V.match(_);if(B){var U=B[2]-1||0,x=(B[7]||"0").substring(0,3);return A?new Date(Date.UTC(B[1],U,B[3]||1,B[4]||0,B[5]||0,B[6]||0,x)):new Date(B[1],U,B[3]||1,B[4]||0,B[5]||0,B[6]||0,x)}}return new Date(V)}(J),this.init()},W.init=function(){var J=this.$d;this.$y=J.getFullYear(),this.$M=J.getMonth(),this.$D=J.getDate(),this.$W=J.getDay(),this.$H=J.getHours(),this.$m=J.getMinutes(),this.$s=J.getSeconds(),this.$ms=J.getMilliseconds()},W.$utils=function(){return N},W.isValid=function(){return this.$d.toString()!==F},W.isSame=function(J,q){var V=L(J);return this.startOf(q)<=V&&V<=this.endOf(q)},W.isAfter=function(J,q){return L(J)<this.startOf(q)},W.isBefore=function(J,q){return this.endOf(q)<L(J)},W.$g=function(J,q,V){return N.u(J)?this[q]:this.set(V,J)},W.unix=function(){return Math.floor(this.valueOf()/1000)},W.valueOf=function(){return this.$d.getTime()},W.startOf=function(J,q){var V=this,A=!!N.u(q)||q,B=N.p(J),U=function(h,w){var p=N.w(V.$u?Date.UTC(V.$y,w,h):new Date(V.$y,w,h),V);return A?p:p.endOf(Z)},x=function(h,w){return N.w(V.toDate()[h].apply(V.toDate("s"),(A?[0,0,0,0]:[23,59,59,999]).slice(w)),V)},M=this.$W,k=this.$M,O=this.$D,g="set"+(this.$u?"UTC":"");switch(B){case Q:return A?U(1,0):U(31,11);case Y:return A?U(1,k):U(0,k+1);case K:var v=this.$locale().weekStart||0,u=(M<v?M+7:M)-v;return U(A?O-u:O+(6-u),k);case Z:case I:return x(g+"Hours",0);case T:return x(g+"Minutes",1);case P:return x(g+"Seconds",2);case X:return x(g+"Milliseconds",3);default:return this.clone()}},W.endOf=function(J){return this.startOf(J,!1)},W.$set=function(J,q){var V,A=N.p(J),B="set"+(this.$u?"UTC":""),U=(V={},V[Z]=B+"Date",V[I]=B+"Date",V[Y]=B+"Month",V[Q]=B+"FullYear",V[T]=B+"Hours",V[P]=B+"Minutes",V[X]=B+"Seconds",V[S]=B+"Milliseconds",V)[A],x=A===Z?this.$D+(q-this.$W):q;if(A===Y||A===Q){var M=this.clone().set(I,1);M.$d[U](x),M.init(),this.$d=M.set(I,Math.min(this.$D,M.daysInMonth())).$d}else U&&this.$d[U](x);return this.init(),this},W.set=function(J,q){return this.clone().$set(J,q)},W.get=function(J){return this[N.p(J)]()},W.add=function(J,q){var V,A=this;J=Number(J);var B=N.p(q),U=function(k){var O=L(A);return N.w(O.date(O.date()+Math.round(k*J)),A)};if(B===Y)return this.set(Y,this.$M+J);if(B===Q)return this.set(Q,this.$y+J);if(B===Z)return U(1);if(B===K)return U(7);var x=(V={},V[P]=j,V[T]=E,V[X]=H,V)[B]||1,M=this.$d.getTime()+J*x;return N.w(M,this)},W.subtract=function(J,q){return this.add(-1*J,q)},W.format=function(J){var q=this,V=this.$locale();if(!this.isValid())return V.invalidDate||F;var A=J||"YYYY-MM-DDTHH:mm:ssZ",B=N.z(this),U=this.$H,x=this.$m,M=this.$M,k=V.weekdays,O=V.months,g=V.meridiem,v=function(w,p,b,f){return w&&(w[p]||w(q,A))||b[p].slice(0,f)},u=function(w){return N.s(U%12||12,w,"0")},h=g||function(w,p,b){var f=w<12?"AM":"PM";return b?f.toLowerCase():f};return A.replace(C,function(w,p){return p||function(b){switch(b){case"YY":return String(q.$y).slice(-2);case"YYYY":return N.s(q.$y,4,"0");case"M":return M+1;case"MM":return N.s(M+1,2,"0");case"MMM":return v(V.monthsShort,M,O,3);case"MMMM":return v(O,M);case"D":return q.$D;case"DD":return N.s(q.$D,2,"0");case"d":return String(q.$W);case"dd":return v(V.weekdaysMin,q.$W,k,2);case"ddd":return v(V.weekdaysShort,q.$W,k,3);case"dddd":return k[q.$W];case"H":return String(U);case"HH":return N.s(U,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return h(U,x,!0);case"A":return h(U,x,!1);case"m":return String(x);case"mm":return N.s(x,2,"0");case"s":return String(q.$s);case"ss":return N.s(q.$s,2,"0");case"SSS":return N.s(q.$ms,3,"0");case"Z":return B}return null}(w)||B.replace(":","")})},W.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},W.diff=function(J,q,V){var A,B=this,U=N.p(q),x=L(J),M=(x.utcOffset()-this.utcOffset())*j,k=this-x,O=function(){return N.m(B,x)};switch(U){case Q:A=O()/12;break;case Y:A=O();break;case G:A=O()/3;break;case K:A=(k-M)/604800000;break;case Z:A=(k-M)/86400000;break;case T:A=k/E;break;case P:A=k/j;break;case X:A=k/H;break;default:A=k}return V?A:N.a(A)},W.daysInMonth=function(){return this.endOf(Y).$D},W.$locale=function(){return D[this.$L]},W.locale=function(J,q){if(!J)return this.$L;var V=this.clone(),A=d(J,q,!0);return A&&(V.$L=A),V},W.clone=function(){return N.w(this.$d,this)},W.toDate=function(){return new Date(this.valueOf())},W.toJSON=function(){return this.isValid()?this.toISOString():null},W.toISOString=function(){return this.$d.toISOString()},W.toString=function(){return this.$d.toUTCString()},z}(),e=m.prototype;return L.prototype=e,[["$ms",S],["$s",X],["$m",P],["$H",T],["$W",Z],["$M",Y],["$y",Q],["$D",I]].forEach(function(z){e[z[1]]=function(W){return this.$g(W,z[0],z[1])}}),L.extend=function(z,W){return z.$i||(z(W,m,L),z.$i=!0),L},L.locale=d,L.isDayjs=o,L.unix=function(z){return L(1000*z)},L.en=D[c],L.Ls=D,L.p={},L})});var z0=G0(Z0(),1);var{create:N0,defineProperty:H0,getOwnPropertyDescriptor:R0,getOwnPropertyNames:U0,getPrototypeOf:X0}=Object,x0=Object.prototype.hasOwnProperty,L0=(H,j)=>()=>(j||H((j={exports:{}}).exports,j),j.exports),M0=(H,j,E,S)=>{if(j&&typeof j=="object"||typeof j=="function")for(let X of U0(j))!x0.call(H,X)&&X!==E&&H0(H,X,{get:()=>j[X],enumerable:!(S=R0(j,X))||S.enumerable});return H},S0=(H,j,E)=>(E=H!=null?N0(X0(H)):{},M0(j||!H||!H.__esModule?H0(E,"default",{value:H,enumerable:!0}):E,H)),P0=L0((H)=>{H.endianness=function(){return"LE"},H.hostname=function(){return typeof location<"u"?location.hostname:""},H.loadavg=function(){return[]},H.uptime=function(){return 0},H.freemem=function(){return Number.MAX_VALUE},H.totalmem=function(){return Number.MAX_VALUE},H.cpus=function(){return[]},H.type=function(){return"Browser"},H.release=function(){return typeof navigator<"u"?navigator.appVersion:""},H.networkInterfaces=H.getNetworkInterfaces=function(){return{}},H.arch=function(){return"javascript"},H.platform=function(){return"browser"},H.tmpdir=H.tmpDir=function(){return"/tmp"},H.EOL=`
`,H.homedir=function(){return"/"}}),J0=S0(P0()),b0=J0.default,{endianness:d0,hostname:m0,loadavg:f0,uptime:a0,freemem:s0,totalmem:o0,cpus:l0,type:i0,release:n0,arch:t0,platform:r0,tmpdir:e0,EOL:T1,homedir:a,networkInterfaces:Z1,getNetworkInterfaces:H1}=J0.default;var{create:_0,defineProperty:t,getOwnPropertyDescriptor:k0,getOwnPropertyNames:C0,getPrototypeOf:w0}=Object,O0=Object.prototype.hasOwnProperty,c0=(H,j)=>()=>(j||H((j={exports:{}}).exports,j),j.exports),p0=(H,j)=>{for(var E in j)t(H,E,{get:j[E],enumerable:!0})},n=(H,j,E,S)=>{if(j&&typeof j=="object"||typeof j=="function")for(let X of C0(j))!O0.call(H,X)&&X!==E&&t(H,X,{get:()=>j[X],enumerable:!(S=k0(j,X))||S.enumerable});return H},y0=(H,j,E)=>(n(H,j,"default"),E&&n(E,j,"default")),K0=(H,j,E)=>(E=H!=null?_0(w0(H)):{},n(j||!H||!H.__esModule?t(E,"default",{value:H,enumerable:!0}):E,H)),Q0=c0((H,j)=>{function E(T){if(typeof T!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(T))}function S(T,Z){for(var K="",Y=0,G=-1,Q=0,I,F=0;F<=T.length;++F){if(F<T.length)I=T.charCodeAt(F);else{if(I===47)break;I=47}if(I===47){if(!(G===F-1||Q===1))if(G!==F-1&&Q===2){if(K.length<2||Y!==2||K.charCodeAt(K.length-1)!==46||K.charCodeAt(K.length-2)!==46){if(K.length>2){var _=K.lastIndexOf("/");if(_!==K.length-1){_===-1?(K="",Y=0):(K=K.slice(0,_),Y=K.length-1-K.lastIndexOf("/")),G=F,Q=0;continue}}else if(K.length===2||K.length===1){K="",Y=0,G=F,Q=0;continue}}Z&&(K.length>0?K+="/..":K="..",Y=2)}else K.length>0?K+="/"+T.slice(G+1,F):K=T.slice(G+1,F),Y=F-G-1;G=F,Q=0}else I===46&&Q!==-1?++Q:Q=-1}return K}function X(T,Z){var K=Z.dir||Z.root,Y=Z.base||(Z.name||"")+(Z.ext||"");return K?K===Z.root?K+Y:K+T+Y:Y}var P={resolve:function(){for(var T="",Z=!1,K,Y=arguments.length-1;Y>=-1&&!Z;Y--){var G;Y>=0?G=arguments[Y]:(K===void 0&&(K=process.cwd()),G=K),E(G),G.length!==0&&(T=G+"/"+T,Z=G.charCodeAt(0)===47)}return T=S(T,!Z),Z?T.length>0?"/"+T:"/":T.length>0?T:"."},normalize:function(T){if(E(T),T.length===0)return".";var Z=T.charCodeAt(0)===47,K=T.charCodeAt(T.length-1)===47;return T=S(T,!Z),T.length===0&&!Z&&(T="."),T.length>0&&K&&(T+="/"),Z?"/"+T:T},isAbsolute:function(T){return E(T),T.length>0&&T.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var T,Z=0;Z<arguments.length;++Z){var K=arguments[Z];E(K),K.length>0&&(T===void 0?T=K:T+="/"+K)}return T===void 0?".":P.normalize(T)},relative:function(T,Z){if(E(T),E(Z),T===Z||(T=P.resolve(T),Z=P.resolve(Z),T===Z))return"";for(var K=1;K<T.length&&T.charCodeAt(K)===47;++K);for(var Y=T.length,G=Y-K,Q=1;Q<Z.length&&Z.charCodeAt(Q)===47;++Q);for(var I=Z.length,F=I-Q,_=G<F?G:F,C=-1,R=0;R<=_;++R){if(R===_){if(F>_){if(Z.charCodeAt(Q+R)===47)return Z.slice(Q+R+1);if(R===0)return Z.slice(Q+R)}else G>_&&(T.charCodeAt(K+R)===47?C=R:R===0&&(C=0));break}var $=T.charCodeAt(K+R),s=Z.charCodeAt(Q+R);if($!==s)break;$===47&&(C=R)}var c="";for(R=K+C+1;R<=Y;++R)(R===Y||T.charCodeAt(R)===47)&&(c.length===0?c+="..":c+="/..");return c.length>0?c+Z.slice(Q+C):(Q+=C,Z.charCodeAt(Q)===47&&++Q,Z.slice(Q))},_makeLong:function(T){return T},dirname:function(T){if(E(T),T.length===0)return".";for(var Z=T.charCodeAt(0),K=Z===47,Y=-1,G=!0,Q=T.length-1;Q>=1;--Q)if(Z=T.charCodeAt(Q),Z===47){if(!G){Y=Q;break}}else G=!1;return Y===-1?K?"/":".":K&&Y===1?"//":T.slice(0,Y)},basename:function(T,Z){if(Z!==void 0&&typeof Z!="string")throw new TypeError('"ext" argument must be a string');E(T);var K=0,Y=-1,G=!0,Q;if(Z!==void 0&&Z.length>0&&Z.length<=T.length){if(Z.length===T.length&&Z===T)return"";var I=Z.length-1,F=-1;for(Q=T.length-1;Q>=0;--Q){var _=T.charCodeAt(Q);if(_===47){if(!G){K=Q+1;break}}else F===-1&&(G=!1,F=Q+1),I>=0&&(_===Z.charCodeAt(I)?--I===-1&&(Y=Q):(I=-1,Y=F))}return K===Y?Y=F:Y===-1&&(Y=T.length),T.slice(K,Y)}else{for(Q=T.length-1;Q>=0;--Q)if(T.charCodeAt(Q)===47){if(!G){K=Q+1;break}}else Y===-1&&(G=!1,Y=Q+1);return Y===-1?"":T.slice(K,Y)}},extname:function(T){E(T);for(var Z=-1,K=0,Y=-1,G=!0,Q=0,I=T.length-1;I>=0;--I){var F=T.charCodeAt(I);if(F===47){if(!G){K=I+1;break}continue}Y===-1&&(G=!1,Y=I+1),F===46?Z===-1?Z=I:Q!==1&&(Q=1):Z!==-1&&(Q=-1)}return Z===-1||Y===-1||Q===0||Q===1&&Z===Y-1&&Z===K+1?"":T.slice(Z,Y)},format:function(T){if(T===null||typeof T!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof T);return X("/",T)},parse:function(T){E(T);var Z={root:"",dir:"",base:"",ext:"",name:""};if(T.length===0)return Z;var K=T.charCodeAt(0),Y=K===47,G;Y?(Z.root="/",G=1):G=0;for(var Q=-1,I=0,F=-1,_=!0,C=T.length-1,R=0;C>=G;--C){if(K=T.charCodeAt(C),K===47){if(!_){I=C+1;break}continue}F===-1&&(_=!1,F=C+1),K===46?Q===-1?Q=C:R!==1&&(R=1):Q!==-1&&(R=-1)}return Q===-1||F===-1||R===0||R===1&&Q===F-1&&Q===I+1?F!==-1&&(I===0&&Y?Z.base=Z.name=T.slice(1,F):Z.base=Z.name=T.slice(I,F)):(I===0&&Y?(Z.name=T.slice(1,Q),Z.base=T.slice(1,F)):(Z.name=T.slice(I,Q),Z.base=T.slice(I,F)),Z.ext=T.slice(Q,F)),I>0?Z.dir=T.slice(0,I-1):Y&&(Z.dir="/"),Z},sep:"/",delimiter:":",win32:null,posix:null};P.posix=P,j.exports=P}),V0={};p0(V0,{default:()=>y});y0(V0,K0(Q0()));var y=K0(Q0());var{appendFile:h0}=(()=>({}));var{default:W0}=(()=>({}));function j0(H){if(H[0]==="~")return y.join(a(),H.slice(1));return H}var D0=()=>{try{return JSON.parse(W0.readFileSync(q0,"utf-8"))}catch(H){return{}}},v0=()=>{try{return JSON.parse(W0.readFileSync(y.join(process.cwd(),"twttr.json"),"utf-8"))}catch(H){return{}}},Y0=()=>{const H=D0(),j=v0();if(Object.keys(H).length===0&&Object.keys(j).length===0)throw new Error("No global or local configuration found");return{...H,...j}};var $0=y.join(a(),".config","twttr"),q0=y.join($0,"config.json"),g0=async()=>{const H=Y0(),j=j0(H.twtxt.twtfile),E=y.dirname(j),X=`git commitwtfileDirt -i ${j} -m automated commit && git push`,P=process.argv.slice(2).join(" ");if(!(P.length>0))console.error("No message provided"),process.exit(1);const T=`${z0.default().format()}\t${P}\n`;try{h0(j,T,"utf8");const Z=Bun.spawnSync(["git","commit","-i",E,"-m","automated message"],{cwd:E});if(Bun.spawnSync(["git","push","-v"],{cwd:E}).success&&Z.success)console.log("successfully committed and pushed")}catch(Z){console.error(`failed to commit and push: ${Z}`)}};g0();export{q0 as configFilePath};