import Button from '@/components/Button/Button'
import Image from 'next/image'

interface Props {}
const About = (props: Props) => {
  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about"
          fill={true}
          className="object-cover grayscale"
        />
        <div className="absolute text-white bg-[#53C28A] p-2 rounded bottom-5 left-5">
          <h3 className="text-2xl font-semibold">Digital Storytellers</h3>
          <p className="text-xl font-semibold">Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-16">
        <div className="w-[50%] flex flex-col gap-7">
          <h2 className="font-semibold text-3xl">Who Are We?</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse
            tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="w-[50%] flex flex-col gap-7">
          <h2 className="font-semibold text-3xl">What We Do?</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />- Creative Illustrations
            <br />- Dynamic Websites
            <br />- Fast and Handy
            <br />- Mobile Apps
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  )
}
export default About
