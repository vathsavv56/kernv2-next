"use client";

import ComponentBlock from "@/components/ComponentBlock";
import type { ComponentBlockProps } from "@/components/ComponentBlock";
import { KernOne } from "@/components/v1/kern-1";
import { KernFile, startData } from "@/components/v1/kern-fs";

const v1Components: ComponentBlockProps[] = [
  {
    component: <KernOne name="Click here" />,
    to: "/v1/kern101",
    version: "V1",
    name: "Kern101",
    codeName: "kern101",
  },
  {
    component: <KernFile list={startData} />,
    to: "/v1/kernfile",
    version: "V1",
    name: "kern-file",
    codeName: "kern102",
  },
  {
    image:
      "https://raw.githubusercontent.com/vathsavv56/images-repo/main/insp.png",
    to: "/v1/kern-inspiration",
    version: "V1",
    name: "kern-inspiration",
    codeName: "kern103",
  },
  {
    image:
      "https://raw.githubusercontent.com/vathsavv56/images-repo/main/footer.png",
    to: "/v1/kern-footer",
    version: "V1",
    name: "kern-footer",
    codeName: "kern104",
  },
];

const Components = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto mt-25 px-4">
      <div>
        <h2 className="text-3xl font-pixel text-center md:text-left">
          V1 : components
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2.5 mt-15 place-items-center md:place-items-start">
        {v1Components.map((item, index) => (
          <ComponentBlock
            component={item.component}
            image={item.image}
            to={item.to}
            version={item.version}
            name={item.name}
            codeName={item.codeName}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Components;
