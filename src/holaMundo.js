import { LitElement } from 'lit-element';

export class HolaMUndo extends LitElement {
    static get properties() {
        return {
        name: { type: String },
        };
    }
    
    constructor() {
        super();
        this.name = 'Mundo';
    }
    
    render() {
        return html`
        <p>Hola ${this.name}!</p>`;
    }
}
customElements.define('holaMundo', HolaMUndo);