const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "80vh",
        border: "2px solid #ddd",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
