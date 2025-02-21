// WeatherCard.tsx
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';

interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: Array<{
        description: string;
    }>;
}

const WeatherCard: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const apikey = "03d1a5668aa59af0252ec04cf2299ca4";
    const URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(
                            `${URL}&lat=${latitude}&lon=${longitude}&appid=${apikey}`
                        );
                        if (!response.ok) throw new Error("Unable to fetch weather data");
                        const data: WeatherData = await response.json();
                        setWeather(data);
                    } catch (err) {
                        setError(err instanceof Error ? err.message : "An error occurred");
                    } finally {
                        setLoading(false);
                    }
                },
                () => {
                    setError("Unable to retrieve your location");
                    setLoading(false);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="p-6 flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-red-400">
                <p>{error}</p>
            </div>
        );
    }

    if (!weather) {
        return null;
    }

    return (
        <div className="p-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Cloud className="w-6 h-6" />
                Weather Near You
            </h2>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-xl text-white">
                    <Sun className="w-6 h-6 text-yellow-400" />
                    <span>{Math.round(weather.main.temp)}°C</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <Droplets className="w-5 h-5 text-blue-400" />
                    <span>Humidity: {weather.main.humidity}%</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                    <Wind className="w-5 h-5 text-gray-400" />
                    <span>Wind: {weather.wind.speed} m/s</span>
                </div>
                <div className="mt-4 text-gray-300 capitalize">
                    {weather.weather[0].description}
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;