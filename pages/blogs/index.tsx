import Link from "next/link";
import HeadingBlock from "@/components/comman/HeadingBlock";
import Blogs from "@/components/Blog/Blogs";
const BlogsHome = (props: any) => {
  console.log(props.data);
  return (
    <>
    <HeadingBlock heading="Blogs" description="this component is created using getServerSideProps()"/>
    <Blogs data={props.data}/>
    </>
  )
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
