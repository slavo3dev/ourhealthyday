import { request, gql } from "graphql-request";

const graphqlAPI = "https://api-us-west-2.hygraph.com/v2/cll2csb0x0ic001un2jzvdvho/master";

interface Author {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
}

interface Post {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: {
    name: string;
    slug: string;
  }[];
}

interface PostsConnectionEdge {
  node: Post;
}

interface PostsConnection {
  edges: PostsConnectionEdge[];
}

interface QueryAssets {
  postsConnection: PostsConnection;
}

interface QueryData {
  queryAssets: QueryAssets;
}

export const getPosts = async () => {
	const query = gql`
    query MyQuery {
      queryAssets {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    }
  `;

	const result: QueryData = await request(graphqlAPI, query);

	return result.queryAssets.postsConnection.edges.map((edge) => edge.node);
};
