// Inicializar mapa
const map = L.map("map").setView([-8.8383, 13.2344], 12); // Coordenadas de Luanda

// Adicionar camada do mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Ícones personalizados para autocarros
const busIcon = L.divIcon({
  html: '<i class="fas fa-bus" style="color: #FFC107; font-size: 20px;"></i>',
  className: "bus-marker",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const activeBusIcon = L.divIcon({
  html: '<i class="fas fa-bus" style="color: #4CAF50; font-size: 20px;"></i>',
  className: "bus-marker",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const stoppedBusIcon = L.divIcon({
  html: '<i class="fas fa-bus" style="color: #F44336; font-size: 20px;"></i>',
  className: "bus-marker",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Dados simulados de autocarros em Luanda
const busData = [
  {
    id: 1024,
    route: "24 - Centro",
    driver: "João Silva",
    position: [-8.8383, 13.2344],
    status: "active",
    speed: 35,
    capacity: 45,
    maxCapacity: 60,
    nextStop: "Mutamba",
    eta: 8,
  },
  {
    id: 1102,
    route: "7 - Aeroporto",
    driver: "Lucia Santos",
    position: [-8.8583, 13.2544],
    status: "active",
    speed: 28,
    capacity: 32,
    maxCapacity: 60,
    nextStop: "Aeroporto",
    eta: 15,
  },
  {
    id: 1077,
    route: "13 - Sul",
    driver: "Carlos Lima",
    position: [-8.8183, 13.2144],
    status: "stopped",
    speed: 0,
    capacity: 28,
    maxCapacity: 60,
    nextStop: "Zango",
    eta: 22,
  },
  {
    id: 1125,
    route: "18 - Norte",
    driver: "Ana Costa",
    position: [-8.8483, 13.2744],
    status: "active",
    speed: 42,
    capacity: 51,
    maxCapacity: 60,
    nextStop: "Kilamba",
    eta: 12,
  },
  {
    id: 1156,
    route: "5 - Cacuaco",
    driver: "Pedro Miguel",
    position: [-8.7983, 13.2944],
    status: "active",
    speed: 38,
    capacity: 40,
    maxCapacity: 60,
    nextStop: "Cacuaco",
    eta: 18,
  },
];

// Marcadores dos autocarros
const busMarkers = [];
let userMarker = null;

// Adicionar autocarros ao mapa
function addBusesToMap() {
  busData.forEach((bus) => {
    let icon;
    if (bus.status === "active") {
      icon = activeBusIcon;
    } else if (bus.status === "stopped") {
      icon = stoppedBusIcon;
    } else {
      icon = busIcon;
    }

    const marker = L.marker(bus.position, { icon: icon }).addTo(map).bindPopup(`
                        <div style="min-width: 200px;">
                            <h3>${bus.route}</h3>
                            <p><strong>Autocarro:</strong> #${bus.id}</p>
                            <p><strong>Motorista:</strong> ${bus.driver}</p>
                            <p><strong>Estado:</strong> ${
                              bus.status === "active"
                                ? "Em movimento"
                                : "Parado"
                            }</p>
                            <p><strong>Velocidade:</strong> ${
                              bus.speed
                            } km/h</p>
                            <p><strong>Próxima paragem:</strong> ${
                              bus.nextStop
                            }</p>
                            <p><strong>ETA:</strong> ${bus.eta} min</p>
                            <button onclick="selectBus(${
                              bus.id
                            })" style="background: #FFC107; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px; width: 100%;">
                                Ver Detalhes
                            </button>
                        </div>
                    `);

    busMarkers.push({
      id: bus.id,
      marker: marker,
      data: bus,
    });
  });
}

// Selecionar autocarro
function selectBus(busId) {
  const bus = busMarkers.find((b) => b.id === busId);
  if (bus) {
    // Atualizar informações no painel lateral
    document.getElementById("etaValue").textContent = `${bus.data.eta} min`;

    // Mostrar painel lateral
    document.getElementById("sidePanel").style.display = "block";

    // Centralizar mapa no autocarro selecionado
    map.setView(bus.data.position, 15);
  }
}

// Fechar painel lateral
document.getElementById("closePanel").addEventListener("click", function () {
  document.getElementById("sidePanel").style.display = "none";
});

// Pesquisa
document.querySelector(".search-btn").addEventListener("click", function () {
  const query = document.querySelector(".search-input").value.toLowerCase();
  if (query) {
    // Simular busca por localização
    const results = busData.filter(
      (bus) =>
        bus.route.toLowerCase().includes(query) ||
        bus.nextStop.toLowerCase().includes(query)
    );

    if (results.length > 0) {
      // Mostrar primeiro resultado
      selectBus(results[0].id);
    } else {
      alert("Nenhum autocarro encontrado para esta pesquisa.");
    }
  }
});

// Permitir pesquisa com Enter
document
  .querySelector(".search-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.querySelector(".search-btn").click();
    }
  });

// Filtros
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remover classe active de todos os botões
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("active");
    });

    // Adicionar classe active ao botão clicado
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");
    filterBuses(filter);
  });
});

// Filtrar autocarros
function filterBuses(filter) {
  busMarkers.forEach((bus) => {
    if (filter === "all") {
      bus.marker.addTo(map);
    } else if (filter === "active") {
      if (bus.data.status === "active") {
        bus.marker.addTo(map);
      } else {
        map.removeLayer(bus.marker);
      }
    } else if (filter === "stopped") {
      if (bus.data.status === "stopped") {
        bus.marker.addTo(map);
      } else {
        map.removeLayer(bus.marker);
      }
    } else if (filter === "nearby") {
      // Simular filtro de proximidade
      if (bus.data.eta <= 15) {
        bus.marker.addTo(map);
      } else {
        map.removeLayer(bus.marker);
      }
    }
  });
}

// Simular movimento dos autocarros (apenas para demonstração)
function simulateBusMovement() {
  busMarkers.forEach((bus) => {
    if (bus.data.status === "active") {
      // Pequena variação na posição para simular movimento
      const latChange = (Math.random() - 0.5) * 0.001;
      const lngChange = (Math.random() - 0.5) * 0.001;

      const newPosition = [
        bus.data.position[0] + latChange,
        bus.data.position[1] + lngChange,
      ];

      bus.data.position = newPosition;
      bus.marker.setLatLng(newPosition);

      // Atualizar ETA aleatoriamente
      bus.data.eta = Math.max(1, bus.data.eta - 1);
      if (bus.data.eta <= 0) {
        bus.data.eta = Math.floor(Math.random() * 20) + 5;
      }
    }
  });
}

// Inicializar mapa com autocarros
addBusesToMap();

// Simular atualização em tempo real a cada 10 segundos
setInterval(simulateBusMovement, 10000);

// Detectar localização do usuário
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      // Adicionar marcador do usuário
      userMarker = L.marker([userLat, userLng])
        .addTo(map)
        .bindPopup("Sua localização atual")
        .openPopup();

      // Centralizar mapa na localização do usuário
      map.setView([userLat, userLng], 14);
    },
    function (error) {
      console.log("Erro ao obter localização:", error);
      // Usar localização padrão de Luanda
      map.setView([-8.8383, 13.2344], 12);
    }
  );
} else {
  // Usar localização padrão de Luanda
  map.setView([-8.8383, 13.2344], 12);
}
