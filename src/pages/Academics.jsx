const modules = [
  { code: 'BT1101', title: 'Introduction to Business Analytics' },
  { code: 'BT2101', title: 'Econometrics Modelling for Business Analytics' },
  { code: 'BT2102', title: 'Data Management and Visualisation' },
  { code: 'BT2103', title: 'Optimization Methods in Business Analytics' },
]

export default function Academics() {
  return (
    <section>
      <h1>Academics</h1>
      <p>Modules taught at the university:</p>
      <table className="modules">
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Title</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((m) => (
            <tr key={m.code}>
              <td>{m.code}</td>
              <td>{m.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
