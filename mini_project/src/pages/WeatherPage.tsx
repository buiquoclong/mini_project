import React from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import { useWeather } from '../hooks/useWeather';
import styles from '../components/Weather.module.css';

export default function WeatherPage() {
	const { data, loading, error, search } = useWeather();

	return (
		<div style={{ padding: 24 }}>
			<h1>Weather</h1>
			<div className={styles.container}>
				<SearchBar onSearch={search} />

				{loading && <div>Loading…</div>}
				{error && <div style={{ color: 'red' }}>{error}</div>}

				{data ? (
					<div className={styles.row}>
						<div className={styles.left}>
							<WeatherCard data={data} />
						</div>
						<div className={styles.right}>
							<h3>7-day forecast</h3>
							<ForecastList daily={data.daily} />
						</div>
					</div>
				) : (
					<div style={{ marginTop: 12, color: '#666' }}>Search a city to see the weather.</div>
				)}
			</div>
		</div>
	);
}
