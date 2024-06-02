import "../City/city.css"

export const City = (props) => {
  return (
    <div className="city">
      <div className="info">
        <h2>{props.name}</h2>
        <p>{props.okres}</p>
        <p>Počet obyvatel: {props.population}</p>
        <p>Rozloha: {props.area} km²</p>
      </div>
      <img src={props.foto} alt={props.name} />
    </div>
  );
}