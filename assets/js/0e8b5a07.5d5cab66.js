(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return x})),n.d(e,"metadata",(function(){return w})),n.d(e,"toc",(function(){return S})),n.d(e,"default",(function(){return P}));var r=n(3),i=n(7),c=n(0),o=n.n(c),a=n(155),u=n(183),s=n(160),f=n(4),l=n(156),d=n(158),m=n(176),p=n(276),b=n(281),h=n(242),y=n(185),v=n(184),O=n(175),j=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r))||this,Object(l.a)(Object(s.a)(e),"rotation",new O.Vector3(0,0,0)),e}return Object(f.a)(e,t),e}(d.Facet),E=function(){var t=Object(d.useQuery)((function(t){return t.hasAll(m.a,j)}));return Object(d.useSystem)((function(e){t.loop([m.a,j],(function(t,n){var r=n[0],i=n[1],c=r.ref.current,o=i.rotation.clone().multiplyScalar(e),a=c.rotation.toVector3().add(o);c.rotation.setFromVector3(a)}))}))},g=function(t){var e=t.amount;return o.a.createElement(d.Entity,null,o.a.createElement(j,{rotation:new O.Vector3(e.x,e.y,e.z)}),o.a.createElement(m.a,null,o.a.createElement(p.a,{scale:3,rotation:[Object(d.rad)(45),Object(d.rad)(45),0]},o.a.createElement("meshLambertMaterial",null))))},C=function(){var t=Object(d.useECS)();Object(d.useAnimationFrame)(t.update);var e=Object(v.b)("spin",{amount:{value:{x:1,y:1,z:1}}}).amount;return o.a.createElement(y.a,null,o.a.createElement(b.a,null),o.a.createElement(h.a,{makeDefault:!0,position:[0,0,8]},o.a.createElement("ambientLight",{intensity:.2}),o.a.createElement("directionalLight",{position:[1,1,1]})),o.a.createElement(t.Provider,null,o.a.createElement(E,null),o.a.createElement(g,{amount:e})))},x={sidebar_position:1,sidebar_label:"Spinning Cube",title:"Spinning Cube"},w={unversionedId:"three/SpinningCube",id:"three/SpinningCube",isDocsHomePage:!1,title:"Spinning Cube",description:"",source:"@site/examples/three/SpinningCube.md",sourceDirName:"three",slug:"/three/SpinningCube",permalink:"/examples/three/SpinningCube",version:"current",sidebar_label:"Spinning Cube",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Spinning Cube",title:"Spinning Cube"},sidebar:"mySidebar",previous:{title:"Simple Cube",permalink:"/examples/three/SimpleCube"},next:{title:"Particle System",permalink:"/examples/three/ParticleSystem"}},S=[],k={toc:S};function P(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},k,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)(u.a,{code:"import {\n    Entity,\n    Facet,\n    rad,\n    useAnimationFrame,\n    useECS,\n    useQuery,\n    useSystem\n} from '@react-ecs/core';\nimport { ThreeView } from '@react-ecs/three';\nimport {\n    Box,\n    OrbitControls,\n    PerspectiveCamera\n} from '@react-three/drei';\nimport { Canvas } from '@react-three/fiber';\nimport { useControls } from 'leva';\nimport React, { FC } from 'react';\nimport { Vector3 } from 'three';\n\nclass Spinning extends Facet<Spinning> {\n    rotation = new Vector3(0, 0, 0);\n}\n\nconst SpinningSystem = () => {\n    const query = useQuery(e => e.hasAll(ThreeView, Spinning));\n\n    return useSystem((dt: number) => {\n        query.loop([ThreeView, Spinning], (e, [view, spin]) => {\n            const transform = view.ref.current!;\n            const rotation = spin.rotation.clone().multiplyScalar(dt);\n            const newRotation = transform.rotation\n                .toVector3()\n                .add(rotation);\n            transform.rotation.setFromVector3(newRotation);\n        });\n    });\n};\n\nconst SpinCube = ({ amount }) => {\n    return (\n        <Entity>\n            <Spinning rotation={new Vector3(amount.x, amount.y, amount.z)} />\n            <ThreeView>\n                <Box scale={3} rotation={[rad(45), rad(45), 0]}>\n                    <meshLambertMaterial />\n                </Box>\n            </ThreeView>\n        </Entity>\n    );\n};\n\n\nexport const SpinningCube: FC = () => {\n    const ECS = useECS();\n    useAnimationFrame(ECS.update);\n\n    const { amount } = useControls('spin', {\n        amount: {\n            value: { x: 1, y: 1, z: 1},\n        }\n    })\n\n    return (\n        <Canvas>\n            <OrbitControls />\n            <PerspectiveCamera makeDefault position={[0, 0, 8]}>\n                <ambientLight intensity={.2} />\n                <directionalLight position={[1, 1, 1]} />\n            </PerspectiveCamera>\n            <ECS.Provider>\n                <SpinningSystem />\n                <SpinCube amount={amount} />\n            </ECS.Provider>\n        </Canvas>\n    );\n};\n",style:{minHeight:"auto",padding:"1em"},mdxType:"Example"},Object(a.b)(C,{mdxType:"SpinningCube"})))}P.isMDXComponent=!0},155:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));var r=n(0),i=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=i.a.createContext({}),f=function(t){var e=i.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=f(t.components);return i.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},m=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=f(n),m=r,p=l["".concat(o,".").concat(m)]||l[m]||d[m]||c;return n?i.a.createElement(p,a(a({ref:e},s),{},{components:n})):i.a.createElement(p,a({ref:e},s))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,o=new Array(c);o[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:r,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return s}));var r=n(156),i=n(0),c=n.n(i),o=n(170),a=n(163),u=Object(i.createContext)(null),s=function(){function t(t,e){var n=this;void 0===t&&(t=[]),void 0===e&&(e=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new a.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),t.forEach((function(t){return n.systems.add(t)})),e.forEach((function(t){return n.engine.addEntity(t)}))}var e=t.prototype;return e.update=function(t){this.systems.update(t)},e.Provider=function(t){return c.a.createElement(u.Provider,{value:this},t.children)},t}()},158:function(t,e,n){"use strict";var r=n(174);n.d(e,"DOMView",(function(){return r.a})),n.d(e,"ECSContext",(function(){return r.b})),n.d(e,"Emitter",(function(){return r.c})),n.d(e,"Entity",(function(){return r.d})),n.d(e,"Facet",(function(){return r.e}));var i=n(168);n.d(e,"EntityContext",(function(){return i.a})),n.d(e,"useAnimationFrame",(function(){return i.b})),n.d(e,"useECS",(function(){return i.c})),n.d(e,"useEngine",(function(){return i.d})),n.d(e,"useFacet",(function(){return i.e})),n.d(e,"useQuery",(function(){return i.f})),n.d(e,"useSystem",(function(){return i.g}));var c=n(171);n.o(c,"rad")&&n.d(e,"rad",(function(){return c.rad}))},159:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(0),i=Object(r.createContext)(null);function c(){var t=Object(r.useContext)(i);if(!t)throw new Error("Missing Entity instance in EntityContext!");return t}},161:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),i=n(157),c=function(){return Object(r.useContext)(i.b).engine}},163:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(156),i=function(){function t(){Object(r.a)(this,"systems",void 0),this.systems=new Array}var e=t.prototype;return e.sort=function(){this.systems.sort((function(t,e){return t.priority-e.priority}))},e.add=function(t,e){void 0===e&&(e=0),this.systems.push({callback:t,priority:e}),this.sort()},e.remove=function(t){var e=this.systems.findIndex((function(e){return e.callback===t}));return e>-1&&(this.systems.splice(e,1),this.sort(),!0)},e.clear=function(){this.systems=[]},e.update=function(t){this.systems.forEach((function(e){return e.callback(t)}))},t}()},164:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(178),i=n(4),c=n(170),o=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.loop=function(t,e){for(var n,i=Object(r.a)(this.entities);!(n=i()).done;){for(var c,o=n.value,a=[],u=Object(r.a)(t);!(c=u()).done;){var s=c.value,f=o.get(s);a.push(f)}e(o,a)}},e}(c.Query)},165:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0);function i(t){var e=Object(r.useRef)(t),n=Object(r.useState)({current:t}),i=(n[0],n[1]);return[e,function(t){e.current=t,i({current:t})}]}},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),i=n(157),c=function(t,e){void 0===e&&(e=0);var n=Object(r.useContext)(i.b).systems;return Object(r.useEffect)((function(){return n.add(t,e),function(){n.remove(t)}}),[t,e]),null}},167:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0),i=n(166),c=function(t,e){var n=Object(r.useRef)(0);Object(i.a)((function(r){n.current+=r,n.current>t&&(n.current=0,e())}))}},168:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a.a})),n.d(e,"a",(function(){return u.a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return p})),n.d(e,"g",(function(){return b.a}));var r=n(0),i=function(t){var e=Object(r.useRef)(null),n=Object(r.useRef)(null),i=function r(i){if(null!=n.current){var c=i-n.current;t(c/1e3)}n.current=i,e.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return e.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(e.current)}}),[])},c=n(157);function o(){var t=Object(r.useState)((function(){return new c.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=t)})),t}var a=n(161),u=n(159);function s(t){var e=Object(u.b)(),n=Object(r.useState)(new t),i=n[0],c=n[1];return Object(r.useEffect)((function(){var n=e.get(t);n?c(n):console.error("Couldn't find facet on entity: "+t.prototype.constructor.name)})),i}var f=n(164),l=n(177),d=n(156),m=function(){function t(t){Object(d.a)(this,"ref",void 0),this.ref=t}var e=t.prototype;return e.loop=function(t,e){if(this.current)return this.current.loop(t,e)},e.countBy=function(t){return this.current?this.current.countBy(t):0},e.filter=function(t){return this.current?this.current.filter(t):[]},e.has=function(t){return!!this.current&&this.current.has(t)},e.clear=function(){if(this.current)return this.current.clear()},Object(l.a)(t,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),t}();function p(t,e){var n=Object(a.a)(),i=Object(r.useRef)(),c=Object(r.useState)(0),o=c[0],u=c[1],s=function(){return u(o+1)};return Object(r.useEffect)((function(){if(void 0===i.current){var r=new f.a(t);null!=e&&e.added&&r.onEntityAdded.connect(e.added),null!=e&&e.removed&&r.onEntityRemoved.connect(e.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),i.current=r,s()}}),[]),new m(i)}n(165);var b=n(166);n(167)},171:function(t,e,n){"use strict";n(164);var r=n(172);n.o(r,"rad")&&n.d(e,"rad",(function(){return r.rad}));n(163);var i=n(173);n.d(e,"rad",(function(){return i.a}))},172:function(t,e){},173:function(t,e,n){"use strict";function r(t){return t*Math.PI/180}n.d(e,"a",(function(){return r}))},174:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l.b})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return g}));var r=n(177),i=n(160),c=n(4),o=n(156),a=n(0),u=n.n(a),s=n(168),f=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(a.createRef)(),n}Object(c.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==a.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,Object(a.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(e,[{key:"element",get:function(){return this.ref.current}}]),e}(a.Component);Object(o.a)(f,"contextType",s.a),f.__componentClassId__=-1;var l=n(157),d=n(161),m=n(165),p=n(167),b={emissionDelay:.1},h=function(t){var e=Object(d.a)(),n=(t=Object.assign({},b,t)).emissionDelay,r=Object(a.useRef)(0),i=t.children,c=Object(m.a)([]),o=c[0],s=c[1];Object(p.a)(n,(function(){var t,e;s([(t=Object(a.createRef)(),e=r.current++,{element:i instanceof Function?Object.assign({},i(),{ref:t,key:e}):Object(a.cloneElement)(i,Object.assign({},{},{ref:t,key:e})),ref:t})].concat(o.current))}));var f=function(t){!function(t){if(t>-1)if(1===o.current.length)s([]);else{var e=o.current.slice(0,t),n=o.current.slice(t+1);s(e.concat(n))}}(o.current.findIndex((function(e){var n;return(null===(n=e.ref.current)||void 0===n?void 0:n.entity.id)===t.id})))};return Object(a.useEffect)((function(){return e.onEntityRemoved.connect(f),function(){e.onEntityRemoved.disconnect(f)}}),[]),u.a.createElement(u.a.Fragment,null,o.current.map((function(t){return t.element})))},y=n(170),v=n(159),O=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"entity",void 0),n.entity=new y.Entity,n}Object(c.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return u.a.createElement(v.a.Provider,{value:this.entity},this.props.children)},e}(a.Component);Object(o.a)(O,"contextType",l.b);var j=n(191);Object(j.a)({enforceActions:"never"});var E=["props","context","refs","updater","meta"],g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r))||this,Object(o.a)(Object(i.a)(e),"context",void 0),e}Object(c.a)(e,t);var n=e.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(t){var e=new Map(Object.getOwnPropertyNames(t).filter((function(t){return!E.includes(t)&&!t.endsWith("Ref")})).map((function(t){return[t,j.c]}))).entries();return Object.fromEntries(e)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var t=this.createFake(),e=this.getAnnotations(t);Object(j.b)(this,e,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},e}(a.Component);Object(o.a)(g,"contextType",v.a)},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(177),i=n(160),c=n(4),o=n(156),a=n(158),u=n(0),s=n.n(u),f=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(u.createRef)(),n}Object(c.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==u.Children.count(this.props.children))throw new Error("<ThreeView /> must have a single child.");return s.a.createElement(s.a.Fragment,null,s.a.cloneElement(this.props.children,{ref:this.ref}))},Object(r.a)(e,[{key:"object3d",get:function(){return this.ref.current}}]),e}(u.Component);Object(o.a)(f,"contextType",a.EntityContext),f.__componentClassId__=100},181:function(t,e,n){t.exports={example:"example_1hIu",leva:"leva_2JxF"}},183:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(187),i=n(184),c=n(0),o=n.n(c),a=n(3),u=n(180),s=function(t){return o.a.createElement(u.a,Object(a.a)({},u.b,{code:t.code,language:"tsx"}),(function(t){var e=t.className,n=t.style,r=t.tokens,i=t.getLineProps,c=t.getTokenProps;return o.a.createElement("pre",{className:e,style:n},r.map((function(t,e){return o.a.createElement("div",i({line:t,key:e}),t.map((function(t,e){return o.a.createElement("span",c({token:t,key:e}))})))})))}))},f=n(181),l=n.n(f),d=function(t){return o.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},o.a.createElement("div",{className:l.a.leva,style:{top:"75px",display:t.hideControls?"none":"block"}},o.a.createElement(i.a,{fill:!0,collapsed:t.collapsed})),o.a.createElement("div",{className:l.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},t.style||{})},o.a.createElement(r.a,{fallback:o.a.createElement("div",null)},(function(){return o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null)},t.children)}))),t.code&&o.a.createElement(s,{code:t.code}))}},242:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(3),i=n(7),c=n(0),o=n(185);var a=function(t){return function(e){t.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))}};const u=Object(c.forwardRef)((t,e)=>{let{makeDefault:n=!1}=t,u=Object(i.a)(t,["makeDefault"]);const s=Object(o.d)(({set:t})=>t),f=Object(o.d)(({camera:t})=>t),l=Object(o.d)(({size:t})=>t),d=Object(c.useRef)();return Object(c.useLayoutEffect)(()=>{const{current:t}=d;t&&(t.aspect=l.width/l.height,t.updateProjectionMatrix())},[l,u]),Object(c.useLayoutEffect)(()=>{if(n&&d.current){const t=f;return s(()=>({camera:d.current})),()=>s(()=>({camera:t}))}},[f,d,n,s]),Object(c.createElement)("perspectiveCamera",Object(r.a)({ref:a([d,e])},u))})}}]);