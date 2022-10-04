import './Pure.scss';
const PureBtn = (props) => {
  return (
    <button type="button" className="PureBtn">
      {props.children}
    </button>
  );
};

export default PureBtn;
