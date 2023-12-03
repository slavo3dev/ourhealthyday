import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

interface Category {
    name: string;
    slug: string;
  }

export const getCategories = async () => {
	const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

	const result = await request<{ categories: Category[] }>(graphqlAPI, query);

	return result.categories;
};