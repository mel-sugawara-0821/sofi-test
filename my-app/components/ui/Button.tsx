type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    variant?: 'primary' | 'secondary'
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
}: ButtonProps) {
    const baseClasses = ""
    const variantClasses = variant === 'primary' ? 
        'bg-blue-500 text-white' :
        'bg-gray-500 text-gray'

    return (
        <button
            className={baseClasses + variantClasses}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
