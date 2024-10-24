import style from "./style.module.css";

function Header() {
  const arr = ["About", "What I do", "My Project"];
  return (
    <div className={style.wrapper}>
      <div className={style.smallImage}>
        <div className={style.link}/>
        <div className={style.git}/>
        <div className={style.telegram}/>
      </div>
      <div className={style.paragraphs}>
        {arr.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </div>
  );
}

export default Header;
