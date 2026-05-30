import { Arrow } from "../../shared/icon/Icon";

export const FaqCard = ({ a, q, onClick, isActive }) => {
  return (
    <div className="shadow-[0px_21.46px_25px_0px_#02B6DC1A] rounded-[20px] py-5 px-7.5 bg-white">
      <button
        onClick={onClick}
        className="inline-flex justify-between items-center gap-5"
      >
        <h1 className="font-bold text-lg lg:text-[26px] lg:leading-9 text-muted">
          {q}
        </h1>
        <div className="text-primary">
          <Arrow
            className={
              isActive
                ? "transition-transform duration-300 -rotate-90"
                : "transition-transform duration-300 rotate-90"
            }
          />
        </div>
      </button>
      {isActive && <p className="text-muted pt-5 lg:text-base text-sm">{a}</p>}
    </div>
  );
};
