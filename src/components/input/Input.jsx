const Input = ({data, onSetData, children}) => {
  return (
    <div >
      <label htmlFor="bill">{children}</label>
      <input type="text" name="bill" value={data.bill} onChange={e=>onSetData({...data, [e.target.name]: Number(e.target.value)})} />
    </div>
  );
};

export default Input;
