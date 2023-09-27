import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: React.Dispatch<React.SetStateAction<string>>;
}
