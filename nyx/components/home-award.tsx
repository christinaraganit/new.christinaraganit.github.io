interface Props {
  date: string;
  award: string;
  awardedBy: string;
}

export default function HomeAward(props: Props) {
  return (
    <div>
      <p className="label-sm mb-2">{props.date}</p>
      <p className="text-2xl font-medium text-neutral-300 mb-1">
        {props.award}
      </p>
      <p className="text-sm text-neutral-400">{props.awardedBy}</p>
    </div>
  );
}
