import React from "react";
import ResultsTable from "./ResultsTable.js";
import MapLoader from "./Maps.js";

function Results({ results, searchQuery }) {
  const filtered = results.filter((val) => {
    const str = JSON.stringify(val).toLowerCase();
    return str.indexOf(searchQuery.toLowerCase()) !== -1;
  });
  return (
    <div style={{ margin: "30px 0" }}>
      <h3>Results</h3>
      {results.length ? (
        <>
          <MapLoader locations={filtered} />
          <ResultsTable rows={filtered} />
          <div
            className="Resources"
            //not sure if the style section below is used correctly
            style={{
              position: "sticky",
              top: 0,
              margin: "20px 10px",
              paddingTop: 5
            }}
          >
            <h3>Additional Resources</h3>
            <h4>
              Here are some links to help you find more information about your
              potential new home!
            </h4>
            <p>
              Where our{" "}
              <a
                href="https://hudgis-hud.opendata.arcgis.com/datasets/multifamily-properties-assisted/data"
                target="_blank"
              >
                data
              </a>{" "}
              came from.
            </p>
            <p>
              A{" "}
              <a
                href="https://hudgis-hud.opendata.arcgis.com/datasets/jobs-proximity-index"
                target="_blank"
              >
                dataset{" "}
              </a>{" "}
              to find information about jobs available in your area.
            </p>
            <p>
              Another{" "}
              <a
                href="https://hudgis-hud.opendata.arcgis.com/datasets/school-proficiency-index"
                target="_blank"
              >
                {" "}
                dataset{" "}
              </a>{" "}
              to find information about the quality of public schools in your
              area.
            </p>
            <p>
              A{" "}
              <a
                href="https://www.usa.gov/housing-help-audiences"
                target="_blank"
              >
                link
              </a>{" "}
              to the United States government website for nationwide housing
              help.
            </p>
          </div>
        </>
      ) : (
        "Empty"
      )}
    </div>
  );
}

export default Results;
