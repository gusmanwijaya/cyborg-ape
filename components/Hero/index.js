/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <>
      <div className="flex justify-center mt-0 lg:-mt-16">
        <img src="/img/hero.png" alt="Hero Image" className="min-w-full" />
      </div>
      <div className="px-12 mt-10 md:mt-20">
        <div className="text-center space-y-5 md:space-y-7">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-300">
            Cyborg Ape
          </h1>
          <p className="md:px-36 text-gray-500 text-sm md:text-base">
            Cyborg Ape displays the combined elements of Robotic mechanisms and
            Ape like features. Every Ape that is a part of our genesis program
            are all Hand Made 1 of 1s. With our Cyborg Apes we value Detail and
            Uniqueness as our priority! This is a Derivative project that
            displays the value in robotic arts combined with the arts of Apes.
            (This project is Not Affiliated with BAYC).
          </p>
        </div>
      </div>
    </>
  );
}
