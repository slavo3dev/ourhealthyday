export const GRAPHQL_API_URL =
	"https://api-us-west-2.hygraph.com/v2/cll2csb0x0ic001un2jzvdvho/master";

export const GRAPHQL_QUERY = `
  query {
    posts {
      title
      updatedAt
      content {
        text
        raw
        markdown
        html
      }
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
`;