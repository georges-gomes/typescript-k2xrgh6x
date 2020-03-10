import "./index.js";
import { html } from "lit-html";
import { centered } from "@webcomponents-dev/decorators-lit";

export default {
  decorators: [centered]
};

export const story1 = () => html`
  <custom-element name="😺 Kitty"></custom-element>
`;

export const story2 = () => html`
  <custom-element name="🐶 Buddy"></custom-element>
`;

export const story0 = () => html`
  <custom-element name="🦄 Unicorn"></custom-element>
`;
