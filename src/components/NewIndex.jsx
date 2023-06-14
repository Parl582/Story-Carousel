import React from "react";
import NewCarasul from "./Carousel";
import Carousel from "./Carousel";

const NewIndex = () => {
  const data = [
    {
      images:
        "https://images.pexels.com/photos/16952093/pexels-photo-16952093/free-photo-of-young-woman-in-a-hat-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "image 1",

      header: "Header",
    },
    {
      images:
        "https://images.pexels.com/photos/16922982/pexels-photo-16922982/free-photo-of-love-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "image 2",

      header: "Header",
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9W5wKFJz73EYsMh58kD2Z2UGukbtvx5B-mg&usqp=CAU",

      url: "https://www.youtube.com/",
    },
    {
      images:
        "https://images.pexels.com/photos/16922982/pexels-photo-16922982/free-photo-of-love-field-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

      url: "https://www.youtube.com/",
    },
    {
      header: "Header",
      images:
        "https://images.pexels.com/photos/16551433/pexels-photo-16551433/free-photo-of-restaurant-patio-overlooking-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "image 4 ladkaojdouhua uehudhweufhyewgygewutf wetffuewgydgweyrf uewgeujoierhfuwef7tdgweuuio",
    },
  ];

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        <div className="md:w-[300px] w-full md:p-0 p-3 h-[500px] my-6">
          <h2 className="font-semibold py-2 text-[1.2rem]"> Descriptions </h2>
          <Carousel
            Sliders={data}
            animationClass={"animationOne"}
            textAnimationClass={"lineUp"}
            backGround={false}
            autoSlide={true}
            interval={5000}
            indicator="red"
            position={false}
            headingColor={false}
            headingAnimation={"headingOpacityChange"}
            bgColor={"red"}
          />
        </div>

      </div>
    </>
  );
};

export default NewIndex;


// echo "# story" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Parl582/story.git
// git push -u origin main
