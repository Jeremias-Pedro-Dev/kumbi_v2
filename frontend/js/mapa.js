const map = L.map('map').setView([-8.8383, 13.2344], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

map.on("click", e => {
  destino = e.latlng;
  fetch("/corrida/criar", {...});
});

socket.onmessage = e => {
  const data = JSON.parse(e.data);
  if (data.tipo === "nova_corrida") {
    alert("Nova corrida disponível!");
  }
};
