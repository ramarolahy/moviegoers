(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),i=(a(31),a(8)),l=a(11),m=a(14),s=a(5),u=a(6),g=a(9),v=a(7),h=a(10),p="ed937d243177d63a4572d52a02afaa8b",d="https://api.themoviedb.org/3/",f="https://image.tmdb.org/t/p/",_=(a(32),a(33),function(e){var t=e.text,a=e.onClick;return c.a.createElement("div",{className:"mg-loadmorebtn",onClick:a},c.a.createElement("p",null,t))}),E=(a(34),function(e){var t=e.header,a=e.loading,n=e.children,o=e.loadMore,r=e.isMovies;return c.a.createElement("div",{className:r?"mg-grid__movies":"mg-grid__actors"},r&&t&&!a?c.a.createElement("h1",{className:"mg-header__movies"},t):c.a.createElement("h3",null,t.toUpperCase()),c.a.createElement("div",{className:r?"mg-grid__wrap--movies":"mg-grid__wrap--actors"},c.a.createElement("div",{className:r?"mg-grid__content--movies":"mg-grid__content--actors"},n.map(function(e,t){return c.a.createElement("div",{key:t,className:"mg-grid__element"},e)}),r?c.a.createElement(_,{text:"+",onClick:o}):null)))}),b=(a(35),function(e){var t=e.image,a=e.title,n=e.overview;return c.a.createElement("div",{className:"mg-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%),\n                      linear-gradient(to left, rgba(0,0,0,0) 45%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.85) 100%),\n                      url('".concat(t,"'), #1c1c1c")}},c.a.createElement("div",{className:"mg-heroimage__content"},c.a.createElement("div",{className:"mg-heroimage__text"},c.a.createElement("h1",null,a),c.a.createElement("p",null,n))))}),N=(a(36),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={sortTerm:"",activeTab:"popular"},a.sortBy=function(e){var t=a.props.callback;1===e.target.value?a.setState({sortTerm:"popular"},function(){t(a.state.sortTerm),a.setState({activeTab:"popular"})}):2===e.target.value?a.setState({sortTerm:"now_playing"},function(){t(a.state.sortTerm),a.setState({activeTab:"now_playing"})}):a.setState({sortTerm:"top_rated"},function(){t(a.state.sortTerm),a.setState({activeTab:"top_rated"})})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"mg-navigation__sort-menu--wrap"},c.a.createElement("ul",{className:"mg-navigation__sort-menu"},c.a.createElement("li",{className:"mg-navigation__sort-menu--item ".concat("popular"===this.state.activeTab?" active":null),onClick:this.sortBy,value:"1"},"Most Popular"),c.a.createElement("li",{className:"mg-navigation__sort-menu--item ".concat("now_playing"===this.state.activeTab?" active":null),onClick:this.sortBy,value:"2"},"Now Playing"),c.a.createElement("li",{className:"mg-navigation__sort-menu--item ".concat("top_rated"===this.state.activeTab?" active":null),onClick:this.sortBy,value:"3"},"Top Rated")))}}]),t}(n.Component)),y=(a(37),function(){return c.a.createElement("div",{className:"spinner"})}),k=(a(38),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){var t=a.props.callback;a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.state.value)},700)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.value;return c.a.createElement("div",{className:"mg-header"},c.a.createElement("div",{className:"mg-header-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"mg-logo",src:"./images/moviegoers.png",alt:"moviegoers.logo"})),c.a.createElement("input",{type:"text",className:"mg-header__input",placeholder:"Search",onChange:this.doSearch,value:e})))}}]),t}(n.Component)),S=(a(43),function(e){var t=e.image,a=e.movieId,n=e.movieName,o=e.clickable;return c.a.createElement("div",{className:"mg-moviethumb"},o?c.a.createElement(i.b,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("img",{className:"clickable",src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"".concat(n)}))}),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:null,isLoading:!1,currentPage:0,totalPages:0,searchTerm:"",sortTerm:""},a.fetchMovies=function(e){var t=a.state,n=t.movies,c=t.heroImage;t.searchTerm;fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(m.a)(n),Object(m.a)(e.results)),heroImage:c||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages})})},a.searchMovies=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(d,"movie/popular?api_key=").concat(p,"&language=en-US&page=1"):"".concat(d,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(e),a.fetchMovies(t)},a.sortMovies=function(e){a.setState({movies:[],loading:!0,sortTerm:e}),console.log(e);var t="".concat(d,"movie/").concat(e,"?api_key=").concat(p,"&language=en-US&page=1");a.state.heroImage;fetch(t).then(function(e){return e.json()}).then(function(e){a.setState({movies:Object(m.a)(e.results),heroImage:e.results[Math.floor(16*Math.random())],loading:!1,currentPage:e.page,totalPages:e.total_pages})})},a.loadMoreMovies=function(){var e=a.state,t=e.searchTerm,n=e.currentPage,c="";a.setState({loading:!1}),c=""===t?"".concat(d,"movie/popular?api_key=").concat(p,"&language=en-US&page=").concat(n+1):"".concat(d,"search/movie?api_key=").concat(p,"&language=en-US&query=").concat(t,"&page=").concat(n+1),a.fetchMovies(c)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0});var e="".concat(d,"movie/popular?api_key=").concat(p,"&language=en-US&page=1");this.fetchMovies(e)}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.heroImage,n=e.loading,o=e.searchTerm;return c.a.createElement("div",{className:"mg-home"},c.a.createElement(k,{callback:this.searchMovies}),a?c.a.createElement("div",null,c.a.createElement(b,{image:"".concat(f).concat("w1280").concat(a.backdrop_path),title:a.original_title,overview:a.overview})):null,c.a.createElement("div",{className:"mg-home__grid"},c.a.createElement(N,{callback:this.sortMovies}),c.a.createElement(E,{header:o?"Search Result":"",loading:n,loadMore:this.loadMoreMovies,isMovies:!0},t.map(function(e,t){return c.a.createElement(S,{key:t,clickable:!0,image:e.poster_path?"".concat(f).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})}))),n?c.a.createElement(y,null):null)}}]),t}(n.Component),j=a(25),O=a(24),T=(a(44),function(){return c.a.createElement("div",{className:"mg-navigation"},c.a.createElement("div",{className:"mg-navigation-content"},c.a.createElement(i.b,{to:"/"},c.a.createElement("p",{className:"mg-navigation__back"},c.a.createElement(O.a,null)," Home"))))}),M=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},I=(a(45),a(46),function(e){var t=e.actor;return c.a.createElement("div",{className:"mg-actor clearfix"},c.a.createElement("img",{src:t.profile_path?"".concat(f).concat("w154").concat(t.profile_path):"./images/no_image.jpg",alt:t.name}),c.a.createElement("div",{className:"mg-wrap__actor-info"},c.a.createElement("span",{className:"mg-actor-name"},t.name),c.a.createElement("span",{className:"mg-actor-character"},t.character)))}),C=function(e){var t=e.movie,a=e.directors,n=e.actors,o=e.time,r=e.budget,i=e.revenue;return c.a.createElement("div",{className:"mg-movieinfo",style:{background:t.backdrop_path?"url('".concat(f).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"mg-movieinfo__content"},c.a.createElement("div",{className:"mg-movieinfo__thumb"},c.a.createElement("img",{src:t.poster_path?"".concat(f).concat("w500").concat(t.poster_path):"./images/no_image.jpg",alt:"".concat(t.name)})),c.a.createElement("div",{className:"mg-movieinfo__text"},c.a.createElement("h1",null,t.title),c.a.createElement("span",{className:"mg-movieinfobar__info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(o)," "),c.a.createElement("span",{className:"mg-movieinfobar__info"},"Budget: ",M(r)," "),c.a.createElement("span",{className:"mg-movieinfobar__info"},"Revenue: ",M(i)," "),c.a.createElement("span",{className:"mg-movieinfobar__info"},"IMDB Rating: ",t.vote_average+" / 10"," "),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,t.overview),a.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"mg-director"},e.name)}),n?c.a.createElement("div",{className:"mg-movie__grid"},c.a.createElement(E,{header:"Actors"},n.map(function(e,t){return c.a.createElement(I,{key:t,actor:e})}))):null)))},P=(a(47),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchInfo=function(e){var t=a.props.match.params.movieId;fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(d,"movie/").concat(t,"/credits?api_key=").concat(p);fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e.cast);var n=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:n,loading:!1},function(){localStorage.setItem("".concat(t),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var t=JSON.parse(localStorage.getItem("".concat(e)));this.setState(Object(j.a)({},t))}else{this.setState({loading:!0});var a="".concat(d,"movie/").concat(e,"?api_key=").concat(p,"&language=en-US");this.fetchInfo(a)}}},{key:"render",value:function(){var e=this.props.location.movieName,t=this.state,a=t.movie,n=t.directors,o=t.actors,r=t.loading;return c.a.createElement("div",{className:"mg-movie"},c.a.createElement(T,{movie:e}),a?c.a.createElement("div",null,c.a.createElement(C,{movie:a,directors:n,actors:o,time:a.runtime,budget:a.budget,revenue:a.revenue})):null,o||r?null:c.a.createElement("h1",null,"No movie found"),r?c.a.createElement(y,null):null)}}]),t}(n.Component));a(48);var U=function(){return c.a.createElement(i.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:w,exact:!0}),c.a.createElement(l.a,{path:"/:movieId",component:P,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.9c050f6e.chunk.js.map