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
        <span className="block muted mb-2">{props.date}</span>
        <p className="large mb-1.5">
          {props.role} at {props.company}
        </p>

        <p className="body-1">{props.children}</p>
      </div>
    </div>
  );
}
