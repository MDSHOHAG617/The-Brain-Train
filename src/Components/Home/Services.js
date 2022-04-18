import React from "react";
import Service from "./Service";

const Services = () => {
  const Services = [
    {
      id: 1,
      Name: "Jubair Alom",
      Price: "$ 10 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/271240696_3338033523090818_8761035112113010097_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHZeUkdb0KvhrQ7dSK6PPvTV2hcnfbgSlNXaFyd9uBKU8oMc-wvUHHTwK-ri-nrUarjzfeCwYNYxUrsfWRfmeJd&_nc_ohc=1D2skRcxgbwAX91ML5u&_nc_ht=scontent.fdac15-1.fna&oh=00_AT-NqI_nrn9JkXeaswe00HTgAEFrw7pZFVbdS0tj3GFiRg&oe=62624B66",
      description:
        " He has an Expertise on Bachelor of Business Administration(BBA). He is an Amazing teacher. He is so humble and polite, he charge per hour ten dollar only",
    },
    {
      id: 2,
      Name: "Kamrul Hasan ",
      Price: "$ 13 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/272891095_1430622754007253_9125099445951322677_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHTU-N2wQB6YWlDA9QtzBZxwnxZNC0FFcLCfFk0LQUVwssb_Dy3BAvVyqC_KzEbJZLZLWNaMLiy1o5zA1xKseSs&_nc_ohc=PtFmUYMA9TYAX8n7v2N&_nc_ht=scontent.fdac15-1.fna&oh=00_AT8wi1_-Rn8K5MgGzjcTJaJdm5LGBHZaAhgYe7J-5GGSzA&oe=62618CC9",
      description:
        "He has an Expertise on Web Development, he is a MERN Stack Developer, he has so much experience on it so can be best tutor for you, so recomanded  ",
    },
    {
      id: 3,
      Name: " AShikur Rahman",
      Price: "$ 9 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/250954047_3032397863700474_2769400459490177611_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHmZ32-e-838629Y-T3vkqDGT8weoMJLV4ZPzB6gwktXlsKVnRIncx_Cn7VbnP7RoqmbQMr_pDXZ9WzeVQnhOif&_nc_ohc=mDT2eOO8--4AX8MFRzp&tn=pi8lkkBHMnPvkzzK&_nc_ht=scontent.fdac15-1.fna&oh=00_AT-NTrPPVYbhtSX_fpF3ab8fB1QYYtSDMDfwWQkutsAtWw&oe=62612C16",
      description:
        "Our most Senior teacher Ashikur Sir, he is so popular for his kindness to all of students as also guardian. he is our Hr also, he is take our presentation classes",
    },
    {
      id: 4,
      Name: "Shams Al Fahad",
      Price: "$ 11 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/272093606_4684482688303232_9173665461467871138_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeH4ZqXBzNmKV1d7sSazcN1xrHba7HJJAuusdtrsckkC6-jLUQXJWTPyzydDwGX7e7e-YJ9c8aIugbbxea3qeyj9&_nc_ohc=iar3-h-DOAIAX8b6MS9&tn=pi8lkkBHMnPvkzzK&_nc_ht=scontent.fdac15-1.fna&oh=00_AT__ql6xmZ5Suf3WzqrIV2agz7fOgvlL4o3Hdf4DiwBQuQ&oe=626224F1",
      description:
        "Our best Biology Teacher, Most Senior and also most Experienced teacher, he had a PHD oh Micro biology. He is also so kind to students as always ",
    },
    {
      id: 5,
      Name: "Ariful Islam",
      Price: "$ 15 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t1.6435-9/117112819_604612210484736_2582803290420221715_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFKMxTGvDb83Qwqp3HsRmKe-DVkXUK2NRj4NWRdQrY1GOzUH1izPxxU0ZiYE5h0stDAxvQC5EY08iz3ScaUhdb-&_nc_ohc=e8_2ndeK0p4AX_UmASi&_nc_ht=scontent.fdac15-1.fna&oh=00_AT88ie4EdCfnrBd26hOqyx-YtEsq7qUwPivRUQtXyykGFw&oe=62825DC7",
      description:
        " Our most demanded teacher, he charge for per hour fifteen dollar, he has a expertise on textile and also management, he will be our next gen icon ",
    },
    {
      id: 6,
      Name: "Md Shohag (MD)",
      Price: "$ 50 /hr",
      image:
        "https://scontent.fdac15-1.fna.fbcdn.net/v/t39.30808-6/277167251_2219883851492599_654433035876123528_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHK5jI929stR6Fycnu8NfpVNrJgWhj4L3Y2smBaGPgvdrdyq-Coy0C12tXD-CzAvZJO_ijJMcdHH5nsJeqNyVYi&_nc_ohc=Ym_Bq8WHK-kAX9ZS9iP&_nc_ht=scontent.fdac15-1.fna&oh=00_AT8xF4IYjJEMWdRm3r5JG5DZ445mEgcE9wT-5qPFPvMY7w&oe=62627F10",
      description:
        " Our managing director Md Shohag (Sir). He charge for his work per hour fifty dollar only, Though he won't take any classes :XD. He is the best MD we have ever had",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-medium mt-10 text-slate-600"> services</h1>

      <div className="grid gap-10 container lg:grid-cols-3 md:grid-cols-2 mx-auto">
        {Services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
