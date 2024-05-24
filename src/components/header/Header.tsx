import style from "./header.module.css";

type HeaderProps = {
  isEditMode: boolean;
  onEditHandler: () => void;
};

export default function Header({ isEditMode, onEditHandler }: HeaderProps) {
  return (
    <header className={style.header}>
      <div></div>
      <div className={style.options}>
        <button onClick={onEditHandler}>{isEditMode ? "View test" : "Edit"}</button>
      </div>
    </header>
  );
}
