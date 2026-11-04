const steps = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
]

export default function Admission() {
  return (
    <section>
      <h1>Admission</h1>
      <p>Admission process flow:</p>
      <ul className="steps">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
