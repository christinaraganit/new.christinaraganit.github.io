interface Props {
  imgLink: string;
  children: string;
  name: string;
  title: string;
}

export default function Testimonial(props: Props) {
  return (
    <div className="border p-6 lg:p-8 rounded-lg">
      <p className="mb-6 body-1 text-neutral-300 leading-7">{props.children}</p>
      <div className="flex items-center gap-4">
        <div className="w-10 aspect-square">
          <img src={props.imgLink} className="rounded-full"></img>
        </div>
        <div>
          <span className="block small mb-1">{props.name}</span>
          <span className="muted">{props.title}</span>
        </div>
      </div>
    </div>
  );
}
