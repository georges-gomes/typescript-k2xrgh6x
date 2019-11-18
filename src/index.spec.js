// BDD-Style Testing (powered by https://mochajs.org/)
//
import * as stories from "./index.stories.js";
import { oneEvent, fixture } from "@open-wc/testing-helpers";
//
// Use any assert library
import chai from "chai/chai.js";
import { chaiDomDiff } from "@open-wc/semantic-dom-diff";
chai.use(chaiDomDiff);
const expect = chai.expect;

describe("Story 2", function() {
  it("should be Hello emoji and Buddy", async function() {
    const el = await fixture(stories.story2());
    expect(el).shadowDom.to.equal(
      `<button class="btn">Hello 🐶 Buddy!</button>`
    );
  });

  it("click should CustomEvent woof", async function() {
    const el = await fixture(stories.story2());
    const button = el.shadowRoot.firstElementChild;
    expect(button).to.be.a("HTMLButtonElement");
    setTimeout(() => button.click());
    const { detail } = await oneEvent(el, "bark");
    expect(detail.sound).to.equals("woof");
  });
});
