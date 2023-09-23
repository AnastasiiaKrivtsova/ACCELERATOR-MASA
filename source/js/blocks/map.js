import L from '../vendor/leaflet';

const map = L.map('map', {
  scrollWheelZoom: false,
}).setView([55.0290694, 82.9278779], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const leafletIcon = L.icon({
  iconUrl: ('./img/svg/pin.svg'),
  className: 'contacts__map-icon',
});

const marker = L.marker([55.0290694, 82.9278779], {icon: leafletIcon}).addTo(map);

export {marker, map};
