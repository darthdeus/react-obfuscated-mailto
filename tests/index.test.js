import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ObfuscatedMailto from "../src/index";

jest.useFakeTimers();

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render the email after a specified amount of time", () => {
  const email = "foo@example.com";

  act(() => {
    render(
      <ObfuscatedMailto step={500} loadTime={1000} base64Email={btoa(email)} />,
      container
    );
  });

  expect(container.textContent).toEqual("Loading ");

  act(() => {
    jest.advanceTimersByTime(550);
  });

  expect(container.textContent).toEqual("Loading .");

  act(() => {
    jest.advanceTimersByTime(1100);
  });

  expect(container.textContent).toEqual(email);
});
