import React, { useState } from "react";
// filter
const fields = [
  { url_param: "STD_ST", field: "State" },
  { url_param: "STD_CITY", field: "City" },
  { url_param: "STD_ZIP5", field: "Zip Code" }
];

const getUserInput = () =>
  fields
    .map(({ url_param }) =>
      document.getElementById(url_param).value !== ""
        ? url_param + " = '" + document.getElementById(url_param).value + "'"
        : ""
    )
    .filter((val) => val !== "")
    .join(" AND ");
// cALL OTHER APIS
function callAPI(setter) {
  // create API call string
  const baseUrlStr =
    "https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/Multifamily_Properties_Assisted/FeatureServer/0/query?outFields=*&f=json&where=";
  const baseUrlStr2 =
    "https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/LIHTC/FeatureServer/0/query?outFields=*&f=json&where=";
  const baseUrlStr3 =
    "https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/Public_Housing_Authorities/FeatureServer/0/query?outFields=*&f=json&where=";
  // Call api for all those fields
  fetch(baseUrlStr + getUserInput())
    .then((res) => res.text())
    .then((res) => JSON.parse(res)["features"])
    .then((places) => places.map((place) => place["attributes"]))
    // .then((places) => setter(places))
    .then((places) => {
      const seen = new Set(places.map((place) => place["STD_ADDR"]));
      fetch(baseUrlStr2 + getUserInput())
        .then((res) => res.text())
        .then((res) => JSON.parse(res)["features"])
        .then((places) =>
          places
            .map((place) => place["attributes"])
            .filter((place) => {
              seen.add(place["STD_ADDR"]);
              return !seen.has(place["STD_ADDR"]);
            })
        )
        .then((places2) => [...places, ...places2])
        .then((prevPlaces) => {
          fetch(baseUrlStr3 + getUserInput())
            .then((res) => res.text())
            .then((res) => JSON.parse(res)["features"])
            .then((places) =>
              places
                .map((place) => place["attributes"])
                .filter((place) => !seen.has(place["STD_ADDR"]))
            )
            .then((places) => setter([...prevPlaces, ...places]));
        });
    });
}

// Formatting for users to search stuff
function UserInput({ setResults, results }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        margin: "20px 10px",
        paddingTop: 5
      }}
    >
      <h3>Search</h3>
      <form
        style={{ margin: 5 }}
        onSubmit={(e) => {
          e.preventDefault();
          callAPI(setResults, results);
        }}
      >
        {fields.map(({ field, url_param }) => (
          <span key={url_param}>
            <label>
              {field}{" "}
              <input
                id={url_param}
                style={{ maxWidth: 100, marginRight: 20 }}
              />
            </label>{" "}
          </span>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserInput;
