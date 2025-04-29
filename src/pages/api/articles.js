import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Read the articles.json file
    const filePath = path.join(process.cwd(), 'src', 'data', 'articles.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return the articles data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error reading articles:', error);
    res.status(500).json({ error: 'Failed to load articles' });
  }
} 