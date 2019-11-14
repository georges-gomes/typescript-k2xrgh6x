// Import the LitElement base class and html helper function
import { LitElement, html, css, property } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  @property() name: string = "World";

  static get styles() {
    return css`
      .btn {
        font-size: 300%;
        border: 3px solid #0099ff;
        border-radius: 15px;
        background: #0099ff50;
      }
    `;
  }

  render() {
    return html`
      <button class="btn">Hello ${this.name}!</button>
    `;
  }
}
