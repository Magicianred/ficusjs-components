const t={create(t){!function({createComponent:t,renderer:e,html:o}){const n="fc-dropdown__menu--open";t("fc-dropdown",{renderer:e,mounted(){const t=this.querySelector(".fc-dropdown__button"),e=this.querySelector(".fc-dropdown__menu");t.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),e.classList.toggle(n),this.emit("toggle",{instance:this,isOpen:e.classList.contains(n)}),e.classList.contains(n)?window.addEventListener("click",this.hideDropdown):window.removeEventListener("click",this.hideDropdown)}))},hideDropdown(t){const e=t.target.closest("fc-dropdown");e&&e===this||this.querySelector(".fc-dropdown__menu").classList.remove(n)},render(){return o`<div class="fc-dropdown"><button type="button" class="fc-dropdown__button">Dropdown</button><div class="fc-dropdown__menu">${this.slots.default}</div></div>`}})}(t)}};export{t as module};
