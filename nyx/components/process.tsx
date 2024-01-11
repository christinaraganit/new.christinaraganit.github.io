interface Props {
  imgLink: string;
  title: string;
  children: string;
}

export default function Process(props: Props) {
  return (
    <div className="border flex flex-col justify-between items-start p-6 lg:p-8 rounded-lg bg-secondary/[18%]">
      <img src={props.imgLink} className="h-[16rem] opacity-20"></img>
      <div>
        <h2 className="title-1 gradient-text mb-2 -mt-16">{props.title}</h2>
        <p className="text-neutral-400 xl:text-lg">{props.children}</p>
      </div>
    </div>
  );
}
