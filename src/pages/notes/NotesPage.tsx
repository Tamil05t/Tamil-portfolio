import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
			<motion.div 
				className="mb-20 max-w-4xl mx-auto text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-6xl font-bold mb-6">Notes</h1>
				<p className="text-2xl leading-relaxed text-gray-300">
					Security research notes, learning resources, and CTF writeups
				</p>
			</motion.div>
			
			<div className="max-w-5xl mx-auto space-y-16">
				{notes.map((note, index) => (
					<motion.div 
						key={note.id} 
						className="card relative"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: index * 0.2 }}
					>
						{/* Gradient accent line */}
						<div 
							className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
							style={{
								background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #ec4899)'
							}}
						/>
						
						<div className="pl-6">
							<ReactMarkdown
								components={{
									h1: ({ children }) => <h2 className="text-4xl font-bold mb-6 mt-0 text-gradient">{children}</h2>,
									h2: ({ children }) => <h3 className="text-3xl font-semibold mb-4 mt-10">{children}</h3>,
									h3: ({ children }) => <h4 className="text-2xl font-semibold mb-3 mt-8">{children}</h4>,
									p: ({ children }) => <p className="text-lg leading-8 mb-6 text-gray-300">{children}</p>,
									ul: ({ children }) => <ul className="list-disc list-outside ml-6 space-y-3 mb-6">{children}</ul>,
									ol: ({ children }) => <ol className="list-decimal list-outside ml-6 space-y-3 mb-6">{children}</ol>,
									li: ({ children }) => <li className="text-lg leading-8 text-gray-300 pl-2">{children}</li>,
									code: ({ inline, children }) =>
										inline ? (
											<code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary-bright">
												{children}
											</code>
										) : (
											<code className="block bg-muted p-6 rounded-lg text-sm font-mono overflow-x-auto my-6 leading-7 border border-border">
												{children}
											</code>
										),
								pre: ({ children }) => <pre className="my-4">{children}</pre>,
								blockquote: ({ children }) => (
									<blockquote className="border-l-4 border-primary pl-6 italic text-gray-400 my-6 py-2">
										{children}
									</blockquote>
								),
								a: ({ children, href }) => (
									<a href={href} className="text-primary-bright underline hover:text-secondary transition-colors">
										{children}
									</a>
								),
								strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
							}}
						>
							{note.content}
						</ReactMarkdown>
					</div>
				</motion.div>
				))}
			</div>
		</div>
	);
}
