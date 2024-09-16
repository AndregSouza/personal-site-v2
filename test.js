const fs = require('fs');
const path = require('path');

const svgDir = './src/components/icons';
const outputDir = './src/components/icons';

function convertSvgToTsx(svgContent, componentName) {
  const paths = svgContent.match(/<path[^>]*>/g) || [];
  const pathsJsx = paths.map(path => {
    return path.replace(/fill-rule/g, 'fillRule')
               .replace(/clip-rule/g, 'clipRule')
               .replace(/fill="/g, 'fill="currentColor')
               .replace(/"/g, '\'');
  }).join('\n      ');

  return `import React from 'react';

const ${componentName} = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      ref={ref}
      width={props.width || 24}
      height={props.height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${pathsJsx}
    </svg>
  );
});

${componentName}.displayName = '${componentName}';

export { ${componentName} };
`;
}

fs.readdirSync(svgDir).forEach(file => {
  if (path.extname(file) === '.svg') {
    const svgContent = fs.readFileSync(path.join(svgDir, file), 'utf8');
    const componentName = path.basename(file, '.svg')
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    
    const tsxContent = convertSvgToTsx(svgContent, componentName);
    const outputPath = path.join(outputDir, `${componentName}.tsx`);
    
    fs.writeFileSync(outputPath, tsxContent);
    console.log(`Converted ${file} to ${componentName}.tsx`);
  }
});