import style from "./SpecificField.module.css";

function SpecificField({data}: { data: Record<string, string> }) {
  return (
    <section className={style.detailOther}>
      {Object.entries(data).map(([key, value]) => (
        <>
          <div className={style.specificRow}>
            <h2>{key} :</h2>
            <p>{value}</p>
          </div>
        </>
      ))}
    </section>
  );
}

export default SpecificField;
