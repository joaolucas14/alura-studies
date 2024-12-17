import { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { Itarefa } from "../../types/tarefa";

interface Iformulario {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

export default function Formulario({ setTarefas }: Iformulario) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  function salvarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [...tarefasAntigas, { tarefa, tempo }]);
  }

  return (
    <form className={style.novaTarefa} onSubmit={salvarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={(evento) => setTarefa(evento.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
