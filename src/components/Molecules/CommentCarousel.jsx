import { comment } from "../../data/comment";
export const CommentCarousel = () => {
  return (
    <div className=" flex flex-col gap-y-4 h-[21rem] overflow-y-scroll genre-dropdown">
      {comment.map((data) => (
        <div
          className="flex flex-col bg-indigo-700/80 p-5    gap-y-3 rounded-md"
          key={data.id}
          aria-label="comment-card"
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <img
                src={data.image}
                alt="image-users"
                className=" rounded-full size-11 bg-slate-600 object-cover object-center"
              />
              <h2>{data.name}</h2>
            </div>
            <p className="text-sm">{data.time}</p>
          </div>

          <div className="px-4">
            <p>{data.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
