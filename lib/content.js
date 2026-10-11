import fs from 'fs';
import path from 'path';
import { parseISO, format } from 'date-fns';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

const LOCALE_MARKER = /\{\/\*\s*@(en|zh)\s*\*\/\}/g;

export function parseFrontmatter(fileContent) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);

  // Standalone docs (About, Teaching) carry no frontmatter at all.
  if (!match) {
    return { metadata: {}, content: fileContent.trim() };
  }

  let frontMatterBlock = match[1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim()] = value;
  });

  return { metadata, content };
}

/**
 * Split a body into per-locale chunks on `{/* @en *\/}` / `{/* @zh *\/}` markers.
 * Text before the first marker (or a body with no markers at all) becomes the
 * default locale, so an un-translated file still renders everywhere.
 */
export function splitLocales(content) {
  const markers = [...content.matchAll(LOCALE_MARKER)];

  if (markers.length === 0) {
    return { [DEFAULT_LOCALE]: content.trim() };
  }

  const chunks = {};
  const preamble = content.slice(0, markers[0].index).trim();
  if (preamble) {
    chunks[DEFAULT_LOCALE] = preamble;
  }

  markers.forEach((marker, index) => {
    const start = marker.index + marker[0].length;
    const end =
      index + 1 < markers.length ? markers[index + 1].index : content.length;
    chunks[marker[1]] = content.slice(start, end).trim();
  });

  return chunks;
}

/** Pick the body for `lang`, falling back to the default locale. */
export function localizeContent(chunks, lang) {
  return chunks[lang] ?? chunks[DEFAULT_LOCALE] ?? '';
}

/**
 * Collapse `key` / `key.zh` pairs down to plain keys for one language.
 * Keys without a `.<lang>` variant fall through unchanged, so shared values
 * (images, sort dates) only need to be written once.
 */
export function localizeMetadata(metadata, lang) {
  const localeSuffix = (key) => {
    const dot = key.lastIndexOf('.');
    const suffix = dot === -1 ? null : key.slice(dot + 1);
    return suffix && LOCALES.includes(suffix) ? { dot, suffix } : null;
  };

  const result = {};

  // Base keys first...
  for (const [key, value] of Object.entries(metadata)) {
    if (!localeSuffix(key)) result[key] = value;
  }

  // ...then let localized variants override them, whatever the declaration order.
  for (const [key, value] of Object.entries(metadata)) {
    const tag = localeSuffix(key);
    if (tag?.suffix === lang) result[key.slice(0, tag.dot)] = value;
  }

  return result;
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

export function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path
      .basename(file, path.extname(file))
      .replace(/ /g, '')
      .toLowerCase();

    return {
      metadata,
      slug,
      content,
    };
  });
}

/** Read one bilingual mdx file and resolve it to a single language. */
export function getLocalizedDoc(relativePath, lang) {
  const { metadata, content } = readMDXFile(
    path.join(process.cwd(), relativePath)
  );

  return {
    metadata: localizeMetadata(metadata, lang),
    content: localizeContent(splitLocales(content), lang),
  };
}

/** Read a directory of bilingual mdx files and resolve them to one language. */
export function getLocalizedCollection(relativeDir, lang) {
  return getMDXData(path.join(process.cwd(), relativeDir)).map((entry) => ({
    slug: entry.slug,
    metadata: localizeMetadata(entry.metadata, lang),
    content: localizeContent(splitLocales(entry.content), lang),
  }));
}

export function formatDate(date) {
  return format(parseISO(date), 'MMMM dd, yyyy');
}
