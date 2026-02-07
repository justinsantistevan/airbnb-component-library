const brandColors = [
  { name: 'airbnb-red', hex: '#FF385C', css: 'bg-airbnb-red', description: 'Primary brand color, CTAs' },
  { name: 'airbnb-dark', hex: '#222222', css: 'bg-airbnb-dark', description: 'Primary text, headings' },
  { name: 'airbnb-light-dark', hex: '#484848', css: 'bg-airbnb-light-dark', description: 'Secondary text' },
  { name: 'airbnb-gray', hex: '#717171', css: 'bg-airbnb-gray', description: 'Muted text, icons' },
  { name: 'airbnb-light-gray', hex: '#DDDDDD', css: 'bg-airbnb-light-gray', description: 'Borders, dividers' },
  { name: 'airbnb-pale', hex: '#F7F7F7', css: 'bg-airbnb-pale', description: 'Background surfaces' },
  { name: 'airbnb-hover', hex: '#F0F0F0', css: 'bg-airbnb-hover', description: 'Hover states' },
];

const semanticColors = [
  { name: 'background', value: 'hsl(0 0% 100%)', css: 'bg-background', description: 'Page background' },
  { name: 'foreground', value: 'hsl(0 0% 13%)', css: 'bg-foreground', description: 'Default text color' },
  { name: 'primary', value: 'hsl(348 100% 61%)', css: 'bg-primary', description: 'Primary actions' },
  { name: 'secondary', value: 'hsl(0 0% 97%)', css: 'bg-secondary', description: 'Secondary actions' },
  { name: 'muted', value: 'hsl(0 0% 97%)', css: 'bg-muted', description: 'Subdued elements' },
  { name: 'accent', value: 'hsl(0 0% 97%)', css: 'bg-accent', description: 'Accent highlights' },
  { name: 'destructive', value: 'hsl(0 84% 60%)', css: 'bg-destructive', description: 'Error states' },
  { name: 'border', value: 'hsl(0 0% 87%)', css: 'bg-border', description: 'Border color' },
];

const fontWeights = [
  { weight: 300, name: 'Light', sample: 'The quick brown fox jumps over the lazy dog' },
  { weight: 400, name: 'Regular', sample: 'The quick brown fox jumps over the lazy dog' },
  { weight: 500, name: 'Medium', sample: 'The quick brown fox jumps over the lazy dog' },
  { weight: 600, name: 'Semibold', sample: 'The quick brown fox jumps over the lazy dog' },
  { weight: 700, name: 'Bold', sample: 'The quick brown fox jumps over the lazy dog' },
  { weight: 800, name: 'Extrabold', sample: 'The quick brown fox jumps over the lazy dog' },
];

const textSizes = [
  { size: 'text-xs', px: '12px', usage: 'Labels, captions' },
  { size: 'text-sm', px: '14px', usage: 'Body text, secondary content' },
  { size: 'text-base', px: '16px', usage: 'Default body text' },
  { size: 'text-lg', px: '18px', usage: 'Large body, small headings' },
  { size: 'text-xl', px: '20px', usage: 'Subheadings' },
  { size: 'text-2xl', px: '24px', usage: 'Section headings' },
  { size: 'text-3xl', px: '30px', usage: 'Page headings' },
  { size: 'text-4xl', px: '36px', usage: 'Hero headings' },
];

const shadows = [
  { name: 'shadow-airbnb-hover', css: 'shadow-airbnb-hover', description: 'Hover state elevation' },
  { name: 'shadow-airbnb-border', css: 'shadow-airbnb-border', description: 'Elevated panels with border' },
  { name: 'shadow-airbnb-search', css: 'shadow-airbnb-search', description: 'Search bar elevation' },
  { name: 'shadow-airbnb-card', css: 'shadow-airbnb-card', description: 'Modal and overlay elevation' },
];

