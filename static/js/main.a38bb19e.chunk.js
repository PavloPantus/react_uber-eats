(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},158:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),o=t(23),s=t(19),i=(t(105),t(11)),u=t(20),m=t(90),f=t(5),d=Object(f.a)(function(e){return e.error},function(e){return e}),_=function(e){return{type:"SET_RESTAURANTS_ERROR",payload:e}},E=Object(f.a)(function(e){return e.isLoading},function(e){return e}),g=Object(f.a)(function(e){return e.restaurantsListData},function(e){if(!e)return[];var a=e.feedItems,t=e.storesMap;return a.map(function(e){var a=e.uuid;return t[a]})}),p=Object(f.a)(function(e){return e.searchAddress},function(e){return e}),v=Object(f.a)(function(e){return e.chosenTime},function(e){return e}),h=Object(f.a)(function(e){return e.searchQuery},function(e){return e}),N=t(68),b=Object(f.a)(function(e){return e.restaurantData},function(e){return e||null}),S=Object(f.a)(function(e){return e.restaurantData},function(e){return e?e.sections.map(function(a){return Object(N.a)({},e.sectionsMap[a],{itemUuids:e.sectionsMap[a].itemUuids.map(function(a){return Object(N.a)({},e.entitiesMap[a],{currencyCode:e.currencyCode})})})}):[]}),y=Object(u.c)({restaurantsListData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SAVE_RESTAURANTS":return a.payload;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SET_IS_LOADING":return!0;case"SET_IS_LOADED":return!1;default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_RESTAURANTS_ERROR":return a.payload;default:return e}},searchAddress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SEARCHADDRESS":return a.payload;default:return e}},chosenTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CHOSEN_TIME":return a.payload;default:return e}},searchQuery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SEARCH_QUERY":return a.payload;default:return e}},restaurantData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SAVE_RESTAURANT_DATA":return a.payload;default:return e}}}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,A=[m.a],j=Object(u.e)(y,O(u.a.apply(void 0,A))),R=(t(106),function(e){var a=e.imageUrl,t=e.title,n=e.categories,c=e.etaRange,l=e.uuid;return r.a.createElement(o.b,{to:"/restaurantId/".concat(l),className:"restaurant-card"},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},c))});R.defaultProps={categories:[],etaRange:""};t(110),t(111);var k=function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},T=(t(112),function(e){var a=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",{className:"error__text"},"Error occurred... it's comething like - ".concat(a)),r.a.createElement("a",{href:"/",className:"error__link"},"Go to HOME"))});T.defaultProps={message:"Sorry, something went wrong"};var w=function(e){var a=e.restaurantsData,t=e.loadRESTAURANTS,c=e.error,l=e.isLoading,o=(e.address,e.time,e.search);Object(n.useEffect)(function(){t()},[]);var s=Object(n.useMemo)(function(){return a.filter(function(e){var a=o.trim().toLowerCase(),t=e.title,n=e.categories,r=e.etaRange,c=e.slug;return!!(t+n.join(" ")+r+c).toLowerCase().includes(a)})},[o,a]);return l?r.a.createElement(k,null):c?r.a.createElement(T,{message:c}):r.a.createElement("div",{className:"restaurants-list-page"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"restaurants-list"},s.map(function(e){var a=e.uuid,t=e.title,n=e.heroImageUrl,c=e.categories,l=e.etaRange;return r.a.createElement(R,{key:a,uuid:a,title:t,imageUrl:n,categories:c,etaRange:l?l.text:"20 - 30 min"})}))))};w.defaultProps={restaurantsData:[],error:null,isLoading:!1};var U={loadRESTAURANTS:function(){return function(e){e({type:"SET_IS_LOADING"}),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:"SAVE_RESTAURANTS",payload:e}}(t))}).catch(function(a){return e(_(a.message))}).finally(function(){return e({type:"SET_IS_LOADED"})})}}},D=Object(s.b)(function(e){return{restaurantsData:g(e),error:d(e),isLoading:E(e),address:p(e),time:v(e),search:h(e)}},U)(w),C=t(35),I=(t(113),t(73)),L=t(46),M=t(4),P=t.n(M),x=(t(158),r.a.memo(function(e){var a=e.iconUrl,t=e.value,c=e.onChange,l=e.type,o=e.placeholder,s=e.name,i=e.className,u=Object(n.useState)(!1),m=Object(C.a)(u,2),f=m[0],d=m[1],_=P()("control",Object(L.a)({"control--focused":f},i,!!i)),E=Object(n.useRef)();return r.a.createElement("div",{className:_,onClick:function(){return E.current.focus()},role:"presentation"},!!a&&r.a.createElement("img",{src:a,alt:o,className:"control__icon"}),r.a.createElement("input",{ref:E,onFocus:function(){d(!0)},onBlur:function(){d(!1)},type:l,value:t,onChange:c,name:s,placeholder:o,className:"control__input"}))}));x.defaultProps={iconUrl:"",type:"text",placeholder:"",className:""};t(159);var H=Object(s.b)(function(e){return{address:p(e),time:v(e),search:h(e)}},function(e){return{setAdress:function(a){e({type:"SET_SEARCHADDRESS",payload:a})},setTime:function(a){e({type:"SET_CHOSEN_TIME",payload:a})},setSearch:function(a){e({type:"SET_SEARCH_QUERY",payload:a})}}})(function(e){var a=e.address,t=e.setAdress,c=e.time,l=e.setTime,s=e.search,i=e.setSearch,u=Object(n.useState)(!1),m=Object(C.a)(u,2),f=m[0],d=m[1],_=Object(n.useState)(!1),E=Object(C.a)(_,2),g=E[0],p=E[1],v=Object(n.useCallback)(function(e){var a=e.target;t(a.value)},[]),h=Object(n.useCallback)(function(e){l(e)},[]),N=Object(n.useCallback)(function(e){var a=e.target;i(a.value)},[]);return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header-inner"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:"./react_uber-eats/images/logo.svg",alt:"Uber Eats"})),r.a.createElement(x,{name:"address",value:a,onChange:v,placeholder:"Address",iconUrl:"./react_uber-eats/images/place.svg",className:"header__address"}),r.a.createElement("div",{className:"header__time"},r.a.createElement(I.a,{showSecond:!1,placeholder:"ASAP",onChange:h,value:c})),r.a.createElement(x,{name:"search",value:s,onChange:N,placeholder:"Search",iconUrl:"./react_uber-eats/images/search.svg",className:"header__search"}),r.a.createElement("div",{className:"header__mobile-controls"},r.a.createElement("button",{onClick:function(){d(!f),p(!1)},className:"header__mobile-location-toggler",type:"button"},r.a.createElement("img",{src:"./react_uber-eats/images/location-icon.png",alt:"location-icon"})),r.a.createElement("button",{onClick:function(){p(!g),d(!1)},className:"header__mobile-search-toggler",type:"button"},r.a.createElement("img",{src:"./react_uber-eats/images/search-icon.png",alt:"location-icon"}))),r.a.createElement("a",{href:"/sign-in",className:"header__sign-in"},"Sign In")),(g||f)&&r.a.createElement("div",{className:"mobile-search-section"},f&&r.a.createElement("div",{className:"mobile-location-container"},r.a.createElement("div",{className:"mobile-search-section__time--mobile"},r.a.createElement(I.a,{showSecond:!1,placeholder:"ASAP",onChange:h,value:c})),r.a.createElement(x,{name:"address",value:a,onChange:v,placeholder:"Address",iconUrl:"./react_uber-eats/images/place.svg",className:"mobile-search-section__address--mobile"})),g&&r.a.createElement(x,{name:"search",value:s,onChange:N,placeholder:"Search",iconUrl:"./react_uber-eats/images/search.svg",className:"mobile-search-section__search--mobile"}),r.a.createElement("button",{type:"button",onClick:function(){d(!1),p(!1)},className:"mobile-search-section__close-button"}))))}),G=(t(160),t(161),function(e){var a=e.name,t=e.value,c=e.onSelect,l=e.options,o=e.iconUrl,s=Object(n.useRef)(),i=function(){s.current.focus()};return r.a.createElement("div",{onKeyDown:i,tabIndex:"0",role:"searchbox",onClick:i,className:"select"},r.a.createElement("select",{ref:s,name:a,defaultValue:t,onChange:c,className:"select__input"},l.map(function(e){var a=e.value,t=e.label;return r.a.createElement("option",{key:a,className:"select__option",value:a},t)})),!!o&&r.a.createElement("img",{className:"select__icon",src:o,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./react_uber-eats/images/arrow-back.png",alt:"arrow down"}))});G.defaultProps={options:[],iconUrl:"",onSelect:function(){}};var V=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("a",{href:"#",className:"footer__logo"},r.a.createElement("img",{src:"./react_uber-eats/images/logo-white.png",alt:"Uber Eats"})),r.a.createElement("div",{className:"footer__select-language"},r.a.createElement(G,{name:"language",options:[{value:"en",label:"English"},{value:"ua",label:"Ukrainian"}],value:"en",iconUrl:"./react_uber-eats/images/world.png"}))),r.a.createElement("div",{className:"footer__mobile-container"},r.a.createElement("a",{href:"#",className:"footer__app-store"},r.a.createElement("img",{src:"./react_uber-eats/images/app-store-logo.png",alt:"App store"})),r.a.createElement("a",{href:"#",className:"footer__google-play"},r.a.createElement("img",{src:"./react_uber-eats/images/google-play-logo.png",alt:"Google play"})))),r.a.createElement("div",{className:"footer__links-container"},r.a.createElement("div",{className:"footer__links"},r.a.createElement("a",{className:"footer__link",href:"#"},"About UberEats"),r.a.createElement("a",{className:"footer__link",href:"#"},"Read our blog"),r.a.createElement("a",{className:"footer__link",href:"#"},"Sign up to deliver"),r.a.createElement("a",{className:"footer__link",href:"#"},"Add your restaurant")),r.a.createElement("div",{className:"footer__links"},r.a.createElement("a",{className:"footer__link",href:"#"},"Get help"),r.a.createElement("a",{className:"footer__link",href:"#"},"Read FAQs"),r.a.createElement("a",{className:"footer__link",href:"#"},"View all cities")))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__info"},r.a.createElement("a",{className:"footer__info-link",href:"#"},"Privacy policy"),r.a.createElement("a",{className:"footer__info-link",href:"#"},"Terms of  use"),r.a.createElement("a",{className:"footer__info-link",href:"#"},"Pricing")),r.a.createElement("div",{className:"footer__social"},r.a.createElement("a",{href:"#",className:"footer__social-link"},r.a.createElement("img",{src:"./react_uber-eats/images/facebook-logo.png",alt:"uber facebook"})),r.a.createElement("a",{href:"#",className:"footer__social-link"},r.a.createElement("img",{src:"./react_uber-eats/images/twitter-logo.png",alt:"uber twitter"})),r.a.createElement("a",{href:"#",className:"footer__social-link"},r.a.createElement("img",{src:"./react_uber-eats/images/instagram-logo.png",alt:"uber instagram"}))))))},Q=(t(162),function(){return Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),null}),B=(t(163),t(66)),F=t.n(B),Y=t(72),J=(t(170),t(171),function(e){var a=e.productInfo;return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("h3",{className:"product__name"},a.title),r.a.createElement("p",{className:"product__description"},a.description),r.a.createElement("p",{className:"product__price"},{GBP:"\xa3"}[a.currencyCode],a.price)),r.a.createElement("div",{className:"product__image-container",style:{backgroundImage:"url(".concat(a.imageUrl,")")}}))}),X=function(e){var a=e.categorySection;return r.a.createElement("div",{className:"menu-category"},r.a.createElement("h2",{className:"menu-category__title"},a.title),r.a.createElement("ul",{className:"menu-category__list"},a.itemUuids.map(function(e,a){var t="".concat(a).concat(e.title);return r.a.createElement("li",{key:t},r.a.createElement(J,{productInfo:e}))})))},z=function(e){var a=e.restaurantMenuSectionsInfo,t=Object(n.useMemo)(function(){var e={};return a.forEach(function(a){e[a.title.split(" ").join("-")]=r.a.createRef()}),e},[]),c=Object(n.useMemo)(function(){var e={};return a.forEach(function(a){e[a.title.split(" ").join("-")]=r.a.createRef()}),e},[]),l=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=F()(function(){Object.entries(t).forEach(function(e){var a=window.scrollY+74,t=e[1].current;t.offsetTop<=a&&t.offsetTop+t.offsetHeight>a&&(l.current.scrollLeft=c[e[0]].current.offsetLeft)})},300);return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}},[]),r.a.createElement("section",{className:"restaurant-menu"},r.a.createElement("div",{className:"content"},r.a.createElement("nav",{className:"restaurant-menu__nav"},r.a.createElement("ul",{ref:l,className:"restaurant-menu__categories-list-navigation categories-list-navigation"},a.map(function(e){return r.a.createElement("li",{ref:c[e.title.split(" ").join("-")],key:"#".concat(e.title.split(" ").join("-")),className:P()(["categories-list-navigation__item"])},r.a.createElement(Y.Link,{className:"categories-list-navigation__link",activeClass:"categories-list-navigation__link_active",spy:!0,to:"".concat(e.title.split(" ").join("-")),smooth:!0,offset:-74},e.title))}))),r.a.createElement("ul",{className:"restaurant-menu__categories-list categories-list"},a.map(function(e,a,n){return r.a.createElement(Y.Element,{key:"".concat(e.title.split(" ").join("-"),"+\n                      categories-list__category"),name:e.title.split(" ").join("-")},r.a.createElement("li",{ref:t[e.title.split(" ").join("-")],id:e.title.split(" ").join("-"),className:"categories-list__category"},r.a.createElement(X,{categorySection:e})))}))))},K=function(e){var a=e.restaurantData,t=e.loadRestaurantData,c=e.isLoading,l=e.restaurantMenuSectionsInfo,o=Object(i.f)().params.restaurantAddress;return Object(n.useEffect)(function(){t(o)},[]),c?r.a.createElement(k,null):a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement("div",{className:"restaurant__page"},r.a.createElement("div",{className:"restaurant__background-container",style:{backgroundImage:"url(".concat(a.heroImageUrls[5]?a.heroImageUrls[5].url:"https://www.europarl.europa.eu/news/img/mediasize_video.png",")")}},r.a.createElement("div",{className:"restaurant__info-container"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"restaurant__info restaurant-info"},r.a.createElement("h1",{className:"restaurant-info__title"},a.title),r.a.createElement("div",{className:"restaurant__categories"},a.categories.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant__eta-range"},a.etaRange?a.etaRange:"20 - 30 min"),r.a.createElement("div",{className:"restaurant__address"},a.location.address)))))),r.a.createElement("div",{className:"restaurant__page-container"},r.a.createElement(z,{restaurantMenuSectionsInfo:l}))):r.a.createElement(k,null)};K.defaultProps={restaurantData:null};var q={loadRestaurantData:function(e){return function(a){a({type:"SET_IS_LOADING"}),fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants/".concat(e)).then(function(e){return e.json()}).then(function(e){var t=e.data;a(function(e){return{type:"SAVE_RESTAURANT_DATA",payload:e}}(t))}).catch(function(e){return a(_(e.message))}).finally(function(){return a({type:"SET_IS_LOADED"})})}}},W=Object(s.b)(function(e){return{restaurantData:b(e),isLoading:E(e),restaurantMenuSectionsInfo:S(e)}},q)(K),Z=function(){return r.a.createElement(s.a,{store:j},r.a.createElement(H,null),r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:D}),r.a.createElement(i.a,{exact:!0,path:"/restaurantId/:restaurantAddress",component:W}))),r.a.createElement(V,null))};l.a.render(r.a.createElement(o.a,null,r.a.createElement(Z,null)),document.getElementById("root"))},96:function(e,a,t){e.exports=t(172)}},[[96,1,2]]]);
//# sourceMappingURL=main.a38bb19e.chunk.js.map