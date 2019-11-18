// Import the LitElement base class and html helper function
import { LitElement, html, css, property } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  @property() name: string = "World";
  @property() sound: string = "woof";

  static get styles() {
    return css`
      .btn {
        font-size: 300%;
        border: 3px solid #0099ff;
        border-radius: 15px;
        color: white;
        background: linear-gradient(
          to right,
          yellow,
          green,
          cyan,
          blue,
          violet
        );
      }
    `;
  }

  onClick() {
    this.dispatchEvent(
      new CustomEvent("bark", { detail: { sound: this.sound } })
    );
  }

  render() {
    return html`
      <button class="btn" @click="${this.onClick}">
        Hello ${this.name}!
      </button>
    `;
  }
}
