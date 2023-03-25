interface CardWithImage {
  id: number;
  image: string;
  heading: string;
  description: string;
}

const constructionData:Array<CardWithImage> = [
  {
    id: 1,
    image: "/img/projects/construction-1.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
  {
    id: 2,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
  {
    id: 3,
    image: "/img/projects/construction-3.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
  {
    id: 4,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
  {
    id: 5,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
  {
    id: 6,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
  },
];

import ImageCard from "../ImageCard/ImageCard";
import HeadingBlock from "../comman/HeadingBlock";
import Services from "../Services/Services";

const Constructions = () => {
  
  return (
    <>
    <HeadingBlock heading="Constructionss" description="Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum"/>
    <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center">
      {constructionData.map((item, index) => {
        return (
          <>
            <ImageCard key={index} data = {item}/>
          </>
        );
      })}
    </div>
    </>
  );
};

export default Constructions;
