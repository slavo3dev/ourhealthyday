export interface NewResourceFromProps
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSources: any; 
    setShowForm: (arg: boolean) => void;
}

type TLocationName = "London" | "Belgrade";

export interface IWeatherData 
{
    location: {
      name: TLocationName;
      region: "City of London, Greater London";
      country: "United Kingdom";
    };
    current: {
      condition: {
        code: number;
        icon: string;
        text: string;
      };
      temp_c: number;
      temp_f: number;
      last_updated: string;
      feelslike_c: number;
      wind_kph: number;
      humidity: number;
      uv: number;
    };
  }

export interface IBlogProps {
    title: string;
    content: string;
    author: string;
    date: string;
  }

export interface IBlogPosts {
    updatedAt: string;
    id: string;
    createdAt: string;
    title: string;
    slug: string;
    bio: string;
    name: string;
    url: string;
    content: {
      text: string; 
      raw: string;
      markdown: string;
      html: string;
    }
    author: {
      bio: string;
      name: string;
      id: string;
      photo: {
        url: string;
      }
    }
    featuredImage: {
      url: string;
    }
    excerpt: string;
  }