import React, { useState } from "react";
import "./Recursos.css";
import { useNavigate } from "react-router-dom";

export default function Recursos() {
  const navigate = useNavigate();

  const [recursos, setRecursos] = useState([]);
  const [novoRecurso, setNovoRecurso] = useState({
    nome: "",
    tipo: "",
    status: "Ativo",
  });

  const [editando, setEditando] = useState(null);

  // Adicionar recurso
  const adicionarRecurso = (e) => {
    e.preventDefault();

    if (!novoRecurso.nome || !novoRecurso.tipo) {
      alert("Preencha todos os campos!");
      return;
    }

    if (editando !== null) {
      // Atualizando
      const atualizado = [...recursos];
      atualizado[editando] = novoRecurso;
      setRecursos(atualizado);
      setEditando(null);
    } else {
      // Adicionando novo
      setRecursos([...recursos, novoRecurso]);
    }

    setNovoRecurso({ nome: "", tipo: "", status: "Ativo" });

    alert("Recurso salvo com sucesso!");
  };

  // Remover recurso
  const removerRecurso = (index) => {
    if (confirm("Tem certeza que deseja remover este recurso?")) {
      const lista = recursos.filter((_, i) => i !== index);
      setRecursos(lista);
    }
  };

  // Editar recurso
  const editarRecurso = (index) => {
    setNovoRecurso(recursos[index]);
    setEditando(index);
  };

  return (
    <div className="recursos-container">
      <h1>Gestão de Recursos</h1>
      <p className="rec-desc">
        Controle interno de equipamentos, veículos e dispositivos de segurança.
      </p>

      {/* BOTÃO VOLTAR */}
      <button className="btn-voltar" onClick={() => navigate("/home")}>
        ⬅ Voltar para Home
      </button>

      {/* FORMULÁRIO */}
      <div className="form-box">
        <h2>{editando !== null ? "Editar Recurso" : "Adicionar Recurso"}</h2>

        <form onSubmit={adicionarRecurso}>
          <label>Nome do Recurso</label>
          <input
            type="text"
            value={novoRecurso.nome}
            onChange={(e) =>
              setNovoRecurso({ ...novoRecurso, nome: e.target.value })
            }
            placeholder="Ex: Batmóvel, Drone de Vigilância..."
          />

          <label>Tipo</label>
          <select
            value={novoRecurso.tipo}
            onChange={(e) =>
              setNovoRecurso({ ...novoRecurso, tipo: e.target.value })
            }
          >
            <option value="">Selecione...</option>
            <option value="Equipamento">Equipamento</option>
            <option value="Veículo">Veículo</option>
            <option value="Dispositivo de Segurança">Dispositivo de Segurança</option>
          </select>

          <label>Status</label>
          <select
            value={novoRecurso.status}
            onChange={(e) =>
              setNovoRecurso({ ...novoRecurso, status: e.target.value })
            }
          >
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Manutenção">Manutenção</option>
          </select>

          <button className="btn-salvar" type="submit">
            {editando !== null ? "Salvar Alterações" : "Adicionar Recurso"}
          </button>
        </form>
      </div>

      {/* TABELA DE RECURSOS */}
      <div className="tabela-box">
        <h2>Inventário</h2>

        {recursos.length === 0 ? (
          <p className="vazio">Nenhum recurso cadastrado ainda.</p>
        ) : (
          <table className="tabela-recursos">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {recursos.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.tipo}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="btn-editar"
                      onClick={() => editarRecurso(index)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-remover"
                      onClick={() => removerRecurso(index)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
