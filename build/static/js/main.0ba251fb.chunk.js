(this.webpackJsonpmarquee=this.webpackJsonpmarquee||[]).push([[0],{24:function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},31:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(22),n=s.n(c),r=s(9),i=(s(31),s(20)),o=s(12),u=s(13),l=s(15),b=s(14),m=s(1);var d=function(e){return Object(m.jsx)("nav",{children:e.content.pages.map((function(e,t){var s="/".concat(e.slug);return Object(m.jsx)(r.b,{to:s,activeClassName:"text-style-1",className:"nav-item",children:e.title},t)}))})},j=s(3);var h=function(){return Object(m.jsx)("h1",{children:"Page not found!"})},p=s(24),O=s(25),g=s(26),x=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){document.body.style.backgroundImage="url(".concat("/projects/marquee","/backgrounds/").concat(this.props.blocks.background,")")}},{key:"componentWillUnmount",value:function(){document.body.style.backgroundImage=null}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"marquee",children:[Object(m.jsxs)("div",{className:"headers",children:[Object(m.jsx)("h1",{className:"headline",children:this.props.blocks.headline}),Object(m.jsx)("p",{className:"subhead",children:this.props.blocks.subhead})]}),Object(m.jsxs)("div",{className:"cta",children:[Object(m.jsx)("h2",{className:"cta-text",children:this.props.blocks.cta}),Object(m.jsxs)("button",{className:"connect",children:["Let's Talk.  ",Object(m.jsx)(O.a,{icon:g.a,className:"arrow"})]})]})]})}}]),s}(a.Component),v=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={content:p},e}return Object(u.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"layout",children:[Object(m.jsxs)("div",{className:"nav-container",children:[Object(m.jsx)("img",{src:"abc_logo.svg",className:"logo",alt:"logo"}),Object(m.jsx)(d,{content:this.state.content})]}),Object(m.jsx)("button",{className:"contact",children:"Contact Us"})]}),Object(m.jsx)("main",{children:Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{exact:!0,path:"/",children:Object(m.jsx)(j.a,{to:"/services"})}),this.state.content.pages.map((function(e,t){return Object(m.jsx)(j.b,{path:"/".concat(e.slug),render:function(t){return Object(m.jsx)(x,Object(i.a)(Object(i.a)({},t),{},{blocks:e.blocks[0]}))}},t)})),Object(m.jsx)(j.b,{component:h})]})})]})}}]),s}(a.Component);n.a.render(Object(m.jsx)(r.a,{basename:"/projects/marquee",children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0ba251fb.chunk.js.map