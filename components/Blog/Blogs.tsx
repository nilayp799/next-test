import Link from "next/link";
const Blogs = (props: any) => {
  return (
    <>
      {props.data.map((blog:any) => {
        return (
          <>
            <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center"></div>
            <div
              id={blog.id}
              className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
            >
              <img
                className="h-40 object-cover rounded-xl"
                src={blog.image}
                alt=""
              />
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 text-slate-400">
                  {blog.title}
                </h2>
                <h3 className="font-mono text-lg mb-2 text-orange-400">
                  published on {blog.date}
                </h3>

                <p className="text-sm text-gray-600">{blog.description}</p>
              </div>
              <div className="m-2 p-1">
                <Link
                  href={blog.link + "/" + blog.id}
                  role="button"
                  className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center"></div>
          </>
        );
      })}
    </>
  );
};

export default Blogs;
