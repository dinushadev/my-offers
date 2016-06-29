import React, {PropTypes} from 'react';
import TextField from 'material-ui/lib/text-field';

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length >0){
    wrapperClass +=" " +'has-error';
  }

  return (
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field" >

            <TextField
              hintText={placeholder}
              name={name}
              value={value}
              errorText={error}
              floatingLabelText={placeholder}
              onChange={onChange} />
          </div>
      </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};


export default TextInput;
