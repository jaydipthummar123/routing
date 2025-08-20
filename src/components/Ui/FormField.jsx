import { ErrorMessage, Field } from "formik";

const FormField = ({
  label,
  name,
  type = "text",
  as,
  step,
  placeholder,
  children,
}) => (
  <div className="flex flex-col mb-4">
    <label htmlFor={name} className="mb-1 font-medium text-white">
      {label}
    </label>

    {as === "select" ? (
      <Field
        as="select"
        id={name}
        name={name}
        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none text-white"
      >
        {children} {/* ✅ safe because it's a <select> */}
      </Field>
    ) : as === "textarea" ? (
      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none text-white"
      />
    ) : (
      <Field
        id={name}
        name={name}
        type={type}
        step={step}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 outline-none text-white"
      />
    )}

    <ErrorMessage
      name={name}
      component="div"
      className="text-red-500 text-sm mt-1"
    />
  </div>
);

export default FormField;
