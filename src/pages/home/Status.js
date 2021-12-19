import "./Home.css";
import like from "./like.svg";
import clock from "./clock.svg";
import fire from "./fire.svg";

const Status = (props) => {
  const all = props.tests.length;
  const completed = props.tests.filter((t) => t.status == "completed").length;
  const in_progress = props.tests.filter(
    (t) => t.status == "in_progress"
  ).length;
  const expired = props.tests.filter((t) => t.status == "expired").length;
  return (
    <ul className="status">
      <li>
        Всего приглашений
        <div className="num">{all}</div>
      </li>

      <li>
        Пройдено
        <div className="num">
          <img
            src={like}
            style={{
              verticalAlign: "top",
              marginTop: "3px",
              marginRight: "6px",
            }}
          />
          {completed}
        </div>
      </li>

      <li>
        В процессе
        <div className="num">
          <img
            src={clock}
            style={{
              verticalAlign: "top",
              marginTop: "6px",
              marginRight: "6px",
            }}
          />
          {in_progress}
        </div>
      </li>

      <li>
        Отказано
        <div className="num">
          <img
            src={fire}
            style={{
              verticalAlign: "top",
              marginTop: "3px",
              marginRight: "6px",
            }}
          />
          {expired}
        </div>
      </li>
    </ul>
  );
};

export default Status;
