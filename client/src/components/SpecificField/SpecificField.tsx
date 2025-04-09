import style from "./SpecificField.module.css";

function SpecificField({data}: { data: Record<string, string> }) {
  return (
    <section className={style.detailother}>
      {Object.entries(data).map(([key, value]) => (
        <>
          <h2>{key}</h2>
          <p>{value}</p>
        </>
      ))}
    </section>
  );
}

export default SpecificField;
