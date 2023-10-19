import DetailsContainer from "./DetailsContainer";
import "./ShipDetails.css";
import cup from "../assets/icons/icons8-cup-64.png";
export default function ShipDetails({ data }) {
  const { name, model, films, mostFilmsAwarded } = data;
  console.log(data);
  return (
    <div className="ShipDetails">
      <p className="title">
        {name}
        {mostFilmsAwarded && <img src={cup} alt="" width="15px" />}
      </p>
      <div className="flex">
        <DetailsContainer title="Model" desc={model} />
        <DetailsContainer title="No of Films" desc={films.length} />
      </div>
    </div>
  );
}