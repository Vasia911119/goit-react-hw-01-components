(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".txt","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);var c=t(3),n=t.n(c),s=t(5),i=t.n(s),r=(t(13),t(14),t(0));var d=function(e){var a=e.username,t=e.tag,c=e.location,n=e.followers,s=void 0===n?0:n,i=e.views,d=void 0===i?0:i,l=e.likes,o=void 0===l?0:l;return Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/1077/1077012.png",alt:a,className:"avatar",width:"150"}),Object(r.jsx)("p",{className:"name",children:a}),Object(r.jsx)("p",{className:"tag",children:t}),Object(r.jsx)("p",{className:"location",children:c})]}),Object(r.jsxs)("ul",{className:"stats",children:[Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Followers"}),Object(r.jsx)("span",{className:"quantity",children:s})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Views"}),Object(r.jsx)("span",{className:"quantity",children:d})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"label",children:"Likes"}),Object(r.jsx)("span",{className:"quantity",children:o})]})]})]})},l=t(2);var o=function(e){var a=e.title,t=e.stats;return Object(r.jsxs)("section",{className:"statistics",children:[Object(r.jsx)("h2",{className:"title",children:a&&a}),Object(r.jsx)("ul",{className:"stat-list",children:t.map((function(e){return Object(r.jsxs)("li",{className:"item",style:{backgroundColor:"#"+(Math.random().toString(16)+"000000").substring(2,8)},children:[Object(r.jsx)("span",{className:"label",children:e.label}),Object(r.jsxs)("span",{className:"percentage",children:[e.percentage,"%"]})]},e.id)}))})]})},b=t(6),p=t(1),u=t.n(p);function m(e){var a=e.friends;return Object(r.jsx)("ul",{className:"friend-list",children:a.map((function(e){var a=e.id,t=e.isOnline,c=e.name;return Object(r.jsxs)("li",{className:t?"item online":"item",children:[Object(r.jsx)("span",{className:t?"status online":"status"}),Object(r.jsx)("img",{className:"avatar",src:"https://cdn-icons-png.flaticon.com/512/1077/1077012.png",alt:"User avatar",width:"48"}),Object(r.jsx)("p",{className:"name",children:c})]},a)}))})}m.propsTypes={data:u.a.arrayOf(u.a.shape({id:u.a.number.isRequired,avatar:u.a.string,name:u.a.string.isRequired,isOnline:u.a.bool.isRequired})).isRequired};var j=m,f=t(7);function h(e){var a=e.items;return Object(r.jsxs)("table",{className:"transaction-history",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,c=e.amount,n=e.currency;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:n})]},a)}))})]})}h.propsTypes={data:u.a.arrayOf(u.a.shape({id:u.a.string.isRequired,type:u.a.string.isRequired,amount:u.a.string.isRequired,currency:u.a.string.isRequired}).isRequired).isRequired};var y=h,O=t(8);var x=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{username:l.username,avatar:l.avatar,tag:l.tag,location:l.location,followers:l.stats.followers,views:l.stats.views,likes:l.stats.likes}),Object(r.jsx)(o,{title:"Upload stats",stats:b}),Object(r.jsx)(j,{friends:f}),Object(r.jsx)(y,{items:O})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.b9285948.chunk.js.map