
export const AnimateText = ({ children }) => {
    return (
        <h1
            className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl md:text-8xl animate-pulse"
        >
            {children}
        </h1>
    )
}
