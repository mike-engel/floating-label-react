import PropTypes from "prop-types";
import React from "react";

export const labelStyles = {
  boxSizing: "border-box",
  display: "inline-block",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  paddingTop: 5,
  position: "relative"
};

export const spanStyles = {
  boxSizing: "border-box",
  fontSize: "1rem",
  left: 0,
  padding: "17px 0 13px 0",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  transition: "font-size 200ms, padding 200ms",
  zIndex: 1
};

export const floatingStyles = {
  fontSize: "0.625rem",
  padding: 0
};

export const inputStyles = {
  border: "none",
  borderBottom: "1px solid black",
  boxSizing: "border-box",
  fontFamily:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  fontSize: "1rem",
  padding: "12px 0 8px 0"
};

export const focusStyles = {
  borderColor: "blue",
  outline: "none"
};

class FloatingLabel extends React.Component {
  state = {
    floating: false,
    focused: false,
    value: this.props.value
  };

  handleChange = evt => {
    const value = evt.target.value;

    this.props.onChange(evt);

    this.setState({
      value
    });
  };

  handleFocusChange = evt => {
    evt.type === "focus" ? this.props.onFocus(evt) : this.props.onBlur(evt);

    this.setState({
      focused: !this.state.focused
    });
  };

  isFloating(value, focused) {
    return value.length || focused;
  }

  render() {
    const { value, focused } = this.state;
    const { styles } = this.props;
    const floating = this.isFloating(value, focused);
    const Node = this.props.element;
    const floatingStyle = floating && Object.assign({}, floatingStyles, styles.floating);
    const focusStyle = focused && Object.assign({}, focusStyles, styles.focus);
    const labelStyle = Object.assign({}, labelStyles, styles.label);
    const spanStyle = Object.assign(
      {},
      spanStyles,
      styles.span,
      floatingStyle
    );
    const inputStyle = Object.assign(
      {},
      inputStyles,
      styles.input,
      focusStyle
    );

    return (
      <label htmlFor={this.props.id} style={labelStyle}>
        <span style={spanStyle}>
          {this.props.placeholder}
        </span>
        <Node
          autoCapitalize={this.props.autoCapitalize}
          autoComplete={this.props.autoComplete}
          autoFocus={this.props.autoFocus}
          defaultValue={this.props.value}
          id={this.props.id}
          inputMode={this.props.inputMode}
          max={this.props.max}
          maxLength={this.props.maxLength}
          min={this.props.min}
          minLength={this.props.minLength}
          name={this.props.name}
          onBlur={this.handleFocusChange}
          onChange={this.handleChange}
          onFocus={this.handleFocusChange}
          pattern={this.props.pattern}
          readOnly={this.props.readOnly}
          required={this.props.required}
          spellCheck={this.props.spellCheck}
          step={this.props.step}
          style={inputStyle}
          type={this.props.type}
        />
      </label>
    );
  }
}

FloatingLabel.propTypes = {
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  element: PropTypes.oneOf(["input", "textarea"]),
  id: PropTypes.string.isRequired,
  inputMode: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.any,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  spellCheck: PropTypes.bool,
  step: PropTypes.number,
  styles: PropTypes.object,
  type: PropTypes.oneOf(["text", "password", "url", "search", "email", "tel"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FloatingLabel.defaultProps = {
  autoFocus: false,
  disabled: false,
  element: "input",
  name: "",
  onBlur: () => { },
  onChange: () => { },
  onFocus: () => { },
  placeholder: "",
  readOnly: false,
  required: false,
  step: 1,
  styles: {},
  type: "text",
  value: ""
};

export default FloatingLabel;
