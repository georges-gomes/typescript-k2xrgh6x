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

describe("Test Kitty", function() {
  it("should be Hello emoji and Kitty", async function() {
    const el = await fixture(stories.story1());
    expect(el).shadowDom.to.equal(
      `<button class="btn">Hello 😺 Kitty!</button>`
    );
  });

  it("click should CustomEvent meow", async function() {
    const el = await fixture(stories.story2());
    const button = el.shadowRoot.firstElementChild;
    expect(button).to.be.a("HTMLButtonElement");
    setTimeout(() => button.click());
    const { detail } = await oneEvent(el, "meow");
    expect(detail.sound).to.equals("meow");
  });
});
