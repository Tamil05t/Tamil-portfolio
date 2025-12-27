import NoteCard, { type Note } from './NoteCard.tsx';

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No notes found
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
