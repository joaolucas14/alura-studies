import { Itarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

interface itemProps extends Itarefa {
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: itemProps) {
  console.log("item atual:", { tarefa, tempo, selecionado, completado, id });
  return (
    <li
      className={style.item}
      onClick={() =>
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
