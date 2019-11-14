import { html } from "lit-html";

export const story1 = () => html`
  <custom-element name="😺 Kitty"></custom-element>
`;

export const story2 = () => html`
  <custom-element name="🐶 Doggy"></custom-element>
`;

export const story3 = () =>
  html`
    ${story1()} ${story2()}
  `;
