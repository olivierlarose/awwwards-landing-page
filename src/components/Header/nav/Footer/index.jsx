import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a href="https://app.lamento.in" target="_blank">Blog</a>
      <a href="https://www.instagram.com/akilesh_io" target="_blank">Instagram</a>
      <a href="https://dribbble.com/Akilesh_io" target="_blank">Dribble</a>
    </div>
  );
}
