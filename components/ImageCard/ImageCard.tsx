import Link from "next/link";

const ImageCard = (props: any) => {
  return (
    <div id={props.data.id} className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img className="h-40 object-cover rounded-xl" src={props.data.image} alt="" />
      <div className="p-2">
        <h2 className="font-bold text-lg mb-2 text-slate-400">
          {props.data.heading}
        </h2>
       
        <p className="text-sm text-gray-600">{props.data.description}</p>
      </div>
      { props.data.isLink ? 
          <div className="m-2 p-1">
            <Link href={props.data.link+'/' + props.data.id} role='button' className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</Link>
          {/* <a role='button' href={props.data.link+'/' + props.data.id} className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a> */}
          </div>
         : <></>
      }
    </div>
  );
};

export default ImageCard;
