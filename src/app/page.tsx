"use client";
import DemoMain from "@/components/demo/DemoMain";
import DemoSlides from "@/components/demo/DemoSlides";
import { StackSlider } from "@/components/StackSlider/StatckSlider";
import { useState } from "react";

const demoSlides = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }, { name: "e" }];

export default function Home() {
  const [d, setD] = useState(0);

  return (
    <div className="flex justify-center items-center h-svh  ">
      <StackSlider stackContainerClass="w-[300px] bg-stackSlide">
        <DemoMain d={d} setD={setD} />
        123
        {demoSlides.map((elem, index) => (
          <DemoSlides
            key={index}
            name={elem.name}
            str={`Component Name is ${elem.name}`}
            d={d}
            setD={setD}
          />
        ))}
      </StackSlider>
    </div>
  );
}
