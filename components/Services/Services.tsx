import HeadingBlock from "../comman/HeadingBlock";
import ImageCard from "../ImageCard/ImageCard";
interface CardWithLink {
  id: number;
  image: string;
  heading: string;
  description: string;
  isLink: boolean;
  link: string;
}

const servicesData: Array<CardWithLink> = [
  {
    id: 1,
    image: "/img/projects/construction-1.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
  {
    id: 2,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
  {
    id: 3,
    image: "/img/projects/construction-3.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
  {
    id: 4,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
  {
    id: 5,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
  {
    id: 6,
    image: "/img/projects/construction-2.jpg",
    heading: "Eligendi omnis sunt veritatis.",
    description:
      "Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.",
    isLink: true,
    link: "/services",
  },
];

const Services = () => {
  return (
    <>
    <HeadingBlock heading="Services" description="Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum"/>
    <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center">
      {servicesData.map((item, index) => {
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
export default Services;

