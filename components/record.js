export default function Record({ record }) {
  return (
    <div className="item card">
      <div className="content card-content">
        <div className="row">
          <div className="item card-title">
            <h2 className="content">{record.time}</h2>
          </div>
          <div className="item card-image">
          </div>
        </div>
        <table>
          <thead>
            {Object.entries(record).map(([key, value]) => <tr key={key}>{key}<td>{value}</td></tr>)}
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  )
}
