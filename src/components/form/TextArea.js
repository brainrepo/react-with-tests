function TextArea({ label, name, data, errors, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        value={data?.hasOwnProperty(name) ? data[name] : ""}
        onChange={onChange}
        name={name}
        id={name}
      />
      {errors.hasOwnProperty(name) && <p>{errors[name]}</p>}
    </>
  );
}

export default TextArea;
