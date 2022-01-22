const Spinner = () => {
  return (
    <div
      style={{ minHeight: 120 }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-primary spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
