(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),s=a.n(n),r=s.a.createElement,i=function(e){var t=e.iconclass,a=e.link,n=e.text;return r("li",{className:"mb-3"},r("a",{href:a,target:"_blank"},r("span",{className:"fa-container text-center mr-2"},r("i",{className:t})),n))},l=s.a.createElement,o=function(){return l("header",{className:"resume-header pt-4 pt-md-0"},l("div",{className:"media flex-column flex-md-row"},l("img",{className:"mr-3 img-fluid picture mx-auto",src:a("rEdE"),alt:"Luca Provenzano profile photo"}),l("div",{className:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"},l("div",{className:"primary-info"},l("h1",{className:"name mt-0 mb-1 text-white text-uppercase text-uppercase"},"Luca Provenzano"),l("div",{className:"title mb-3"},".NET Developer"),l("ul",{className:"list-unstyled"},l("li",{className:"mb-2"},l("i",{className:"far fa-envelope fa-fw mr-2"}),l("a",{href:"mailto:lucaeprov@gmail.com"},"lucaeprov[at]gmail.com")))),l("div",{className:"secondary-info ml-md-auto mt-2"},l("ul",{className:"resume-social list-unstyled"},[{iconclass:"fab fa-linkedin-in fa-fw",link:"https://www.linkedin.com/in/provenzanoluca",text:"provenzanoluca"},{iconclass:"fab fa-github-alt fa-fw",link:"http://github.com/lprovenzano",text:"lprovenzano"}].map((function(e,t){return l(i,{key:t,iconclass:e.iconclass,link:e.link,text:e.text})})))))))},c=s.a.createElement,m=function(){return c("section",{className:"resume-section summary-section mb-5"},c("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Career Summary"),c("div",{className:"resume-section-content"},c("p",{className:"mb-10"},"Hi! I'm ",c("strong",null,"software developer"),". I specialize in ",c("strong",null,"backend"),"\xa0and distributed systems. Also, I'm participate in the design, development and implementation process for one of the largest ",c("strong",null,"fintech")," companies in Argentina."),c("p",{className:"mb-10"},"Over the last 3+ years, I have developed different information systems and APIs including web sites using many technologies such as .NET (",c("strong",null,"C#, ASP.NET), Javascript, MySQL, SQL Server, MongoDB and Redis.")),c("p",{className:"mb-10"},"Above all, it motivates me a lot to learn and create products user centered.")))};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,s=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(o){s=!0,r=o}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=s.a.createElement;function p(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,r=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){i=!0,s=e},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw s}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var b=function(e){var t,a=e.job,n=[],s=[],r=p(a.duties.entries());try{for(r.s();!(t=r.n()).done;){var i=d(t.value,2),l=i[0],o=i[1];n.push(f("li",{key:l},o))}}catch(v){r.e(v)}finally{r.f()}var c,m=p(a.technologiesUsed.entries());try{for(m.s();!(c=m.n()).done;){var u=d(c.value,2),g=u[0],b=u[1];s.push(f("li",{key:g,className:"list-inline-item"},f("span",{className:"badge badge-primary badge-pill"},b)))}}catch(v){m.e(v)}finally{m.f()}return f("div",{className:"resume-timeline position-relative"},f("article",{className:"resume-timeline-item position-relative pb-5"},f("div",{className:"resume-timeline-item-header mb-2"},f("div",{className:"d-flex flex-column flex-md-row"},f("h3",{className:"resume-position-title font-weight-bold mb-1"},a.role)),f("p",null,f("a",{href:a.company.url,target:"_blank"},a.company.name)),f("div",{className:"resume-position-time"},a.date.from," - ",a.date.to)),f("div",{className:"resume-timeline-item-desc"},f("ul",null,n),f("ul",{className:"list-inline"},s))))},v=s.a.createElement,N=function(e){e.title;var t=e.skills;return v("li",{className:"mb-2"},v("div",{className:"resume-skill-name"},t.language),v("div",{className:"progress resume-progress"},v("div",{className:"progress-bar theme-progress-bar-dark",role:"progressbar",style:{width:t.percentaje+"%"},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})))},h=s.a.createElement,y=function(e){var t=e.skill;return h("li",{className:"list-inline-item"},h("span",{className:"badge badge-light"},t))},w=s.a.createElement,A=function(){return w("li",{className:"mb-2"},w("div",{className:"resume-degree font-weight-bold"},"Programming technician"),w("div",{className:"resume-degree-org"},"Universidad Tecnol\xf3gica Nacional"),w("div",{className:"resume-degree-time"},"2016 - 2019"))},k=s.a.createElement,x=[{role:"Senior .NET Developer",company:{name:"invertirOnline.com",url:"https://invertironline.com"},date:{from:"MAY 2019",to:"PRESENT"},duties:["Creation of financial products for more than 100K clients.","Cash (IN/OUT) movements automation.","Third-Party API Integration.","Development by iterations, agile methodologies."],technologiesUsed:["C#","ASP.NET MVC","Web API",".NET Core","AWS","Microsoft SQL Server","MySQL","MongoDB","Redis","Message Queues","Worker Services"]},{role:"Junior .NET Developer",company:{name:"IT Resources S.A.",url:"https://www.itrsa.com.ar/"},date:{from:"AUG 2017",to:"MAY 2019 \u2022 1yr 9mo"},duties:["Development and maintenance of CRM / ERP for clients of the software factory."],technologiesUsed:["C#","ASP.NET MVC","ASP Web Forms","JavaScript","SAP Integrations","Entity Framework","Microsoft SQL Server","Azure Cloud"]},{role:"Systems Auditor",company:{name:"Bertora & Asociados",url:"https://www.crowe.com/ar/about-us/nuestras-oficinas"},date:{from:"NOV 2016",to:"AUG 2017 \u2022 9mo"},duties:["Internal and External Systems Audit.","Protection of IT assets.","Analysis of cycles corresponding to the Entity's business framework, detection and evaluation of automatic and manual controls.",'Compliance review of Communications "A" 4609 and 5374 of the Central Bank of Argentina.',"Computer Assisted Audit Techniques (CAATs)."],technologiesUsed:["ACL","Excel"]}],S={backend:[{language:"C#",percentaje:"90"},{language:"ASP.NET Framework",percentaje:"80"},{language:"ASP.NET Core",percentaje:"85"}],frontend:[{language:"Javascript",percentaje:"75"},{language:"React",percentaje:"15"},{language:"Angular",percentaje:"20"},{language:"HTML/CSS",percentaje:"95"}]},E=["Docker","Bash","Git","SCRUM","REST Api","Distributed systems"];t.default=function(){return k(s.a.Fragment,null,k("article",{className:"resume-wrapper text-center position-relative"},k("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},k(o,null),k("div",{className:"resume-body p-5"},k(m,null),k("div",{className:"row"},k("div",{className:"col-lg-9"},k("section",{className:"resume-section experience-section mb-5"},k("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Work Experience"),k("div",{className:"resume-section-content"},x.map((function(e,t){return k(b,{key:t,job:e})}))))),k("div",{className:"col-lg-3"},k("section",{className:"resume-section skills-section mb-5"},k("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Skills & Tools"),k("div",{className:"resume-section-content"},k("div",{className:"resume-skill-item"},k("h4",{className:"resume-skills-cat font-weight-bold"},"Backend"),k("ul",{className:"list-unstyled mb-4"},S.backend.map((function(e,t){return k(N,{key:t,skills:e})}))),k("h4",{className:"resume-skills-cat font-weight-bold"},"Frontend"),k("ul",{className:"list-unstyled mb-4"},S.frontend.map((function(e,t){return k(N,{key:t,skills:e})})))),k("div",{className:"resume-skill-item"},k("h4",{className:"resume-skills-cat font-weight-bold"},"Others"),k("ul",{className:"list-inline"},E.map((function(e,t){return k(y,{key:t,skill:e})})))))),k("section",{className:"resume-section education-section mb-5"},k("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Education"),k("div",{className:"resume-section-content"},k("ul",{className:"list-unstyled"},k(A,null)))),k("section",{className:"resume-section language-section mb-5"},k("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Language"),k("div",{className:"resume-section-content"},k("ul",{className:"list-unstyled resume-lang-list"},k("li",{className:"mb-2"},k("span",{className:"resume-lang-name font-weight-bold"},"English")," ",k("small",{className:"text-muted font-weight-normal"},"(Intermediate)")),k("li",null,k("span",{className:"resume-lang-name font-weight-bold"},"Spanish")," ",k("small",{className:"text-muted font-weight-normal"},"(Native)"))))),k("section",{className:"resume-section interests-section mb-5"},k("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Interests"),k("div",{className:"resume-section-content"},k("ul",{className:"list-unstyled"},k("li",{className:"mb-1"},"Rugby"),k("li",{className:"mb-1"},"CS GO"),k("li",{className:"mb-1"},"Cook"))))))))),k("footer",{className:"footer text-center pt-2 pb-5"},k("small",null,"Crafted in Buenos Aires, Argentina.")))}},rEdE:function(e,t){e.exports="/_next/static/images/profile-831627e521d56d87b4b5e5dfe6618d6f.jpg"},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,1]]]);