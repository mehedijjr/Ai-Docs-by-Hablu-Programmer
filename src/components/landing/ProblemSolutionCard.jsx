export const ProblemSolutionCard = ({
  image,
  title,
  des1,
  des2,
}) => {
  return (
    <div className="w-full max-w-[272px] min-h-[249px] rounded-[20px] p-5 space-y-5 shadow-[0px_10px_30px_0px_#02B6Dc26] hover:bg-primary transition-all duration-300 group">

      <div className="bg-primary size-14.5 rounded-full flex justify-center items-center">
        <img src={image} alt={title} />
      </div>

      <h1 className="font-bold text-lg text-dark leading-none group-hover:text-white">
        {title}
      </h1>

      <div className="text-muted space-y-2.5 group-hover:text-white">
        <p>{des1}</p>

        {des2 && <p>{des2}</p>}
      </div>

    </div>
  );
};