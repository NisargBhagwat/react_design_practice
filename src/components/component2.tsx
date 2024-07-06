const arr = [
  {
    title: "2014",
    desc: "Established",
  },
  {
    title: "1500+",
    desc: "Satisfied customers",
  },
  {
    title: "190",
    desc: "Worldwide offices",
  },
];

const Component2 = () => {
  return (
    <div className="h-[1080px] flex pr-[238px]">
      <div className="absolute  left-[1350px] bottom-[150px] rotate-45 h-[1245px] w-[688px] bg-[#EBF6F8] -z-10 rounded-[350px]"></div>
      <img src="./public/image2.png" alt="" />
      <div className="pt-[155px] font-[600]">
        <h1 className="text-[100px] leading-[125px] pb-[147px]">Who we are?</h1>
        <p className="text-4xl leading-[55px] pb-[145px] pr-[300px]">
          We prioritize quality over quantity because we want every product that
          we design, to be successful in accordance with the goals and also the
          wishes of the client
        </p>
        <div className="flex justify-between">
          {arr.map((it) => (
            <div>
              <div className="text-[50px] leading-[75px]">{it.title}</div>
              <div className="font-[400] text-[26px] leading-[45px]">
                {it.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component2;
