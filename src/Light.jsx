import "./styles.css";

export default function Light({ color, time = 0 }) {
  return (
    <div className="light" style={{ background: color }}>
      {time}
    </div>
  );
}
