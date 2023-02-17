import { useEffect, useState } from "react";

function TextArea(props) {
  const { value, name, placeholder, disabled } = props;
  const [data, setData] = useState(value || "");

  useEffect(() => {
    setData(value);
  }, [value]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <textarea
      className="border p-3 block w-full h-32 rounded-xl bg-slate-800 border-slate-900"
      value={data}
      onChange={handleChange}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

export default TextArea;
