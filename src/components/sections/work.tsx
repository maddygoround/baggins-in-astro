import clsx from "clsx";
import { type Project as ProjectData, type ProjectType } from "../../types/project";
import CodeIcon from "../../assets/svgs/code.svg";
import DesignIcon from "../../assets/svgs/design.svg";
import VideoIcon from "../../assets/svgs/video.svg";


const TypeBadge = ({
  type,
  compact = false,
}: { type: ProjectType, compact: boolean }) => {
  const tagClassName = "rounded-full px-3 flex items-center text-sm mr-1";
  const iconClassName = "mr-1";

  switch (type) {
    case "code":
      return compact ? (
        <img src={CodeIcon.src} className={iconClassName} alt="Code" aria-label="Code" />
      ) : (
        <div className={`${tagClassName} bg-green-200 text-green-800`}>
          Code
        </div>
      );
    case "design":
      return compact ? (
        <img src={DesignIcon.src} className={iconClassName} alt="Design" aria-label="Design" />
      ) : (
        <div className={`${tagClassName} bg-orange-200 text-red-700`}>
          Design
        </div>
      );
    case "video":
      return compact ? (
        <img src={VideoIcon.src} className={iconClassName} alt="Video" aria-label="Video" />

      ) : (
        <div className={`${tagClassName} bg-blue-200 text-blue-700`}>Video</div>
      );

  }
};

export const Project: React.FC<
  ProjectData & {
    featured?: boolean;
    className?: string;
  }
> = ({ title, preview, images, featured, slug, types, className }) => (
    <a
    href={`/${slug}`}
      aria-label={`${title} - Project`}
      className={clsx(
        "focus group border bg-white rounded-md overflow-hidden flex flex-col",
        "transform transition-transform ease-in-out duration-100 hover:border-gray-400",
        featured && "shadow-sm hover:-translate-y-1 focus:-translate-y-1",
        className
      )}
    >
    <div className="flex flex-1 flex-col justify-between">
      <div className="p-4 pb-0">
        <div className="font-semibold text-gray-800 group-hover:text-gray-700">
          {title}
        </div>
        <div className="text-s"></div>
        <div className={clsx(!featured && "text-sm", "text-gray-700")}>
          {preview}
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          {types.map(type => (
            <TypeBadge key={type} compact type={type} />
          ))}
        </div>
      </div>
    </div>
    </a>

);

export const Work: React.FC<{
  projects: ProjectData[];
  preview?: boolean;
}> = ({ projects, preview }) => (
  <div className="container my-8">
    <h1 className="text-4xl font-bold">Work</h1>
    <div className="text-2xl text-gray-600">Things I Have Made in the Past</div>
    { !preview ? (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
      {projects.map(p => (
        <Project key={p.id} featured {...p} />
      ))}
    </div>
    )
    : (
      <div className="grid md:grid mt-4 grid-cols-2 sm:grid-cols-4 gap-4 my-4">
        {projects.slice(3, 6).map(p => (
          <Project key={p.id} className="md:flex" {...p} />
        ))}
        <div className="flex flex-col items-center justify-center text-center py-4">
          <div className="text-lg font-bold text-gray-800">
            Want to see more?
          </div>
          <div className="text-gray-600">Explore more of my work</div>
          
            <a href="/work" className="mt-3 bg-gray-800 hover:bg-gray-700 text-gray-100 py-1 px-6 rounded-md">
              View all
            </a>
          
        </div>
      </div>
    )}
  </div>
);
