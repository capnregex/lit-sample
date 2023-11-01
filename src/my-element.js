import {LitElement, html} from 'lit';
import styles from './my-element.scss'

export class MyElement extends LitElement {
  static styles = styles
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html`
    <p>Hello ${this.name}!</p>
    <input @input=${this.changeName} placeholder="Enter your name">
    <button @click=${this.handleClick}>Click me!</button>
    `;
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  handleClick(event) {
    this.name = 'World'
  }
}
customElements.define('my-element', MyElement);

