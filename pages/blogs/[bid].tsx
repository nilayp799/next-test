const Blog = (props:any) =>{
  return(
    <>
    <h3 className=" text-center">this is blog page - developed using server props and api</h3>
    <div className=" container content-center">
      <h1>{props.data.title}</h1>
      <h3>by {props.data.author}</h3>
      <h5>on {props.data.date}</h5>
      <img src={props.data.image} alt="cover image" />
      <p className=" italic text-sky-900 text-xl">
        {props.data.content}
      </p>

      <h4 className=" text-red-400">comment section will be implemented soon.. stay tuned</h4>
    </div>
    </>
  )
}

export default Blog;


export async function getServerSideProps(context:any) {
  const {params} = context;
  const bid = params.bid;
  const res = await fetch(
    "https://next-test-nilayp799.vercel.app/api/blogs/getBlogData/?bid="+bid,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  const data = res.blog.map((blog: any, index: any) => {
    return {
      id: blog["_id"],
      title: blog.title,
      author: blog.author,
      image: blog.image,
      description: blog.description,
      date: blog.date,
      content: blog.content
    };
  });

  return {
    props: {
      data: data[0],
    },
  };
}