(window["webpackJsonptemple-luna"]=window["webpackJsonptemple-luna"]||[]).push([[0],{103:function(e,a,n){},104:function(e,a,n){},108:function(e,a,n){},109:function(e,a,n){},110:function(e,a,n){},111:function(e,a,n){},112:function(e,a,n){},113:function(e,a,n){},114:function(e,a,n){},151:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),i=n(56),r=n.n(i),s=(n(93),n(5)),c=n(6),l=n(9),u=n(7),m=n(8),d=(n(94),n(14)),p=n(23),b=n(13),h=n(82),f=n.n(h),v=(n(103),function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={animating:!1,position:a.CENTER,animatePrepare:!1},n.startAnimation=n.startAnimation.bind(Object(b.a)(n)),n.postPrepareAnimation=n.postPrepareAnimation.bind(Object(b.a)(n)),n.onTransitionEnd=n.onTransitionEnd.bind(Object(b.a)(n)),n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.startAnimation(this.props.position),this.node&&this.node.addEventListener("transitionend",this.onTransitionEnd)}},{key:"componentWillUnmount",value:function(){this.node&&this.node.removeEventListener("transitionend",this.onTransitionEnd)}},{key:"componentWillReceiveProps",value:function(e){e.position!==this.props.position&&this.startAnimation(e.position,e.animationCallback)}},{key:"startAnimation",value:function(e,n){var t=e===a.CENTER,o=[a.TO_LEFT,a.TO_RIGHT].includes(e),i=[a.CENTER,a.FROM_LEFT,a.FROM_RIGHT].includes(this.state.position);if(t||i&&o)return this._animationCallback=n,this.setState({animatePrepare:!1,position:e});this._animationCallback=this.postPrepareAnimation,this._postPrepareTimeout=setTimeout(this.postPrepareAnimation,500),this.setState({animating:!0,animatePrepare:!0,position:e})}},{key:"postPrepareAnimation",value:function(){var e=this;clearTimeout(this._postPrepareTimeout),this._animationCallback=null,this.setState({animatePrepare:!1},function(){return e._animationCallback=e.props.animationCallback})}},{key:"onTransitionEnd",value:function(e){if("transform"===e.propertyName){var a=this._animationCallback;delete this._animationCallback,a?setTimeout(a,0):this.setState({animating:!1})}}},{key:"render",value:function(){var e,n=this;return o.a.createElement("div",{ref:function(e){return n.node=e},className:f()("animatable",(e={},Object(p.a)(e,"to",[a.TO_LEFT,a.TO_RIGHT].includes(this.state.position)),Object(p.a)(e,"from",[a.FROM_LEFT,a.FROM_RIGHT].includes(this.state.position)),Object(p.a)(e,"right",[a.TO_RIGHT,a.FROM_RIGHT].includes(this.state.position)),Object(p.a)(e,"left",[a.TO_LEFT,a.FROM_LEFT].includes(this.state.position)),Object(p.a)(e,"prepare",this.state.animatePrepare),e)),"data-qa-loading":Boolean(this.props["data-qa-loading"]||this.state.animating)},o.a.createElement("div",{className:this.props.className},this.props.children))}}]),a}(o.a.Component));v.CENTER="CENTER",v.TO_LEFT="TO_LEFT",v.TO_RIGHT="TO_RIGHT",v.FROM_LEFT="FROM_LEFT",v.FROM_RIGHT="FROM_RIGHT";var j,E,g={id:0,ruta:"/bienvenida"},O=[g],y=function(e,a){if("/"===e||"/"===a)return!0;var n=O.filter(function(a){return a.ruta===e})[0],t=O.filter(function(e){return e.ruta===a})[0];return void 0===n||void 0===t||t.id>n.id},A=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).intercambiarHijos=function(){n.setState({posicionHijo:n.state.posicionHijo===v.TO_LEFT?v.FROM_RIGHT:v.FROM_LEFT,hijoAnterior:null,idAnterior:null,callbackAnimacion:null})},n.state={posicionHijo:v.CENTER,hijoActual:e.children,idActual:e.idActual,hijoAnterior:null,idPrevio:null,callbackAnimacion:null},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,a){var n=e.idActual||e.children.type,t=this.props.idActual||this.props.children.type;console.log("desde "+n+" hacia "+t),t!==n&&this.setState({posicionHijo:y(n,t)?v.TO_LEFT:v.TO_RIGHT,hijoActual:this.props.children,idActual:t,hijoAnterior:e.children,idAnterior:n,callbackAnimacion:this.intercambiarHijos})}},{key:"render",value:function(){var e=this.state,a=e.hijoAnterior,n=e.hijoActual,t=e.posicionHijo,i=e.callbackAnimacion;return o.a.createElement(v,{position:t,animationCallback:i},a||n)}}]),a}(o.a.Component),T=(j=A,E=d.d,function(e){var a=e.updateStep,n=e.children,t=e.paginaCambio;return o.a.createElement(d.c,{render:function(e){var i=e.location;return o.a.createElement(j,{paginaCambio:t,idActual:i.pathname,updateStep:a},o.a.createElement(E,{location:i},n,">"))}})}),S=(n(104),n(19)),k=n(22),C=n(45),I=(n(108),function(e){return o.a.createElement("div",null,o.a.createElement(S.a,{icon:e.icono,size:e.tamano}),e.numero&&e.numero>0?o.a.createElement("div",{className:"num-notificacion"},e.numero):null)}),N=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={abierto:!1},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"barra-principal"},o.a.createElement("img",{className:"logo-barra",src:"imagenes/logo.png"}),o.a.createElement("div",{className:"menu-usuario-barra"},o.a.createElement("div",{className:"btn-inicio-barra"},"Inicio"),o.a.createElement("button",{className:"btn-registro-barra"},"Soy un miembro")),o.a.createElement("div",{className:"menu-usuario-barra-responsivo",style:{color:"white"}},o.a.createElement(I,{icono:C.a,tamano:"2x",numero:0}),o.a.createElement(I,{icono:C.b,tamano:"2x",numero:2}),o.a.createElement(I,{icono:C.c,tamano:"2x"})),o.a.createElement("div",{className:"btn-sanguche-barra"},o.a.createElement(S.a,{icon:k.a,size:"lg"})))}}]),a}(t.Component),_=(n(109),n(110),function(e){return o.a.createElement("div",{className:"tarjeta-info-libro"},o.a.createElement("img",{alt:"img-usuario",src:e.info.imgAutor}),o.a.createElement("h1",null,e.info.nombresAutor),o.a.createElement("div",null,e.info.porcAmor,"%","  ",o.a.createElement(S.a,{icon:k.d,color:"#f54b42"})),o.a.createElement("div",null,e.info.numCom>1e3?e.info.numCom/1e3+"k":e.info.numCom,"  ",o.a.createElement(S.a,{icon:k.e,color:"#52a84c"})))}),q=function(e){return o.a.createElement("div",{className:"contenedor-tarjeta-sinopsis"},o.a.createElement("div",{className:"tarjeta-sinopsis seleccionable",onMouseEnter:function(){return e.mostrarTarjetaInfo(e.indice)},onMouseLeave:function(){return e.ocultarTarjetaInfo(e.indice)}},o.a.createElement("h4",null,e.datos.titulo),o.a.createElement("div",null,o.a.createElement("p",null,e.datos.cuerpo))),e.indiceSeleccionado==e.indice?o.a.createElement(_,{info:e.datos.info}):null)},D=(n(111),function(e){return o.a.createElement("div",{onClick:function(){e.deslizar(e.direccion)},className:1==e.direccion?"btn-deslizador btn-deslizador-izquierdo":"btn-deslizador btn-deslizador-derecho"},o.a.createElement(S.a,{icon:1==e.direccion?k.b:k.c,size:"lg",color:"#7a7a7a"}))}),z=(n(112),function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={posicionDeslizamiento:0,estaSeleccionado:!1,posicionInicioSeleccion:{x:0,y:0},mostrarDeslizadorIzquierdo:!1,mostrarDeslizadorDerecho:!0},n.carrusel=o.a.createRef(),n.tarjetaSeleccionada=o.a.createRef(),n.deslizar=n.deslizar.bind(Object(b.a)(n)),n.manejarSeleccion=n.manejarSeleccion.bind(Object(b.a)(n)),n.manejarMovimiento=n.manejarMovimiento.bind(Object(b.a)(n)),n.manejarDeseleccion=n.manejarDeseleccion.bind(Object(b.a)(n)),n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"manejarSeleccion",value:function(e){this.setState({estaSeleccionado:!0,posicionInicioSeleccion:{x:e.clientX,y:e.clientY}})}},{key:"manejarMovimiento",value:function(e){this.state.estaSeleccionado&&(console.log("esta arrastrando"),e.clientX>this.state.posicionInicioSeleccion.x?this.deslizar(1,Math.abs(e.clientX-this.state.posicionInicioSeleccion.x)):this.deslizar(2,Math.abs(e.clientX-this.state.posicionInicioSeleccion.x)))}},{key:"manejarDeseleccion",value:function(){this.setState({estaSeleccionado:!1},function(){console.log("fin arrastre")})}},{key:"deslizar",value:function(e,a){var n=this.carrusel.current.scrollLeft;switch(a||(a=500),e){case 1:n-=a;break;case 2:n+=a}this.carrusel.current&&(this.carrusel.current.scrollLeft=n)}},{key:"render",value:function(){var e=this,a=[];return this.props.tarjetas&&(a=this.props.tarjetas.map(function(a,n){return o.a.createElement(q,{key:n,datos:a,indice:n,indiceSeleccionado:e.state.indiceTarjetaSeleccionada,mostrarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:a})},ocultarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:null})}})})),o.a.createElement("div",{className:"recomendados",onMouseDown:this.manejarSeleccion,onMouseMove:this.manejarMovimiento,onMouseUp:this.manejarDeseleccion,onMouseLeave:this.manejarDeseleccion},o.a.createElement(D,{direccion:1,deslizar:this.deslizar,visible:this.mostrarDeslizadorIzquierdo}),o.a.createElement("div",{className:"encabezado-recomendados"},o.a.createElement("p",null,"Tus recomendados del d\xeda"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"carrusel-recomendados",ref:this.carrusel},a),o.a.createElement(D,{direccion:2,deslizar:this.deslizar,visible:this.mostrarDeslizadorDerecho}))}},{key:"componentDidUpdate",value:function(){}}]),a}(t.Component)),R=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"palabras"})}},{key:"componentDidUpdate",value:function(){}}]),a}(t.Component),M=(n(65),function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={indiceTarjetaSeleccionada:null},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=[];return this.props.tarjetas&&(a=this.props.tarjetas.map(function(a,n){return o.a.createElement(q,{key:n,datos:a,indice:n,indiceSeleccionado:e.state.indiceTarjetaSeleccionada,mostrarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:a})},ocultarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:null})}})})),o.a.createElement("div",{className:"contenedor-cuadricula-sinopsis tops"},o.a.createElement("div",{className:"encabezado-cuadricula-sinopsis"},o.a.createElement("p",null,"Tops"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"cuadricula-sinopsis"},a))}},{key:"componentDidUpdate",value:function(){}}]),a}(t.Component)),w=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={indiceTarjetaSeleccionada:null},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,a=[];return this.props.tarjetas&&(a=this.props.tarjetas.map(function(a,n){return o.a.createElement(q,{key:n,datos:a,indice:n,indiceSeleccionado:e.state.indiceTarjetaSeleccionada,mostrarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:a})},ocultarTarjetaInfo:function(a){e.setState({indiceTarjetaSeleccionada:null})}})})),o.a.createElement("div",{className:"contenedor-cuadricula-sinopsis ultimos"},o.a.createElement("div",{className:"encabezado-cuadricula-sinopsis"},o.a.createElement("p",null,"\xdaltimos publicados"),o.a.createElement("hr",null)),o.a.createElement("div",{className:"cuadricula-sinopsis"},a))}},{key:"componentDidUpdate",value:function(){}}]),a}(t.Component),L=(n(113),n(114),function(e){var a=[];return e.menu&&(a=e.menu.map(function(a,n){return o.a.createElement("div",{key:n,className:n==e.itemSeleccionado?"item-menu-seleccionado":"",onClick:function(){return e.seleccionar(n)}},a.nombre)})),o.a.createElement("div",{className:"menu-principal"},a)}),P=function(e){function a(e){var n;return Object(s.a)(this,a),(n=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={menu:[{nombre:"Global",ruta:""},{nombre:"Publicaciones",ruta:""},{nombre:"Comunidades",ruta:""},{nombre:"Concursos",ruta:""},{nombre:"Servicios",ruta:""}],itemSeleccionado:0},n}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"debajo-barra"},o.a.createElement(L,{menu:this.state.menu,itemSeleccionado:this.state.itemSeleccionado,seleccionar:function(a){console.log(a),e.setState({itemSeleccionado:a})}}),o.a.createElement("div",{className:"contenedor-principal"},o.a.createElement(z,{tarjetas:[{titulo:"Aventureros",cuerpo:"Cuando era joven, sol\xeda pasar las vacaciones de verano mochilenado  por el norte. Recorriendo el gran desierto por las noches y disfrutando del paisaje como solo un viajero solitario puede. Mi vieja siempre me aconsejaba que confiase m\xe1s en los ancianos, que no bebiera donde los caballos no lo hac\xedan y obedeciera, sin discusiones, las instrucciones del due\xf1o de casa.",info:{nombresAutor:"Giovanni Ricardo",imgAutor:"https://scontent.flim5-3.fna.fbcdn.net/v/t1.0-9/61536149_1750418458436626_5677145612177375232_n.jpg?_nc_cat=107&_nc_oc=AQneWfTjWVP1DZLZOZeRbdkHxpjHVsa2_LaJWBESsfHCSIjgyQDLDM5yW7WFKoaPH_w&_nc_ht=scontent.flim5-3.fna&oh=80ae269b66363f1e35cf0ef7b2c50fae&oe=5E2D0864",porcAmor:20,numCom:9}},{titulo:"Legend Stories (Season 1)",cuerpo:'Una organizaci\xf3n de humanos con poderes sobrenaturales llamada "Legends" se tienen que enfrentar a sus peores enemigos llamados los "etherianos" que aterrorizan a RunaTerra, un mundo lleno de magia y misterio. Los miembros de la organizaci\xf3n Legends mas importantes son Ahri, Akali, Evelynn y Kaisa entre otros que se ver\xe1n en sus caminos. Ellas sue\xf1an con vengarse de los etherianos juntas, pero el destino no ser\xe1 muy f\xe1cil para todas, puede que su destino sea la muerte o puede que no... A veces las cosas no salen como nosotros pensamos. \xbfQue har\xe1n para enfrentarse al ejercito mas fuerte RunaTerra?',info:{nombresAutor:"Jos\xe9 Jos\xe9",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:99,numCom:150300}},{titulo:"Rep\xe1rame",cuerpo:"Jungkook sufri\xf3 mucho durante su infancia; padecer obesidad y ser hijo de una mujer bipolar que se niega a tomar su medicamento y un hombre al que s\xf3lo le importa la herencia de su esposa no fue nada f\xe1cil. Ahora, que tuvo que mudarse a Se\xfal a sus 17 a\xf1os por una orden de restricci\xf3n en contra de su madre, s\xf3lo desea que el esfuerzo que ha invertido en mantenerse medianamente saludable rinda frutos. Y al parecer su recompensa vendr\xe1 con la apariencia de un lindo chico de cabello gris y sonrisa contagiosa.",info:{nombresAutor:"Camilo Sesto",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:98,numCom:2e5}},{titulo:"El primer amor nunca se olvida",cuerpo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",info:{nombresAutor:"Roberto Carlos",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:99,numCom:80001}},{titulo:"Destinos Cruzados",cuerpo:"Ella es una chica linda y t\xedmida sin muchos amigos, apesar de que es timida si se meten con sus amigos se meten con ella ya que los protege como si fueran parte de su familia, tiene un caracter fuerte pero no lo demuestra si no es necesario, aficionada de los deportes, la lectura, el cine, los videojuegos e ir a un grupo en la Iglesia con sus amigos. Ella nunca se ha enamorado por as\xed decirlo aunque a ella no le llama la atenci\xf3n ya que quiere acabar los estudios con un buen promedio. Lo que ella no sabe es que el destino le tiene pensado otra cosa para ella.",info:{nombresAutor:"Shakira Bella",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:75,numCom:21e3}}]}),o.a.createElement(w,{tarjetas:[{titulo:"Araceli",cuerpo:"Yo no s\xe9 qu\xe9 sucedi\xf3, Araceli. Quiz\xe1s te disgustaste por algo que nunca me enter\xe9. A pesar de conocerte tan poco tiempo te hab\xeda llegado a apreciar realmente. A veces, te extra\xf1o. Pienso en ti, quisiera que todo vuelva a ser como antes, cuando nos promet\xedamos tantas cosas que pod\xedan hacerse realidad. Quiz\xe1s tu orgullo fue mayor o te dijeron algo que cambi\xf3 radicalmente tu opini\xf3n.",info:{nombresAutor:"Chabelo Chabelo",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:35,numCom:12e3}},{titulo:"Fucking feelings",cuerpo:"T\xfa mirada siempre hace que me ilusione, con t\xfa mirada me siento  protegida, con t\xfa mirada me enamoras, T\xfa mirada es todo para m\xed. (Piccolo Scrittore)",info:{nombresAutor:"Arroz Chaufa",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:75,numCom:85e3}},{titulo:"\xbfD\xf3nde est\xe1 el perro?",cuerpo:"-Yo creo que los labios son las llaves de su templo. Besar sin amar es lo m\xe1s mezquino. Pero el perro me mir\xf3 estupefacto. Not\xe9 como una sonrisa se empez\xf3 a dibujar en su rostro alargado. Ante los ojos del perro, nada de eso era malo, sino risible. Hace mucho fr\xedo esta ma\xf1ana. En la facultad de psicolog\xeda veo a conocidos y desconocidos pasar.",info:{nombresAutor:"Alex Syntek",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:65,numCom:10}}]}),o.a.createElement(M,{tarjetas:[{titulo:"El pez",cuerpo:"Era una tarde cualquiera, una tarde dentro de una \xe9poca en la que todo parec\xeda ser m\xe1s simple. S\xed, sin duda una tarde inolvidable en la que el sol brillaba en su m\xe1ximo esplendor y normalmente nada pasaba de lo normal a lo extraordinario. Nada -me aventur\xe9 a pensar- excepto por lo que ocurri\xf3 ese mismo d\xeda.",info:{nombresAutor:"Mandala Baptiste",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:100,numCom:992999}},{titulo:"Lord Ferry",cuerpo:"Desde hace muy buen tiempo oigo voces y escucho gritar a la gente. Mi cuerpo s\xf3lido y tieso a veces suele moverse muy r\xe1pido sobre un riel. Otras veces, se queda quieto, esperando que sea la hora de que el siguiente grupo de gente se suba sobre m\xed. Las manos que siento sobre mis barandas de metal los hacen sentir protegidos, listos para los siguientes minutos de diversi\xf3n. Me alegro por ellos, porque tienen una libertad que no poseo. Ellos se van y yo me quedo esperando infinitamente el momento de terminar mi cansada jornada.",info:{nombresAutor:"Tarek Tarek",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:-67,numCom:6e3}},{titulo:"No hablo portugu\xe9s muy bien",cuerpo:"Abro los ojos. Por alguna raz\xf3n, siento que hace mucho tiempo no lo hago. Me encuentro echado en medio de un bello bosque abierto. Mi cabeza est\xe1 sobre un tronco y me permite ver un cielo azul lleno de nubes blancas, como dici\xe9ndome, te esperan excelentes d\xedas. El sol no lo puedo ver, pero el d\xeda est\xe1 en su m\xe1ximo apogeo. La tierra es de un color amarillo intenso, el cual no ensucia, sino que se asemeja a un colch\xf3n suave que me sostiene.",info:{nombresAutor:"Yohanna Panebra",imgAutor:"https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg",porcAmor:97,numCom:5e3}}]}),o.a.createElement(R,null)))}}]),a}(t.Component),F=n(17),H=(n(46),function(e,a){return function(n){n(x());var t={datos:{login:e,contrasena:a}};return fetch("https://temple-node.herokuapp.com/usuario/login/",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-type":"application/json"}}).then(function(e){if(e.ok)return e;var a=new Error("Ha ocurrido un error con el siguiente mensaje:\n"+e.status+" : "+e.statusText);throw a.response=e,a},function(e){throw new Error(e.message)}).then(function(e){return e.json()}).then(function(e){0===Object.keys(e).length?(console.log("Sesi\xf3n no iniciada : Datos incorrectos"),n(G("Datos incorrectos"))):(!function(e,a,n){var t="";if(n){var o=new Date;o.setTime("".concat(o.getTime()).concat(n||2592e6)),t='; expiryDate=" '.concat(o.toUTCString())}document.cookie="".concat(e,"=").concat(a||"").concat(t,"; path=/")}("usuario",e.galleta,60),n(U(e)))}).catch(function(e){console.log("Sesi\xf3n no iniciada : "+e.message),n(G(e.message))})}}),x=function(){return{type:"INICIANDO_SESION"}},U=function(e){return{type:"SESION_INICIADA",payload:e}},G=function(e){return{type:"SESION_NO_INICIADA",payload:e}},W=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(T,null,o.a.createElement(d.c,{exact:!0,path:"/",component:P}),o.a.createElement(d.c,{path:g.ruta,component:P}),o.a.createElement(d.b,{to:g.ruta,component:P})))}}]),a}(t.Component),B=Object(d.e)(Object(F.connect)(function(e){return{sesion:e.sesion}},function(e){return{iniciarSesion:function(a,n){return e(H(a,n))}}})(W)),J=n(18),Q=n(86),Y=n.n(Q),X=n(87),Z=n.n(X);function K(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function V(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?K(n,!0).forEach(function(a){Object(p.a)(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{estaCargando:!1,mensError:null,usuario:null},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INICIANDO_SESION":return V({},e,{estaCargando:!0,mensError:null,usuario:null});case"SESION_INICIADA":return V({},e,{estaCargando:!1,mensError:null,usuario:a.payload});case"SESION_NO_INICIADA":return V({},e,{estaCargando:!1,mensError:a.payload,usuario:null});default:return e}},ee=Object(J.createStore)(Object(J.combineReducers)({sesion:$}),Object(J.applyMiddleware)(Y.a,Z.a)),ae=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(F.Provider,{store:ee},o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(B,null))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,a,n){},88:function(e,a,n){e.exports=n(151)},93:function(e,a,n){},94:function(e,a,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.45f831f6.chunk.js.map