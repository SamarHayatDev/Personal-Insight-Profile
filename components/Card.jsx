import Image from "next/image";
import Name from "./Name";

const Card = () => {
  const demographics = [
    { label: "Age:", value: "21" },
    { label: "Marital status:", value: "Single" },
    { label: "Education", value: "A-level" },
    // Add more demographics as needed
  ];

  return (
    <div className="card">
      <div className="flex items-center flex-col gap-1">
        <Image
          src="/img/profile.jpg"
          width={100}
          height={100}
          alt="Profile"
          className="rounded-full"
        />
        {/* <Name name="Samar Hayat" /> */}
        <h3>Samar Hayat</h3>
        <p>Website Developer</p>
      </div>
      <div>
        <h3>Demographics:</h3>
        <div className=" grid gap-1">
          {demographics.map((demo, index) => (
            <div key={index} className="flex items-center justify-start gap-2">
              <span>{demo.label}</span>
              <p>{demo.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
