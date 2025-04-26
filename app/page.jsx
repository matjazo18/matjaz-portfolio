import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-screen">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-4 ">
          {/*TExt*/}
          <div className="text-center xl:text-left">
            <span className="text-xl "> Software Developer</span>
            <h1 className="h1 my-4">
              Živjo,ime mi je
              <br />
              <span className="text-accent"> Matjaž Gazvoda</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Sem razvijalec programske opreme, ki se osredotoča na ustvarjanje
              uporabniških izkušenj, ki so tako funkcionalne kot privlačne.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                className="flex items-center upercase gap-2 px-6 py-2"
                variant="outline"
                size="lg"
              >
                <span>PRENESI CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
