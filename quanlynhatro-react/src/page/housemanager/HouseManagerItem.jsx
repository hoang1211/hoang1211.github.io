const HouseManagerItem = (props) => {
  return (
    <tr>
      <td>{props.stt}</td>
      <td>{props.room}</td>
      <td>{props.name}</td>
      <td>{props.namsinh}</td>
      <td>{props.phone}</td>
      <td>{props.quequan}</td>
      <td>{props.cccd}</td>
      <td>{props.nghenghiep}</td>
      <td>{props.bienxe}</td>
      <td>{props.ngayden}</td>
      <td>{props.ngaykyhopdong}</td>
      <td>{props.ngayhetdanhopdong}</td>
      <td>{props.tiencoc}</td>
    </tr>
  );
};

export default HouseManagerItem;
