import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import StartupCard, { StartupTypeCard } from "@/components/Startupcard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

  const query = (await searchParams).query;

  const params = {search:query || null};

  const session = await auth();
  console.log(session?.id);

  const {data:posts} = await sanityFetch({query:STARTUP_QUERY , params});

    // const posts = [{
  //   _createdAt:new Date(),
  //   views:55,
  //   author:{_id:1,name:'Adrian'},
  //   _id:1,
  //   description:'This is a description',
  //   image:'/Sherry.png',
  //   category:'Robots',
  //   title:'We Robots'
  // }]

  return (
    <>
    <section className="pink_container ">
      <h1 className="heading">Pitch Your StartUp <br/> Connect with Entrepreneurs </h1>
      {/* ! is used to override the other property */}
      <p className="sub-heading !max-w-3xl">
        Submit Ideas , Vote on Pitch & Get Noticed In Virtual Competition
      </p> 
      <SearchForm query={query} />
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {
          query ? `search result for ${query}` : 'no Result' 
        }
      </p>

      <ul className="mt-7 card_grid">
        {
          posts.length > 0 ? (
            posts.map((post:StartupTypeCard)=>(
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Startup Found</p>
          )
        }
      </ul>
    </section>
    <SanityLive/>
    </>
  );
}
