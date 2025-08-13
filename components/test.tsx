
const Test = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Ocean Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundColor: "#f0f9ff",
                    backgroundImage: `radial-gradient(circle at top, rgba(0, 191, 255, 0.4), transparent 60%),
                        radial-gradient(circle at center, rgba(70, 130, 180, 0.3), transparent 60%)`,
                }}
            >
                {/* Your Content/Components */}
            </div>
        </div>
    )
}

export default Test; 
