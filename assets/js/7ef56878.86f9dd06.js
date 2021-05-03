(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return y})),n.d(t,"metadata",(function(){return O})),n.d(t,"toc",(function(){return j})),n.d(t,"default",(function(){return g}));var r=n(3),c=n(7),u=n(0),i=n.n(u),o=n(161),a=n(188),s=n(166),f=n(4),l=n(163),d=n(162),v=n(220),m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,Object(l.a)(Object(s.a)(t),"value",0),Object(l.a)(Object(s.a)(t),"step",1),t}return Object(f.a)(t,e),t}(d.Facet),b=function(){var e=Object(d.useQuery)((function(e){return e.hasAll(m)}));return Object(d.useSystem)((function(t){e.loop([m],(function(e,t){t[0].value-=1}))}))},p=Object(v.a)((function(){var e=Object(d.useFacet)(m);return i.a.createElement("h1",{style:{margin:0,padding:0}},"Counter: ",e.value)})),h=function(e){var t=Object(d.useECS)();return Object(d.useAnimationFrame)(t.update),i.a.createElement(t.Provider,null,i.a.createElement(b,null),i.a.createElement(d.Entity,null,i.a.createElement(m,null),i.a.createElement(p,null)))},y={sidebar_position:1,sidebar_label:"Facet Observer",title:"Facet Observer"},O={unversionedId:"core/FacetObserver",id:"core/FacetObserver",isDocsHomePage:!1,title:"Facet Observer",description:"",source:"@site/examples/core/FacetObserver.md",sourceDirName:"core",slug:"/core/FacetObserver",permalink:"/examples/core/FacetObserver",version:"current",sidebar_label:"Facet Observer",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Facet Observer",title:"Facet Observer"},sidebar:"mySidebar",previous:{title:"Minimal Example",permalink:"/examples/core/MinimalExample"},next:{title:"Multiple Systems",permalink:"/examples/core/MultipleSystems"}},j=[],E={toc:j};function g(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.a,{code:"import {\n    Entity,\n    Facet,\n    useAnimationFrame,\n    useECS,\n    useFacet,\n    useQuery,\n    useSystem\n} from '@react-ecs/core';\nimport { observer } from 'mobx-react';\nimport React, { FC } from 'react';\n\nclass Counter extends Facet<Counter> {\n    value?: number = 0;\n    step?: number = 1;\n}\n\nconst CounterSystem = () => {\n    const query = useQuery(e => e.hasAll(Counter));\n\n    return useSystem((dt: number) => {\n        query.loop([Counter], (_, [counter]) => {\n            counter.value -= 1;\n        });\n    });\n};\n\nconst CounterObserver = observer(() => {\n    const counter = useFacet(Counter);\n    return <h1 style={{margin: 0, padding: 0}}>Counter: {counter.value}</h1>;\n});\n\nexport const FacetObserver: FC = props => {\n    const ECS = useECS();\n\n    useAnimationFrame(ECS.update);\n\n    return (\n        <ECS.Provider>\n            <CounterSystem />\n\n            <Entity>\n                <Counter />\n                <CounterObserver />\n            </Entity>\n        </ECS.Provider>\n    );\n};\n",style:{minHeight:"auto",padding:"1em"},mdxType:"Example"},Object(o.b)(h,{mdxType:"FacetObserver"})))}g.isMDXComponent=!0},162:function(e,t,n){"use strict";var r=n(181);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var c=n(173);n.d(t,"EntityContext",(function(){return c.a})),n.d(t,"useAnimationFrame",(function(){return c.b})),n.d(t,"useECS",(function(){return c.c})),n.d(t,"useEngine",(function(){return c.d})),n.d(t,"useEntity",(function(){return c.e})),n.d(t,"useFacet",(function(){return c.f})),n.d(t,"useQuery",(function(){return c.g})),n.d(t,"useStatefulRef",(function(){return c.h})),n.d(t,"useSystem",(function(){return c.i}));var u=n(178);n.o(u,"rad")&&n.d(t,"rad",(function(){return u.rad}))},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(163),c=n(0),u=n.n(c),i=n(176),o=n(168),a=Object(c.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new i.Engine),Object(r.a)(this,"systems",new o.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return u.a.createElement(a.Provider,{value:this},e.children)},e}()},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var r=n(0),c=Object(r.createContext)(null);function u(){var e=Object(r.useContext)(c);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(164),u=function(){return Object(r.useContext)(c.b).engine}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(163),c=function(){function e(){Object(r.a)(this,"systems",void 0),this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(183),c=n(4),u=n(176),i=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.loop=function(e,t){for(var n=0;n<this.entities.length;n++){for(var c,u=this.entities[n],i=[],o=Object(r.a)(e);!(c=o()).done;){var a=c.value,s=u.get(a);i.push(s)}t(u,i,n)}},n.rloop=function(e,t){for(var n=this.entities.length-1;n>=0;n--){for(var c,u=this.entities[n],i=[],o=Object(r.a)(e);!(c=o()).done;){var a=c.value,s=u.get(a);i.push(s)}t(u,i,n)}},n.mloop=function(e,t){for(var n=0;n<this.entities.length;n++){for(var c,u=this.entities[n],i=[],o=Object(r.a)(e);!(c=o()).done;){var a=c.value;if(1===a.length&&void 0!==a[0]){for(var s=u.get(a[0]),f=[s];s.next;)f.push(s.next),s=s.next;i.push(f)}else{var l=u.get(a);i.push(l)}}t(u,i,n)}},t}(u.Query)},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),c=(n[0],n[1]);return[t,function(e){t.current=e,c({current:e})}]}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(164),u=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(c.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),c=n(171),u=function(e,t){var n=Object(r.useRef)(0);Object(c.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o.a})),n.d(t,"a",(function(){return a.a})),n.d(t,"e",(function(){return a.b})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b.a})),n.d(t,"i",(function(){return p.a}));var r=n(0),c=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=function r(c){if(void 0!==n.current){var u=c-n.current;e(u/1e3)}n.current=c,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(t.current)}}),[])},u=n(164);function i(){var e=Object(r.useState)((function(){return new u.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var o=n(167),a=n(165);function s(e){var t=Object(a.b)(),n=Object(r.useState)(new e),c=n[0],u=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?u(n):(u(void 0),console.warn("Couldn't find facet on entity: "+e.prototype.constructor.name))})),c}var f=n(169),l=n(182),d=n(163),v=function(){function e(e){Object(d.a)(this,"ref",void 0),this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.rloop=function(e,t){if(this.current)return this.current.rloop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(l.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function m(e,t){var n=Object(o.a)(),c=Object(r.useRef)(),u=Object(r.useState)(0),i=u[0],a=u[1],s=function(){return a(i+1)};return Object(r.useEffect)((function(){if(void 0===c.current){var r=new f.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),c.current=r,s()}}),[]),new v(c)}var b=n(170),p=n(171);n(172)},178:function(e,t,n){"use strict";n(169);var r=n(179);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(168);var c=n(180);n.d(t,"rad",(function(){return c.a}))},179:function(e,t){},180:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l.b})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return x}));var r=n(182),c=n(166),u=n(4),i=n(163),o=n(0),a=n.n(o),s=n(173),f=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(i.a)(Object(c.a)(n),"context",void 0),Object(i.a)(Object(c.a)(n),"ref",void 0),n.ref=Object(o.createRef)(),n}Object(u.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==o.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return a.a.createElement(a.a.Fragment,null,Object(o.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(o.Component);Object(i.a)(f,"contextType",s.a),f.__componentClassId__=-1;var l=n(164),d=n(167),v=n(170),m=n(172),b={emissionDelay:.1},p=function(e){var t=Object(d.a)(),n=(e=Object.assign({},b,e)).emissionDelay,r=Object(o.useRef)(0),c=e.children,u=Object(v.a)([]),i=u[0],s=u[1];Object(m.a)(n,(function(){var e,t;s([(e=Object(o.createRef)(),t=r.current++,{element:Object.assign({},c(e),{key:t}),ref:e})].concat(i.current))}));var f=function(e){i.current.forEach((function(t,n){null!=t.ref.current&&t.ref.current.id!==e.id||function(e){if(e>-1)if(1===i.current.length)s([]);else{var t=i.current.slice(0,e),n=i.current.slice(e+1);s(t.concat(n))}}(n)}))};return Object(o.useEffect)((function(){return t.onEntityRemoved.connect(f),function(){t.onEntityRemoved.disconnect(f)}}),[]),a.a.createElement(a.a.Fragment,null,i.current.map((function(e){return e.element})))},h=n(176),y=n(165),O=n(162),j=function(e){var t=Object(o.useContext)(l.b),n=Object(O.useStatefulRef)(void 0),r=n[0],c=n[1],u=Object(o.useCallback)((function(t){r.current&&t.id===r.current.id&&(e.entityRef&&(e.entityRef.current=null),r.current.clear(),r.current.invalidate(),c(null))}),[r.current]);return Object(o.useEffect)((function(){if(void 0===r.current){var n=e.entity||new h.Entity;t.engine.addEntity(n),t.engine.onEntityRemoved.connect(u),c(n)}return function(){t.engine.onEntityRemoved.disconnect(u),r.current&&(r.current.clear(),r.current.invalidate(),t.engine.removeEntity(r.current))}}),[]),r.current?a.a.createElement(y.a.Provider,{value:r.current},e.children):null},E=n(196);Object(E.a)({enforceActions:"never"});var g=["props","context","refs","updater","meta"],x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r))||this,Object(i.a)(Object(c.a)(t),"context",void 0),t}Object(u.a)(t,e);var n=t.prototype;return n.asComponent=function(){return this},n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!g.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,E.c]}))).entries();return Object.fromEntries(t)},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(E.b)(this,t,{autoBind:!0}),this.context.append(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(o.Component);Object(i.a)(x,"contextType",y.a)},186:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(191),c=n(187),u=n(0),i=n.n(u),o=n(3),a=n(185),s=function(e){return i.a.createElement(a.a,Object(o.a)({},a.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,c=e.getLineProps,u=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",u({token:e,key:t}))})))})))}))},f=n(186),l=n.n(f),d=function(e){return i.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},i.a.createElement("div",{className:l.a.leva,style:{top:"75px",display:e.hideControls?"none":"block"}},i.a.createElement(c.a,{fill:!0,collapsed:e.collapsed})),i.a.createElement("div",{className:l.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},i.a.createElement(r.a,{fallback:i.a.createElement("div",null)},(function(){return i.a.createElement(u.Suspense,{fallback:i.a.createElement("div",null)},e.children)}))),e.code&&i.a.createElement(s,{code:e.code}))}}}]);