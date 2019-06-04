import React, {useState} from "react";
import PropTypes from "prop-types";

const TodoTextInput = (props) => {
  const [text, setText] = useState(props.text || '');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    props.handleInputFieldUpdate(text.trim());
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      props.handleInputFieldUpdate(text.trim());
    }
  };

  return (
    <input
      className="edit"
      autoFocus={true}
      type="text"
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleSubmit}
    />
  );
};

TodoTextInput.propTypes = {
  handleInputFieldUpdate: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
};

export default TodoTextInput;
