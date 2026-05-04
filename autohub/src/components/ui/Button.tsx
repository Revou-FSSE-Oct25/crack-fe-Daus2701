type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded font-medium transition";

  const styles = {
    primary:
      "bg-[var(--color-primary)] text-white hover:opacity-90",

    outline:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}