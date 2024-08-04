import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p className="text-red-600">Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;
