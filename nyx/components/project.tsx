interface Props {
  img: string;
  link: string;
  backgroundImg: string;
  title: string;
  description: string;
}

export default function Project(props: Props) {
  let backgroundLink = "bg-[url('" + props.backgroundImg + "')]";

  return (
    <a href={props.link} className="group/link scroll-mt-20">
      <div>
        <div
          className={`aspect-w-16 aspect-h-12 ${backgroundLink} bg-cover w-full rounded-lg object-fit mb-4 lg:mb-5 bg-center transition-all`}
        >
          <div className="flex items-center justify-center">
            <img
              src={props.img}
              className="w-[80%] h-auto rounded-xl group-hover/link:scale-105 group-focus/link:scale-105 transition-transform shadow-2xl"
            ></img>
          </div>
        </div>

        <div className="grid gap-1">
          <h2 className="title-2 mb-0.5 mt-1">{props.title}</h2>

          <p className="body-1">{props.description}</p>
        </div>
      </div>
    </a>
  );
}
