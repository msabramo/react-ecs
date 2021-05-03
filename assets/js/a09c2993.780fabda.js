(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return f})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(161)),o=n(187),c=(n(191),n(217)),u=n(206),s=n(188),l={slug:"/",sidebar_position:0,sidebar_label:"Introduction",title:"React ECS Documentation"},m={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"React ECS Documentation",description:'react-ecs is a declarative "Entity Component System" for React.',source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/dustinlacewell/react-ecs/edit/master/apps/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0,sidebar_label:"Introduction",title:"React ECS Documentation"},sidebar:"mySidebar",next:{title:"@react-ecs/core overview",permalink:"/docs/core/"}},f=[{value:"What&#39;s that?",id:"whats-that",children:[]},{value:"Composition over Inheritance",id:"composition-over-inheritance",children:[]},{value:"Declarative ECS with React",id:"declarative-ecs-with-react",children:[]}],d={toc:f};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-ecs"),' is a declarative "Entity Component System" for React.'),Object(i.b)(o.a,{hidden:!0,mdxType:"Leva"}),Object(i.b)(s.a,{hideControls:!0,style:{backgroundColor:"black",height:"250px"},mdxType:"Example"},Object(i.b)(c.a,{mdxType:"BoidExample"})),Object(i.b)("div",{style:{float:"right"}},"These boids are driven by react-ecs! Try dragging and zooming!"),Object(i.b)("h2",{id:"whats-that"},"What's that?"),Object(i.b)("img",{style:{float:"right",maxWidth:"400px",marginLeft:"10px"},src:"https://i.imgur.com/nTfGWyF.png"}),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"ECS"),", or ",Object(i.b)("em",{parentName:"p"},"Entity Component System")," is a design pattern popular in game development. It eschews rich objects for simple ",Object(i.b)("strong",{parentName:"p"},"Entities")," that compose data-only Components, or ",Object(i.b)("strong",{parentName:"p"},"Facets")," as ",Object(i.b)("inlineCode",{parentName:"p"},"react-ecs")," calls them (to avoid confusion with React Components)."),Object(i.b)("p",null,"Logic is then handled by small update functions called ",Object(i.b)("strong",{parentName:"p"},"Systems")," that operate upon the facets related to it."),Object(i.b)("p",null,"In the example to the right, a common scenario is illustrated. There are a number of entities, comprised merely as a collection of simple data facets. A ",Object(i.b)("inlineCode",{parentName:"p"},"Velocity")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Position")," component may hold a simple vector. Whereas a ",Object(i.b)("inlineCode",{parentName:"p"},"Graphics")," component might hold the URL of a sprite image."),Object(i.b)("p",null,"Two systems, ",Object(i.b)("inlineCode",{parentName:"p"},"PhysicsSystem")," and ",Object(i.b)("inlineCode",{parentName:"p"},"GraphicsSystem")," are responsible for all the behavior and logic:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"PhysicsSystem")," looks at all the entities with ",Object(i.b)("strong",{parentName:"li"},"both")," ",Object(i.b)("inlineCode",{parentName:"li"},"Velocity")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Position")," facets, using the former to update the latter."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"GraphicsSystem")," looks at all the entities with ",Object(i.b)("strong",{parentName:"li"},"both")," ",Object(i.b)("inlineCode",{parentName:"li"},"Position")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Graphics")," facets, using the former to draw the latter.")),Object(i.b)("p",null,"The systems ignore the entities that don't have the facets they're interested in."),Object(i.b)("h2",{id:"composition-over-inheritance"},"Composition over Inheritance"),Object(i.b)("p",null,'ECS takes "composition over inheritance" to its logical conclusion.'),Object(i.b)("p",null,"Entities are nothing more than their facets. They don't have their own data and they don't have any code."),Object(i.b)("p",null,"There's no need to try to find the best inheritance tree to represent your problem domain."),Object(i.b)("p",null,"Just slap some useful facets onto some entities and write some systems to process them. This also means entity capabilities can dynamically change at runtime."),Object(i.b)("p",null,"It's a robust, easy to implement pattern that can enable a fun creativity."),Object(i.b)("h2",{id:"declarative-ecs-with-react"},"Declarative ECS with React"),Object(i.b)("p",null,"The idea behind ",Object(i.b)("inlineCode",{parentName:"p"},"react-ecs")," is to allow you to ",Object(i.b)("em",{parentName:"p"},"describe")," the parts of your ECS in standard React fashion:"),Object(i.b)("p",null,"First, define some useful Facets."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"class Mass extends Facet<Mass> {}\n\nclass Lifetime extends Facet<Lifetime> {\n    timeleft? = 1;\n}\n\nclass Position extends Facet<Position> {\n    location? = new Vector2(0, 0);\n}\n\nclass Velocity extends Facet<Velocity> {\n    amount? = new Vector2(0, 0);\n}\n")),Object(i.b)("p",null,"Let's add a system to remove entities when their ",Object(i.b)("inlineCode",{parentName:"p"},"Lifetime")," has expired:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"const LifetimeSystem = () => {\n    // get reference to ECS engine\n    const engine = useEngine();\n    // create a query for entities with the Lifetime face\n    const query = useQuery((e) => e.has(Lifetime));\n\n    // create a system that runs every tick\n    return useSystem((dt: number) => {\n        // use the query to loop over entities with the Lifetime facet\n        query.loop([Lifetime], (e, [lifetime]) => {\n            // subtract the current frame time\n            lifetime.timeleft -= dt;\n\n            // remove entity from engine if it expires\n            if (lifetime.timeleft <= 0) {\n                engine.removeEntity(e);\n            }\n        });\n    });\n};\n")),Object(i.b)("p",null,"Let's add a couple of other systems for moving entities around:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"const PhysicsSystem = () => {\n    const query = useQuery((e) => e.hasAll(Position, Velocity));\n\n    return useSystem((dt) => {\n        query.loop([Position, Velocity], (e, [pos, vel]) => {\n            pos.location = pos.location.clone().add(vel.amount);\n        });\n    });\n};\n\nconst GravitySystem = ({ vector }) => {\n    const query = useQuery((e) => e.hasAll(Mass, Velocity));\n\n    return useSystem((dt) => {\n        query.loop([Velocity], (e, [vel]) => {\n            vel.amount = vel.amount\n                .clone()\n                .add(vector.clone().multiplyScalar(dt));\n        });\n    });\n};\n")),Object(i.b)("p",null,"Finally, let's write a system to sync an entity's ",Object(i.b)("inlineCode",{parentName:"p"},"Position")," facet with its standard ",Object(i.b)("inlineCode",{parentName:"p"},"DOMView")," facet:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"const DOMViewSystem = () => {\n    const query = useQuery((e) => e.hasAll(DOMView, Position));\n\n    return useSystem((dt) => {\n        query.loop([DOMView, Position], (e, [view, pos]) => {\n            // sync DOM element's style with entity's Position\n            view.element.style.left = `${pos.location.x}px`;\n            view.element.style.top = `${pos.location.y}px`;\n        });\n    });\n};\n")),Object(i.b)("p",null,"Now we can put it all together:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"export const DOMParticles = () => {\n    // create the ECS\n    const ECS = useECS();\n    // update the ECS every frame\n    useAnimationFrame(ECS.update);\n\n    // some helper functions for randomizing things\n    const rnd = (s: number) => Math.random() * s - s * 0.5;\n    const randomVector = (s: number) =>\n        new Vector2(rnd(s), rnd(s));\n\n\n    return (\n        <ECS.Provider> {/* context provider for ECS things */}\n            {/* include all the systems */}\n            <LifetimeSystem />\n            <PhysicsSystem />\n            <GravitySystem vector={new Vector2(0, 10)} />\n            <DOMViewSystem />\n\n            {/* emit entities with a delay using built-in <Emitter /> */}\n            <Emitter emissionDelay={0.025}>\n                {() => {\n                    // create random position\n                    const pos = randomVector(50).add(new Vector2(250, 100));\n                    return (\n                        {/* <Entity> contains all its facets */}\n                        <Entity>\n                            <Mass />\n                            <Lifetime timeleft={3} />\n                            <Position location={pos} />\n                            <Velocity amount={randomVector(10)} />\n                            <DOMView> {/* DOMView's child lets us declare how the entity looks */}\n                                <img\n                                    style={{\n                                        position: 'absolute',\n                                        left: pos.x,\n                                        top: pos.y,\n                                        width: 16,\n                                        height: 16\n                                    }}\n                                    src=\"https://i.imgur.com/kFjaH5l.png\" />\n                            </DOMView>\n                        </Entity>\n                    );\n                }}\n            </Emitter>\n        </ECS.Provider>\n    )\n}\n")),Object(i.b)(s.a,{hideControls:!0,style:{height:"250px"},mdxType:"Example"},Object(i.b)(u.a,{mdxType:"DOMParticles"})))}p.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,p=m["".concat(o,".").concat(d)]||m[d]||f[d]||i;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";var r=n(181);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var a=n(173);n.d(t,"EntityContext",(function(){return a.a})),n.d(t,"useAnimationFrame",(function(){return a.b})),n.d(t,"useECS",(function(){return a.c})),n.d(t,"useEngine",(function(){return a.d})),n.d(t,"useEntity",(function(){return a.e})),n.d(t,"useFacet",(function(){return a.f})),n.d(t,"useQuery",(function(){return a.g})),n.d(t,"useStatefulRef",(function(){return a.h})),n.d(t,"useSystem",(function(){return a.i}));var i=n(178);n.o(i,"rad")&&n.d(t,"rad",(function(){return i.rad}))},164:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(163),a=n(0),i=n.n(a),o=n(176),c=n(168),u=Object(a.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new c.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return i.a.createElement(u.Provider,{value:this},e.children)},e}()},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(0),a=Object(r.createContext)(null);function i(){var e=Object(r.useContext)(a);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(164),i=function(){return Object(r.useContext)(a.b).engine}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(163),a=function(){function e(){Object(r.a)(this,"systems",void 0),this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(183),a=n(4),i=n(176),o=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.loop=function(e,t){for(var n=0;n<this.entities.length;n++){for(var a,i=this.entities[n],o=[],c=Object(r.a)(e);!(a=c()).done;){var u=a.value,s=i.get(u);o.push(s)}t(i,o,n)}},n.rloop=function(e,t){for(var n=this.entities.length-1;n>=0;n--){for(var a,i=this.entities[n],o=[],c=Object(r.a)(e);!(a=c()).done;){var u=a.value,s=i.get(u);o.push(s)}t(i,o,n)}},n.mloop=function(e,t){for(var n=0;n<this.entities.length;n++){for(var a,i=this.entities[n],o=[],c=Object(r.a)(e);!(a=c()).done;){var u=a.value;if(1===u.length&&void 0!==u[0]){for(var s=i.get(u[0]),l=[s];s.next;)l.push(s.next),s=s.next;o.push(l)}else{var m=i.get(u);o.push(m)}}t(i,o,n)}},t}(i.Query)},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),a=(n[0],n[1]);return[t,function(e){t.current=e,a({current:e})}]}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(164),i=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(a.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(171),i=function(e,t){var n=Object(r.useRef)(0);Object(a.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c.a})),n.d(t,"a",(function(){return u.a})),n.d(t,"e",(function(){return u.b})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return b.a})),n.d(t,"i",(function(){return h.a}));var r=n(0),a=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=function r(a){if(void 0!==n.current){var i=a-n.current;e(i/1e3)}n.current=a,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(a),function(){return cancelAnimationFrame(t.current)}}),[])},i=n(164);function o(){var e=Object(r.useState)((function(){return new i.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var c=n(167),u=n(165);function s(e){var t=Object(u.b)(),n=Object(r.useState)(new e),a=n[0],i=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?i(n):(i(void 0),console.warn("Couldn't find facet on entity: "+e.prototype.constructor.name))})),a}var l=n(169),m=n(182),f=n(163),d=function(){function e(e){Object(f.a)(this,"ref",void 0),this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.rloop=function(e,t){if(this.current)return this.current.rloop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(m.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function p(e,t){var n=Object(c.a)(),a=Object(r.useRef)(),i=Object(r.useState)(0),o=i[0],u=i[1],s=function(){return u(o+1)};return Object(r.useEffect)((function(){if(void 0===a.current){var r=new l.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),a.current=r,s()}}),[]),new d(a)}var b=n(170),h=n(171);n(172)},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(182),a=n(166),i=n(4),o=n(163),c=n(0),u=n.n(c),s=n(162),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"context",void 0),Object(o.a)(Object(a.a)(n),"ref",void 0),n.ref=Object(c.createRef)(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.context;e.add(this);var t=this.ref.current.userData||{};t.entity=e,this.ref.current.userData=t},n.componentWillUnmount=function(){this.context.removeComponent(t)},n.render=function(){if(1!==c.Children.count(this.props.children))throw new Error("<ThreeView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,u.a.cloneElement(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"object3d",get:function(){return this.ref.current}}]),t}(c.Component);Object(o.a)(l,"contextType",s.EntityContext),l.__componentClassId__=100},178:function(e,t,n){"use strict";n(169);var r=n(179);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(168);var a=n(180);n.d(t,"rad",(function(){return a.a}))},179:function(e,t){},180:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m.b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return w}));var r=n(182),a=n(166),i=n(4),o=n(163),c=n(0),u=n.n(c),s=n(173),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"context",void 0),Object(o.a)(Object(a.a)(n),"ref",void 0),n.ref=Object(c.createRef)(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==c.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,Object(c.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(c.Component);Object(o.a)(l,"contextType",s.a),l.__componentClassId__=-1;var m=n(164),f=n(167),d=n(170),p=n(172),b={emissionDelay:.1},h=function(e){var t=Object(f.a)(),n=(e=Object.assign({},b,e)).emissionDelay,r=Object(c.useRef)(0),a=e.children,i=Object(d.a)([]),o=i[0],s=i[1];Object(p.a)(n,(function(){var e,t;s([(e=Object(c.createRef)(),t=r.current++,{element:Object.assign({},a(e),{key:t}),ref:e})].concat(o.current))}));var l=function(e){o.current.forEach((function(t,n){null!=t.ref.current&&t.ref.current.id!==e.id||function(e){if(e>-1)if(1===o.current.length)s([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);s(t.concat(n))}}(n)}))};return Object(c.useEffect)((function(){return t.onEntityRemoved.connect(l),function(){t.onEntityRemoved.disconnect(l)}}),[]),u.a.createElement(u.a.Fragment,null,o.current.map((function(e){return e.element})))},y=n(176),v=n(165),O=n(162),j=function(e){var t=Object(c.useContext)(m.b),n=Object(O.useStatefulRef)(void 0),r=n[0],a=n[1],i=Object(c.useCallback)((function(t){r.current&&t.id===r.current.id&&(e.entityRef&&(e.entityRef.current=null),r.current.clear(),r.current.invalidate(),a(null))}),[r.current]);return Object(c.useEffect)((function(){if(void 0===r.current){var n=e.entity||new y.Entity;t.engine.addEntity(n),t.engine.onEntityRemoved.connect(i),a(n)}return function(){t.engine.onEntityRemoved.disconnect(i),r.current&&(r.current.clear(),r.current.invalidate(),t.engine.removeEntity(r.current))}}),[]),r.current?u.a.createElement(v.a.Provider,{value:r.current},e.children):null},g=n(196);Object(g.a)({enforceActions:"never"});var E=["props","context","refs","updater","meta"],w=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(a.a)(t),"context",void 0),t}Object(i.a)(t,e);var n=t.prototype;return n.asComponent=function(){return this},n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!E.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,g.c]}))).entries();return Object.fromEntries(t)},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(g.b)(this,t,{autoBind:!0}),this.context.append(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(c.Component);Object(o.a)(w,"contextType",v.a)},186:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(191),a=n(187),i=n(0),o=n.n(i),c=n(3),u=n(185),s=function(e){return o.a.createElement(u.a,Object(c.a)({},u.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,i=e.getTokenProps;return o.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return o.a.createElement("div",a({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",i({token:e,key:t}))})))})))}))},l=n(186),m=n.n(l),f=function(e){return o.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},o.a.createElement("div",{className:m.a.leva,style:{top:"75px",display:e.hideControls?"none":"block"}},o.a.createElement(a.a,{fill:!0,collapsed:e.collapsed})),o.a.createElement("div",{className:m.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},o.a.createElement(r.a,{fallback:o.a.createElement("div",null)},(function(){return o.a.createElement(i.Suspense,{fallback:o.a.createElement("div",null)},e.children)}))),e.code&&o.a.createElement(s,{code:e.code}))}},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return C})),n.d(t,"b",(function(){return R})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return b}));var r=n(299),a=n(187),i=n(0),o=n.n(i),c=n(166),u=n(4),s=n(163),l=n(162),m=n(177),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(s.a)(Object(c.a)(t),"amount",new m.Vector3(0,0,0)),t}return Object(u.a)(t,e),t}(l.Facet),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(s.a)(Object(c.a)(t),"meta",{neighbors:[]}),t}return Object(u.a)(t,e),t}(l.Facet),p=n(174),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t}(l.Facet),h=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(p.a,b)}));return Object(l.useSystem)((function(n){t.loop([p.a],(function(t,n){var r=n[0].object3d.position;r.x<-e.size?r.setX(e.size):r.x>e.size&&r.setX(-e.size),r.y<-e.size?r.setY(e.size):r.y>e.size&&r.setY(-e.size),r.z<-e.size?r.setZ(e.size):r.z>e.size&&r.setZ(-e.size)}))}))},y=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{size:e.size}),e.showBounds&&o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{scale:3}),o.a.createElement(r.a,{position:[e.size,e.size,e.size]}),o.a.createElement(r.a,{position:[-e.size,-e.size,-e.size]}),o.a.createElement(r.a,{position:[e.size,-e.size,e.size]}),o.a.createElement(r.a,{position:[-e.size,e.size,-e.size]}),o.a.createElement(r.a,{position:[e.size,e.size,-e.size]}),o.a.createElement(r.a,{position:[-e.size,-e.size,e.size]}),o.a.createElement(r.a,{position:[e.size,-e.size,-e.size]}),o.a.createElement(r.a,{position:[-e.size,e.size,e.size]})))};(function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(s.a)(Object(c.a)(t),"targetView",void 0),Object(s.a)(Object(c.a)(t),"pointerRef",void 0),t}return Object(u.a)(t,e),t}(l.Facet)).__componentClassId__=99;var v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(s.a)(Object(c.a)(t),"amount",new m.Vector3(Math.random()-.5,Math.random()-.5,Math.random()-.5)),t}return Object(u.a)(t,e),t}(l.Facet),O=n(183),j=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(d,v,f)}));return Object(l.useSystem)((function(n){t.loop([d,v,f],(function(t,n){for(var r,a=n[0],i=n[1],o=n[2],c=new m.Vector3(0,0,0),u=a.meta.neighbors,s=Object(O.a)(a.meta.neighbors);!(r=s()).done;){var l=r.value.get(v).amount;c.add(l)}u.length&&(c.divideScalar(u.length),c.sub(i.amount),c.clampLength(e.min||0,e.max||1)),o.amount=c.normalize().clone().multiplyScalar(e.amount)}))}))},g=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(p.a,v,d)}));return Object(l.useSystem)((function(n){t.loop([p.a,d,v,f],(function(t,n){for(var r,a=n[0],i=n[1],o=n[2],c=n[3],u=a.object3d,s=new m.Vector3,l=i.meta.neighbors,f=Object(O.a)(l);!(r=f()).done;){var d=r.value;s.add(d.get(p.a).object3d.position)}l.length&&(s.divideScalar(l.length),s.sub(u.position),s.setLength(1),s.sub(o.amount),s.clampLength(e.min,e.max),s.multiplyScalar(e.amount)),c.amount.add(s)}))}))},E=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(p.a,v,f)}));return Object(l.useSystem)((function(n){null==t||t.loop([p.a,v,f],(function(t,r){var a=r[0],i=r[1],o=r[2],c=a.object3d;if(i.amount.length()>0){var u=c.position.clone().add(i.amount);c.lookAt(u)}var s=c.position.clone().add(i.amount.clone().multiplyScalar(n));i.amount.add(o.amount),i.amount.clampLength(e.min,e.max),c.position.copy(s)}))}))},w=(l.Facet,new m.LineBasicMaterial({color:new m.Color(Math.random(),Math.random(),Math.random())}),new m.Vector3,function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(p.a,d)}));return Object(l.useSystem)((function(n){t.loop([p.a,d],(function(n,r){var a=r[0],i=r[1],o=a.object3d,c=function(e){return o.position.distanceTo(function(e){return e.get(p.a).object3d}(e).position)};i.meta.neighbors=t.entities.filter((function(e){return e.id!==n.id})).filter((function(t){return!e.filter||e.filter(n,t)})).filter((function(t){return c(t)<e.radius})).sort((function(e,t){return c(e)-c(t)}))}))}))}),x=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(p.a,v,d)}));return Object(l.useSystem)((function(n){t.loop([p.a,d,v,f],(function(t,n){for(var r,a=n[0],i=n[1],o=n[2],c=n[3],u=a.object3d,s=new m.Vector3,l=i.meta.neighbors,f=Object(O.a)(l);!(r=f()).done;){var d=r.value.get(p.a).object3d.position,b=u.position.distanceTo(d),h=u.position.clone().sub(d);h.divideScalar(b*b),s.add(h)}l.length&&(s.divideScalar(l.length),s.sub(o.amount),s.clampLength(e.min,e.max),s.multiplyScalar(e.amount)),c.amount.add(s)}))}))},C=function(e){var t=Object(a.b)("sim",{size:{value:100,min:20,max:200},count:{value:250,min:1,max:250},spawnHeight:{value:1,min:0,max:1},neighborRadius:{value:10,min:1,max:50},showBounds:!1},{}),n=t.size,c=t.count,u=t.spawnHeight,s=t.neighborRadius,l=t.showBounds,m=Object(a.b)("alignment",{enabled:!0,multiplier:{value:.1,min:0,max:1},turningRange:{value:[0,.1],min:0,max:1}}),f=Object(a.b)("cohesion",{enabled:!0,multiplier:{value:1,min:0,max:1},speedRange:{value:[0,1],min:0,max:10}}),d=Object(a.b)("separation",{enabled:!0,multiplier:{value:2,min:0,max:2},speedRange:{value:[0,3],min:0,max:10}}),p=Object(a.b)("speed",{range:{value:[15,50],min:0,max:50}}),b=function(){return Math.random()*n*2-n},h=Object(i.useMemo)((function(){for(var t=[],n=0;n<c;n++)t.push(o.a.createElement(i.Suspense,{fallback:o.a.createElement(r.c,null)},o.a.createElement(R,{render:e.render,position:[b(),b()*u,b()]})));return t}),[n,u,c]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{showBounds:l,size:n}),o.a.createElement(w,{radius:s}),o.a.createElement(j,{amount:m.enabled?m.multiplier:0,min:m.turningRange[0],max:m.turningRange[1]}),o.a.createElement(g,{amount:f.enabled?f.multiplier:0,min:f.speedRange[0],max:f.speedRange[1]}),o.a.createElement(x,{amount:d.enabled?d.multiplier:0,min:d.speedRange[0],max:d.speedRange[1]}),o.a.createElement(E,{min:p.range[0],max:p.range[1]}),h)},S=n(3),P=n(7),R=Object(i.forwardRef)((function(e,t){var n=e.render,r=Object(P.a)(e,["render"]);return o.a.createElement(l.Entity,null,o.a.createElement(d,null),o.a.createElement(v,null),o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(p.a,null,o.a.createElement("group",Object(S.a)({ref:t},r,{dispose:null}),n())))}))},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(166),a=n(163),i=n(4),o=n(162),c=n(187),u=n(0),s=n.n(u),l=n(177),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t}(o.Facet),f=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,Object(a.a)(Object(r.a)(t),"timeleft",1),t}return Object(i.a)(t,e),t}(o.Facet),d=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,Object(a.a)(Object(r.a)(t),"location",new l.Vector2(0,0)),t}return Object(i.a)(t,e),t}(o.Facet),p=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i))||this,Object(a.a)(Object(r.a)(t),"amount",new l.Vector2(0,0)),t}return Object(i.a)(t,e),t}(o.Facet),b=function(){var e=Object(o.useEngine)(),t=Object(o.useQuery)((function(e){return e.has(f)}));return Object(o.useSystem)((function(n){t.loop([f],(function(t,r){var a=r[0];a.timeleft-=n,a.timeleft<=0&&e.removeEntity(t)}))}))},h=function(){var e=Object(o.useQuery)((function(e){return e.hasAll(d,p)}));return Object(o.useSystem)((function(t){e.loop([d,p],(function(e,t){var n=t[0],r=t[1];n.location=n.location.clone().add(r.amount)}))}))},y=function(e){var t=e.vector,n=Object(o.useQuery)((function(e){return e.hasAll(m,p)}));return Object(o.useSystem)((function(e){n.loop([p],(function(n,r){var a=r[0];a.amount=a.amount.clone().add(t.clone().multiplyScalar(e))}))}))},v=function(){var e=Object(o.useQuery)((function(e){return e.hasAll(o.DOMView,d)}));return Object(o.useSystem)((function(t){e.loop([o.DOMView,d],(function(e,t){var n=t[0],r=t[1];n.element.style.left=r.location.x+"px",n.element.style.top=r.location.y+"px"}))}))},O=function(){var e=Object(o.useECS)();Object(o.useAnimationFrame)(e.update);var t=Object(u.useRef)(),n=Object(c.b)("particles",{sizeRange:{value:[16,32],min:1,max:256},offset:{value:50,max:300,min:20},delay:{value:.05,min:.01,max:.2},strength:{value:10,min:1,max:50},gravity:{value:{x:0,y:10}},lifetime:{value:[1,3],min:.1,max:5}}),r=n.sizeRange,a=n.offset,i=n.delay,O=n.strength,j=n.gravity,g=n.lifetime,E=function(e){return Math.random()*e-.5*e},w=function(e){return new l.Vector2(E(e),E(e))};return s.a.createElement("div",{ref:t},s.a.createElement(e.Provider,null,s.a.createElement(b,null),s.a.createElement(h,null),s.a.createElement(y,{vector:new l.Vector2(j.x,j.y)}),s.a.createElement(v,null),s.a.createElement(o.Emitter,{emissionDelay:i},(function(){var e=r[0]+Math.random()*r[1],n=w(a).add(new l.Vector2(t.current.offsetWidth/2,t.current.offsetHeight/2)).subScalar(e/2);return s.a.createElement(o.Entity,null,s.a.createElement(m,null),s.a.createElement(f,{timeleft:g[0]+Math.random()*g[1]}),s.a.createElement(d,{location:n}),s.a.createElement(p,{amount:w(O)}),s.a.createElement(o.DOMView,null,s.a.createElement("img",{style:{position:"absolute",left:n.x,top:n.y,width:e,height:e},alt:"smiley face",src:"https://i.imgur.com/kFjaH5l.png"})))}))))}},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),a=n(203),i=n(162),o=n(298),c=n(299),u=n(300),s=n(192),l=n(0),m=n.n(l),f=function(e){var t=Object(i.useECS)();Object(i.useAnimationFrame)(t.update);var n=Object(o.a)("/models/plane1.gltf").nodes.Regular_Plane.geometry;return m.a.createElement(s.a,null,m.a.createElement(l.Suspense,{fallback:m.a.createElement(c.c,null)},m.a.createElement(t.Provider,null,m.a.createElement("fog",{attach:"fog",args:["black",25,250]}),m.a.createElement("ambientLight",{intensity:.3}),m.a.createElement("directionalLight",{color:"red",intensity:3}),m.a.createElement(u.a,Object(r.a)({enablePan:!0,enableRotate:!0,enableZoom:!0,minDistance:80,maxDistance:200,maxPolarAngle:1.5},e.cameraProps)),m.a.createElement(a.a,{render:function(){return m.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:n},m.a.createElement("meshNormalMaterial",null))}}))))};o.a.preload("/models/plane1.gltf")}}]);