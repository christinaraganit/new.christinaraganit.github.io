interface Props {
  date: string;
  role: string;
  company: string;
  children: string;
}

export default function Experience(props: Props) {
  return (
    <div className="flex flex-row gap-5 w-full">
      <div className="flex flex-col gap-2 items-center w-6 pt-1.5">
        <div className="aspect-square">
          <div className="bg-neutral-400 w-2 h-2 rounded-full outline outline-offset-4 outline-1 outline-neutral-500/30 "></div>
        </div>
        <div className="w-[1px] h-full bg-border"></div>
      </div>

      <div>
        <span className="text-sm text-neutral-400 mb-1.5 block">
          {props.date}
        </span>
        <span className="block xl:text-lg text-neutral-200 font-medium mb-2">
          {props.role} at {props.company}
        </span>

        <p className="text-neutral-400 max-w-lg">{props.children}</p>
      </div>
    </div>
  );
}
