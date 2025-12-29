import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import NotesList from './components/NotesList.tsx';
import { type Note } from './components/NoteCard.tsx';

export default function NotesPage() {
	const [notes, setNotes] = useState<Array<{ id: string; content: string }>>([]);

	useEffect(() => {
		Promise.all([
			import('../../content/notes/tryhackme-notes.md?raw'),
		])
			.then(([tryhackme]) => {
				setNotes([
					{ id: 'tryhackme-notes', content: tryhackme.default },
				]);
			})
			.catch((error) => console.error('Error loading markdown:', error));
	}, []);

	return (
		<div className="container py-24">
			<div className="mb-16 max-w-3xl">
				<h1 className="text-5xl font-bold mb-6">Notes</h1>
				<p className="text-xl leading-relaxed text-muted-foreground">
					Security research notes, learning resources, and CTF writeups
				</p>
			</div>
			<div className="max-w-3xl space-y-16">
				{notes.map((note) => (
					<div key={note.id} className="border-l-2 border-primary pl-8 pb-12">
						<ReactMarkdown
							components={{
								h1: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-0">{children}</h2>,
								h2: ({ children }) => <h3 className="text-2xl font-semibold mb-3 mt-10">{children}</h3>,
								h3: ({ children }) => <h4 className="text-xl font-semibold mb-2 mt-8">{children}</h4>,
								p: ({ children }) => <p className="text-base leading-7 mb-5 text-foreground">{children}</p>,
								ul: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-2 mb-6">{children}</ul>,
								ol: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-2 mb-6">{children}</ol>,
								li: ({ children }) => <li className="text-base leading-7 text-foreground pl-1">{children}</li>,
								code: ({ inline, children }) =>
									inline ? (
										<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
											{children}
										</code>
									) : (
										<code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto my-4 text-foreground leading-6">
											{children}
										</code>
									),
								pre: ({ children }) => <pre className="my-4">{children}</pre>,
								blockquote: ({ children }) => (
									<blockquote className="border-l-4 border-muted pl-4 italic text-muted-foreground my-4">
										{children}
									</blockquote>
								),
								a: ({ children, href }) => (
									<a href={href} className="text-primary underline hover:text-primary/80 transition-colors">
										{children}
									</a>
								),
								strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
							}}
						>
							{note.content}
						</ReactMarkdown>
					</div>
				))}
			</div>
		</div>
	);
}
