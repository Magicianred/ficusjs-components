import{p as s,g as t,i as r,n as e,s as i}from"./set-attributes-b12391de.js";const p={create(p){!function({createComponent:p,renderer:o,html:a,nothing:n}){p("fc-form-input",{renderer:o,props:s,computed:{internalId(){return this.props.id?this.props.id:t("input")},className(){return this.props.type===r.RADIO||this.props.type===r.CHECKBOX?"fc-form__check"+(this.props.switch?" fc-form__switch":""):this.props.type===r.RANGE?"fc-form__range":this.props.type===r.SUBMIT?"fc-form__submit":"fc-form__control"},containerClassName(){return this.props.inline||this.props.type===r.SUBMIT?"fc-form__group fc-form__group--inline":this.props.type===r.RADIO||this.props.type===r.CHECKBOX?"fc-form__group fc-form__group--rc":"fc-form__group"},inputClassName(){return this.props.type===r.RADIO||this.props.type===r.CHECKBOX?"fc-form__input fc-form__input--reverse":"fc-form__input"},labelClassName(){return"fc-form__label"+(this.props.inline?"":" fc-form__label--block")},isValidType(){return-1!==Object.values(r).indexOf(this.props.type)},for(){return e.indexOf(this.props.type)>-1||!this.props.label?"":this.internalId}},created(){if(!this.isValidType)throw new Error(`${this.props.type} is not a valid input type`);this.classList.add("fc-form")},mounted(){i(this.querySelector("input"),s,this.props)},updated(){i(this.querySelector("input"),s,this.props)},render(){return this.isValidType?a`<div class="${this.containerClassName}"><div class="${this.inputClassName}"><label class="${this.labelClassName}" for="${this.for}">${this.props.label}</label> <input name="${this.props.name}" id="${this.internalId}" type="${this.props.type}" class="${this.className}"> ${this.slots.default}</div><div aria-live="polite" class="fc-form__invalid-feedback"><span></span></div><div class="fc-form__help-text">${this.props.helpText}</div></div>`:n}})}(p)}};export{p as module};