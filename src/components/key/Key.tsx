import { PhoneContext } from "../../context/phone.context";
import { useContext } from "react";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const {
    phoneContext: { handleAddNumber, isCalling },
  } = useContext(PhoneContext);

  function handleClick() {
    if (!isCalling) handleAddNumber(item);
  }
  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}
