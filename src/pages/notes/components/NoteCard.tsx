export interface Note {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <div className="rounded-lg border p-6 hover:bg-accent transition-colors">
      <div className="flex items-start justify-between mb-2">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
          {note.category}
        </span>
        <span className="text-sm text-muted-foreground">{note.date}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
      <p className="text-muted-foreground">{note.excerpt}</p>
    </div>
  );
}
