(this.webpackJsonpmonster=this.webpackJsonpmonster||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(14),n(3)),l=n(4),i=n(6),m=n(5),u=n(7),h=(n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:e.monster.id,src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h2",{key:e.monster.id},e.monster.name," "),r.a.createElement("h4",{key:e.monster.id},r.a.createElement("strong",null,"email: "),e.monster.email," "))}),d=(n(16),function(e){return r.a.createElement("input",{type:"text",placeholder:e.placeholder,onChange:e.handleChange,className:"search"})}),f=(n(17),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],searchField:""},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,a=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{placeholder:"search monster",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement("div",{className:"card-list"},o.map((function(e){return r.a.createElement(h,{monster:e})}))))}}]),t}(a.Component));var p=function(){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("h1",{className:"heading"},"Monster Roledex")," "),r.a.createElement("i",{className:"heading-title"},"Created by Khizer"),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.bb57bd87.chunk.js.map