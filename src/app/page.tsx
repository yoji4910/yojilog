import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "@/components/PostCard";
import { Navigation } from "@/components/Navigation";
import {
  BlogPostDocument,
  NavigationDocument,
  PageDocument,
} from "prismicio-types";

type PageProps = {
  home: PageDocument<string>;
  posts: BlogPostDocument<string>[];
  navigationData: NavigationDocument<string>;
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || undefined,
      images: [
        {
          url: home.data.meta_image.url || "",
        },
      ],
    },
  };
}

export async function getStaticProps() {
  const client = createClient();

  const [home, posts, navigationData] = await Promise.all([
    client.getByUID("page", "home"),
    client.getAllByType("blog_post", {
      orderings: [
        { field: "my.blog_post.publication_date", direction: "desc" },
        { field: "document.first_publication_date", direction: "desc" },
      ],
    }),
    client.getSingle("navigation"),
  ]);

  return {
    props: {
      home,
      posts,
      navigationData,
    },
  };
}

export default function Index({ home, posts, navigationData }: PageProps) {
  return (
    <>
      <Navigation navigationData={navigationData} />

      <SliceZone slices={home.data.slices} components={components} />

      <section className="grid grid-cols-1 gap-8 max-w-3xl w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <Navigation navigationData={navigationData} />
    </>
  );
}
