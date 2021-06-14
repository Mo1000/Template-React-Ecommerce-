import React from "react";

const handleChange = (event, input, onImageChange) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    if (/\.(jpe?g|png)$/i.test(imageFile?.name) === false) {
      input.onChange(null);
      onImageChange(null);
      alert("Please select image file only!");
    } else {
      var fileSize = imageFile.size / 1024 / 1024; // in MB
      if (fileSize > 5) {
        alert(`Photo size must be less or equal to 5MB. Your photo size is ${fileSize}`);
      } else {
        input.onChange(imageFile);
        onImageChange(imageFile);
      }
    }
  } else {
    input.onChange(null);
    onImageChange(null);
  }
};

const renderFileInput = (props) => {
  const {
    input,
    onImageChange,
    tips,
    meta: { touched, error, warning },
  } = props;
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="form-file form-file-sm">
          <input
            type="file"
            name="formFile"
            className="form-file-input"
            id={input.name}
            accept="image/x-png,image/jpeg"
            onChange={(event) => handleChange(event, input, onImageChange)}
            required
          />
          <label className="form-file-label" htmlFor={input.name}>
            <span className="form-file-text">Choose file...</span>
            <span className="form-file-button">Browse</span>
          </label>
          {tips && <div className="form-text">{tips}</div>}
          {touched &&
            ((error && <div className="invalid-feedback">{error}</div>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    </React.Fragment>
  );
};
export default renderFileInput;
