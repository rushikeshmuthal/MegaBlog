import appwriteService from "../appwrite/configAW";
import { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
 

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state)=> state.auth.userData)

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  if (posts.length === 0 && userData === null) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold text-white hover:text-gray-800 cursor-pointer">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-4">
      <Container>
        <div className="flex flex-wrap ">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-1/4" >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
