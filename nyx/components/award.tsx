interface Props {
  award: string;
  awardee: string;
}

export default function Award(props: Props) {
  return (
    <span className="block text-neutral-200 font-medium mb-2">
      {props.award}
      <span className="font-normal text-neutral-400">, {props.awardee}</span>
    </span>
  );
}
