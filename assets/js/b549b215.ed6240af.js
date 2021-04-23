(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return v})),n.d(t,"toc",(function(){return h})),n.d(t,"default",(function(){return j}));var r=n(3),c=n(7),i=n(0),o=n.n(i),u=n(155),a=n(160),s=n(4),f=n(156),l=n(158),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,Object(f.a)(Object(a.a)(t),"value",0),Object(f.a)(Object(a.a)(t),"step",1),t}return Object(s.a)(t,e),t}(l.Facet),m=function(){var e=Object(l.useQuery)((function(e){return e.hasAll(d)}));return Object(l.useSystem)((function(t){e.loop([d],(function(e,t){var n=t[0];console.log(n.value-=1)}))}))},p=function(e){var t=Object(l.useECS)();return Object(l.useAnimationFrame)(t.update),o.a.createElement(t.Provider,null,o.a.createElement(m,null),o.a.createElement(l.Entity,null,o.a.createElement(d,null)),o.a.createElement("h1",null,"Check console."))},b=n(184),y={sidebar_position:0,sidebar_label:"Minimal Example",title:"Minimal Example"},v={unversionedId:"core/MinimalExample",id:"core/MinimalExample",isDocsHomePage:!1,title:"Minimal Example",description:"",source:"@site/examples/core/MinimalExample.md",sourceDirName:"core",slug:"/core/MinimalExample",permalink:"/examples/core/MinimalExample",version:"current",sidebar_label:"Minimal Example",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Minimal Example",title:"Minimal Example"},sidebar:"mySidebar",previous:{title:"react-ecs examples",permalink:"/examples/"},next:{title:"Facet Observer",permalink:"/examples/core/FacetObserver"}},h=[],O={toc:h};function j(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)(b.a,{code:"import React, { FC } from 'react';\n\nimport {\n    Entity,\n    Facet,\n    useAnimationFrame,\n    useECS,\n    useQuery,\n    useSystem\n} from '@react-ecs/core';\n\nclass Counter extends Facet<Counter> {\n    value?: number = 0;\n    step?: number = 1;\n}\n\nconst CounterSystem = () => {\n    const query = useQuery(e => e.hasAll(Counter));\n\n    return useSystem((dt: number) => {\n        query.loop([Counter], (_: any, [counter]) => {\n            console.log((counter.value -= 1));\n        });\n    });\n};\n\nexport const MinimalExample: FC = props => {\n    const ECS = useECS();\n\n    useAnimationFrame(ECS.update);\n\n    return (\n        <ECS.Provider>\n            <CounterSystem />\n\n            <Entity>\n                <Counter />\n            </Entity>\n\n            <h1>Check console.</h1>\n        </ECS.Provider>\n    );\n};\n",mdxType:"Example"},Object(u.b)(p,{mdxType:"MinimalExample"})))}j.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),f=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=f(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),l=f(n),m=r,p=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?c.a.createElement(p,u(u({ref:t},s),{},{components:n})):c.a.createElement(p,u({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(156),c=n(0),i=n.n(c),o=n(170),u=n(163),a=Object(c.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new u.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return i.a.createElement(a.Provider,{value:this},e.children)},e}()},158:function(e,t,n){"use strict";var r=n(175);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var c=n(168);n.d(t,"EntityContext",(function(){return c.a})),n.d(t,"useAnimationFrame",(function(){return c.b})),n.d(t,"useECS",(function(){return c.c})),n.d(t,"useEngine",(function(){return c.d})),n.d(t,"useFacet",(function(){return c.e})),n.d(t,"useQuery",(function(){return c.f})),n.d(t,"useSystem",(function(){return c.g}));var i=n(171);n.o(i,"rad")&&n.d(t,"rad",(function(){return i.rad}))},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(0),c=Object(r.createContext)(null);function i(){var e=Object(r.useContext)(c);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(157),i=function(){return Object(r.useContext)(c.b).engine}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(178),c=n(4),i=n(170),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.loop=function(e,t){for(var n,c=Object(r.a)(this.entities);!(n=c()).done;){for(var i,o=n.value,u=[],a=Object(r.a)(e);!(i=a()).done;){var s=i.value,f=o.get(s);u.push(f)}t(o,u)}},t}(i.Query)},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),c=(n[0],n[1]);return[t,function(e){t.current=e,c({current:e})}]}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(157),i=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(c.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(166),i=function(e,t){var n=Object(r.useRef)(0);Object(c.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u.a})),n.d(t,"a",(function(){return a.a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return p.a}));var r=n(0),c=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=function r(c){if(null!=n.current){var i=c-n.current;e(i/1e3)}n.current=c,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(t.current)}}),[])},i=n(157);function o(){var e=Object(r.useState)((function(){return new i.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var u=n(161),a=n(159);function s(e){var t=Object(a.b)(),n=Object(r.useState)(new e),c=n[0],i=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?i(n):console.error("Couldn't find facet on entity: "+e.prototype.constructor.name)})),c}var f=n(164),l=n(177),d=function(){function e(e){this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(l.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function m(e,t){var n=Object(u.a)(),c=Object(r.useRef)(),i=Object(r.useState)(0),o=i[0],a=i[1],s=function(){return a(o+1)};return Object(r.useEffect)((function(){if(void 0===c.current){var r=new f.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),c.current=r,s()}}),[]),new d(c)}n(165);var p=n(166);n(167)},171:function(e,t,n){"use strict";n(164);var r=n(172);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(163);var c=n(173);n.d(t,"rad",(function(){return c.a}))},172:function(e,t){},173:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l.b})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(177),c=n(160),i=n(4),o=n(156),u=n(0),a=n.n(u),s=n(168),f=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(c.a)(n),"context",void 0),Object(o.a)(Object(c.a)(n),"ref",void 0),n.ref=Object(u.createRef)(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==u.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return a.a.createElement(a.a.Fragment,null,Object(u.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(u.Component);Object(o.a)(f,"contextType",s.a),f.__componentClassId__=-1;var l=n(157),d=n(161),m=n(165),p=n(167),b={emissionDelay:.1},y=function(e){var t=Object(d.a)(),n=(e=Object.assign({},b,e)).emissionDelay,r=Object(u.useRef)(0),c=e.children,i=Object(m.a)([]),o=i[0],s=i[1];Object(p.a)(n,(function(){var e,t;s([(e=Object(u.createRef)(),t=r.current++,{element:c instanceof Function?Object.assign({},c(),{ref:e,key:t}):Object(u.cloneElement)(c,Object.assign({},{},{ref:e,key:t})),ref:e})].concat(o.current))}));var f=function(e){!function(e){if(e>-1)if(1===o.current.length)s([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);s(t.concat(n))}}(o.current.findIndex((function(t){var n;return(null===(n=t.ref.current)||void 0===n?void 0:n.entity.id)===e.id})))};return Object(u.useEffect)((function(){return t.onEntityRemoved.connect(f),function(){t.onEntityRemoved.disconnect(f)}}),[]),a.a.createElement(a.a.Fragment,null,o.current.map((function(e){return e.element})))},v=n(170),h=n(159),O=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(c.a)(n),"context",void 0),Object(o.a)(Object(c.a)(n),"entity",void 0),n.entity=new v.Entity,n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return a.a.createElement(h.a.Provider,{value:this.entity},this.props.children)},t}(u.Component);Object(o.a)(O,"contextType",l.b);var j=n(191);Object(j.a)({enforceActions:"never"});var E=["props","context","refs","updater","meta"],g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(c.a)(t),"context",void 0),t}Object(i.a)(t,e);var n=t.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!E.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,j.c]}))).entries();return Object.fromEntries(t)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(j.b)(this,t,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(u.Component);Object(o.a)(g,"contextType",h.a)},182:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),c=n.n(r),i=n(179),o=n(187),u=n(3),a=n(181),s=function(e){return c.a.createElement(a.a,Object(u.a)({},a.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,i=e.getLineProps,o=e.getTokenProps;return c.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return c.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return c.a.createElement("span",o({token:e,key:t}))})))})))}))},f=n(182),l=n.n(f),d=function(e){return c.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},c.a.createElement("div",{className:l.a.leva,style:{top:"75px"}},c.a.createElement(i.a,{fill:!0,collapsed:e.collapsed})),c.a.createElement("div",{className:l.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},c.a.createElement(o.a,{fallback:c.a.createElement("div",null)},(function(){return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null)},e.children)}))),e.code&&c.a.createElement(s,{code:e.code}))}}}]);