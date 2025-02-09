import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeatherDashboard() {
  // TODO: Implement weather API integration
  const weatherData = {
    temperature: 25,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-2xl font-bold">{weatherData.temperature}°C</div>
          <div>{weatherData.condition}</div>
          <div>Humidity: {weatherData.humidity}%</div>
          <div>Wind: {weatherData.windSpeed} km/h</div>
        </div>
      </CardContent>
    </Card>
  );
}