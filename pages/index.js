
import { useState } from "react";
import DataIntro from "../components/data-intro";
import Message from "../components/message";
import RecordList from "../components/record-list";
import { useTeamData } from "../hooks/data";
import { filterTeamData, sortTeamData } from "../utils";

export default function IndexPage() {

  const { data, isLoading, isError } = useTeamData();
  const [sortKey, setSortKey] = useState("-");
  const [filterKey, setFilterKey] = useState("-");

  function getDataQueryKeys(event) {
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "data-filter") {
      setFilterKey(event.target.value);
    }
  }

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  const teams = filterTeamData(sortTeamData(data.teams, sortKey), filterKey);

  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} />
      <RecordList records={teams} />
    </>
  )
}
