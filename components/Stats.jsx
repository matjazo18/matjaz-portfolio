"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "programming languages",
  },
  {
    num: 6,
    text: "finished projects",
  },
  {
    num: 2,
    text: "years of experience",
  },
  {
    num: 5000,
    text: "Lines of code",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-10 justify-center max-w-[90vw] xl:max-w-none mx-auto">
            {stats.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center flex-grow basis-[120px] text-center xl:flex-row"
                >
                  <CountUp
                    end={item.num}
                    duration={3}
                    delay={0.5}
                    className="text-4xl xl:text-6xl text-accent font-extrabold"
                  />
                  <p
                    className={`mt-2 ${
                      item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } text-sm xl:text-base text-white/80`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
