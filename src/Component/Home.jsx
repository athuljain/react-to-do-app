import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function TodoBtn() {
    navigate("/todo");
  }
  return (
    <div className="HomePageContainer">
      <h1 className="H1HomePage">Welocome !!!</h1>
      <button className="ToDoBtn" onClick={TodoBtn}>To-Do-App</button>
    </div>
  );
}
