interface Props {
  award: string;
  awardedBy: string;
}

export default function CardAward(props: Props) {
  return (
    <div className="border p-6 lg:px-8 rounded-lg">
      <span className="block large mb-2">{props.award}</span>
      <span className="muted">{props.awardedBy}</span>
    </div>
  );
}
