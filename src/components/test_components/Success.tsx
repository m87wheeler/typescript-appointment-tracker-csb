import React, { useContext } from "react";
import { StatusContext } from "../../context/StatusContext";

interface IProps {
  children: React.ReactNode;
}

const Success = ({ children }: IProps) => {
  const { status, dispatchStatus } = useContext(StatusContext);
  console.log(status);

  const handleClick = () =>
    dispatchStatus({
      type: "SET_SUCCESS",
      payload: !status.success[0],
      message: "Right on!"
    });

  return (
    <>
      <div>
        <h1>Success: {status.success[0].toString()}</h1>
        {children}
      </div>
      <button onClick={handleClick}>Toggle Success</button>
    </>
  );
};

export default Success;
