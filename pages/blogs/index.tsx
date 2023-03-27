import Link from "next/link";
import HeadingBlock from "@/components/comman/HeadingBlock";
const BlogsHome = (props: any) => {
  console.log(props.data);
  return props.data.map((blog:any, index:any) => {
    return (
      <>
      <HeadingBlock heading="Blogs" description="this component is created using getServerSideProps()"/>
      <div className="w-full mt-14 gap-4 flex-wrap flex justify-center items-center"></div>
        <div
          id={props.data.id}
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
            <h3 className="font-mono text-lg mb-2 text-orange-400" >published on {blog.date}</h3>

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
  });
};

export default BlogsHome;

export async function getServerSideProps() {
  const res = await fetch(
    "https://next-test-nilayp799.vercel.app/api/blogs/getBlogs",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  const data = res.blogs.map((blog: any, index: any) => {
    return {
      id: blog["_id"],
      title: blog.title,
      author: blog.author,
      image: blog.image,
      description: blog.description,
      date: blog.date,
      link: "/blogs",
    };
  });

  return {
    props: {
      data: data,
    },
  };
}
