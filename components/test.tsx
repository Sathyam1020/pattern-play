
const Test = () => {
    return (
        <div className="min-h-screen w-full relative">
            {/* Sunset Gradient Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
                }}
            />
            {/* Your Content/Components */}
        </div>
    )
}

export default Test; 
