(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{12:function(e,s,i){},14:function(e,s,i){"use strict";i.r(s);var n=i(1),c=i.n(n),a=i(7),t=i.n(a),r=(i(12),i(2)),l=i(3),o=i(5),j=i(4),m=i(0),d=function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Academics & Work"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsxs)("h1",{className:"responsive-headline",children:["I am ",e.name,"."]}),Object(m.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif"},children:["I am a ",e.role,".",e.roleDescription]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,target:"",children:Object(m.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),i}(n.Component),h=function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:e.aboutme}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e.name}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.address}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.website})]})]})})]})]})})}}]),i}(n.Component),b=function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.education&&e.education.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.UniversityName}),Object(m.jsxs)("p",{className:"info",children:[e.specialization,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsxs)("em",{className:"date",children:[e.MonthOfPassing," ",e.YearOfPassing]})]}),Object(m.jsx)("p",{children:e.Achievements})]})})}))})]}),Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:e.work&&e.work.map((function(e){return Object(m.jsx)("div",{className:"row item",children:Object(m.jsxs)("div",{className:"twelve columns",children:[Object(m.jsx)("h3",{children:e.CompanyName}),Object(m.jsx)("p",{className:"info",children:e.specialization}),Object(m.jsxs)("p",{style:{marginTop:-10,marginBottom:-3},children:[Object(m.jsx)("b",{children:"Awards & Recognitions: "})," ",e.Achievements]}),Object(m.jsxs)("p",{style:{marginTop:-10,marginBottom:-3},children:[Object(m.jsx)("b",{children:"Year of Leaving: "}),e.MonthOfLeaving," ",e.YearOfLeaving]}),Object(m.jsxs)("p",{style:{marginTop:-10},children:[Object(m.jsx)("b",{children:"Total Experience: "}),e.Experience]})]})})}))})]}),Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("p",{children:e.skillsDescription}),Object(m.jsx)("div",{className:"bars",children:Object(m.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(m.jsx)("em",{children:e.skillname})]})}))})})]})]})]})}}]),i}(n.Component),p=(n.Component,n.Component,function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("div",{className:"row section-head",children:Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("aside",{className:"eigth columns footer-widgets",children:Object(m.jsx)("div",{className:"widget",children:Object(m.jsxs)("h4",{children:["Linked in :",e.linkedinId]})})})})]})}}]),i}(n.Component)),O=function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props.resumeData;return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})})}))})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),i}(n.Component),u={imagebaseurl:"",name:"Vishaldutt Parsai",role:"Full Satck Developer",linkedinId:" https://www.linkedin.com/in/vishaldutt-parsai-ba555961",skypeid:"Your skypeid",roleDescription:"I like to learn and create applications in various parts of software development and like to learn about new technologies or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/vishaldutt-parsai-ba555961",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/vishaldutt",className:"fa fa-github"},{name:"skype",url:"",className:"fa fa-twitter"}],aboutme:"TO BE COMPLETED",address:"India",website:"https://github.com/vishaldutt",education:[{UniversityName:"CDAC",specialization:"Diploma in Advance Computing",MonthOfPassing:"June",YearOfPassing:"2019",Achievements:""},{UniversityName:"Swami Vivekananda College of Engineering, Indore",specialization:"Bachelor of Engineering (EC)",MonthOfPassing:"July",YearOfPassing:"2010",Achievements:"Hons"}],work:[{CompanyName:"Digit General Insurance, Pune",specialization:"Integration of WhatsApp Business (Tech. - Spring Boot)",MonthOfLeaving:"Jan",YearOfLeaving:"2019-Present",Achievements:"Digit Wall of Awesomeness Winner (Q4 - 2019)",Experience:"1 year 5 months"},{CompanyName:"Iksula Services Pvt. Ltd.",specialization:"Operations Manager",MonthOfLeaving:"June",YearOfLeaving:"2019",Achievements:"Employee of the quarter (Q1 and Q4, 2017)",Experience:"3 years"}],skillsDescription:"Technology Stack",skills:[{skillname:"SpringBoot"},{skillname:"ReactJs"},{skillname:"HTML5"},{skillname:"ReactNative"}],portfolio:[{name:"project1",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},x=function(e){Object(o.a)(i,e);var s=Object(j.a)(i);function i(){return Object(r.a)(this,i),s.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(d,{resumeData:u}),Object(m.jsx)(h,{resumeData:u}),Object(m.jsx)(b,{resumeData:u}),Object(m.jsx)(p,{resumeData:u}),Object(m.jsx)(O,{resumeData:u})]})}}]),i}(n.Component),v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,15)).then((function(s){var i=s.getCLS,n=s.getFID,c=s.getFCP,a=s.getLCP,t=s.getTTFB;i(e),n(e),c(e),a(e),t(e)}))};t.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.77f9a74a.chunk.js.map