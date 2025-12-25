interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button className={`button button-${variant}`} {...props}>
      {children}
    </button>
  )
}
