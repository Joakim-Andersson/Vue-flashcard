(function(e){function t(t){for(var n,c,l=t[0],i=t[1],s=t[2],f=0,u=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&u.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"app-body"},o={id:"flashcard-app",class:"container"},c=Object(n["f"])("h3",null,"Flashcards to teach you more about a",-1),l=Object(n["f"])("h1",null,"Vegan lifestyle",-1),i={class:"flashcard-form"},s={for:"front"},d={for:"back"},f={class:"error"},u={class:"flashcard-list"},p={key:"front",class:"card frontside"},b={key:"back",class:"card backside"},h=Object(n["f"])("footer",null,[Object(n["f"])("p",null," Thank you for investing in the future, and learning more about a climate friendly way of living. "),Object(n["f"])("p",null,[Object(n["e"])("Copyright "),Object(n["f"])("a",{href:"http://heytherejoakim.com/"},"Joakim Andersson")])],-1);function O(e,t,r,O,j,g){return Object(n["g"])(),Object(n["d"])("section",a,[Object(n["f"])("div",o,[c,l,Object(n["f"])("div",i,[Object(n["f"])("label",s,[Object(n["m"])(Object(n["f"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.newFrontText=e}),type:"text",id:"front",placeholder:"Text on the Front"},null,512),[[n["j"],j.newFrontText]])]),Object(n["f"])("label",d,[Object(n["m"])(Object(n["f"])("input",{onKeypress:t[2]||(t[2]=Object(n["n"])((function(){return g.addNewCard&&g.addNewCard.apply(g,arguments)}),["enter"])),"onUpdate:modelValue":t[3]||(t[3]=function(e){return j.newBackText=e}),type:"text",id:"back",placeholder:"Text on the Back"},null,544),[[n["j"],j.newBackText]])]),Object(n["f"])("button",{onClick:t[4]||(t[4]=function(){return g.addNewCard&&g.addNewCard.apply(g,arguments)})},"Add New Card"),Object(n["m"])(Object(n["f"])("span",f,"Oops! Flashcards need both front and back.",512),[[n["k"],j.error]])]),Object(n["f"])("ul",u,[(Object(n["g"])(!0),Object(n["d"])(n["a"],null,Object(n["h"])(j.cards,(function(e,t){return Object(n["g"])(),Object(n["d"])("li",{key:e.flipped,onClick:function(t){return g.toggleCard(e)}},[Object(n["f"])(n["b"],{name:"flip"},{default:Object(n["l"])((function(){return[e.flipped?(Object(n["g"])(),Object(n["d"])("p",b,[Object(n["e"])(Object(n["i"])(e.back)+" ",1),Object(n["f"])("span",{onClick:function(e){return g.deleteCard(t)},class:"delete-card"},"X",8,["onClick"])])):(Object(n["g"])(),Object(n["d"])("p",p,[Object(n["e"])(Object(n["i"])(e.front)+" ",1),Object(n["f"])("span",{onClick:function(e){return g.deleteCard(t)},class:"delete-card"},"X",8,["onClick"])]))]})),_:2},1024)],8,["onClick"])})),128))])]),h])}r("a434");var j=[{front:"How many Litres of water does it take to make a single meat-burger?",back:"2393 liters. (Vegan burgers use 75 percent less.)",flipped:!1},{front:"What date is the World Vegan Day?",back:"1. November.",flipped:!1},{front:"How many animals on average does a Vegan save per year?",back:"On average 100+ animals.",flipped:!1},{front:"True or false: Honey is vegan. ",back:"False.",flipped:!1},{front:"What year was the word Vegan invented?",back:"1944.",flipped:!1},{front:"How many animals are slaughtered for their meat per hour in the US?",back:"Arund 500,000 animals.",flipped:!1},{front:"True or false: World's strongest man is vegan. ",back:"True. Patrik Baboumian has been vegan since 2011.",flipped:!1},{front:"True or false: Omega3 is only obtained from fish. ",back:"False. Vegans get their Omega3 from Seeds, Nuts, Seaweed and algae.",flipped:!1}],g={el:"#flashcard-app",data:function(){return{cards:j,newFrontText:"",newBackText:"",error:!1}},mounted:function(){if(localStorage.getItem("cards"))try{this.cards=JSON.parse(localStorage.getItem("cards"))}catch(e){localStorage.removeItem("cards")}},methods:{toggleCard:function(e){e.flipped=!e.flipped},addNewCard:function(){this.newFrontText&&this.newBackText?(this.cards.push({front:this.newFrontText,back:this.newBackText,flipped:!1}),this.saveCards(this.cards),this.newFrontText="",this.newBackText="",this.error=!1):this.error=!0},deleteCard:function(e){this.cards.splice(e,1),this.saveCards(j)},saveCards:function(){var e=JSON.stringify(this.cards);localStorage.setItem("cards",e)}}};r("e5c7");g.render=O;var m=g;Object(n["c"])(m).mount("#app")},"8cf6":function(e,t,r){},e5c7:function(e,t,r){"use strict";r("8cf6")}});
//# sourceMappingURL=app.716c2326.js.map