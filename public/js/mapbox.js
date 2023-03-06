/* eslint-disable */
// console.log('helo from client side :D');

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXQxNjA1MDQiLCJhIjoiY2xkenZlMWRqMDIxbjNwcnplencyNHlrZSJ9.OGFzgziYoX5Xhge5X2Gtkw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/at160504/cldzvw9f0000c01l392mzpnt1',
    scrollZoom: false
    //   center: [-116.214531, 51.417611],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();
  // console.log(bounds);

  locations.forEach(loc => {
    // add marker
    const el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    // extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
