import { ReactNode } from "react";
import style from "./Botao.module.scss";

interface BotaoProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Botao({ children, type = "button" }: BotaoProps) {
  return (
    <button type={type} className={style.botao}>
      {children}
    </button>
  );
}
