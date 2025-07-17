function HexaNode(props: any) {
  return (
    <>
      <div>
        <div>
          <p>{props.name}</p>
        </div>
        <div>
          <input type="text" placeholder="0" />
        </div>
        <div>
          <input type="text" placeholder="30" />
        </div>
        <div>
          {/* spent */}
          <p>0</p>
        </div>
        <div>
          {/* remaining */}
          <p>0</p>
        </div>
        <div>
          {/* total */}
          <p>0</p>
        </div>
      </div>
    </>
  );
}

export default HexaNode;
