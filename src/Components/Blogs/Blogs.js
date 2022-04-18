import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className={"mt-8 text-4xl font-semibold"}>welcome to blogs</h1>
      <div className="cards grid grid-cols-3 gap-5 m-8">
        {" "}
        <div className="Q-card bg-sky-100 p-4 rounded border-2 border-sky-400">
          <h1 className="text-xl p-2 font-bold  border-2 rounded border-slate-500">
            Difference between authorization and authentication
          </h1>
          <p className="border-2 rounded border-slate-300  my-3 p-2">
            There is some difference between Authorization and Authentication,
            Like Authentication verify who is user and on the other hand
            Authorization determines which and what resources can access a
            user.An user can easily see the authentication of an website but
            without authorization user can't access or browse all the path.
            Authentication is the primary step of a good identify and access
            management process, but the Authorization take places after
            authentication always.if i made a protected route in my website than
            no one can enter that particular rout without make authentication,
            if the user is authentic than they will get authorization, and than
            they can go protected route also.
          </p>
        </div>
        <div className="Q-card bg-sky-100 p-4 rounded border-2 border-sky-400">
          <h1 className="text-xl rounded p-2 font-bold border-2 border-slate-500">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="border-2 rounded border-slate-300 my-3 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            quia provident modi odit minima, quaerat non veritatis quod. Hic
            numquam eaque quod! Et accusantium minima voluptatem ea facere quasi
            earum, ipsam dignissimos. Nisi iure, nostrum illum ea ad architecto
            veniam voluptatibus aut culpa neque, nemo adipisci eveniet. Maxime,
            veritatis nobis.
          </p>
        </div>
        <div className="Q-card bg-sky-100 p-4 rounded border-2 border-sky-400">
          <h1 className="text-xl rounded p-2 font-bold border-2 border-slate-500">
            What other services does firebase provide other than authentication
          </h1>
          <p className="border-2 rounded border-slate-300 my-3 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            quia provident modi odit minima, quaerat non veritatis quod. Hic
            numquam eaque quod! Et accusantium minima voluptatem ea facere quasi
            earum, ipsam dignissimos. Nisi iure, nostrum illum ea ad architecto
            veniam voluptatibus aut culpa neque, nemo adipisci eveniet. Maxime,
            veritatis nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
<h1>welcome to blogs</h1>;
