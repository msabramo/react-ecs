(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(7),c=(n(0),n(155)),o=n(205),a=n(184),u={sidebar_position:99,sidebar_label:"DOM Particles",title:"DOM Particles"},s={unversionedId:"core/DOMParticles",id:"core/DOMParticles",isDocsHomePage:!1,title:"DOM Particles",description:"<div style={{",source:"@site/examples/core/DOMParticles.md",sourceDirName:"core",slug:"/core/DOMParticles",permalink:"/examples/core/DOMParticles",version:"current",sidebar_label:"DOM Particles",sidebarPosition:99,frontMatter:{sidebar_position:99,sidebar_label:"DOM Particles",title:"DOM Particles"},sidebar:"mySidebar",previous:{title:"Multiple Queries",permalink:"/examples/core/MultipleQueries"},next:{title:"Simple Cube",permalink:"/examples/three/SimpleCube"}},l=[],f={toc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(a.a,{code:"import React, { useRef } from 'react';\n\nimport { Vector2 } from 'three';\n\nimport {\n    DOMView,\n    Emitter,\n    Entity,\n    Facet,\n    useAnimationFrame,\n    useECS,\n    useEngine,\n    useQuery,\n    useSystem\n} from '@react-ecs/core';\nimport { useControls } from 'leva';\n\nclass Mass extends Facet<Mass> { }\n\nclass Lifetime extends Facet<Lifetime> {\n    timeleft?= 1;\n}\n\nclass Position extends Facet<Position> {\n    location?= new Vector2(0, 0)\n}\n\nclass Velocity extends Facet<Velocity> {\n    amount?= new Vector2(0, 0)\n}\n\nconst LifetimeSystem = () => {\n    const engine = useEngine()\n    const query = useQuery(e => e.has(Lifetime));\n\n    return useSystem((dt: number) => {\n        query.loop([Lifetime], (e, [lifetime]) => {\n            lifetime.timeleft -= dt;\n\n            if (lifetime.timeleft <= 0) {\n                engine.removeEntity(e);\n            }\n        });\n    });\n};\n\nconst PhysicsSystem = () => {\n    const query = useQuery(e => e.hasAll(Position, Velocity))\n\n    return useSystem((dt) => {\n        query.loop([Position, Velocity], (e, [pos, vel]) => {\n            pos.location = pos.location.clone().add(vel.amount)\n        })\n    })\n}\n\nconst GravitySystem = ({ vector }) => {\n    const query = useQuery(e => e.hasAll(Mass, Velocity))\n\n    return useSystem((dt) => {\n        query.loop([Velocity], (e, [vel]) => {\n            vel.amount = vel.amount.clone().add(vector.clone().multiplyScalar(dt));\n        })\n    })\n}\n\nconst DOMViewSystem = () => {\n    const query = useQuery(e => e.hasAll(DOMView, Position))\n\n    return useSystem((dt) => {\n        query.loop([DOMView, Position], (e, [view, pos]) => {\n            view.element.style.left = `${pos.location.x}px`;\n            view.element.style.top = `${pos.location.y}px`;\n        });\n    })\n}\n\nexport const DOMParticles = () => {\n    const ECS = useECS();\n    useAnimationFrame(ECS.update);\n\n    const containerRef = useRef<HTMLDivElement>();\n\n    const { sizeRange, offset, delay, strength, gravity, lifetime } = useControls('particles', {\n        sizeRange: {\n            value: [16, 32],\n            min: 1,\n            max: 256,\n        },\n        offset: {\n            value: 50,\n            max: 300,\n            min: 20,\n        },\n        delay: {\n            value: .05,\n            min: 0.01,\n            max: .2\n        },\n        strength: {\n            value: 10,\n            min: 1,\n            max: 50\n        },\n        gravity: {\n            value: { x: 0, y: 10 }\n        },\n        lifetime: {\n            value: [1, 3],\n            min: .1,\n            max: 5,\n        }\n    })\n\n    const rnd = (s: number) =>\n        Math.random() * s - s * 0.5;\n    const randomVector = (s: number) =>\n        new Vector2(rnd(s), rnd(s));\n    const rndPos = () =>\n        randomVector(offset).add(new Vector2(\n            containerRef.current.offsetWidth / 2,\n            containerRef.current.offsetHeight / 2,\n        ))\n\n    return (\n        <div ref={containerRef}>\n            <ECS.Provider>\n                <LifetimeSystem />\n                <PhysicsSystem />\n                <GravitySystem vector={new Vector2(gravity.x, gravity.y)} />\n                <DOMViewSystem />\n\n                <Emitter emissionDelay={delay}>\n                    {() => {\n                        const size = sizeRange[0] + (Math.random() * sizeRange[1])\n                        const pos = rndPos().subScalar(size / 2)\n                        return (\n                            <Entity>\n                                <Mass />\n                                <Lifetime timeleft={lifetime[0] + Math.random() * lifetime[1]} />\n                                <Position location={pos} />\n                                <Velocity amount={randomVector(strength)} />\n                                <DOMView>\n                                    <img\n                                        style={{\n                                            position: 'absolute',\n                                            left: pos.x,\n                                            top: pos.y,\n                                            width: size,\n                                            height: size\n                                        }}\n                                        src=\"https://i.imgur.com/kFjaH5l.png\" />\n                                </DOMView>\n                            </Entity>\n                        );\n                    }}\n                </Emitter>\n            </ECS.Provider>\n        </div>\n    )\n}\n",mdxType:"Example"},Object(c.b)("div",{style:{minHeight:"400px",display:"flex",alignItems:"stretch",flexDirection:"column"}},Object(c.b)(o.a,{mdxType:"DOMParticles"}))))}m.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,p=f["".concat(o,".").concat(d)]||f[d]||m[d]||c;return n?i.a.createElement(p,a(a({ref:t},s),{},{components:n})):i.a.createElement(p,a({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var s=2;s<c;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(156),i=n(0),c=n.n(i),o=n(170),a=n(163),u=Object(i.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new a.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return c.a.createElement(u.Provider,{value:this},e.children)},e}()},158:function(e,t,n){"use strict";var r=n(175);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var i=n(168);n.d(t,"EntityContext",(function(){return i.a})),n.d(t,"useAnimationFrame",(function(){return i.b})),n.d(t,"useECS",(function(){return i.c})),n.d(t,"useEngine",(function(){return i.d})),n.d(t,"useFacet",(function(){return i.e})),n.d(t,"useQuery",(function(){return i.f})),n.d(t,"useSystem",(function(){return i.g}));var c=n(171);n.o(c,"rad")&&n.d(t,"rad",(function(){return c.rad}))},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(0),i=Object(r.createContext)(null);function c(){var e=Object(r.useContext)(i);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(157),c=function(){return Object(r.useContext)(i.b).engine}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(178),i=n(4),c=n(170),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.loop=function(e,t){for(var n,i=Object(r.a)(this.entities);!(n=i()).done;){for(var c,o=n.value,a=[],u=Object(r.a)(e);!(c=u()).done;){var s=c.value,l=o.get(s);a.push(l)}t(o,a)}},t}(c.Query)},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),i=(n[0],n[1]);return[t,function(e){t.current=e,i({current:e})}]}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(157),c=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(i.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),i=n(166),c=function(e,t){var n=Object(r.useRef)(0);Object(i.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a.a})),n.d(t,"a",(function(){return u.a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return p.a}));var r=n(0),i=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),i=function r(i){if(null!=n.current){var c=i-n.current;e(c/1e3)}n.current=i,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(t.current)}}),[])},c=n(157);function o(){var e=Object(r.useState)((function(){return new c.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var a=n(161),u=n(159);function s(e){var t=Object(u.b)(),n=Object(r.useState)(new e),i=n[0],c=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?c(n):console.error("Couldn't find facet on entity: "+e.prototype.constructor.name)})),i}var l=n(164),f=n(177),m=function(){function e(e){this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(f.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function d(e,t){var n=Object(a.a)(),i=Object(r.useRef)(),c=Object(r.useState)(0),o=c[0],u=c[1],s=function(){return u(o+1)};return Object(r.useEffect)((function(){if(void 0===i.current){var r=new l.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),i.current=r,s()}}),[]),new m(i)}n(165);var p=n(166);n(167)},171:function(e,t,n){"use strict";n(164);var r=n(172);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(163);var i=n(173);n.d(t,"rad",(function(){return i.a}))},172:function(e,t){},173:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f.b})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return E}));var r=n(177),i=n(160),c=n(4),o=n(156),a=n(0),u=n.n(a),s=n(168),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(a.createRef)(),n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==a.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,Object(a.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(a.Component);Object(o.a)(l,"contextType",s.a),l.__componentClassId__=-1;var f=n(157),m=n(161),d=n(165),p=n(167),y={emissionDelay:.1},v=function(e){var t=Object(m.a)(),n=(e=Object.assign({},y,e)).emissionDelay,r=Object(a.useRef)(0),i=e.children,c=Object(d.a)([]),o=c[0],s=c[1];Object(p.a)(n,(function(){var e,t;s([(e=Object(a.createRef)(),t=r.current++,{element:i instanceof Function?Object.assign({},i(),{ref:e,key:t}):Object(a.cloneElement)(i,Object.assign({},{},{ref:e,key:t})),ref:e})].concat(o.current))}));var l=function(e){!function(e){if(e>-1)if(1===o.current.length)s([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);s(t.concat(n))}}(o.current.findIndex((function(t){var n;return(null===(n=t.ref.current)||void 0===n?void 0:n.entity.id)===e.id})))};return Object(a.useEffect)((function(){return t.onEntityRemoved.connect(l),function(){t.onEntityRemoved.disconnect(l)}}),[]),u.a.createElement(u.a.Fragment,null,o.current.map((function(e){return e.element})))},b=n(170),h=n(159),O=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"entity",void 0),n.entity=new b.Entity,n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return u.a.createElement(h.a.Provider,{value:this.entity},this.props.children)},t}(a.Component);Object(o.a)(O,"contextType",f.b);var j=n(191);Object(j.a)({enforceActions:"never"});var g=["props","context","refs","updater","meta"],E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(i.a)(t),"context",void 0),t}Object(c.a)(t,e);var n=t.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!g.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,j.c]}))).entries();return Object.fromEntries(t)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(j.b)(this,t,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(a.Component);Object(o.a)(E,"contextType",h.a)},182:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),i=n.n(r),c=n(179),o=n(187),a=n(3),u=n(181),s=function(e){return i.a.createElement(u.a,Object(a.a)({},u.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",o({token:e,key:t}))})))})))}))},l=n(182),f=n.n(l),m=function(e){return i.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},i.a.createElement("div",{className:f.a.leva,style:{top:"75px"}},i.a.createElement(c.a,{fill:!0,collapsed:e.collapsed})),i.a.createElement("div",{className:f.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},i.a.createElement(o.a,{fallback:i.a.createElement("div",null)},(function(){return i.a.createElement(r.Suspense,{fallback:i.a.createElement("div",null)},e.children)}))),e.code&&i.a.createElement(s,{code:e.code}))}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(160),i=n(156),c=n(4),o=n(0),a=n.n(o),u=n(174),s=n(158),l=n(179),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t}(s.Facet),m=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return t=e.call.apply(e,[this].concat(c))||this,Object(i.a)(Object(r.a)(t),"timeleft",1),t}return Object(c.a)(t,e),t}(s.Facet),d=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return t=e.call.apply(e,[this].concat(c))||this,Object(i.a)(Object(r.a)(t),"location",new u.Vector2(0,0)),t}return Object(c.a)(t,e),t}(s.Facet),p=function(e){function t(){for(var t,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return t=e.call.apply(e,[this].concat(c))||this,Object(i.a)(Object(r.a)(t),"amount",new u.Vector2(0,0)),t}return Object(c.a)(t,e),t}(s.Facet),y=function(){var e=Object(s.useEngine)(),t=Object(s.useQuery)((function(e){return e.has(m)}));return Object(s.useSystem)((function(n){t.loop([m],(function(t,r){var i=r[0];i.timeleft-=n,i.timeleft<=0&&e.removeEntity(t)}))}))},v=function(){var e=Object(s.useQuery)((function(e){return e.hasAll(d,p)}));return Object(s.useSystem)((function(t){e.loop([d,p],(function(e,t){var n=t[0],r=t[1];n.location=n.location.clone().add(r.amount)}))}))},b=function(e){var t=e.vector,n=Object(s.useQuery)((function(e){return e.hasAll(f,p)}));return Object(s.useSystem)((function(e){n.loop([p],(function(n,r){var i=r[0];i.amount=i.amount.clone().add(t.clone().multiplyScalar(e))}))}))},h=function(){var e=Object(s.useQuery)((function(e){return e.hasAll(s.DOMView,d)}));return Object(s.useSystem)((function(t){e.loop([s.DOMView,d],(function(e,t){var n=t[0],r=t[1];n.element.style.left=r.location.x+"px",n.element.style.top=r.location.y+"px"}))}))},O=function(){var e=Object(s.useECS)();Object(s.useAnimationFrame)(e.update);var t=Object(o.useRef)(),n=Object(l.b)("particles",{sizeRange:{value:[16,32],min:1,max:256},offset:{value:50,max:300,min:20},delay:{value:.05,min:.01,max:.2},strength:{value:10,min:1,max:50},gravity:{value:{x:0,y:10}},lifetime:{value:[1,3],min:.1,max:5}}),r=n.sizeRange,i=n.offset,c=n.delay,O=n.strength,j=n.gravity,g=n.lifetime,E=function(e){return Math.random()*e-.5*e},x=function(e){return new u.Vector2(E(e),E(e))};return a.a.createElement("div",{ref:t},a.a.createElement(e.Provider,null,a.a.createElement(y,null),a.a.createElement(v,null),a.a.createElement(b,{vector:new u.Vector2(j.x,j.y)}),a.a.createElement(h,null),a.a.createElement(s.Emitter,{emissionDelay:c},(function(){var e=r[0]+Math.random()*r[1],n=x(i).add(new u.Vector2(t.current.offsetWidth/2,t.current.offsetHeight/2)).subScalar(e/2);return a.a.createElement(s.Entity,null,a.a.createElement(f,null),a.a.createElement(m,{timeleft:g[0]+Math.random()*g[1]}),a.a.createElement(d,{location:n}),a.a.createElement(p,{amount:x(O)}),a.a.createElement(s.DOMView,null,a.a.createElement("img",{style:{position:"absolute",left:n.x,top:n.y,width:e,height:e},src:"https://i.imgur.com/kFjaH5l.png"})))}))))}}}]);