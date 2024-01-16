initMap();

async function initMap() {
  // eslint-disable-next-line
  await ymaps3.ready;
  // eslint-disable-next-line
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
  const map = new YMap(
    document.querySelector('.map'),
    {
      location: {
        center: [30.323037, 59.938631],
        zoom: 15,
      }
    }
  );
  map.addChild(new YMapDefaultFeaturesLayer());
  const marker = document.createElement('img');
  marker.className = 'map__marker';
  marker.src = '../images/icons/stack.svg#map-pin';
  marker.alt = 'Адрес нашего магазина';
  marker.width = 57;
  marker.height = 53;
  map.addChild(new YMapMarker({ coordinates: [30.323037, 59.938631] }, marker));
  const parentImg = marker.parentElement;
  parentImg.style.width = '57px';
  map.addChild(new YMapDefaultSchemeLayer());
}
