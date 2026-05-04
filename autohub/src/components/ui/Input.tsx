export default function Input({ type = "text", placeholder }: any) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border p-3 rounded focus:ring-2 focus:ring-[var(--color-primary)]"
    />
  );
}