const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "./frontend/paginainicial.html";
}

const map = L.map('map').setView([-8.8383, 13.2344], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

async function carregarLocalizacoes() {
    const response = await fetch("http://127.0.0.1:8000/dashboard/localizacoes", {
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    const dados = await response.json();

    dados.forEach(loc => {
        L.marker([loc.latitude, loc.longitude]).addTo(map);
    });
}

carregarLocalizacoes();
