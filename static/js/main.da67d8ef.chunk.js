(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":9841,"name":"H\u1ed3 V\u0103n H\xe2n","tel":"0903420482","Permission":1},{"id":4234,"name":"Tr\u1ecbnh \u0110\u1ee9c Quang","tel":"0903420482","Permission":2},{"id":1231,"name":"Tr\u1ea7n V\u0103n Trung","tel":"0903420482","Permission":3},{"id":9838,"name":"Ho\xe0ng Th\u1ecb Lan","tel":"0903420482","Permission":3},{"id":5733,"name":"Nguy\u1ec5n V\u0103n T\xean","tel":"0933827834","Permission":3}]')},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n.n(r),i=n(9),a=n.n(i),o=(n(16),n(6)),l=(n(17),n(7)),d=n(2),j=n(3),u=n(5),h=n(4),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).isChange=function(e){var t=e.target.name,n=e.target.value;r.setState(Object(l.a)({},t,n));var s={};s.id=r.state.id,s.name=r.state.name,s.tel=r.state.tel,s.Permission=r.state.Permission},r.changeState=function(){r.setState({stt:!r.state.stt})},r.showBtn=function(){return!0===r.state.stt?Object(s.jsx)("div",{onClick:function(){return r.changeState()},className:"btn btn-block btn-outline-secondary",children:"\u0110\xf3ng"}):Object(s.jsx)("div",{onClick:function(){return r.changeState()},className:"btn btn-block btn-outline-info",children:"Th\xeam m\u1edbi"})},r.showBtnAdd=function(){if(!0===r.props.hienThiForm)return Object(s.jsxs)("div",{className:"",children:[r.showBtn(),r.showFormAdd()]})},r.showFormAdd=function(){if(!0===r.state.stt)return Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:"card border-primary mt-2",children:[Object(s.jsx)("h4",{className:"card-header",children:"Th\xeam User"}),Object(s.jsxs)("div",{className:"card-body text-primary",children:[Object(s.jsx)("div",{className:"card-title"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",onChange:function(e){r.isChange(e)},name:"name",className:"form-control",placeholder:"T\xean user"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"text",onChange:function(e){r.isChange(e)},name:"tel",className:"form-control",placeholder:"\u0110i\u1ec7n tho\u1ea1i"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("select",{className:"custom-select",onChange:function(e){r.isChange(e)},name:"Permission",required:!0,children:[Object(s.jsx)("option",{value:!0,children:"Ch\u1ecdn quy\u1ec1n"}),Object(s.jsx)("option",{value:1,children:"Admin"}),Object(s.jsx)("option",{value:2,children:"Moderator"}),Object(s.jsx)("option",{value:3,children:"User"})]})}),Object(s.jsx)("div",{className:"form-group mt-2 mb-2",children:Object(s.jsx)("input",{type:"reset",className:"btn btn-primary btn-block",onClick:function(){return r.props.add(r.state.name,r.state.tel,r.state.Permission)},value:"Th\xeam m\u1edbi"})})]})]})})},r.state={stt:!1,id:"",name:"",tel:"",Permission:""},r}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.showBtnAdd()})}}]),n}(r.Component),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"display-3 text-center",children:"Tr\xecnh qu\u1ea3n tr\u1ecb TravelTL"}),Object(s.jsx)("hr",{})]})})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).saveButton=function(){var e={};e.id=s.state.id,e.name=s.state.name,e.tel=s.state.tel,e.Permission=s.state.Permission,s.props.getUserEditInfo(e)},s.state={id:s.props.userEditObject.id,name:s.props.userEditObject.name,tel:s.props.userEditObject.tel,Permission:s.props.userEditObject.Permission},s}return Object(j.a)(n,[{key:"isChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(l.a)({},t,n))}},{key:"render",value:function(){var e=this;return console.log(this.state),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:"card border-primary mt-2",children:[Object(s.jsx)("h4",{className:"card-header text-center",children:"S\u1eeda th\xf4ng tin"}),Object(s.jsxs)("div",{className:"card-body text-primary",children:[Object(s.jsx)("div",{className:"card-title"}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{defaultValue:this.props.userEditObject.name,type:"text",onChange:function(t){e.isChange(t)},name:"name",className:"form-control",placeholder:"T\xean user"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{defaultValue:this.props.userEditObject.tel,type:"text",onChange:function(t){e.isChange(t)},name:"tel",className:"form-control",placeholder:"\u0110i\u1ec7n tho\u1ea1i"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("select",{className:"custom-select",defaultValue:this.props.userEditObject.Permission,onChange:function(t){e.isChange(t)},name:"Permission",required:!0,children:[Object(s.jsx)("option",{value:!0,children:"Ch\u1ecdn quy\u1ec1n"}),Object(s.jsx)("option",{value:1,children:"Admin"}),Object(s.jsx)("option",{value:2,children:"Moderator"}),Object(s.jsx)("option",{value:3,children:"User"})]})}),Object(s.jsxs)("div",{className:"form-group mt-2 mb-2 mr-2 ml-2",children:[Object(s.jsx)("div",{className:"btn btn-success btn-block",onClick:function(){return e.saveButton()},children:"L\u01b0u th\xf4ng tin"}),Object(s.jsx)("input",{type:"reset",className:"btn btn-secondary btn-block",value:"H\u1ee7y b\u1ecf",onClick:function(){return e.props.changeEditUserStatus()}})]})]})]})})})}}]),n}(r.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).getUserEditInfo=function(e){r.setState({userObj:e}),r.props.getUserEditInfoToApp(e)},r.isShowEditForm=function(){if(!0===r.props.editUserStatus)return Object(s.jsx)(p,{getUserEditInfo:function(e){return r.getUserEditInfo(e)},userEditObject:r.props.userEditObject,changeEditUserStatus:function(){return r.props.changeEditUserStatus()}})},r.isChange=function(e){r.setState({tempValue:e.target.value}),r.props.getText(r.state.tempValue)},r.hienThiNut=function(){return!0===r.props.hienThiForm?Object(s.jsx)("div",{onClick:function(){return r.props.ketnoi()},className:"btn-group btn-add",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{className:"btn btn-primary border",id:"add",children:"X"}),"\u0110\xf3ng l\u1ea1i"]})}):Object(s.jsx)("div",{onClick:function(){return r.props.ketnoi()},className:"btn-group btn-add",children:Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{className:"btn btn-primary border",id:"add",children:"+"}),"Th\xeam m\u1edbi"]})})},r.test=function(){!1===r.props.hienThiForm&&console.log("success")},r.state={tempValue:"",userObj:{}},r}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"col-12",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsxs)("div",{className:"btn-group btn-search",children:[Object(s.jsx)("input",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control",width:"50%","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\xean c\u1ea7n t\xecm"}),Object(s.jsx)("div",{className:"btn btn-info",id:"search",onClick:function(t){return e.props.getText(e.state.tempValue)},children:"T\xecm"})]}),this.hienThiNut()]}),Object(s.jsx)("div",{className:"row",children:this.isShowEditForm()})]})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).permissionShow=function(){return 1===e.props.permission?"Admin":2===e.props.permission?"Moderator":"User"},e.editClick=function(){e.props.editUserClick(),e.props.changeEditUserStatus()},e.deleteBtnClick=function(t){e.props.deleteBtnClick(t)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:this.props.stt+1}),Object(s.jsx)("td",{children:this.props.name}),Object(s.jsx)("td",{children:this.props.phone}),Object(s.jsx)("td",{children:this.permissionShow()}),Object(s.jsx)("td",{children:Object(s.jsxs)("div",{className:"btn-group",children:[Object(s.jsx)("div",{className:"btn btn-warning sua",onClick:function(){return e.editClick()},children:Object(s.jsx)("i",{className:"fa fa-edit",children:" S\u1eeda"})}),Object(s.jsx)("div",{className:"btn btn-danger sua",onClick:function(t){return e.deleteBtnClick(e.props.id)},children:Object(s.jsx)("i",{className:"far fa-trash-alt",children:" X\xf3a"})})]})}),Object(s.jsx)("td",{children:"#"+this.props.id})]})}}]),n}(r.Component),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).deleteBtnClick=function(t){e.props.deleteUser(t)},e.mappingDataUser=function(){return e.props.dataUser.map((function(t,n){return Object(s.jsx)(f,{deleteBtnClick:function(t){return e.deleteBtnClick(t)},editUserClick:function(n){return e.props.editU(t)},name:t.name,phone:t.tel,permission:t.Permission,id:t.id,stt:n,changeEditUserStatus:function(){return e.props.changeEditUserStatus()}},n)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return console.log(this.props.dataUser),Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"table-responsive",children:Object(s.jsxs)("table",{className:"table table-striped table-inverse table-hover",children:[Object(s.jsx)("thead",{className:"thead-inverse thead-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"STT"})}),Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"T\xean"})}),Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"\u0110i\u1ec7n tho\u1ea1i"})}),Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"Quy\u1ec1n"})}),Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"Thao t\xe1c"})}),Object(s.jsx)("th",{children:Object(s.jsx)("strong",{children:"ID"})})]})}),Object(s.jsx)("tbody",{children:this.mappingDataUser()})]})})})}}]),n}(r.Component),g=n(10),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsx)("footer",{className:"bg-dark text-white",id:"footer",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("p",{className:"text-center pt-5",children:"\xa9 Travel TL 2021. Made by TL."})})})}}]),n}(r.Component);var N=function(e){var t=Object(r.useState)(!1),c=Object(o.a)(t,2),i=c[0],a=c[1],l=Object(r.useState)(g),d=Object(o.a)(l,2),j=d[0],u=d[1],h=Object(r.useState)(""),p=Object(o.a)(h,2),f=p[0],N=p[1],C=n(18).v4,y=Object(r.useState)(!1),k=Object(o.a)(y,2),S=k[0],T=k[1],U=Object(r.useState)({}),E=Object(o.a)(U,2),P=E[0],w=E[1];function B(){T(!S)}var F=[];return j.forEach((function(e){-1!==e.name.indexOf(f)&&F.push(e)})),console.log(j),Object(s.jsxs)("div",{children:[Object(s.jsx)(m,{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(O,{userEditObject:P,getText:function(e){return function(e){N(e),console.log("Du lieu da luu trong state la:"+f)}(e)},ketnoi:function(){a(!i)},hienThiForm:i,editUserStatus:S,changeEditUserStatus:function(){return B()},getUserEditInfoToApp:function(e){return function(e){console.log("get success"+e.name),j.forEach((function(t,n){t.id===e.id&&(t.name=e.name,t.tel=e.tel,t.Permission=e.Permission)})),alert("S\u1eeda th\xe0nh c\xf4ng!"),localStorage.setItem("userData",JSON.stringify(j))}(e)}}),Object(s.jsx)("div",{className:"col-12",children:Object(s.jsx)("hr",{})}),Object(s.jsx)(x,{deleteUser:function(e){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t),localStorage.setItem("userData",JSON.stringify(t))}(e)},editU:function(e){return function(e){console.log(e),w(e)}(e)},dataUser:F,changeEditUserStatus:function(){return B()}}),Object(s.jsx)(b,{add:function(e,t,n){return function(e,t,n){var s={};s.id=C(),s.name=e,s.tel=t,s.Permission=n;var r=j;r.push(s),u(r),localStorage.setItem("userData",JSON.stringify(j)),alert("Th\xeam th\xe0nh c\xf4ng!")}(e,t,n)},hienThiForm:i})]})}),Object(s.jsx)(v,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),C()}},[[19,1,2]]]);
//# sourceMappingURL=main.da67d8ef.chunk.js.map