export interface CaseStudyTableRow {
  metric: string;
  value: string;
}

export interface CaseStudyTableProps {
  headers: [string, string];
  rows: CaseStudyTableRow[];
}

export function CaseStudyTable({ headers, rows }: CaseStudyTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 my-4">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="px-4 py-3 font-semibold text-black">{headers[0]}</th>
            <th className="px-4 py-3 font-semibold text-black">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50"
            >
              <td className="px-4 py-3 font-medium text-black">{row.metric}</td>
              <td className="px-4 py-3 text-gray-700">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
