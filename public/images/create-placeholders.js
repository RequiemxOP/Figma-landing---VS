const fs = require('fs');
const path = require('path');

// Array of colors and names
const colorPlaceholders = [
  { name: 'gold', color: '#d7a94f' },
  { name: 'blue', color: '#79BBE3' },
  { name: 'pink', color: '#FEDCDC' },
  { name: 'brown', color: '#8B6F6F' },
  { name: 'red', color: '#9F4343' },
  { name: 'lightbrown', color: '#B88888' },
  { name: 'purple', color: '#685FD4' },
  { name: 'lightpink', color: '#EFBDD9' }
];

// Function to create an SVG with a solid background color
function createColorSVG(color) {
  return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="300" fill="${color}" />
</svg>`;
}

// Create each placeholder image
colorPlaceholders.forEach(({ name, color }) => {
  const svgContent = createColorSVG(color);
  const filePath = path.join(__dirname, `${name}-bg.svg`);
  
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created: ${filePath}`);
});

console.log('All placeholder images created successfully!'); 