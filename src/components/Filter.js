import React, { useState } from "react";

function Filter({ searchQuery, changeQuery }) {
  return (
    <div style={{ margin: "30px 0", position: "sticky", bottom: 0 }}>
      Filter:
      <input
        value={searchQuery}
        onChange={(e) => changeQuery(e.target.value)}
        style={{ width: 200, margin: 20 }}
      />
    </div>
  );
}

export default Filter;
