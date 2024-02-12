interface Props {
  textType?: string;
  isCensored?: boolean;
  isRange?: boolean;
  min?: number;
  max?: number;
  isRequired?: boolean;
  regex?: string;
  length?: number;
  defaultValue?: string;
  placeholder?: string;
  tooltip?: string;
}
const TextBox = (prop: Props) => {
  const textType = prop.textType ? prop.textType : "text";
  const isCensored = prop.isCensored ? prop.isCensored : false;
  const isRange = prop.isRange ? prop.isRange : false;
  const min = prop.min ? prop.min : 0;
  const max = prop.max ? prop.max : 0;
  const isRequired = prop.isRequired ? prop.isRequired : false;
  const regex = prop.regex ? prop.regex : "[\\s\\S]*";
  const length = prop.length ? prop.length : 127;
  const defaultValue = prop.defaultValue ? prop.defaultValue : "";
  const placeholder = prop.placeholder ? prop.placeholder : "";
  const tooltip = prop.tooltip ? prop.tooltip : "";

  let inputDOM = (
    <input
      type={textType}
      className={`textBox ${isCensored ? "isCensored" : ""}`}
      required={isRequired}
      pattern={regex}
      maxLength={length}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
  let showButton = <></>;
  let showToolTip = <></>;
  if (isRange) {
    inputDOM = (
      <input
        type={textType}
        className={`textBox ${isCensored ? "isCensored" : ""}`}
        required={isRequired}
        pattern={regex}
        min={`${min}`}
        max={`${max}`}
        maxLength={length}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    );
  }
  // Adds show button and / or wraps it.
  if (isCensored) {
    showButton = (
      <button type="button" className="showButton">
        <span className="material-symbols-outlined">visibility</span>
      </button>
    );
  }
  if (tooltip) {
    showToolTip = <div className="tooltip">{tooltip}</div>;
  }
  inputDOM = (
    <div className="inputWrapper">
      {showToolTip}
      {inputDOM}
      {showButton}
    </div>
  );
  return inputDOM;
};
export default TextBox;
