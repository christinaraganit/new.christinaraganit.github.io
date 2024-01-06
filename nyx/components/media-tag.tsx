interface Props {
  mediaType: string;
  children: any;
}

export default function MediaTag(props: Props) {
  return (
    <div className="inline flex-wrap gap-2 items-center">
      <span className="label-sm inline px-3 py-0.5 rounded-lg border w-fit bg-neutral-800">
        {props.mediaType}
      </span>
      <span className="pl-2 text-neutral-400">{props.children}</span>
    </div>
  );
}
