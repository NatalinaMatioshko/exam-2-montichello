// Функція ініціалізації карти
function initMap() {
  // Координати центру карти (наприклад, Київ)
  const center = {
    lat: 50.4501, // Широта
    lng: 30.5234, // Довгота
  };

  // Створення карти
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12, // Рівень масштабу (від 0 до 21)
    center: center, // Центр карти
    mapTypeId: "roadmap", // Тип карти: roadmap, satellite, hybrid, terrain
  });

  // Додавання маркера на карту
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Ми тут!",
    animation: google.maps.Animation.DROP,
  });

  // Додавання інформаційного вікна при кліку на маркер
  const infoWindow = new google.maps.InfoWindow({
    content:
      '<div style="padding: 10px;"><h3>Київ</h3><p>Столиця України</p></div>',
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}
