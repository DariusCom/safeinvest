import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Earth";

const EarthTestimonials = ({ changeReviewRegion }) => {
  return (
    <div className="w-full h-full p-14 tablet:p-0">
      <Canvas className="bg-[#030413] cursor-pointer">
        <Suspense fallback={null}>
          <ambientLight />
          <Model changeReviewRegion={changeReviewRegion} scale={0.16} />
          <OrbitControls enableZoom={false} target={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthTestimonials;
