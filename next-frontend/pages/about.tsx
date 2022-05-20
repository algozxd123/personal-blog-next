import { NextPage } from "next";
import Image from "next/image";
import aboutImage from "/public/bosa-blog-dark-1920-940-img1-1370x550.jpg";

const About: NextPage = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-9/12 p-5">
        <h1 className="text-4xl mb-10 font-serif font-thin">About</h1>
        <Image alt="Post cover image" src={aboutImage}></Image>
        <div className="mt-6 text-lg leading-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac interdum nisi. Pellentesque maximus augue nec rhoncus aliquet. Pellentesque condimentum elementum lorem sit amet porta. Sed iaculis turpis sit amet enim volutpat, vitae condimentum lacus consequat. Nulla ex augue, mattis ut ultricies sit amet, vestibulum eget ex. Curabitur at rutrum eros. Morbi vulputate euismod turpis, sit amet semper ligula porttitor sit amet. Nullam et suscipit augue. Ut iaculis viverra turpis nec fermentum. In sed venenatis tortor. Mauris non enim vel lorem feugiat finibus. Sed eleifend, lectus at dignissim consequat, tellus erat semper odio, facilisis auctor metus dolor ut arcu. Maecenas commodo, elit a interdum tempor, magna tellus efficitur mauris, et bibendum mauris nulla eget libero.</p>
        </div>
      </div>
    </div>
  );
};

export default About;