export const displayCols = [
  {
    display: "Address",
    field_name: "STD_ADDR"
  },
  {
    display: "City",
    field_name: "STD_CITY"
  },
  {
    display: "State",
    field_name: "STD_ST"
  },
  {
    display: "Rent / Month",
    field_name: "RENT_PER_MONTH"
  },
  {
    display: "Units Available",
    field_name: "TOTAL_ASSISTED_UNIT_COUNT",
    field2: "LI_UNITS"
  },
  {
    display: "Type of Client",
    field_name: "CLIENT_GROUP_NAME"
  },
  {
    display: "Landlord Contact Number",
    field_name: "PROPERTY_ON_SITE_PHONE_NUMBER"
  }
];

export const LatLngLit = (place) => ({ lat: place["LAT"], lng: place["LON"] });

//what is obj display??
export const displayColNames = displayCols.map((obj) => obj["field_name"]);
