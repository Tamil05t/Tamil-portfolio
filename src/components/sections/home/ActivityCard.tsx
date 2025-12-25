interface ActivityCardProps {
  title: string
  description: string
}

export default function ActivityCard({ title, description }: ActivityCardProps) {
  return (
    <div className="activity-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
