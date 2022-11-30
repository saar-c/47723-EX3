
import { useState } from "react";
import DataIntro from "../components/data-intro";
import Message from "../components/message";
import RecordList from "../components/record-list";
import { searchParams } from "../config";
import { useData } from "../hooks/data";
import { getCurrentDate } from "../utils";

export default function IndexPage() {

  const [config, setConfig] = useState(searchParams);

  function getDataQueryKeys(event) {
    const key = event.target.value;
    if (event.target.id === "data-unit") {
      if (key === "imperial") 
      {
        setConfig((currentConfig) => {
          currentConfig['temperature_unit'] = 'fahrenheit';
          currentConfig['windspeed_unit'] = 'mph';
          currentConfig['precipitation_unit'] = 'inch';
          return {...currentConfig};
        })
        
      }
      if (key === "metric") 
      {
        setConfig((currentConfig) => {
          delete currentConfig['temperature_unit'];
          delete currentConfig['windspeed_unit'];
          delete currentConfig['precipitation_unit'];
          return {...currentConfig};
        })
      }
    }
    if (event.target.id === "data-period") {
      if (key === "today")
      {
        setConfig((currentConfig) => {
          const currentDate = getCurrentDate();
          currentConfig['start_date'] = currentDate;
          currentConfig['end_date'] = currentDate;
          return {...currentConfig};
        })
      }
      if (key === "7days") 
      {
        setConfig((currentConfig) => {
          delete currentConfig['start_date'];
          delete currentConfig['end_date'];
          return {...currentConfig};
        })
      }
    }
  }

  const { forecast, isLoading, isError } = useData(config);

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!forecast) return <Message content="No data could be loaded..." />

  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} />
      <RecordList records={forecast} />
    </>
  )
}
