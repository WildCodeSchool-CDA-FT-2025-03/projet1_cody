import style from "./Newsletter.module.css";

function Newsletter() {
  return (
    <>
      <div className={style.newsletterContainer}>
        <h3>Je m'abonne à la newsletter pour être informer des dernières nouveautés</h3>
        <form className={style.newsletterForm}>
          <label htmlFor="email" className={style.visuallyHidden}>
            Email
          </label>
          <input type="email" placeholder="Votre email" className={style.newsletterInput} />
          <button type="submit" className={style.newsletterButton}>
            S'abonner
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
