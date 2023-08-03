export interface NewResourceFromProps
{
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