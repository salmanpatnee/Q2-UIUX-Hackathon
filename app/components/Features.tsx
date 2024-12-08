import { BadgeCheck, Headset, Trophy, Truck } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="bg-bg-light lg:py-20 py-10">
      <div className="wrapper">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center  gap-2">
            <Trophy size={50} />
            <div>
              <h5 className="font-semibold text-lg text-[#242424] mb-1">
                High Quality
              </h5>
              <p className="text-sm font-medium text-[#898989]">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <BadgeCheck size={50} />
            <div>
              <h5 className="font-semibold text-lg text-[#242424] mb-1">
                Warranty Protection
              </h5>
              <p className="text-sm font-medium text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <Truck size={50} />
            <div>
              <h5 className="font-semibold text-lg text-[#242424] mb-1">
                Free Shipping
              </h5>
              <p className="text-sm font-medium text-[#898989]">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <Headset size={50} />
            <div>
              <h5 className="font-semibold text-lg text-[#242424] mb-1">
                24 / 7 Support
              </h5>
              <p className="text-sm font-medium text-[#898989]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
