const e={create(e){!function({createComponent:e,renderer:t,html:s}){e("fc-sheet",{renderer:t,props:{position:{type:String,default:"top"},backdrop:{type:Boolean,default:!1}},mounted(){this.addClasses()},show(){this.toggleSheet()},close(){this.toggleSheet()},addClasses(){const e=["fc-sheet"];switch(this.props.position){case"right":e.push("fc-sheet--right");break;case"bottom":e.push("fc-sheet--bottom");break;case"left":e.push("fc-sheet--left");break;default:e.push("fc-sheet--top")}e.forEach((e=>this.classList.add(e)))},findParent(e,t){if(t(e))return e;for(;e.parentNode;)if(t(e=e.parentNode))return e;return null},hideSheetHandler(e){const t=document.querySelectorAll(".fc-sheet--in-view");for(let s=0;s<t.length;s++){const i=t[s];this.findParent(e.target,(e=>e&&e.classList&&e.classList.contains("fc-sheet")&&e.classList.contains("fc-sheet--in-view")))||(e.preventDefault(),e.stopPropagation(),i.classList.remove("fc-sheet--in-view"),window.removeEventListener("click",this.hideSheetHandler),this.emit("dismiss",{instance:i}))}},toggleSheet(){this.classList.toggle("fc-sheet--in-view");let e="close";this.classList.contains("fc-sheet--in-view")&&(e="show"),this.emit(e,{instance:this}),"show"===e&&setTimeout((()=>{window.addEventListener("click",this.hideSheetHandler)})),"close"===e&&window.removeEventListener("click",this.hideSheetHandler)},render(){const e=s`<div class="fc-sheet__inner">${this.slots.default}</div>`;return this.props.backdrop?s`<div class="fc-sheet__wrapper">${e}</div>`:e}})}(e)}};export{e as module};
