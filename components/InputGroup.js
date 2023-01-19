export default function InputGroup({
  placeholder,
  type,
  value,
  setValue,
  error,
  maxLength,
  require,
}) {
  return (
    <div className="mb-3">
      <input
        className="roundedInput"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        required={require}
      />
      <small className="text-red-500 ">{error}</small>
    </div>
  );
}
