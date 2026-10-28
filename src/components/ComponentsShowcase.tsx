const ComponentsShowcase = () => {
  return (
    <div className="w-full">
      <div
        id="bento"
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 h-auto md:h-300 w-full min-h-screen md:min-h-150 gap-4 p-4 md:p-8 max-w-7xl mx-auto"
      >
        <div
          id="one"
          className="bg-[#C0B1E8] col-span-1 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 rounded-3xl min-h-[250px]"
        ></div>

        <div
          id="two"
          className="bg-[#F482A4] col-span-1 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 rounded-3xl min-h-[200px]"
        ></div>

        <div
          id="three"
          className="bg-[#C9D98C] col-span-1 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 rounded-3xl min-h-[200px]"
        ></div>

        <div
          id="four"
          className="bg-[#FDDD6E] col-span-1 md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 rounded-3xl min-h-[200px]"
        ></div>

        <div
          id="five"
          className="bg-[#F8A475] col-span-1 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4 rounded-3xl min-h-[200px]"
        ></div>

        <div
          id="six"
          className="bg-[#B6CDDA] col-span-1 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 rounded-3xl min-h-[200px]"
        ></div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
