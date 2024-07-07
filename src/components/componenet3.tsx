const arr = [
  {
    title: "2014",
    desc: "Established",
  },
  {
    title: "1500+",
    desc: "Satisfied customers",
  },
];

const Componenet3 = () => {
  return (
    <div className="flex">
      <img src="./public/image3.png" alt="" className="w-[800px]" />
      <div className="font-[600] pl-[132px] py-[155px]">
        <h1 className="text-[100px] leading-[125px] pb-[147px]">Who we are?</h1>
        <div className="text-4xl leading-[55px] max-w-[750px] pb-[145px]">
          We prioritize quality over quantity because we want every product that
          we design, to be successful in accordance with the goals and also the
          wishes of the client
        </div>
        <div className="flex gap-[350px]">
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

export default Componenet3;
