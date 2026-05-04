export default function Card({ children }: any) {
  return (
    <div className="bg-white p-6 rounded shadow">
      {children}
    </div>
  );
}