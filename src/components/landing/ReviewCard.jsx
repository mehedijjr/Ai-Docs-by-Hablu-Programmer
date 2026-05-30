import { cn } from "../../lib/utils/cn";

export const ReviewCard = ({ name, image, type, active, onClick }) => {
  return (
    <div>
      <button
      onClick={onClick}
        className={cn(
          "inline-flex justify-start items-center border border-primary rounded-[20px] w-full lg:w-100 xl:w-[491px] py-px px-5 gap-4",
          active && "bg-primary"
        )}
      >

        <img
          src={image}
          alt={name}
          className="rounded-full"
        />

        <div
          className={cn(
            "font-semibold text-base text-muted",
            active && "text-white"
          )}
        >
          <h4>{name}</h4>

          <p>{type}</p>
        </div>

      </button>
    </div>
  );
};