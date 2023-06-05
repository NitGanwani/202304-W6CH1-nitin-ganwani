type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key">{item}</button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}
