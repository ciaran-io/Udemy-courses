/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2lhcmFuLWlvIiwiYSI6ImNsM3JldjMwaTFlOWMzY2xuN3c4OWR5MncifQ.HewTA51E7BnHp2jFz5kdLg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ciaran-io/cl3sp3hno000a14pd31f3zhc0',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((location) => {
    // Create marker
    const divEl = document.createElement('div');
    divEl.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: divEl,
      anchor: 'bottom',
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(location.coordinates)
      .setHTML(`<P>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    // Extends map bounds to include  current location
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });

};
