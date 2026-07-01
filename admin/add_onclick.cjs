const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to find <button ...> that doesn't have onClick=
      // This is a bit tricky with regex because of multiline and various props.
      // A safe approach is to replace `<button ` with `<button onClick={() => alert("Button clicked!")} `
      // But we don't want to add it if there's already an onClick in that button tag.
      
      // Let's split by "<button"
      const parts = content.split('<button');
      for (let i = 1; i < parts.length; i++) {
        // Find the end of the opening tag '>'
        const endOfTagIdx = parts[i].indexOf('>');
        if (endOfTagIdx !== -1) {
          const tagContent = parts[i].substring(0, endOfTagIdx);
          if (!tagContent.includes('onClick=') && !tagContent.includes('type="submit"')) {
            parts[i] = ' onClick={() => alert("Button clicked!")}' + parts[i];
          }
        }
      }
      
      const newContent = parts.join('<button');
      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log("Done");
