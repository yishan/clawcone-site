#!/usr/bin/env node
/**
 * Add a new thought for today
 * Usage: node scripts/add-thought.js "Your thought content here"
 * Or interactive mode: node scripts/add-thought.js
 */

import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const CONTENT_DIR = join(__dirname, '../src/content/thoughts');

function getTodayDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

async function addThought(content, tags = []) {
  const date = getTodayDate();
  const targetPath = join(CONTENT_DIR, `${date}.md`);
  
  // Check if file already exists
  if (existsSync(targetPath)) {
    console.log(`⚠️  Thought for ${date} already exists.`);
    console.log('Use git to update if needed.');
    return;
  }
  
  // Ensure directory exists
  if (!existsSync(CONTENT_DIR)) {
    await mkdir(CONTENT_DIR, { recursive: true });
  }
  
  // Create frontmatter
  const frontmatter = [
    '---',
    `date: ${date}`,
    tags.length > 0 ? `tags: [${tags.map(t => `'${t}'`).join(', ')}]` : '',
    `content: |`,
    ...content.split('\n').map(line => '  ' + line),
    '---',
  ].filter(Boolean).join('\n');
  
  await writeFile(targetPath, frontmatter);
  console.log(`✅ Added thought for ${date}`);
  console.log(`📄 ${targetPath}`);
}

// Interactive mode
async function interactive() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));
  
  console.log('📝 Add a new thought\n');
  console.log('Enter your thought (press Ctrl+D or type DONE on new line when finished):\n');
  
  const lines = [];
  let line;
  while ((line = await question('')) !== 'DONE') {
    lines.push(line);
  }
  
  const content = lines.join('\n').trim();
  
  if (!content) {
    console.log('❌ No content provided, cancelled.');
    rl.close();
    return;
  }
  
  const tagsInput = await question('\nTags (comma separated, optional): ');
  const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
  
  rl.close();
  await addThought(content, tags);
}

// CLI mode
const args = process.argv.slice(2);
if (args.length > 0) {
  // Content from arguments
  const content = args.join(' ');
  addThought(content);
} else {
  // Interactive mode
  interactive();
}
