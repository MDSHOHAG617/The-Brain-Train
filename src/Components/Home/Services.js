import React from "react";
import Service from "./Service";

const Services = () => {
  const Services = [
    {
      id: 1,
      Name: "Md Medam",
      Price: 3000,
      image:
        "https://img.freepik.com/free-photo/senior-male-professor-with-arms-crossed-standing-against-chalkboard_23-2148200953.jpg?size=626&ext=jpg&ga=GA1.2.1326531604.1648218860",
      description:
        " hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji ",
    },
    {
      id: 2,
      Name: "Md Mohila medum",
      Price: 3000,
      image:
        "https://img.freepik.com/free-photo/portrait-smiling-school-teacher-holding-books-classroom_107420-35631.jpg?w=740",
      description:
        " hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji ",
    },
    {
      id: 3,
      Name: "Md Huda medam",
      Price: 3000,
      image:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1650138098~exp=1650138698~hmac=edb880c226990c61bcf75cfd425f076bd1133ce00b8ccfe913fe36c6a064e68a&w=740",
      description:
        " hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji hijibiji ",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-medium mt-10 text-slate-600"> services</h1>

      <div className="grid gap-10 container lg:grid-cols-3 md:grid-cols-2 mx-auto">
        {Services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
