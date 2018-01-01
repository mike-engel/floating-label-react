# floating-label-react

> A floating-label component using react without any dependencies

This react component exists to provide a robust API for floating label inputs in react, while still being fully customizeable.

# Installation

Use npm, yarn, or whatever npm package manager variant you use to install `floating-label-react`

```sh
# npm
npm install floating-label-react

# yarn
yarn add floating-label-react
```

# Usage

`FloatingLabel` takes in most standard [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#Attributes) available in HTML5. Here is the most basic usage of `FloatingLabel`

```js
import FloatingLabel from 'floating-label-react'

<FloatingLabel
  id='email'
  name='email'
  placeholder='Your email'
  type='email'
/>
```

If you'd like a textarea instead, use the `element` prop.

```js
import FloatingLabel from 'floating-label-react'

<FloatingLabel
  id='email'
  element='textarea'
  name='email'
  placeholder='Your email'
  type='email'
/>
```

`FloatingLabel` is fully customizeable, so you're free to pass in your own props via the `styles` attribute. It does use some default styles I think look nice, but feel free to use your own, or extend the default ones!

```js
import FloatingLabel, {
  floatingStyles,
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react'

const inputStyle = {
  floating: {
    ...floatingStyles,
    color: 'blue'
  },
  focus: {
    ...focusStyles,
    borderColor: 'blue'
  },
  input: {
    ...inputStyles,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '100%'
  },
  label: {
    ...labelStyles,
    marginTop: '.5em',
    width: '100%'
  }
}

<FloatingLabel
  id='email'
  name='email'
  placeholder='Your email'
  styles={inputStyle}
  type='email'
/>
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

# [Code of Conduct](CODE_OF_CONDUCT.md)

# [License](LICENSE.md)
