interface Props {
  award: string;
  awardee: string;
}

export default function Award(props: Props) {
  return (
    <div>
      <p className="large mb-1.5">{props.award}</p>
      <p className="muted">{props.awardee}</p>
    </div>
  );
}
