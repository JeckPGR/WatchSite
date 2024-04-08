import GridLoader from "react-spinners/GridLoader";
const IsLoading = () => {
  return (
    <>
      <div className=" bg-indigo-950 flex flex-col justify-center items-center gap-y-8 h-screen lg:h-[91.2dvh]">
        <h1 className="md:text-7xl text-5xl animate-pulse text-white font-semibold">
          Watch<span className="text-indigo-500">Site</span>
        </h1>
        <GridLoader color="#5a009c" />
      </div>
    </>
  );
};

export default IsLoading;
