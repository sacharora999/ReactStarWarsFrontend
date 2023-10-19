import { useEffect, useState } from "react";
import axios from "axios";
import ShipDetails from "../shipDetails/ShipDetails";
import "./ShipContainer.css";
export default function ShipContainer() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState("https://swapi.dev/api/starships");
  const [loading, setLoading] = useState("starships...");
  const handleChange = (url) => {
    setLoading(true);
    setUrl(url);
  };
  const modifyData = (arr) => {
    let resData = arr;
    let mostFilms = 0;
    resData.results = arr.results
      .sort((a, b) => +a.crew - +b.crew)
      .filter((ship) => +ship.crew <= 10);
    resData.results.map(
      (it) => (mostFilms = Math.max(mostFilms, it.films.length))
    );
    resData.results.map(
      (it, i) =>
        (resData.results[i].mostFilmsAwarded = mostFilms === it.films.length)
    );
    return resData;
  };
  useEffect(() => {
    console.log(url);
    axios.get(url).then((res) => {
      let resData = modifyData(res.data);
      setData(resData);
      setLoading(false);
    });
  }, [url]);
  return (
    <div>
      {loading ? (
        <h1>Star Ships loading...</h1>
      ) : (
        <>
          {data?.results?.map((ship) => (
            <ShipDetails key={ship.model} data={ship} />
          ))}
          {data.previous && (
            <button
              className="left-btn btn"
              onClick={() => handleChange(data.previous)}
            ></button>
          )}
          {data.next && (
            <button
              className="right-btn btn"
              onClick={() => handleChange(data.next)}
            ></button>
          )}
        </>
      )}
    </div>
  );
}
