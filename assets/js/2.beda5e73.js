(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=t.DocsPreferredVersionContextProvider=t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=t.usePluralForm=t.useTitleFormatter=t.isSamePath=t.isDocsPluginEnabled=t.DEFAULT_SEARCH_TAG=t.docVersionSearchTag=t.parseCodeBlockTitle=t.useAlternatePageUtils=t.listStorageKeys=t.createStorageSlot=t.useThemeConfig=void 0;var n=r(237);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return n.useThemeConfig}});var o=r(238);Object.defineProperty(t,"createStorageSlot",{enumerable:!0,get:function(){return o.createStorageSlot}}),Object.defineProperty(t,"listStorageKeys",{enumerable:!0,get:function(){return o.listStorageKeys}});var i=r(244);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return i.useAlternatePageUtils}});var u=r(245);Object.defineProperty(t,"parseCodeBlockTitle",{enumerable:!0,get:function(){return u.parseCodeBlockTitle}});var a=r(246);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var s=r(239);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return s.isDocsPluginEnabled}});var c=r(249);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var l=r(250);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return l.useTitleFormatter}});var f=r(251);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return f.usePluralForm}});var d=r(252);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return d.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return d.useDocsPreferredVersionByPluginId}});var v=r(240);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return v.DocsPreferredVersionContextProvider}});var g=r(255);Object.defineProperty(t,"ThemeClassNames",{enumerable:!0,get:function(){return g.ThemeClassNames}})},169:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},180:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return f}));var n=r(0),o=r.n(n),i=/{\w+}/g;function u(e,t){var r=[],n=e.replace(i,(function(e){var n=e.substr(1,e.length-2),i=null==t?void 0:t[n];if(void 0!==i){var u=o.a.isValidElement(i)?i:String(i);return r.push(u),"{}"}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split("{}").reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):n.split("{}").reduce((function(e,t,n){return[].concat(e,[o.a.createElement(o.a.Fragment,{key:n},t,r[n])])}),[])}function a(e){return u(e.children,e.values)}var s=r(29);function c(e){var t,r=e.id,n=e.message;return null!==(t=s[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return u(null!==(r=c({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,n=e.id,i=e.values,u=null!==(t=c({message:r,id:n}))&&void 0!==t?t:r;return o.a.createElement(a,{values:i},u)}},183:function(e,t,r){"use strict";var n=r(7),o=r(0),i=r.n(o),u=r(11),a=r(219),s=r(8),c=Object(o.createContext)({collectLink:function(){}}),l=r(190);t.a=function(e){var t,r,f,d=e.isNavLink,v=e.to,g=e.href,m=e.activeClassName,p=e.isActive,P=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,h=void 0===b||b,D=Object(n.a)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,A=Object(o.useContext)(c),V=v||g,w=Object(a.a)(V),_=null==V?void 0:V.replace("pathname://",""),C=void 0!==_?(r=_,h&&function(e){return e.startsWith("/")}(r)?y(r):r):void 0,O=Object(o.useRef)(!1),j=d?u.e:u.c,E=s.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!E&&w&&null!=C&&window.docusaurus.prefetch(C),function(){E&&f&&f.disconnect()}}),[C,E,w]);var S=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,T=!C||!w||S;return C&&w&&!S&&!P&&A.collectLink(C),T?i.a.createElement("a",Object.assign({href:C},V&&!w&&{target:"_blank",rel:"noopener noreferrer"},D)):i.a.createElement(j,Object.assign({},D,{onMouseEnter:function(){O.current||null==C||(window.docusaurus.preload(C),O.current=!0)},innerRef:function(e){var t,r;E&&e&&w&&(t=e,r=function(){null!=C&&window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:C||""},d&&{isActive:p,activeClassName:m}))}},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(23),o=r(247),i=r(248);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")};t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),o=n.useLocation().pathname;return i.getActivePlugin(r,o,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),o=n.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:i.getActiveVersion(r.pluginData,o)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return i.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getActiveVersion(r,o)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getActiveDocContext(r,o)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),o=n.useLocation().pathname;return i.getDocVersionSuggestions(r,o)}},190:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(17),o=r(219);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,a=void 0!==u&&u,s=i.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return c?e+l:l}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},199:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(0),o=r.n(n),i=r(25),u=r(162),a=r(190);function s(e){var t=e.title,r=e.description,n=e.keywords,s=e.image,c=Object(u.useThemeConfig)().image,l=Object(u.useTitleFormatter)(t),f=Object(a.a)(s||c,{absolute:!0});return o.a.createElement(i.a,null,o.a.createElement("title",null,l),o.a.createElement("meta",{property:"og:title",content:l}),r&&o.a.createElement("meta",{name:"description",content:r}),r&&o.a.createElement("meta",{property:"og:description",content:r}),n&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),f&&o.a.createElement("meta",{property:"og:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:image",content:f}),f&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},219:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var n=r(192).__importDefault(r(17));t.useThemeConfig=function(){return n.default().siteConfig.themeConfig}},238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.listStorageKeys=t.createStorageSlot=void 0;function n(e){if(void 0===e&&(e="localStorage"),"undefined"==typeof window)throw new Error("Browser storage is not available on NodeJS / Docusaurus SSR process");if("none"===e)return null;try{return window[e]}catch(r){return t=r,o||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an Iframe, in an Incognito browser session, or using too strict browser privacy settings.",t),o=!0),null}var t}var o=!1;var i={get:function(){return null},set:function(){},del:function(){}};t.createStorageSlot=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error("Illegal storage API usage for storage key="+e+".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.")}return{get:t,set:t,del:t}}(e);var r=n(null==t?void 0:t.persistence);return null===r?i:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}},t.listStorageKeys=function(e){void 0===e&&(e="localStorage");var t=n(e);if(!t)return[];for(var r=[],o=0;o<t.length;o+=1){var i=t.key(o);null!==i&&r.push(i)}return r}},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var n=r(188);t.isDocsPluginEnabled=!!n.useAllDocsData},240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var n=r(192),o=n.__importStar(r(0)),i=r(237),u=r(239),a=r(188),s=n.__importDefault(r(253));function c(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=s.default.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(s.default.clear(e,r),{preferredVersionName:null})}(e)})),o}function l(){var e=a.useAllDocsData(),t=i.useThemeConfig().docs.versionPersistence,r=o.useMemo((function(){return Object.keys(e)}),[e]),n=o.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),u=n[0],l=n[1];return o.useEffect((function(){l(c({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[u,o.useMemo((function(){return{savePreferredVersion:function(e,r){s.default.save(e,t,r),l((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[l])]}var f=o.createContext(null);function d(e){var t=e.children,r=l();return o.default.createElement(f.Provider,{value:r},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return u.isDocsPluginEnabled?o.default.createElement(d,null,t):o.default.createElement(o.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=o.useContext(f);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},244:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;var n=r(192).__importDefault(r(17)),o=r(23);t.useAlternatePageUtils=function(){var e=n.default(),t=e.siteConfig,r=t.baseUrl,i=t.url,u=e.i18n,a=u.defaultLocale,s=u.currentLocale,c=o.useLocation().pathname,l=s===a?r:r.replace("/"+s+"/","/"),f=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?i:"")+function(e){return e===a?""+l:""+l+e+"/"}(t)+f}}}},245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseCodeBlockTitle=void 0;var n=/title=(["'])(.*?)\1/;t.parseCodeBlockTitle=function(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(n))||void 0===t?void 0:t[2])&&void 0!==r?r:""}},246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},247:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o})),r.d(t,"useAllPluginInstancesData",(function(){return i})),r.d(t,"usePluginData",(function(){return u}));var n=r(17);function o(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function u(e,t){void 0===t&&(t="default");var r=i(e)[t];if(!r)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return r}},248:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(23);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&r.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,i,u=t.getActiveVersion(e,r),a=null==u?void 0:u.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),i=o.activeVersion!==n;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:i?n:void 0}}},249:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0;t.isSamePath=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)}},250:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var n=r(192).__importDefault(r(17));t.useTitleFormatter=function(e){var t=n.default().siteConfig,r=void 0===t?{}:t,o=r.title,i=r.titleDelimiter,u=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+u+" "+o:o}},251:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;var n=r(192),o=r(0),i=n.__importDefault(r(17)),u=["zero","one","two","few","many","other"];function a(e){return u.filter((function(t){return e.includes(t)}))}var s={locale:"en",pluralForms:a(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=i.default().i18n.currentLocale;return o.useMemo((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),s;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:a(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error("Failed to use Intl.PluralRules for locale="+e+".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n"),s}var t,r}),[e])}t.usePluralForm=function(){var e=c();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),i=r.pluralForms.indexOf(o);return n[Math.min(i,n.length-1)]}(r,t,e)}}}},252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var n=r(0),o=r(240),i=r(188),u=r(254);t.useDocsPreferredVersion=function(e){void 0===e&&(e=u.DEFAULT_PLUGIN_ID);var t=i.useDocsData(e),r=o.useDocsPreferredVersionContext(),a=r[0],s=r[1],c=a[e].preferredVersionName;return{preferredVersion:c?t.versions.find((function(e){return e.name===c})):null,savePreferredVersionName:n.useCallback((function(t){s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){var e=i.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}},253:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(238),o=function(e){return"docs-preferred-version-"+e},i={save:function(e,t,r){n.createStorageSlot(o(e),{persistence:t}).set(r)},read:function(e,t){return n.createStorageSlot(o(e),{persistence:t}).get()},clear:function(e,t){n.createStorageSlot(o(e),{persistence:t}).del()}};t.default=i},254:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_PLUGIN_ID",(function(){return n}));var n="default"},255:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeClassNames=void 0,t.ThemeClassNames={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}}}]);