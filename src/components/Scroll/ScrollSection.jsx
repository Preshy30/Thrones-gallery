import Atropos from "atropos/react";
import "atropos/css";
import axios from "axios";
import { useState, useEffect } from "react";

const ScrollSection = () => {
  const [actors, setActors] = useState([]);
  // Make a GET request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://thronesapi.com/api/v2/Characters"
        );
        setActors(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(actors);
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* */}
      {actors.map((casts) => (
        <div
          key={casts.id}
          className="rounded overflow-hidden w-81 h-95 shadow-md mb-5 text-white"
        >
          <Atropos
            activeOffset={40}
            shadowScale={1.05}
            onEnter={() => console.log("Enter")}
            onLeave={() => console.log("Leave")}
            onRotate={(x, y) => console.log("Rotate", x, y)}
            duration={100}
            highlight={true}
          >
            <img
              src={casts.imageUrl}
              className="w-full h-60 object-cover"
              data-atropos-offset="5"
            />
            <div className="p-3" data-atropos-opacity="1;0">
              <p className="font-bold text-2xl text-[#00df9a]">
                {casts.fullName}
              </p>
              <p className="block text-grey-500">{casts.title}</p>
            </div>
          </Atropos>
        </div>
      ))}
    </div>
  );
};

export default ScrollSection;
