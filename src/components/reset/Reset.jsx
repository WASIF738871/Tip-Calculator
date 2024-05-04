const Reset = ({onSetData}) => {
  return <button onClick={e=>onSetData({
    bill:0,
    tip:0,
    friendTip:0
  })}>Reset</button>;
};

export default Reset;
