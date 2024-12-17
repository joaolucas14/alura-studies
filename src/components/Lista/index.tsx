import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface listaProps {
  tarefas: Itarefa[];
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: listaProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}
