export default function Input({ label, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "12px" }}>
      {label && <label style={{ marginBottom: "4px" }}>{label}</label>}
      <input {...props} />
    </div>
  );
}
