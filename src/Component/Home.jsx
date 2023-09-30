import { useNavigate } from "react-router-dom";
import "./Home.css"


export default function Home() {
    const navigate = useNavigate();
    function TodoBtn() {
      navigate("/todo");
    }
  

  return (
    <div className="HomePageContainer" >
      <h1 className="H1HomePage">Welcome !!!</h1>
      <button className="ToDoBtn" onClick={TodoBtn}>To-Do-App</button>
    </div>
  );
    }
