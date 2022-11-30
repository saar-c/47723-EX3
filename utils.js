export function getCurrentDate() 
{
  const date = new Date().toISOString();
  return date.split('T')[0];
}

export function periodData(key) 
{
  if (key === "today") 
  {
    const currentDate = getCurrentDate();
    gSearchParams['start_date'] = currentDate;
    gSearchParams['end_date'] = currentDate;
  }
  if (key === "7days") 
  {
    delete gSearchParams['start_date'];
    delete gSearchParams['end_date'];
  }
}

export function unitData(key) 
{
  if (key === "imperial") 
  {
    gSearchParams['temperature_unit'] = 'fahrenheit';
    gSearchParams['windspeed_unit'] = 'mph';
    gSearchParams['precipitation_unit'] = 'inch';
  }
  if (key === "metric") 
  {
    delete gSearchParams['temperature_unit'];
    delete gSearchParams['windspeed_unit'];
    delete gSearchParams['precipitation_unit'];
  }
}