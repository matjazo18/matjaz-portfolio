import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Image from "next/image";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

// kle moras samo order spremenit ce te bo kej fukal
// wtf
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-screen  xl:mt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-4 xl:gap-8">
          {/* Photo - moves below text on mobile */}

          {/* Text + Button/Social */}
          <div className="text-center xl:text-left order-2 xl:order-2">
            {/* Text Section */}
            <div>
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 my-4">
                Hello,
                <br />
                my name is
                <br />
                <span className="text-accent">Matjaž Gazvoda</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I'm a software developer dedicated to crafting user experiences
                that are not only highly functional but also visually engaging.
              </p>
            </div>

            {/* Button + Social - row on desktop, column on mobile */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-8">
              <Button
                className="flex items-center uppercase gap-2 px-8 py-2"
                variant="outline"
                size="lg"
              >
                <span>DOWNLOAD CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Social containerStyle="flex gap-6" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-1 mb-8 xl:mb-0 mt-10 ">
            <Photo />
          </div>
        </div>
        <div className="mt-12">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
