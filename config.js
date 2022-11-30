module.exports = global.config = 
{
    API_BASE: 'https://api.open-meteo.com/v1/forecast',
    searchParams: {
        'latitude': 31.7857,
        'longitude': 35.2007,
        'daily': [
          'temperature_2m_max',
          'temperature_2m_min',
          'sunrise',
          'sunset',
          'rain_sum',
          'snowfall_sum',
          'windspeed_10m_max'
        ],
        'timezone': 'auto',
      }
};