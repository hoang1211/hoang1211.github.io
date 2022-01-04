const HouseManagerItem = (props) => {
  return (
    <tr>
      <th>{props.stt}</th>
      <th>{props.room}</th>
      <th>{props.name}</th>
      <th>{props.namsinh}</th>
      <th>{props.phone}</th>
      <th>{props.quequan}</th>
      <th>{props.cccd}</th>
      <th>{props.nghenghiep}</th>
      <th>{props.bienxe}</th>
      <th>{props.ngayden}</th>
      <th>{props.ngaykyhopdong}</th>
      <th>{props.ngayhethanhopdong}</th>
      <th>{props.tiencoc}</th>
    </tr>
  );
};

export default HouseManagerItem;
