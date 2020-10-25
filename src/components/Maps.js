import React, { useState, useCallback, useEffect, Spinner } from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { LatLngLit } from "./Constants.js";
import Markers from "./Markers.js";

function update(locations, map, setMap) {
  if (window.google) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.map((place) => bounds.extend(LatLngLit(place)));
    if (map !== null) {
      map.fitBounds(bounds);
      setMap(map);
    }
  }
}

function Map({ locations }) {
  const [map, setMap] = useState(null);

  useEffect(() => update(locations, map, setMap), [locations, map, setMap]);

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "auto",
        height: "400px"
      }}
      onLoad={useCallback((map) => update(locations, map, setMap), [locations])}
      onUnmount={useCallback((map) => setMap(null), [])}
    >
      <Markers locations={locations} />
    </GoogleMap>
  );
}

function MapLoader({ locations }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <LoadScript googleMapsApiKey="AIzaSyAlbbLnBbWBm3dT8yTEoAd241l30XKqR2E">
      <Map locations={locations} />
    </LoadScript>
  );
  // const { isLoaded, loadError } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyAlbbLnBbWBm3dT8yTEoAd241l30XKqR2E"
  // });
  // console.log(isLoaded, loadError);

  // if (loadError !== undefined) {
  //   return <div>Map cannot be loaded right now, sorry.</div>;
  // }

  // return isLoaded ? <Map locations={locations} /> : <Spinner />;
}

export default MapLoader;
// export default React.memo(MapLoader);
