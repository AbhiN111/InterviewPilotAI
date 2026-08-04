import "./Input.css";

function Input({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  children,
}) {
  return (
    <div className="input-group">

      {label && <label>{label}</label>}

      <div className="input-wrapper">

        {icon && (
          <span className="input-icon">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />

        {children}

      </div>

    </div>
  );
}

export default Input;   