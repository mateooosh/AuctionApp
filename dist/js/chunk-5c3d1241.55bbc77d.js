(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c3d1241"],{"41b2":function(e,t,o){},"935b":function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n={class:"zarejestruj"};function r(e,t,o,r,i,s){var c=Object(a["v"])("Navbar"),l=Object(a["v"])("Zarejestruj"),p=Object(a["v"])("Footer");return Object(a["p"])(),Object(a["c"])("div",n,[Object(a["g"])(c),Object(a["g"])(l),Object(a["g"])(p)])}var i=o("d178"),s=Object(a["F"])("data-v-13c3b2b3");Object(a["s"])("data-v-13c3b2b3");var c={class:"register"},l=Object(a["g"])("h1",null,"Zarejestruj się",-1),p=Object(a["f"])("Adres e-mail"),u=Object(a["g"])("span",{style:{color:"red"}},"*",-1),b=Object(a["f"])("Hasło"),d=Object(a["g"])("span",{style:{color:"red"}},"*",-1),m=Object(a["f"])("Imię"),j=Object(a["g"])("span",{style:{color:"red"}},"*",-1),g=Object(a["f"])("Nazwisko"),f=Object(a["g"])("span",{style:{color:"red"}},"*",-1),v=Object(a["f"])("Lokalizacja"),h=Object(a["g"])("span",{style:{color:"red"}},"*",-1),O=Object(a["g"])("label",{class:"register__province__label",for:"province"},[Object(a["f"])("Województwo"),Object(a["g"])("span",{style:{color:"red"}},"*")],-1),_=Object(a["e"])('<option value="" disabled selected data-v-13c3b2b3>Wybierz...</option><option value="dolnośląskie" data-v-13c3b2b3>dolnośląskie</option><option value="kujawsko-pomorskie" data-v-13c3b2b3>kujawsko-pomorskie</option><option value="lubelskie" data-v-13c3b2b3>lubelskie</option><option value="lubuskie" data-v-13c3b2b3>lubuskie</option><option value="łódzkie" data-v-13c3b2b3>łódzkie</option><option value="małopolskie" data-v-13c3b2b3>małopolskie</option><option value="mazowieckie" data-v-13c3b2b3>mazowieckie</option><option value="opolskie" data-v-13c3b2b3>opolskie</option><option value="podkarpackie" data-v-13c3b2b3>podkarpackie</option><option value="podlaskie" data-v-13c3b2b3>podlaskie</option><option value="pomorskie" data-v-13c3b2b3>pomorskie</option><option value="śląskie" data-v-13c3b2b3>śląskie</option><option value="świętokrzyskie" data-v-13c3b2b3>świętokrzyskie</option><option value="warmińsko-mazurskie" data-v-13c3b2b3>warmińsko-mazurskie</option><option value="wielkopolskie" data-v-13c3b2b3>wielkopolskie</option><option value="zachodniopomorskie" data-v-13c3b2b3>zachodniopomorskie</option>',17),w=Object(a["f"])("Numer telefonu"),k=Object(a["g"])("span",{style:{color:"red"}},"*",-1),C={class:"register__footer"},y=Object(a["f"])("Masz już konto na wdmj.pl? "),z=Object(a["g"])("span",{style:{"font-weight":"600"}},"Zaloguj się",-1);Object(a["q"])();var P=s((function(e,t,o,n,r,i){var P=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["c"])("div",c,[l,Object(a["g"])("form",{onSubmit:t[4]||(t[4]=Object(a["E"])((function(){}),["prevent"])),class:"register__email"},[Object(a["g"])("label",{class:[{"wrong-email":!r.isCorrectEmail},"register__email__label"],for:"email"},[p,u],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[1]||(t[1]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),onChange:t[2]||(t[2]=function(){return i.validateEmail.apply(i,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.email=e}),class:"register__email__input",name:"email",type:"text",placeholder:"Adres e-mail"},null,544),[[a["A"],r.email]])],32),Object(a["g"])("form",{onSubmit:t[8]||(t[8]=Object(a["E"])((function(){}),["prevent"])),class:"register__password"},[Object(a["g"])("label",{class:[{"wrong-password":!r.isCorrectPassword},"register__password__label"],for:"password"},[b,d],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[5]||(t[5]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),onChange:t[6]||(t[6]=function(){return i.validatePassword.apply(i,arguments)}),"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.password=e}),class:"register__password__input",name:"password",type:"password",placeholder:"Hasło",autocomplete:"on"},null,544),[[a["A"],r.password]])],32),Object(a["g"])("form",{onSubmit:t[12]||(t[12]=Object(a["E"])((function(){}),["prevent"])),class:"register__firstname"},[Object(a["g"])("label",{class:[{"wrong-firstname":!r.isCorrectFirstname},"register__firstname__label"],for:"firstname"},[m,j],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[9]||(t[9]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),"onUpdate:modelValue":t[10]||(t[10]=function(e){return r.firstname=e}),onChange:t[11]||(t[11]=function(e){return r.isCorrectFirstname=i.validateMin3Char(r.firstname)}),class:"register__firstname__input",name:"firstname",type:"text",placeholder:"Imię"},null,544),[[a["A"],r.firstname]])],32),Object(a["g"])("form",{onSubmit:t[16]||(t[16]=Object(a["E"])((function(){}),["prevent"])),class:"register__lastname"},[Object(a["g"])("label",{class:[{"wrong-lastname":!r.isCorrectLastname},"register__lastname__label"],for:"lastname"},[g,f],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[13]||(t[13]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),"onUpdate:modelValue":t[14]||(t[14]=function(e){return r.lastname=e}),onChange:t[15]||(t[15]=function(e){return r.isCorrectLastname=i.validateMin3Char(r.lastname)}),class:"register__lastname__input",name:"lastname",type:"text",placeholder:"Nazwisko"},null,544),[[a["A"],r.lastname]])],32),Object(a["g"])("form",{onSubmit:t[20]||(t[20]=Object(a["E"])((function(){}),["prevent"])),class:"register__location"},[Object(a["g"])("label",{class:[{"wrong-location":!r.isCorrectLocation},"register__location__label"],for:"location"},[v,h],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[17]||(t[17]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),"onUpdate:modelValue":t[18]||(t[18]=function(e){return r.location=e}),onChange:t[19]||(t[19]=function(e){return r.isCorrectLocation=i.validateMin3Char(r.location)}),class:"register__location__input",name:"location",type:"text",placeholder:"Miejscowość"},null,544),[[a["A"],r.location]])],32),Object(a["g"])("form",{onSubmit:t[23]||(t[23]=Object(a["E"])((function(){}),["prevent"])),class:"register__province"},[O,Object(a["C"])(Object(a["g"])("select",{onChange:t[21]||(t[21]=function(e){return r.isCorrectProvince=!0}),"onUpdate:modelValue":t[22]||(t[22]=function(e){return r.province=e}),class:"register__province__select",name:"province"},[_],544),[[a["z"],r.province]])],32),Object(a["g"])("form",{onSubmit:t[27]||(t[27]=Object(a["E"])((function(){}),["prevent"])),class:"register__phone"},[Object(a["g"])("label",{class:[{"wrong-phone":!r.isCorrectPhone},"register__phone__label"],for:"phone"},[w,k],2),Object(a["C"])(Object(a["g"])("input",{onKeyup:t[24]||(t[24]=Object(a["D"])((function(){return i.register.apply(i,arguments)}),["enter"])),"onUpdate:modelValue":t[25]||(t[25]=function(e){return r.phone=e}),onChange:t[26]||(t[26]=function(){return i.validatePhone.apply(i,arguments)}),class:"register__phone__input",name:"phone",type:"text",placeholder:"Numer Telefonu"},null,544),[[a["A"],r.phone]])],32),Object(a["g"])("button",{onClick:t[28]||(t[28]=function(){return i.register.apply(i,arguments)}),class:"register__btn"},"Zarejestruj się"),Object(a["g"])("p",C,[y,Object(a["g"])(P,{to:"/logowanie"},{default:s((function(){return[z]})),_:1})])])})),E=(o("d3b7"),o("5502")),A={name:"Zarejestruj",data:function(){return{email:"",password:"",firstname:"",lastname:"",location:"",province:"",phone:"",isCorrectEmail:!0,isCorrectPassword:!0,isCorrectFirstname:!0,isCorrectLastname:!0,isCorrectLocation:!0,isCorrectProvince:!1,isCorrectPhone:!0,didInputChanged:!1}},store:E["a"],methods:{register:function(){var e=this;if(this.isCorrectEmail&&this.isCorrectPassword&&this.isCorrectFirstname&&this.isCorrectLastname&&this.isCorrectLocation&&this.isCorrectProvince&&this.isCorrectPhone&&this.didInputChanged){var t={email:this.email,password:this.password,firstname:this.firstname,lastname:this.lastname,location:this.location,province:this.province,phone:this.phone},o="http://localhost:8080/api/auth/register";fetch(o,{method:"POST",body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error(e.status)})).then((function(t){console.log("Sukces. Odebrane dane ",t),alert("Zarejestrowano. Teraz możesz się zalogować"),e.$router.push("/logowanie")})).catch((function(e){console.log("Błąd",e),alert("Nie udało się zarejestrować!")}))}else alert("Dane nie przeszły walidacji!")},getLogged:function(){return this.$store.state.logged},validateEmail:function(){this.didInputChanged=!0;var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;this.isCorrectEmail=e.test(this.email)},validatePassword:function(){this.didInputChanged=!0;var e=/^.{6,}$/;this.isCorrectPassword=e.test(this.password)},validateMin3Char:function(e){this.didInputChanged=!0;var t=/^.{3,}$/;return t.test(e)},validatePhone:function(){this.didInputChanged=!0;var e=/^[0-9]{9}$/;this.isCorrectPhone=e.test(this.phone)}}};o("cc79");A.render=P,A.__scopeId="data-v-13c3b2b3";var L=A,S=o("fd2d"),I={name:"Rejestracja",components:{Navbar:i["a"],Zarejestruj:L,Footer:S["a"]}};I.render=r;t["default"]=I},cc79:function(e,t,o){"use strict";o("41b2")}}]);
//# sourceMappingURL=chunk-5c3d1241.55bbc77d.js.map