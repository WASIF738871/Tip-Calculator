const Output = ({data, totalTip}) => {
  return <h3>You pay ${data.bill+totalTip} {totalTip>0?`($${data.bill}+$${totalTip} tip)`:null}</h3>;
};

export default Output;
