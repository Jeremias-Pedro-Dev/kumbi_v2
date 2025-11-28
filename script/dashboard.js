// Navegação entre seções
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    // Remove a classe active de todos os links
    document.querySelectorAll(".nav-link").forEach((item) => {
      item.classList.remove("active");
    });

    // Adiciona a classe active ao link clicado
    this.classList.add("active");

    // Oculta todas as views
    document.querySelectorAll(".dashboard-view").forEach((view) => {
      view.classList.remove("active");
    });

    // Mostra a view correspondente
    const viewId = this.getAttribute("data-view");
    document.getElementById(viewId).classList.add("active");
  });
});

// Gráficos
document.addEventListener("DOMContentLoaded", function () {
  // Gráfico de Tráfego
  const trafficCtx = document.getElementById("trafficChart").getContext("2d");
  const trafficChart = new Chart(trafficCtx, {
    type: "line",
    data: {
      labels: ["6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h"],
      datasets: [
        {
          label: "Passageiros",
          data: [120, 450, 600, 550, 400, 700, 650, 300],
          borderColor: "#FFC107",
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Gráfico de Ocorrências
  const incidentsCtx = document
    .getElementById("incidentsChart")
    .getContext("2d");
  const incidentsChart = new Chart(incidentsCtx, {
    type: "doughnut",
    data: {
      labels: ["Atrasos", "Manutenção", "Problemas Técnicos", "Outros"],
      datasets: [
        {
          data: [45, 25, 20, 10],
          backgroundColor: ["#FFC107", "#F44336", "#FF9800", "#4CAF50"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Gráfico de Passes
  const passesCtx = document.getElementById("passesChart").getContext("2d");
  const passesChart = new Chart(passesCtx, {
    type: "pie",
    data: {
      labels: ["Estudante", "Idoso", "Comum", "Trabalhador"],
      datasets: [
        {
          data: [35, 25, 30, 10],
          backgroundColor: ["#FFC107", "#4CAF50", "#FF9800", "#F44336"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Gráfico de Vendas
  const salesCtx = document.getElementById("salesChart").getContext("2d");
  const salesChart = new Chart(salesCtx, {
    type: "bar",
    data: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      datasets: [
        {
          label: "Vendas",
          data: [1200, 1900, 1500, 2100, 1800, 2500, 2200],
          backgroundColor: "rgba(255, 193, 7, 0.7)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Gráfico de KPIs
  const kpiCtx = document.getElementById("kpiChart").getContext("2d");
  const kpiChart = new Chart(kpiCtx, {
    type: "radar",
    data: {
      labels: [
        "Eficiência",
        "Pontualidade",
        "Manutenção",
        "Segurança",
        "Custo",
      ],
      datasets: [
        {
          label: "Meta",
          data: [90, 95, 85, 98, 80],
          fill: true,
          backgroundColor: "rgba(255, 193, 7, 0.2)",
          borderColor: "#FFC107",
          pointBackgroundColor: "#FFC107",
        },
        {
          label: "Realizado",
          data: [87, 94, 82, 96, 78],
          fill: true,
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          borderColor: "#4CAF50",
          pointBackgroundColor: "#4CAF50",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Gráfico de Tendências
  const trendsCtx = document.getElementById("trendsChart").getContext("2d");
  const trendsChart = new Chart(trendsCtx, {
    type: "line",
    data: {
      labels: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
      ],
      datasets: [
        {
          label: "Passageiros (mil)",
          data: [320, 340, 360, 380, 400, 420, 410, 430, 450, 470],
          borderColor: "#FFC107",
          backgroundColor: "rgba(255, 193, 7, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
