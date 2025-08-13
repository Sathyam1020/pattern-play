const patterns = [
  // GRADIENTS
  {
    id: 1,
    name: "Purple Gradient Grid",
    category: "geometric",
    styleObj: {
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    },
    jsxCode: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 2,
    name: "Blue Ocean Gradient",
    category: "gradients",
    styleObj: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Blue Ocean Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Blue Ocean Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 3,
    name: "Sunset Gradient",
    category: "gradients",
    styleObj: {
      background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Sunset Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Sunset Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },

  // GEOMETRIC
  {
    id: 4,
    name: "Subtle Grid",
    category: "geometric",
    styleObj: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Subtle Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Subtle Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 5,
    name: "Dark Grid",
    category: "geometric",
    styleObj: {
      backgroundColor: "#0f0f0f",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0f0f0f",
      backgroundImage: \`
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0f0f0f",
      backgroundImage: \`
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 6,
    name: "Dot Pattern",
    category: "geometric",
    styleObj: {
      backgroundColor: "#fafafa",
      backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)`,
      backgroundSize: "16px 16px",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Dot Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fafafa",
      backgroundImage: \`radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)\`,
      backgroundSize: "16px 16px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Dot Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fafafa",
      backgroundImage: \`radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)\`,
      backgroundSize: "16px 16px",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },

  // DECORATIVE
  {
    id: 7,
    name: "Diagonal Lines",
    category: "geometric",
    styleObj: {
      backgroundColor: "#ffffff",
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.04) 10px, rgba(0,0,0,0.04) 11px)`,
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Diagonal Lines Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.04) 10px, rgba(0,0,0,0.04) 11px)\`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Diagonal Lines Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.04) 10px, rgba(0,0,0,0.04) 11px)\`,
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 8,
    name: "Subtle Noise",
    category: "geometric",
    styleObj: {
      backgroundColor: "#f8f8f8",
      backgroundImage: `
        radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 1px, transparent 1px)
      `,
      backgroundSize: "8px 8px, 8px 8px",
      backgroundPosition: "0 0, 4px 4px",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Subtle Noise Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8f8f8",
      backgroundImage: \`
        radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 1px, transparent 1px)
      \`,
      backgroundSize: "8px 8px, 8px 8px",
      backgroundPosition: "0 0, 4px 4px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Subtle Noise Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f8f8f8",
      backgroundImage: \`
        radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 1px, transparent 1px),
        radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 1px, transparent 1px)
      \`,
      backgroundSize: "8px 8px, 8px 8px",
      backgroundPosition: "0 0, 4px 4px",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 9,
    name: "Hexagon Pattern",
    category: "geometric",
    styleObj: {
      backgroundColor: "#ffffff",
      backgroundImage: `
        radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 25% 75%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 75% 25%, rgba(0,0,0,0.03) 2px, transparent 2px)
      `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0, 15px 15px, -15px -15px",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Hexagon Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 25% 75%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 75% 25%, rgba(0,0,0,0.03) 2px, transparent 2px)
      \`,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0, 15px 15px, -15px -15px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Hexagon Pattern Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        radial-gradient(circle at 50% 50%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 25% 75%, rgba(0,0,0,0.03) 2px, transparent 2px),
        radial-gradient(circle at 75% 25%, rgba(0,0,0,0.03) 2px, transparent 2px)
      \`,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0, 15px 15px, -15px -15px",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },

  // EFFECTS
  {
    id: 10,
    name: "Glass Morphism",
    category: "effects",
    styleObj: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      backdropFilter: "blur(10px)",
      backgroundColor: "#f0f0f0",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Glass Morphism Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      backdropFilter: "blur(10px)",
      backgroundColor: "#f0f0f0",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Glass Morphism Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
      backdropFilter: "blur(10px)",
      backgroundColor: "#f0f0f0",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 11,
    name: "Animated Gradient",
    category: "effects",
    styleObj: {
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Add this to your CSS or Tailwind config */}
  <style jsx>{\`
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  \`}</style>
  
  {/* Animated Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Add this to your CSS or Tailwind config */}
  <style jsx>{\`
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  \`}</style>
  
  {/* Animated Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
    id: 12,
    name: "Dark Glow",
    category: "effects",
    styleObj: {
      backgroundColor: "#0a0a0a",
      backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2), transparent 50%)`,
    },
    jsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: \`radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2), transparent 50%)\`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
    tsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: \`radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2), transparent 50%)\`,
    }}
  />
  {/* Your Content/Components */}
</div>`
  },
  {
  id: 13,
  name: "Sunny Glow",
  category: "decorative",
  styleObj: {
    backgroundColor: "#fffbea",
    backgroundImage: `radial-gradient(circle at top, rgba(255, 223, 0, 0.4), transparent 60%),
                      radial-gradient(circle at bottom, rgba(255, 200, 0, 0.3), transparent 60%)`,
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Sunny Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fffbea",
      backgroundImage: \`radial-gradient(circle at top, rgba(255, 223, 0, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(255, 200, 0, 0.3), transparent 60%)\`,
    }}
  >
  {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Sunny Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fffbea",
      backgroundImage: \`radial-gradient(circle at top, rgba(255, 223, 0, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(255, 200, 0, 0.3), transparent 60%)\`,
    }}
  >               
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 14,
  name: "Rose Glow",
  category: "decorative",
  styleObj: {
    backgroundColor: "#fff5f7",
    backgroundImage: `radial-gradient(circle at top, rgba(255, 105, 180, 0.4), transparent 60%),
                      radial-gradient(circle at bottom, rgba(255, 20, 147, 0.3), transparent 60%)`,
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Rose Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fff5f7",
      backgroundImage: \`radial-gradient(circle at top left, rgba(255, 105, 180, 0.4), transparent 60%),
                        radial-gradient(circle at bottom right, rgba(255, 20, 147, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Rose Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fff5f7",
      backgroundImage: \`radial-gradient(circle at top left, rgba(255, 105, 180, 0.4), transparent 60%),
                        radial-gradient(circle at bottom right, rgba(255, 20, 147, 0.3), transparent 60%)\`,
    }}
  >                      
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 15,
  name: "Mint Glow",
  category: "decorative",
  styleObj: {
    backgroundColor: "#f0fff4",
    backgroundImage: `radial-gradient(circle at center, rgba(144, 238, 144, 0.4), transparent 60%),
                      radial-gradient(circle at bottom, rgba(60, 179, 113, 0.3), transparent 60%)`,
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Mint Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0fff4",
      backgroundImage: \`radial-gradient(circle at center, rgba(144, 238, 144, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(60, 179, 113, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Mint Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0fff4",
      backgroundImage: \`radial-gradient(circle at center, rgba(144, 238, 144, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(60, 179, 113, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 16,
  name: "Ocean Glow",
  category: "decorative",
  styleObj: {
    backgroundColor: "#f0f9ff",
    backgroundImage: `radial-gradient(circle at top, rgba(0, 191, 255, 0.4), transparent 60%),
                      radial-gradient(circle at center, rgba(70, 130, 180, 0.3), transparent 60%)`,
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Ocean Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0f9ff",
      backgroundImage: \`radial-gradient(circle at top, rgba(0, 191, 255, 0.4), transparent 60%),
                        radial-gradient(circle at center, rgba(70, 130, 180, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Ocean Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f0f9ff",
      backgroundImage: \`radial-gradient(circle at top, rgba(0, 191, 255, 0.4), transparent 60%),
                        radial-gradient(circle at center, rgba(70, 130, 180, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 17,
  name: "Lavender Glow",
  category: "decorative",
  styleObj: {
    backgroundColor: "#f9f5ff",
    backgroundImage: `radial-gradient(circle at center, rgba(186, 85, 211, 0.4), transparent 60%),
                      radial-gradient(circle at bottom, rgba(148, 0, 211, 0.3), transparent 60%)`,
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Lavender Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f9f5ff",
      backgroundImage: \`radial-gradient(circle at center, rgba(186, 85, 211, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(148, 0, 211, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Lavender Glow Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#f9f5ff",
      backgroundImage: \`radial-gradient(circle at center, rgba(186, 85, 211, 0.4), transparent 60%),
                        radial-gradient(circle at bottom, rgba(148, 0, 211, 0.3), transparent 60%)\`,
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 18,
  name: "Diagonal Lines Glow",
  category: "geometric",
  styleObj: {
    backgroundColor: "#0a0a0a",
    backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 2px, transparent 2px, transparent 20px),
      radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)
    `,
    backgroundSize: "20px 20px, 100% 100%",
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Diagonal Lines Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: \`
        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 2px, transparent 2px, transparent 20px),
        radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)
      \`,
      backgroundSize: "20px 20px, 100% 100%",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Diagonal Lines Glow */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage: \`
        repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 2px, transparent 2px, transparent 20px),
        radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 70%)
      \`,
      backgroundSize: "20px 20px, 100% 100%",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 19,
  name: "Hexagon Grid",
  category: "geometric",
  styleObj: {
    backgroundColor: "#ffffff",
    backgroundImage: `
      radial-gradient(circle, #ccc 1px, transparent 1px),
      radial-gradient(circle, #ccc 1px, transparent 1px)
    `,
    backgroundSize: "60px 104px",
    backgroundPosition: "0 0, 30px 52px",
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Hexagon Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        radial-gradient(circle, #ccc 1px, transparent 1px),
        radial-gradient(circle, #ccc 1px, transparent 1px)
      \`,
      backgroundSize: "60px 104px",
      backgroundPosition: "0 0, 30px 52px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Hexagon Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#ffffff",
      backgroundImage: \`
        radial-gradient(circle, #ccc 1px, transparent 1px),
        radial-gradient(circle, #ccc 1px, transparent 1px)
      \`,
      backgroundSize: "60px 104px",
      backgroundPosition: "0 0, 30px 52px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 20,
  name: "Dark Mesh Gradient",
  category: "geometric",
  styleObj: {
    backgroundColor: "#0d0d0d",
    backgroundImage: `
      linear-gradient(120deg, rgba(255, 0, 150, 0.3), transparent),
      linear-gradient(240deg, rgba(0, 200, 255, 0.3), transparent),
      repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Mesh Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0d0d0d",
      backgroundImage: \`
        linear-gradient(120deg, rgba(255, 0, 150, 0.3), transparent),
        linear-gradient(240deg, rgba(0, 200, 255, 0.3), transparent),
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px)
      \`,
      backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Dark Mesh Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#0d0d0d",
      backgroundImage: \`
        linear-gradient(120deg, rgba(255, 0, 150, 0.3), transparent),
        linear-gradient(240deg, rgba(0, 200, 255, 0.3), transparent),
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 40px)
      \`,
      backgroundSize: "100% 100%, 100% 100%, 40px 40px, 40px 40px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 21,
  name: "Offset Dots",
  category: "geometric",
  styleObj: {
    backgroundColor: "#fafafa",
    backgroundImage: `
      radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px),
      radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 20px 20px",
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Offset Dots */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fafafa",
      backgroundImage: \`
        radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 20px 20px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Offset Dots */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#fafafa",
      backgroundImage: \`
        radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px),
        radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 20px 20px",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
},
{
  id: 22,
  name: "Diamond Pattern Gradient",
  category: "geometric",
  styleObj: {
    backgroundColor: "#1a1a1a",
    backgroundImage: `
      linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
      linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
      linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
      radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)
    `,
    backgroundSize: "40px 40px",
    backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px, 0 0",
  },
  jsxCode: `<div className="min-h-screen w-full relative">
  {/* Diamond Pattern Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#1a1a1a",
      backgroundImage: \`
        linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
        radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)
      \`,
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px, 0 0",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`,
  tsxCode: `<div className="min-h-screen w-full relative">
  {/* Diamond Pattern Gradient */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundColor: "#1a1a1a",
      backgroundImage: \`
        linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
        radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)
      \`,
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px, 0 0",
    }}
  >
    {/* Your Content/Components */}
  </div>
</div>`
}
];

export default patterns;