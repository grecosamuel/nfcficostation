(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(t,e,n){t.exports=n(73)},64:function(t,e,n){},73:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(46),c=n.n(a),l=(n(64),n(11)),r=n(102),s=n(99),f=n(49);function u(){return i.a.createElement(r.a,null,i.a.createElement("img",{src:"/nfcficostation/targhetta.png",width:"100%",alt:"FICOSTATION",onClick:function(t){window.location.href="/nfcficostation"}}))}var p=n(96);function m(t){var e=t.display,n=t.setDisplay,a=Object(o.useRef)(null);Object(o.useEffect)(function(){window.addEventListener("popstate",function(){n("none");var t=document.getElementById("videoIntro");t.pause(),t.currentTime=0})},[]);return i.a.createElement(r.a,{width:"100vw",height:"100vh",position:"absolute",display:e},i.a.createElement(p.a,{position:"absolute"},i.a.createElement(s.a,{fontFamily:"Bright Young",color:"#e62e1f",onClick:function(t){window.location.href="/nfcficostation/list"}},"Salta")),i.a.createElement("video",{id:"videoIntro",controls:!0,className:"videoIntro",width:"100%",ref:a,onPlay:function(){var t=a.current;t&&t.webkitRequestFullScreen&&t.webkitRequestFullScreen()},onEnded:function(){n("none"),window.location.href="/nfcficostation/list"}},i.a.createElement("source",{src:"/nfcficostation/introvideo.mp4",type:"video/mp4"})))}function d(){var t=Object(o.useState)("none"),e=Object(l.a)(t,2),n=e[0],a=e[1];return i.a.createElement(r.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-evenly",backgroundColor:"#21201f"},i.a.createElement(u,null),i.a.createElement(r.a,null,i.a.createElement(s.a,{variant:"h4",textAlign:"center",color:"#fff",fontFamily:"Bright Young"},i.a.createElement(f.a,{sequence:["Welcome into the line",1e3,"Take the train",3e3],speed:20,repeat:1/0}))),i.a.createElement(r.a,{display:"flex",justifyContent:"center"},i.a.createElement("img",{src:"/nfcficostation/ficostation_logo_train.png",width:128,height:128,alt:"TRAIN",onClick:function(t){window.history.pushState("test",null),a("block"),document.getElementById("videoIntro").play()}})),i.a.createElement(m,{display:n,setDisplay:a}))}var h=n(97),g=n(100),v=n(101);function w(){return i.a.createElement(r.a,{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"#21201f"},i.a.createElement(u,null),i.a.createElement(r.a,{overflow:"scroll",marginBottom:5},[{title:"Salva numero",icon:"/nfcficostation/smartphone.svg",href:"tel:+393899568659"},{title:"Whatsapp",icon:"/nfcficostation/whatsapp.svg",href:"https://wa.me/+393899568659"},{title:"Drink List",icon:"/nfcficostation/drink.svg",href:"https://ficostation.it/wp-content/uploads/2022/11/Drink-List.pdf"},{title:"Food",icon:"/nfcficostation/restaurant-cutlery.svg",href:"https://ficostation.it/wp-content/uploads/2022/11/Menu-Food.pdf"},{title:"Wine",icon:"/nfcficostation/wine-glass.svg",href:"https://ficostation.it/wp-content/uploads/2022/11/Wine.pdf"},{title:"Aperitive",icon:"/nfcficostation/food.svg",href:"https://ficostation.it/wp-content/uploads/2022/11/Aperitivi.pdf"},{title:"Instagram",icon:"/nfcficostation/instagram.svg",href:"https://instagram.com/ficostation"},{title:"Website",icon:"/nfcficostation/website.svg",href:"https://ficostation.it"}].map(function(t){return i.a.createElement(h.a,{onClick:function(e){window.open(t.href,"_blank")},sx:{display:"flex",justifyContent:"space-between",margin:4,backgroundColor:"#eb4034",color:"#fff",borderRadius:2}},i.a.createElement(r.a,{sx:{display:"flex",flexDirection:"column"}},i.a.createElement(g.a,{sx:{flex:"1 0 auto"}},i.a.createElement(s.a,{component:"div",variant:"h5",fontSize:24,fontFamily:"Bright Young"},t.title))),i.a.createElement(r.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",paddingRight:2}},i.a.createElement(v.a,{component:"span",sx:{width:48,height:48},image:t.icon,alt:"Live from space album cover"})))})))}var E=n(68),y=n(0),b=Object(E.a)([{path:"/nfcficostation",element:i.a.createElement(d,null)},{path:"/nfcficostation/list",element:i.a.createElement(w,null)}]);c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y.b,{router:b})))}},[[55,2,1]]]);
//# sourceMappingURL=main.608ddb76.chunk.js.map