import Record from "./record";

export default function RecordList({ records }) {
  return (
      records.map(record => {
        return <Record key={record.time} record={record}/>
      })
  )
}
