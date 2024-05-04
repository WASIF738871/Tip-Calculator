import { Fragment, useState } from "react";
import { Input, Output, Select, Reset } from "../../components";

const Home = () => {
  const [data, setData] = useState({
    bill: 0,
    tip: 0,
    friendTip: 0,
  });
  const avgTip = (data.tip + data.friendTip) / 200;
  const totalTip = data.bill * avgTip;
  return (
    <Fragment>
      <Input data={data} onSetData={setData}>
        How much was the bill?{" "}
      </Input>
      <Select data={data} name="tip" onSetData={setData}>
        How did you like the service?
      </Select>
      <Select data={data} name="friendTip" onSetData={setData}>
        How did your friend like the service?
      </Select>
      {data.bill>0 && (
        <Fragment>
          <Output data={data} totalTip={totalTip} />
          <Reset onSetData={setData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
