
/**
 * Extracts Chinese characters from a text string
 * @param text The text to extract Chinese characters from
 * @returns An array of extracted Chinese characters
 */
export const extractChineseCharacters = (text: string): string[] => {
  if (!text) return [];
  
  // Regular expression to match Chinese characters (includes both simplified and traditional)
  const chineseRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/g;
  
  // Find all matches
  const matches = text.match(chineseRegex);
  
  // Return unique Chinese characters
  return matches ? Array.from(new Set(matches)) : [];
};

/**
 * Extracts Chinese words (consecutive characters) from a text string
 * @param text The text to extract Chinese words from
 * @returns An array of extracted Chinese words
 */
export const extractChineseWords = (text: string): string[] => {
  if (!text) return [];
  
  // Regular expression to match consecutive Chinese characters
  const chineseWordsRegex = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]+/g;
  
  // Find all matches
  const matches = text.match(chineseWordsRegex);
  
  return matches || [];
};

/**
 * Extracts individual Chinese characters and punctuation from a text string
 * @param text The text to process
 * @returns An array of individual characters and punctuation
 */
export const extractChineseContent = (text: string): string[] => {
  if (!text) return [];
  
  // Get all Chinese words (consecutive characters)
  const words = extractChineseWords(text);
  
  // Split each word into individual characters
  const characters: string[] = [];
  words.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      characters.push(word[i]);
    }
  });
  
  return characters;
};
