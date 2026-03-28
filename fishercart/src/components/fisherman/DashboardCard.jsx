export default function DashboardCard({ icon, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-green-100 hover:bg-green-200 transition p-6 rounded-xl shadow cursor-pointer text-center"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}