(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{154:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return y})),n.d(e,"metadata",(function(){return O})),n.d(e,"toc",(function(){return j})),n.d(e,"default",(function(){return g}));var r=n(3),c=n(7),i=n(0),u=n.n(i),o=n(160),a=n(188),s=n(164),f=n(4),d=n(162),l=n(251),m=n(165),b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r))||this,Object(d.a)(Object(s.a)(e),"value",0),Object(d.a)(Object(s.a)(e),"step",1),e}return Object(f.a)(e,t),e}(m.Facet),v=function(){var t=Object(m.useQuery)((function(t){return t.hasAll(b)}));return Object(m.useSystem)((function(e){t.loop([b],(function(t,e){e[0].value-=1}))}))},p=Object(l.a)((function(){var t=Object(m.useFacet)(b);return u.a.createElement("h1",{style:{margin:0,padding:0}},"Counter: ",t.value)})),h=function(t){var e=Object(m.useECS)();return Object(m.useAnimationFrame)(e.update),u.a.createElement(e.Provider,null,u.a.createElement(v,null),u.a.createElement(m.Entity,null,u.a.createElement(b,null),u.a.createElement(p,null)))},y={sidebar_position:1,sidebar_label:"Facet Observer",title:"Facet Observer"},O={unversionedId:"core/FacetObserver",id:"core/FacetObserver",isDocsHomePage:!1,title:"Facet Observer",description:"",source:"@site/examples/core/FacetObserver.md",sourceDirName:"core",slug:"/core/FacetObserver",permalink:"/examples/core/FacetObserver",version:"current",sidebar_label:"Facet Observer",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Facet Observer",title:"Facet Observer"},sidebar:"mySidebar",previous:{title:"Minimal Example",permalink:"/examples/core/MinimalExample"},next:{title:"Multiple Systems",permalink:"/examples/core/MultipleSystems"}},j=[],E={toc:j};function g(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},E,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)(a.a,{code:"import React, { FC } from 'react';\n\nimport { observer } from 'mobx-react';\n\nimport {\n    Entity,\n    Facet,\n    useAnimationFrame,\n    useECS,\n    useFacet,\n    useQuery,\n    useSystem\n} from '@react-ecs/core';\n\nclass Counter extends Facet<Counter> {\n    value?: number = 0;\n    step?: number = 1;\n}\n\nconst CounterSystem = () => {\n    const query = useQuery(e => e.hasAll(Counter));\n\n    return useSystem((dt: number) => {\n        query.loop([Counter], (_: any, [counter]) => {\n            counter.value -= 1;\n        });\n    });\n};\n\nconst CounterObserver = observer(() => {\n    const counter = useFacet(Counter);\n    return <h1 style={{margin: 0, padding: 0}}>Counter: {counter.value}</h1>;\n});\n\nexport const FacetObserver: FC = props => {\n    const ECS = useECS();\n\n    useAnimationFrame(ECS.update);\n\n    return (\n        <ECS.Provider>\n            <CounterSystem />\n\n            <Entity>\n                <Counter />\n                <CounterObserver />\n            </Entity>\n        </ECS.Provider>\n    );\n};\n",style:{minHeight:"auto",padding:"1em"},mdxType:"Example"},Object(o.b)(h,{mdxType:"FacetObserver"})))}g.isMDXComponent=!0},161:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var r=n(162),c=n(0),i=n.n(c),u=n(175),o=n(168),a=Object(c.createContext)(null),s=function(){function t(t,e){var n=this;void 0===t&&(t=[]),void 0===e&&(e=[]),Object(r.a)(this,"engine",new u.Engine),Object(r.a)(this,"systems",new o.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),t.forEach((function(t){return n.systems.add(t)})),e.forEach((function(t){return n.engine.addEntity(t)}))}var e=t.prototype;return e.update=function(t){this.systems.update(t)},e.Provider=function(t){return i.a.createElement(a.Provider,{value:this},t.children)},t}()},163:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n(0),c=Object(r.createContext)(null);function i(){var t=Object(r.useContext)(c);if(!t)throw new Error("Missing Entity instance in EntityContext!");return t}},165:function(t,e,n){"use strict";var r=n(179);n.d(e,"DOMView",(function(){return r.a})),n.d(e,"ECSContext",(function(){return r.b})),n.d(e,"Emitter",(function(){return r.c})),n.d(e,"Entity",(function(){return r.d})),n.d(e,"Facet",(function(){return r.e}));var c=n(173);n.d(e,"EntityContext",(function(){return c.a})),n.d(e,"useAnimationFrame",(function(){return c.b})),n.d(e,"useECS",(function(){return c.c})),n.d(e,"useEngine",(function(){return c.d})),n.d(e,"useFacet",(function(){return c.e})),n.d(e,"useQuery",(function(){return c.f})),n.d(e,"useSystem",(function(){return c.g}));var i=n(176);n.o(i,"rad")&&n.d(e,"rad",(function(){return i.rad}))},166:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),c=n(161),i=function(){return Object(r.useContext)(c.b).engine}},168:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){function t(){this.systems=new Array}var e=t.prototype;return e.sort=function(){this.systems.sort((function(t,e){return t.priority-e.priority}))},e.add=function(t,e){void 0===e&&(e=0),this.systems.push({callback:t,priority:e}),this.sort()},e.remove=function(t){var e=this.systems.findIndex((function(e){return e.callback===t}));return e>-1&&(this.systems.splice(e,1),this.sort(),!0)},e.clear=function(){this.systems=[]},e.update=function(t){this.systems.forEach((function(e){return e.callback(t)}))},t}()},169:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(184),c=n(4),i=n(175),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.loop=function(t,e){for(var n,c=Object(r.a)(this.entities);!(n=c()).done;){for(var i,u=n.value,o=[],a=Object(r.a)(t);!(i=a()).done;){var s=i.value,f=u.get(s);o.push(f)}e(u,o)}},e}(i.Query)},170:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0);function c(t){var e=Object(r.useRef)(t),n=Object(r.useState)({current:t}),c=(n[0],n[1]);return[e,function(t){e.current=t,c({current:t})}]}},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),c=n(161),i=function(t,e){void 0===e&&(e=0);var n=Object(r.useContext)(c.b).systems;return Object(r.useEffect)((function(){return n.add(t,e),function(){n.remove(t)}}),[t,e]),null}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(0),c=n(171),i=function(t,e){var n=Object(r.useRef)(0);Object(c.a)((function(r){n.current+=r,n.current>t&&(n.current=0,e())}))}},173:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return o.a})),n.d(e,"a",(function(){return a.a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return m})),n.d(e,"g",(function(){return b.a}));var r=n(0),c=function(t){var e=Object(r.useRef)(null),n=Object(r.useRef)(null),c=function r(c){if(null!=n.current){var i=c-n.current;t(i/1e3)}n.current=c,e.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return e.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(e.current)}}),[])},i=n(161);function u(){var t=Object(r.useState)((function(){return new i.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=t)})),t}var o=n(166),a=n(163);function s(t){var e=Object(a.b)(),n=Object(r.useState)(new t),c=n[0],i=n[1];return Object(r.useEffect)((function(){var n=e.get(t);n?i(n):console.error("Couldn't find facet on entity: "+t.prototype.constructor.name)})),c}var f=n(169),d=n(181),l=function(){function t(t){this.ref=t}var e=t.prototype;return e.loop=function(t,e){if(this.current)return this.current.loop(t,e)},e.countBy=function(t){return this.current?this.current.countBy(t):0},e.filter=function(t){return this.current?this.current.filter(t):[]},e.has=function(t){return!!this.current&&this.current.has(t)},e.clear=function(){if(this.current)return this.current.clear()},Object(d.a)(t,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),t}();function m(t,e){var n=Object(o.a)(),c=Object(r.useRef)(),i=Object(r.useState)(0),u=i[0],a=i[1],s=function(){return a(u+1)};return Object(r.useEffect)((function(){if(void 0===c.current){var r=new f.a(t);null!=e&&e.added&&r.onEntityAdded.connect(e.added),null!=e&&e.removed&&r.onEntityRemoved.connect(e.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),c.current=r,s()}}),[]),new l(c)}n(170);var b=n(171);n(172)},176:function(t,e,n){"use strict";n(169);var r=n(177);n.o(r,"rad")&&n.d(e,"rad",(function(){return r.rad}));n(168);var c=n(178);n.d(e,"rad",(function(){return c.a}))},177:function(t,e){},178:function(t,e,n){"use strict";function r(t){return t*Math.PI/180}n.d(e,"a",(function(){return r}))},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return d.b})),n.d(e,"c",(function(){return p})),n.d(e,"d",(function(){return O})),n.d(e,"e",(function(){return g}));var r=n(181),c=n(164),i=n(4),u=n(162),o=n(0),a=n.n(o),s=n(173),f=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(u.a)(Object(c.a)(n),"context",void 0),Object(u.a)(Object(c.a)(n),"ref",void 0),n.ref=Object(o.createRef)(),n}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==o.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return a.a.createElement(a.a.Fragment,null,Object(o.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(e,[{key:"element",get:function(){return this.ref.current}}]),e}(o.Component);Object(u.a)(f,"contextType",s.a),f.__componentClassId__=-1;var d=n(161),l=n(166),m=n(170),b=n(172),v={emissionDelay:.1},p=function(t){var e=Object(l.a)(),n=(t=Object.assign({},v,t)).emissionDelay,r=Object(o.useRef)(0),c=t.children,i=Object(m.a)([]),u=i[0],s=i[1];Object(b.a)(n,(function(){var t,e;s([].concat(u.current,[(t=Object(o.createRef)(),e=r.current++,{element:c instanceof Function?Object.assign({},c(),{ref:t,key:e}):Object(o.cloneElement)(c,Object.assign({},{},{ref:t,key:e})),ref:t})]))}));var f=function(t){!function(t){if(t>-1)if(1===u.current.length)s([]);else{var e=u.current.slice(0,t),n=u.current.slice(t+1);s(e.concat(n))}}(u.current.findIndex((function(e){var n;return(null===(n=e.ref.current)||void 0===n?void 0:n.entity.id)===t.id})))};return Object(o.useEffect)((function(){return e.onEntityRemoved.connect(f),function(){e.onEntityRemoved.disconnect(f)}}),[]),a.a.createElement(a.a.Fragment,null,u.current.map((function(t){return t.element})))},h=n(175),y=n(163),O=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(u.a)(Object(c.a)(n),"context",void 0),Object(u.a)(Object(c.a)(n),"entity",void 0),n.entity=new h.Entity,n}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return a.a.createElement(y.a.Provider,{value:this.entity},this.props.children)},e}(o.Component);Object(u.a)(O,"contextType",d.b);var j=n(195);Object(j.a)({enforceActions:"never"});var E=["props","context","refs","updater","meta"],g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r))||this,Object(u.a)(Object(c.a)(e),"context",void 0),e}Object(i.a)(e,t);var n=e.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(t){var e=new Map(Object.getOwnPropertyNames(t).filter((function(t){return!E.includes(t)&&!t.endsWith("Ref")})).map((function(t){return[t,j.c]}))).entries();return Object.fromEntries(e)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var t=this.createFake(),e=this.getAnnotations(t);Object(j.b)(this,e,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return null},e}(o.Component);Object(u.a)(g,"contextType",y.a)},187:function(t,e,n){t.exports={example:"example_1hIu"}},188:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(0),c=n.n(r),i=n(194),u=n(3),o=n(182),a=function(t){return c.a.createElement(o.a,Object(u.a)({},o.b,{code:t.code,language:"tsx"}),(function(t){var e=t.className,n=t.style,r=t.tokens,i=t.getLineProps,u=t.getTokenProps;return c.a.createElement("pre",{className:e,style:n},r.map((function(t,e){return c.a.createElement("div",i({line:t,key:e}),t.map((function(t,e){return c.a.createElement("span",u({token:t,key:e}))})))})))}))},s=n(187),f=n.n(s),d=function(t){return c.a.createElement("div",{style:{display:"flex",alignItems:"stretch",flexDirection:"column"}},c.a.createElement("div",{className:f.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},t.style||{})},c.a.createElement(i.a,null,(function(){return t.children}))),t.code&&c.a.createElement(a,{code:t.code}))}}}]);