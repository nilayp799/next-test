import Link from "next/link";

const Admin = () => {
  return (
    <>
      <Link href="/admin/AddConstructions">add Consructions</Link>
      <br />
      <br />
      <Link href="/admin/AddServices">add Services</Link>
      <br />
      <br />
      <Link href="/admin/ReadMessages">read Contact Messages</Link>
      <br />
      <br />
      <Link href="/admin/CreateBlog">write new blog</Link>
    </>
  );
};

export default Admin;
