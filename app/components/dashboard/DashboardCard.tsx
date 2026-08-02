type DashboardCardProps = {
  title: string;
  value: string | number;
  description: string;
};

export default function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-green-900 bg-[#102017] p-6 shadow-lg transition hover:border-green-600">
      <h3 className="text-lg font-semibold text-green-300">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}