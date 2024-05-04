
const Select = ({name, data, onSetData, children}) => {
  return <div className="select">
    <label htmlFor="percentage">{children}</label>
    <select name={name} onChange={e=>onSetData({...data,[e.target.name] :Number(e.target.value)})}>
        <option value="0">dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
    </select>
  </div>;
};

export default Select;
