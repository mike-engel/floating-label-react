# floating-label-react

> A floating-label component using react without any dependencies

This react component exists to provide a simple API for floating label inputs in react, while still being fully customizeable.

# Installation

Use npm, yarn, or whatever npm package manager variant you use to install `floating-label-react`

```sh
# npm
npm install floating-label-react

# yarn
yarn add floating-label-react
```

# Usage

`FloatingLabel` takes in most standard [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes) available in HTML5.

## Basic usage

It's important to note that as of 1.0, floating-label-react is now a display component only. This means you need to manage form state via [react-final-form](https://github.com/final-form/react-final-form), [formik](https://jaredpalmer.com/formik/), something similar, your own custom state machine.

```js
import FloatingLabel from "floating-label-react";

<FloatingLabel
  id="email"
  name="email"
  placeholder="Your email"
  type="email"
  value={this.state.value}
  onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
/>;
```

## Textarea vs. Input

If you'd like a textarea instead, use the `component` prop.

```js
import FloatingLabel from "floating-label-react";

<FloatingLabel
  id="email"
  component="textarea"
  name="email"
  placeholder="Your email"
  type="email"
  value={this.state.value}
  onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
/>;
```

## Styling

`FloatingLabel` is fully stylable through the `className` prop. This works well with vanilla CSS, SASS, Less, styled-components, emotion, etc.!

```js
import FloatingLabel from "floating-label-react";

<FloatingLabel
  id="email"
  name="email"
  placeholder="Your email"
  className="custom-class"
  type="email"
  value={this.state.value}
  onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
/>;
```

Additionally, a set of default styles are available within the package at `styles.css`. If your bundler support it, you can import them within your application.

```js
import FloatingLabel from "floating-label-react";
import "floating-label-react/styles.css";

<FloatingLabel
  id="email"
  name="email"
  placeholder="Your email"
  type="email"
  value={this.state.value}
  onChange={evt => this.setState(() => ({ value: evt.currentTarget.value }))}
/>;
```

# Contributing

Issues and Pull requests are always welcome. Please keep in mind that there is a code of conduct.

To get started, install the dev dependencies and build the exports if needed.

```sh
# install dependencies
npm install

# build the project for distribution
npm run build
```

# [Changelog](CHANGELOG.md)

# [Code of Conduct](CODE_OF_CONDUCT.md)

# [License](LICENSE.md)
