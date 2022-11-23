import "./styles.css";

const Album = (props) => {
  console.log(props, "props");
  return (
    <div className="card">
      <img src={props.item.album_cover} width="200px" alt="" />
      <h3>{props.item.artist}</h3>
      <p>{props.item.album_title}</p>
    </div>
  );
};
export default Album;