const borderRadii = [
  { name: 'rounded-sm', value: 'calc(0.75rem - 4px)', css: 'rounded-sm', description: 'Small elements' },
  { name: 'rounded-md', value: 'calc(0.75rem - 2px)', css: 'rounded-md', description: 'Buttons, inputs' },
  { name: 'rounded-lg', value: '0.75rem', css: 'rounded-lg', description: 'Cards, containers' },
  { name: 'rounded-xl', value: '1rem', css: 'rounded-xl', description: 'Large cards' },
  { name: 'rounded-2xl', value: '1.5rem', css: 'rounded-2xl', description: 'Hero elements' },
  { name: 'rounded-full', value: '9999px', css: 'rounded-full', description: 'Avatars, pills' },
];

function ColorSwatch({ name, value, css, description }: { name: string; value: string; css: string; description: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-16 h-16 rounded-lg ${css} border border-airbnb-light-gray shrink-0`} />
      <div className="min-w-0">
        <p className="font-medium text-airbnb-dark">{name}</p>
        <p className="text-sm text-airbnb-gray font-mono">{value}</p>
        <p className="text-sm text-airbnb-gray">{description}</p>
      </div>
    </div>
  );
}

export function DesignTokensSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-dark mb-2">Design Tokens</h2>
      <p className="text-airbnb-gray mb-8">Core visual properties that define the design system</p>

      <div className="space-y-12">
        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandColors.map((color) => (
              <ColorSwatch key={color.name} name={color.name} value={color.hex} css={color.css} description={color.description} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Semantic Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {semanticColors.map((color) => (
              <ColorSwatch key={color.name} name={color.name} value={color.value} css={color.css} description={color.description} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Typography</h3>
          <div className="mb-8">
            <p className="text-sm text-airbnb-gray mb-4">Font Family: <span className="font-mono">Inter, system-ui, -apple-system, sans-serif</span></p>
            <div className="space-y-4">
              {fontWeights.map((fw) => (
                <div key={fw.weight} className="flex items-baseline gap-4">
                  <span className="w-24 text-sm text-airbnb-gray shrink-0">{fw.weight} {fw.name}</span>
                  <p className="text-airbnb-dark" style={{ fontWeight: fw.weight }}>{fw.sample}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-airbnb-gray uppercase tracking-wide mb-4">Type Scale</h4>
            <div className="space-y-3">
              {textSizes.map((ts) => (
                <div key={ts.size} className="flex items-center gap-4 py-2 border-b border-airbnb-pale">
                  <span className="w-20 text-sm text-airbnb-gray font-mono shrink-0">{ts.size}</span>
                  <span className="w-12 text-sm text-airbnb-gray shrink-0">{ts.px}</span>
                  <span className={`${ts.size} text-airbnb-dark flex-1`}>Sample Text</span>
                  <span className="text-sm text-airbnb-gray">{ts.usage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Shadows</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadows.map((shadow) => (
              <div key={shadow.name} className="text-center">
                <div className={`w-full h-24 bg-white rounded-lg ${shadow.css} mb-3`} />
                <p className="font-medium text-airbnb-dark text-sm">{shadow.name}</p>
                <p className="text-xs text-airbnb-gray">{shadow.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Border Radius</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {borderRadii.map((br) => (
              <div key={br.name} className="text-center">
                <div className={`w-full aspect-square bg-airbnb-pale border-2 border-airbnb-light-gray ${br.css} mb-2`} />
                <p className="font-medium text-airbnb-dark text-sm">{br.name}</p>
                <p className="text-xs text-airbnb-gray font-mono">{br.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-airbnb-dark mb-4 pb-2 border-b border-airbnb-light-gray">Spacing</h3>
          <p className="text-sm text-airbnb-gray mb-4">Based on an 8px grid system using Tailwind's default spacing scale</p>
          <div className="flex items-end gap-2 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((space) => (
              <div key={space} className="text-center">
                <div className="bg-airbnb-red mb-1" style={{ width: `${space * 4}px`, height: `${space * 4}px` }} />
                <p className="text-xs text-airbnb-gray">{space}</p>
                <p className="text-xs text-airbnb-gray font-mono">{space * 4}px</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
