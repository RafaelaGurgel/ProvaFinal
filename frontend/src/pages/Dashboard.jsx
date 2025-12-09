import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState({
    totalResources: 0,
    vehicles: 0,
    equipments: 0,
    devices: 0,
    history: [],
  });

  useEffect(() => {
    // tenta buscar do backend; se falhar, usa dados de exemplo
    fetch("http://localhost:4000/api/resources")
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((resources) => {
        applyResources(resources);
      })
      .catch(() => {
        // dado de fallback para desenvolvimento sem backend
        const fallback = [
          { id: 1, type: "veículo" },
          { id: 2, type: "equipamento" },
          { id: 3, type: "dispositivo" },
          { id: 4, type: "veículo" },
        ];
        applyResources(fallback);
      });
  }, []);

  function applyResources(resources) {
    const vehicles = resources.filter((r) => r.type === "veículo").length;
    const equipments = resources.filter((r) => r.type === "equipamento").length;
    const devices = resources.filter((r) => r.type === "dispositivo").length;

    // gera um histórico simples (ex.: 4 pontos)
    const history = [
      { name: "Semana 1", total: Math.max(0, Math.round(resources.length * 0.5)) },
      { name: "Semana 2", total: Math.max(0, Math.round(resources.length * 0.7)) },
      { name: "Semana 3", total: Math.max(0, Math.round(resources.length * 0.85)) },
      { name: "Atual", total: resources.length },
    ];

    setData({
      totalResources: resources.length,
      vehicles,
      equipments,
      devices,
      history,
    });
  }

  const cards = [
    { label: "Total de Recursos", value: data.totalResources },
    { label: "Veículos", value: data.vehicles },
    { label: "Equipamentos", value: data.equipments },
    { label: "Dispositivos", value: data.devices },
  ];

  // Para o gráfico de barras do histórico, calcula percentuais
  const maxHistory = Math.max(...data.history.map((h) => h.total), 1);

  return (
    <div className="wg-dashboard">
      <header className="wg-header">
        <h1>Painel Geral de Segurança — Indústrias Wayne</h1>
        <p className="wg-sub">Visão geral de recursos e atividades</p>
      </header>

      <section className="wg-cards">
        {cards.map((c, i) => (
          <Card key={i} className="wg-card-stat">
            <CardHeader>
              <CardTitle>{c.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="wg-value">{c.value}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="wg-charts">
        <Card className="wg-chart-card">
          <CardHeader>
            <CardTitle>Distribuição de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="wg-distribution">
              <div className="wg-dist-item">
                <div className="wg-dist-label">Veículos</div>
                <div className="wg-bar">
                  <div
                    className="wg-bar-fill vehicles"
                    style={{
                      width:
                        data.totalResources === 0
                          ? "0%"
                          : `${Math.round((data.vehicles / data.totalResources) * 100)}%`,
                    }}
                  />
                </div>
                <div className="wg-dist-value">{data.vehicles}</div>
              </div>

              <div className="wg-dist-item">
                <div className="wg-dist-label">Equipamentos</div>
                <div className="wg-bar">
                  <div
                    className="wg-bar-fill equipments"
                    style={{
                      width:
                        data.totalResources === 0
                          ? "0%"
                          : `${Math.round((data.equipments / data.totalResources) * 100)}%`,
                    }}
                  />
                </div>
                <div className="wg-dist-value">{data.equipments}</div>
              </div>

              <div className="wg-dist-item">
                <div className="wg-dist-label">Dispositivos</div>
                <div className="wg-bar">
                  <div
                    className="wg-bar-fill devices"
                    style={{
                      width:
                        data.totalResources === 0
                          ? "0%"
                          : `${Math.round((data.devices / data.totalResources) * 100)}%`,
                    }}
                  />
                </div>
                <div className="wg-dist-value">{data.devices}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="wg-chart-card">
          <CardHeader>
            <CardTitle>Evolução de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="wg-history">
              {data.history.map((h, i) => {
                const pct = Math.round((h.total / maxHistory) * 100);
                return (
                  <div className="wg-history-item" key={i}>
                    <div className="wg-history-name">{h.name}</div>
                    <div className="wg-history-bar">
                      <div className="wg-history-fill" style={{ height: `${pct}%` }} />
                    </div>
                    <div className="wg-history-value">{h.total}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="wg-logs">
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="wg-log-list">
              <li>🛠️ Novo equipamento cadastrado — há 2 horas</li>
              <li>🚗 Veículo em manutenção — há 5 horas</li>
              <li>📡 Dispositivo integrado — há 1 dia</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
