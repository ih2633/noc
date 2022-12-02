import gql from "graphql-tag";
import type { GetServerSideProps, NextPage } from "next";
import { urqlClient } from "@/libs/gql-requests";
import { PostIndexPageDocument } from "@/graphql/generated.graphql"

type Props = {
  posts: {
    id: string;
    title: string;
  }[];
};

const Example:NextPage<Props> = (props) => {
  console.log({props})
  return (
    <div>
      <ul className="m-5">
        {props.posts.map((post) => (
          <li className="text-2xl font-bold" key={post.id}>
            id: {post.id} title: {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const client = await urqlClient();

    const result = await client.query(PostIndexPageDocument, {}).toPromise();

    return {
      props: {
        posts: result.data.posts,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export default Example;
