interface Props {
  tag: string;
  color?: string;
  bgColor?: string;
}
const TaggingPill = (prop: Props) => {
  const tag = prop.tag;
  const color = prop.color == null || prop.color == undefined ? "#fe4343" : prop.color;
  const bgColor = prop.bgColor == null || prop.bgColor == undefined ? "#ff4444" : prop.bgColor;
  return (
    <div className="taggingPill" style={{ background: bgColor }}>
      <span style={{ color: color, mixBlendMode: "difference" }}>{tag}</span>
    </div>
  );
};

export default TaggingPill;
