import { ReactNode } from "react";
import style from "./Botao.module.scss";

interface BotaoProps {
  children: ReactNode;
}

export default function Botao({ children }: BotaoProps) {
  return <button className={style.botao}>{children}</button>;
}
