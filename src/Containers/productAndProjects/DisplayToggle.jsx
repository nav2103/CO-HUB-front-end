import { useState } from "react";
import "./displayToggle.css";

const products = [
  { id: 1, name: "Product A", description: "Description of Product A" },
  { id: 2, name: "Product B", description: "Description of Product B" },
  { id: 3, name: "Product C", description: "Description of Product C" },
  { id: 4, name: "Product D", description: "Description of Product D" },
  { id: 5, name: "Product E", description: "Description of Product E" },
  { id: 6, name: "Product F", description: "Description of Product F" },
];

const projects = [
  { id: 1, name: "Project X", description: "Description of Project X" },
  { id: 2, name: "Project Y", description: "Description of Project Y" },
  { id: 3, name: "Project Z", description: "Description of Project Z" },
];

const DisplayToggle = () => {
  const [showProducts, setShowProducts] = useState(true);
  const [activeButton, setActiveButton] = useState("products");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setShowProducts(buttonName === "products");
  };
  return (
    <div className="text-white font-outfit p-8 mt-10 container">
      <div className="flex justify-start items-center mb-4">
        <div>
          <button
            className={`px-4 py-2 font-roboto-mono text-xl rounded-md transition-all ${
              activeButton === "products" ? " text-[#66fcf1]" : "text-white"
            }`}
            onClick={() => handleButtonClick("products")}
          >
            Products
          </button>
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
        </div>

        <div className=" w-1 h-6 bg-lilac"></div>
        <button
          className={`px-4 py-2 font-roboto-mono text-xl rounded-md transition-all ${
            activeButton === "projects" ? " text-[#66fcf1]" : "text-white"
          }`}
          onClick={() => handleButtonClick("projects")}
        >
          Projects
        </button>
      </div>

      <div>
        {showProducts ? (
          <div>
            <ul className="mt-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="mb-4 transition duration-300 ease-in-out hover:scale-105 bg-[#D9D9D91A] p-4 rounded-md shadow-md"
                >
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p>{product.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <ul className="mt-4">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className="mb-4 transition duration-300 ease-in-out hover:scale-105 bg-[#D9D9D91A] p-4 rounded-md shadow-md"
                >
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayToggle;
