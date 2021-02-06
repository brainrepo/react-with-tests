function Input({ label, name, data, errors, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input value={data?.hasOwnProperty(name) ? data[name] : ""} onChange={onChange} name={name} id={name} />
      {errors.hasOwnProperty(name) && (
        <p>{errors[name]}</p>
      )}
    </>
  );
}

export default Input;
