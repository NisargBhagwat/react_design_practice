const Component1 = () => {
  return (
    <div className="px-[100px] pt-[179px] h-[1080px]">
      <h1 className="font-[600] text-6xl leading-[105px] max-w-[600px] pb-[115px]">
        The Great Principles of Good Presentation
      </h1>
      <p className="font-[400] text-3xl leading-[53px] max-w-[900px] pb-[180px]">
        A few tips how to create great presentation from a professional
        designers and marketers.
      </p>
      <div className="flex justify-between h-[190px]">
        <div className="w-[800px] bg-[#EBF6F8] rounded-full flex gap-8">
          <img
            src="./public/image1.png"
            alt=""
            className="rounded-full h-[160px] w-[160px] ml-[15px] my-auto"
          />
          <div className="my-auto">
            <div className="font-[600] text-4xl leading-[55px] pb-[18px]">
              Patrick Squeeze
            </div>
            <div className="font-[400] text-[16px] leading-[45px]">
              Head of Keynote
            </div>
          </div>
        </div>
        <div className="bg-[#6B53FD] w-[190px] rounded-full flex items-center justify-center">
          2021
        </div>
      </div>
    </div>
  );
};

export default Component1;
