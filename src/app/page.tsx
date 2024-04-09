// import Image from "next/image";
import Carousal from "components/landing/carousal";
import NavBar from "components/nav-bar";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      {/* <div className="h-96 w-full">
        <div className="mx-8 mt-12 h-96 rounded-lg bg-secondary"></div>
      </div> */}
      <Carousal />
      <div className="mt-12 flex w-full">
        <div className="ml-8 h-10 basis-1/4">
          <div className=" my-10 h-96 rounded-lg bg-secondary"></div>
        </div>
        <div className="my-10 flex basis-3/4 flex-wrap justify-evenly gap-4 ">
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
          <img alt="" className="my-2 rounded-lg" src="/nepo.jpg" />
        </div>
      </div>
    </main>
  );
};

export default Home;
