import s from "./Description.module.css";

function Description() {
  return (
    <header className={s.header}>
      <h1 className={s.title}> Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below 👇🏽
      </p>
    </header>
  );
}

export default Description;
