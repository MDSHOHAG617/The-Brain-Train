import React from "react";

const Blogs = () => {
  return (
    <div>
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
            I am using firebase for authentication and hosting now, in future if
            i find something special compare to firebase than i will definitely
            use that one. Firebase gives us to authenticate user like, email
            with password, github , facebook, google etc. And also we can easily
            hosting a website by using firebase.There are some seasons for look
            for firebase alternatives, firebase isn't open source, not all
            services are free, only support google cloud hosting etc.. here are
            many alternatives to firebase like: Back4App, Parse, AWS Amplify,
            Backendless, Kuzzle, Supabase, appwrite, Hasura, Nhost, Dployd etc
          </p>
        </div>
        <div className="Q-card bg-sky-100 p-4 rounded border-2 border-sky-400">
          <h1 className="text-xl rounded p-2 font-bold border-2 border-slate-500">
            What other services does firebase provide other than authentication
          </h1>
          <p className="border-2 rounded border-slate-300 my-3 p-2">
            Firebase enables developers to develop iOS, Android and Web apps.
            Firebase offers many services without Authentication like:
            Analytics,Which is free from firebase. Cloud massaging, it is also
            free for user or a companies, it is a cross platform. Realtime
            Database, its very use full services it's helps a lot, even after
            the is apps is offline that time it will work properly at Realtime.
            Crashlytics, its also a realtime service provider it's help
            developer to notify if anything wrong in the app. Performance, it
            notify performance based thing where when you should improves your
            apps. Test lab, it's a cloud based app testing infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
<h1>welcome to blogs</h1>;
