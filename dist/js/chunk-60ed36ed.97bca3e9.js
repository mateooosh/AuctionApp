(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60ed36ed"],{"136b":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n={class:"konto"};function o(t,e,a,o,i,r){var u=Object(c["y"])("Navbar"),s=Object(c["y"])("WonAuctions"),b=Object(c["y"])("Footer");return Object(c["q"])(),Object(c["d"])("div",n,[Object(c["h"])(u),Object(c["h"])(s),Object(c["h"])(b)])}var i=a("d178"),r=Object(c["I"])("data-v-ef1b10ba");Object(c["t"])("data-v-ef1b10ba");var u={class:"won"},s=Object(c["h"])("h1",null,"Twoje wygrane aukcje",-1),b={key:0,class:"won__p"},d={key:1,class:"lds-dual-ring"},l={key:2,class:"won__list"};Object(c["r"])();var j=r((function(t,e,a,n,o,i){var r=Object(c["y"])("Card");return Object(c["q"])(),Object(c["d"])("div",u,[s,0==o.auctions.length?(Object(c["q"])(),Object(c["d"])("p",b,"Brak wygranych aukcji")):Object(c["e"])("",!0),o.gotData?Object(c["e"])("",!0):(Object(c["q"])(),Object(c["d"])("div",d)),o.gotData?(Object(c["q"])(),Object(c["d"])("div",l,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(o.auctions,(function(t,e){return Object(c["q"])(),Object(c["d"])(r,{key:e,auctionId:t.auctionId,title:t.auctiontitle,location:t.location,category:t.category,province:t.province,actualPrice:t.maxBidPrice,instantPrice:t.buyNowPrice,url:t.photo,favorite:!1,auctionState:t.auctionState,firstname:t.firstname,phone:t.phoneNumber,email:t.email,own:"false"},null,8,["auctionId","title","location","category","province","actualPrice","instantPrice","url","auctionState","firstname","phone","email"])})),128))])):Object(c["e"])("",!0)])})),O=(a("d3b7"),a("5502")),h=a("ae8d"),f={name:"MyAuctions",store:O["a"],components:{Card:h["a"]},data:function(){return{auctions:[],gotData:!1}},mounted:function(){var t=this,e="http://localhost:8080/api/auctions/".concat(this.$store.state.userId,"/win");fetch(e).then((function(t){if(t.ok)return t.json();throw new Error(t.status)})).then((function(e){console.log("Sukces. Odebrane dane ",e),t.auctions=e,t.gotData=!0})).catch((function(){console.log("Coś poszło nie tak z requestem:",e),alert("Nie udało się pobrać Twoich aukcji!")}))}};a("b83c");f.render=j,f.__scopeId="data-v-ef1b10ba";var p=f,w=a("fd2d"),v={name:"WygraneLicytacje",components:{Navbar:i["a"],WonAuctions:p,Footer:w["a"]},mounted:function(){this.$store.state.logged?(document.title="Wygrane Licytacje - wdmj.pl",window.scrollTo(0,0)):this.$router.push("/")}};v.render=o;e["default"]=v},6626:function(t,e,a){},b83c:function(t,e,a){"use strict";a("6626")}}]);
//# sourceMappingURL=chunk-60ed36ed.97bca3e9.js.map