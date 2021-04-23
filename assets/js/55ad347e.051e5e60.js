(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return v})),n.d(t,"metadata",(function(){return y})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return E}));var r=n(3),i=n(7),c=n(0),o=n.n(c),u=n(155),a=n(184),s=n(158),f=n(277),l=n(284),d=n(235),p=n(185),m=n(176),b=function(){return o.a.createElement(s.Entity,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{scale:3,rotation:[Object(s.rad)(45),Object(s.rad)(45),0]},o.a.createElement("meshLambertMaterial",null))))},h=function(){var e=Object(s.useECS)();return o.a.createElement(p.a,null,o.a.createElement(l.a,null),o.a.createElement(d.a,{makeDefault:!0,position:[0,0,8]},o.a.createElement("ambientLight",{intensity:.2}),o.a.createElement("directionalLight",{position:[1,1,1]})),o.a.createElement(e.Provider,null,o.a.createElement(b,null)))},v={sidebar_position:0,sidebar_label:"Simple Cube",title:"Simple Cube"},y={unversionedId:"three/SimpleCube",id:"three/SimpleCube",isDocsHomePage:!1,title:"Simple Cube",description:"",source:"@site/examples/three/SimpleCube.md",sourceDirName:"three",slug:"/three/SimpleCube",permalink:"/examples/three/SimpleCube",version:"current",sidebar_label:"Simple Cube",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Simple Cube",title:"Simple Cube"},sidebar:"mySidebar",previous:{title:"DOM Particles",permalink:"/examples/core/DOMParticles"},next:{title:"Spinning Cube",permalink:"/examples/three/SpinningCube"}},O=[],j={toc:O};function E(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(a.a,{code:"import React, { FC } from 'react';\n\nimport {\n    rad,\n    Entity,\n    useECS,\n} from '@react-ecs/core';\nimport { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';\nimport { Canvas } from '@react-three/fiber';\nimport { ThreeView } from '@react-ecs/three';\n\nconst Cube = () => {\n    return (\n        <Entity>\n            <ThreeView>\n                <Box scale={3} rotation={[rad(45), rad(45), 0]}>\n                    <meshLambertMaterial />\n                </Box>\n            </ThreeView>\n        </Entity>\n    );\n};\n\nexport const SimpleCube: FC = () => {\n    const ECS = useECS();\n    return (\n        <Canvas>\n            <OrbitControls />\n            <PerspectiveCamera makeDefault position={[0, 0, 8]}>\n                <ambientLight intensity={.2} />\n                <directionalLight position={[1, 1, 1]} />\n            </PerspectiveCamera>\n            <ECS.Provider>\n                <Cube />\n            </ECS.Provider>\n        </Canvas>\n    );\n};\n",style:{minHeight:"auto",padding:"1em"},mdxType:"Example"},Object(u.b)(h,{mdxType:"SimpleCube"})))}E.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),f=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=f(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=f(n),p=r,m=l["".concat(o,".").concat(p)]||l[p]||d[p]||c;return n?i.a.createElement(m,u(u({ref:t},s),{},{components:n})):i.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(156),i=n(0),c=n.n(i),o=n(170),u=n(163),a=Object(i.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new u.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return c.a.createElement(a.Provider,{value:this},e.children)},e}()},158:function(e,t,n){"use strict";var r=n(175);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var i=n(168);n.d(t,"EntityContext",(function(){return i.a})),n.d(t,"useAnimationFrame",(function(){return i.b})),n.d(t,"useECS",(function(){return i.c})),n.d(t,"useEngine",(function(){return i.d})),n.d(t,"useFacet",(function(){return i.e})),n.d(t,"useQuery",(function(){return i.f})),n.d(t,"useSystem",(function(){return i.g}));var c=n(171);n.o(c,"rad")&&n.d(t,"rad",(function(){return c.rad}))},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(0),i=Object(r.createContext)(null);function c(){var e=Object(r.useContext)(i);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(157),c=function(){return Object(r.useContext)(i.b).engine}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(178),i=n(4),c=n(170),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.loop=function(e,t){for(var n,i=Object(r.a)(this.entities);!(n=i()).done;){for(var c,o=n.value,u=[],a=Object(r.a)(e);!(c=a()).done;){var s=c.value,f=o.get(s);u.push(f)}t(o,u)}},t}(c.Query)},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),i=(n[0],n[1]);return[t,function(e){t.current=e,i({current:e})}]}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(157),c=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(i.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(166),c=function(e,t){var n=Object(r.useRef)(0);Object(i.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u.a})),n.d(t,"a",(function(){return a.a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return m.a}));var r=n(0),i=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),i=function r(i){if(null!=n.current){var c=i-n.current;e(c/1e3)}n.current=i,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(t.current)}}),[])},c=n(157);function o(){var e=Object(r.useState)((function(){return new c.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var u=n(161),a=n(159);function s(e){var t=Object(a.b)(),n=Object(r.useState)(new e),i=n[0],c=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?c(n):console.error("Couldn't find facet on entity: "+e.prototype.constructor.name)})),i}var f=n(164),l=n(177),d=function(){function e(e){this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(l.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function p(e,t){var n=Object(u.a)(),i=Object(r.useRef)(),c=Object(r.useState)(0),o=c[0],a=c[1],s=function(){return a(o+1)};return Object(r.useEffect)((function(){if(void 0===i.current){var r=new f.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),i.current=r,s()}}),[]),new d(i)}n(165);var m=n(166);n(167)},171:function(e,t,n){"use strict";n(164);var r=n(172);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(163);var i=n(173);n.d(t,"rad",(function(){return i.a}))},172:function(e,t){},173:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l.b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(177),i=n(160),c=n(4),o=n(156),u=n(0),a=n.n(u),s=n(168),f=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(u.createRef)(),n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==u.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return a.a.createElement(a.a.Fragment,null,Object(u.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(u.Component);Object(o.a)(f,"contextType",s.a),f.__componentClassId__=-1;var l=n(157),d=n(161),p=n(165),m=n(167),b={emissionDelay:.1},h=function(e){var t=Object(d.a)(),n=(e=Object.assign({},b,e)).emissionDelay,r=Object(u.useRef)(0),i=e.children,c=Object(p.a)([]),o=c[0],s=c[1];Object(m.a)(n,(function(){var e,t;s([(e=Object(u.createRef)(),t=r.current++,{element:i instanceof Function?Object.assign({},i(),{ref:e,key:t}):Object(u.cloneElement)(i,Object.assign({},{},{ref:e,key:t})),ref:e})].concat(o.current))}));var f=function(e){!function(e){if(e>-1)if(1===o.current.length)s([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);s(t.concat(n))}}(o.current.findIndex((function(t){var n;return(null===(n=t.ref.current)||void 0===n?void 0:n.entity.id)===e.id})))};return Object(u.useEffect)((function(){return t.onEntityRemoved.connect(f),function(){t.onEntityRemoved.disconnect(f)}}),[]),a.a.createElement(a.a.Fragment,null,o.current.map((function(e){return e.element})))},v=n(170),y=n(159),O=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"entity",void 0),n.entity=new v.Entity,n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return a.a.createElement(y.a.Provider,{value:this.entity},this.props.children)},t}(u.Component);Object(o.a)(O,"contextType",l.b);var j=n(191);Object(j.a)({enforceActions:"never"});var E=["props","context","refs","updater","meta"],g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(i.a)(t),"context",void 0),t}Object(c.a)(t,e);var n=t.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!E.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,j.c]}))).entries();return Object.fromEntries(t)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(j.b)(this,t,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(u.Component);Object(o.a)(g,"contextType",y.a)},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(177),i=n(160),c=n(4),o=n(156),u=n(158),a=n(0),s=n.n(a),f=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(a.createRef)(),n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==a.Children.count(this.props.children))throw new Error("<ThreeView /> must have a single child.");return s.a.createElement(s.a.Fragment,null,s.a.cloneElement(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"object3d",get:function(){return this.ref.current}}]),t}(a.Component);Object(o.a)(f,"contextType",u.EntityContext),f.__componentClassId__=100},182:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),i=n.n(r),c=n(179),o=n(187),u=n(3),a=n(181),s=function(e){return i.a.createElement(a.a,Object(u.a)({},a.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",o({token:e,key:t}))})))})))}))},f=n(182),l=n.n(f),d=function(e){return i.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},i.a.createElement("div",{className:l.a.leva,style:{top:"75px"}},i.a.createElement(c.a,{fill:!0,collapsed:e.collapsed})),i.a.createElement("div",{className:l.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},i.a.createElement(o.a,{fallback:i.a.createElement("div",null)},(function(){return i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null)},e.children)}))),e.code&&i.a.createElement(s,{code:e.code}))}},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),i=n(7),c=n(0),o=n(185);var u=function(e){return function(t){e.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))}};const a=Object(c.forwardRef)((e,t)=>{let{makeDefault:n=!1}=e,a=Object(i.a)(e,["makeDefault"]);const s=Object(o.d)(({set:e})=>e),f=Object(o.d)(({camera:e})=>e),l=Object(o.d)(({size:e})=>e),d=Object(c.useRef)();return Object(c.useLayoutEffect)(()=>{const{current:e}=d;e&&(e.aspect=l.width/l.height,e.updateProjectionMatrix())},[l,a]),Object(c.useLayoutEffect)(()=>{if(n&&d.current){const e=f;return s(()=>({camera:d.current})),()=>s(()=>({camera:e}))}},[f,d,n,s]),Object(c.createElement)("perspectiveCamera",Object(r.a)({ref:u([d,t])},a))})}}]);