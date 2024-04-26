import RoomCanvas from "./components/ui/canvas/RoomCanvas";

const Hero = () => {
  return (
    <section className='max-w-3xl m-auto'>
      <div className='h-[300px] sm:h-[400px]'>
        <RoomCanvas />
      </div>
    </section>
  );
};

export default Hero;
