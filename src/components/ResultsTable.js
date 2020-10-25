import React from "react";
import { displayCols } from "./Constants.js";
import Table from "sort-table-react";

const ResultsHeadings = () => (
  // {
  //   const t = displayCols.map((col) => ({
  //     message: col["display"],
  //     target: col["field_name"]
  //   }));
  //   t.push({ message: "", target: "null" });

  //   console.log(t);
  //   return t;
  // };
  <tr>
    {displayCols.map((col, idx) => (
      <th
        key={idx}
        className="sort"
        data-sort={col["field_name"]}
        style={{ width: "20%" }}
      >
        {col["display"]}
      </th>
    ))}
  </tr>
);

const ResultData = (
  { rows } //{
) => (
  // const vals = rows.map((item, idx) => {
  //   const obj = { id: idx };
  //   displayCols.map((col) => {
  //     obj[col["field_name"]] = item[col["field_name"]];
  //   });
  //   return obj;
  // });
  <tbody className="list">
    {rows.map((item) => (
      <tr className="cool">
        {displayCols.map((col, idx) => (
          <td key={idx} className={col["field_name"]}>
            {item[col["field_name"]] === undefined &&
            col["field2"] !== undefined
              ? item[col["field2"]]
              : item[col["field_name"]]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
// console.log(vals);
// return vals;
// };

const ResultsTable = ({ rows }) => {
  console.log(rows);
  return (
    // <Table headers={ResultsHeadings()} tableContent={ResultData(rows)} />
    <div id="results">
      <table>
        <thead>
          <ResultsHeadings />
        </thead>
        <ResultData rows={rows} />
      </table>
    </div>
  );
};

export default ResultsTable;
