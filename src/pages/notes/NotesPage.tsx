import NotesList from './components/NotesList.tsx';
import { type Note } from './components/NoteCard.tsx';

// TODO: Move this to content management system or fetch from API
const notes: Note[] = [
  {
    id: 'tryhackme-notes',
    title: 'TryHackMe Learning Path',
    excerpt: 'My notes from completing TryHackMe security courses and challenges',
    category: 'Learning',
    date: '2024-01',
  },
  {
    id: 'ctf-basics',
    title: 'CTF Fundamentals',
    excerpt: 'Essential techniques and tools for capture the flag competitions',
    category: 'CTF',
    date: '2024-02',
  },
  {
    id: 'owasp-top-10',
    title: 'OWASP Top 10 Deep Dive',
    excerpt: 'Detailed notes on each vulnerability in the OWASP Top 10',
    category: 'Web Security',
    date: '2024-03',
  },
];

export default function NotesPage() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Notes</h1>
        <p className="text-lg text-muted-foreground">
          Security research notes, learning resources, and CTF writeups
        </p>
      </div>
      <NotesList notes={notes} />
    </div>
  );
}
