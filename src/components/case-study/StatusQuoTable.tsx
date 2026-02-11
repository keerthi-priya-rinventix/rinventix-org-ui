export type StatusQuoRow = {
  metric: string;
  statusQuo: string;
};

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 inline-block ml-1"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function StatusQuoTable({ rows }: { rows: StatusQuoRow[] }) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#F9FAFB]">
            <th className="text-left font-satoshi font-medium text-[14px] text-gray-500 py-4 px-5">
              Metric
              <ChevronDown />
            </th>
            <th className="text-left font-satoshi font-medium text-[14px] text-gray-500 py-4 px-5">
              Status Quo
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.metric}
              className={
                index < rows.length - 1
                  ? "border-b border-gray-100"
                  : undefined
              }
            >
              <td className="font-satoshi font-semibold text-[14px] text-[#141415] py-4 px-5">
                {row.metric}
              </td>
              <td className="font-satoshi font-normal text-[14px] text-[#2C3A4B] py-4 px-5">
                {row.statusQuo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
