function SpecificField({data}: { data: Record<string, string> }) {
  return (
    <section>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="specific-field">
          <h2>{key}</h2>
          <p>{value}</p>
        </div>
      ))}
    </section>
  );
}

export default SpecificField;
