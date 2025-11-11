"use strict";

function initMap() {
  const center = {
    lat: 50.4501,
    lng: 30.5234,
  }; 

  const map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 12,
    mapTypeId: "roadmap", 
    // styles: [
    //   { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    //   { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    //   { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    //   { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    // ],
    // disableDefaultUI: true,
  });

  const coffeeColor = "#9c2007";

  const markerSvg =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
        <!-- зовнішній великий ореол -->
        <circle cx="80" cy="80" r="55" fill="rgba(156, 32, 7, 0.08)" />
        <!-- внутрішній ореол -->
        <circle cx="80" cy="80" r="35" fill="rgba(156, 32, 7, 0.15)" />
        <!-- основне коло без бордера -->
        <circle cx="80" cy="80" r="12" fill="${coffeeColor}" />
      </svg>
    `);

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Ми тут!",
    animation: google.maps.Animation.DROP,
    icon: {
      // url: markerSvg,
      url: "../assets/svg/coffee-bean-marker.svg",
      // scaledSize: new google.maps.Size(100, 100),
      scaledSize: new google.maps.Size(30, 30),
      anchor: new google.maps.Point(50, 50),
    },
    title: "Київ",
  });
  const infoWindow = new google.maps.InfoWindow({
    content:
      '<div style="padding: 10px;"><h3>Київ</h3><p>Столиця України</p></div>',
  });
  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}
