"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "programskih jezikov",
  },
  {
    num: 6,
    text: "končanih projektov",
  },
  {
    num: 2,
    text: "leti izkušenj",
  },
  {
    num: 5000,
    text: "vrstic kode",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex justify-center gap-4 items-center justifty-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl text-accent"
                />
                <p
                  className={`${
                    item.text.length < 15 ? " max-w-[100px]" : "max-w-[150px]"
                  }`}
                  key={index}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
