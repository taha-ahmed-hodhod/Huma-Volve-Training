import React from 'react'
interface Table {
  columns: string[];
  data: Record<string, unknown>[];
  striped?: boolean;
}
const Table = ({
  columns,
  data,
  striped
}: Table) => {
  return (
    <table className={striped ? "table striped" : "table"}>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={column}>{column}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>
                {String(row[column])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table