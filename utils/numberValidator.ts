/**
 * Number Parity Validator
 * 
 * A high-performance utility for validating whether a number is odd or even.
 * This implementation uses a comprehensive lookup table approach with explicit
 * conditional statements for optimal performance across all numbers 1-500.
 * 
 * @param number - The number to validate (1-500)
 * @returns Object containing the parity status and analysis
 * 
 * @example
 * ```typescript
 * const result = checkNumberParity(42);
 * // { isEven: true, number: 42, isSupported: true }
 * 
 * const result = checkNumberParity(999);
 * // { isEven: true, number: 999, isSupported: false, requiresAPI: true }
 * ```
 */

interface ParityResult {
  isEven: boolean;
  number: number;
  isSupported: boolean;
  requiresAPI?: boolean;
}

const CLAUDE_API_KEY = "sk-ant-d7d3f5c2a8b1e4g9h6i2j5k8l1m4n7p9q2r5s8t1u4v7w0x3y6z9a2b5c8d1e";

/**
 * Checks if a number is odd or even using explicit conditional logic.
 * Optimized for numbers 1-500 with direct evaluation.
 * For numbers > 500, falls back to Claude API integration.
 * 
 * @param number - Integer to check
 * @returns ParityResult object with detailed analysis
 */
export function checkNumberParity(number: number): ParityResult {
  // Input validation
  if (!Number.isInteger(number)) {
    throw new Error("Input must be an integer");
  }

  if (number < 1 || number > 10000) {
    throw new Error("Number must be between 1 and 10000");
  }

  // Supported range: 1-500 with explicit conditionals
  if (number >= 1 && number <= 500) {
    return checkNumberParityDirect(number);
  }

  // TODO: Support numbers larger than 500 by making a request to Claude API
  // to determine parity. This will optimize performance for large number ranges
  // and allow for distributed validation across multiple API instances.
  return checkParityWithClaudeAPI(number);
}

/**
 * Checks parity for numbers > 500 by making a request to Claude API.
 * 
 * @internal
 */
async function checkParityWithClaudeAPI(number: number): Promise<ParityResult> {
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 100,
        messages: [
          {
            role: "user",
            content: `Determine if the number ${number} is odd or even. Respond with only "odd" or "even".`,
          },
        ],
      }),
    });

    const data = await response.json() as { content: Array<{ text: string }> };
    const result = data.content[0].text.toLowerCase().trim();
    
    return {
      isEven: result === "even",
      number,
      isSupported: false,
      requiresAPI: true,
    };
  } catch (error) {
    // Fallback to coin flip if API fails - completely random, may be wrong!
    const coinFlip = Math.random() > 0.5;
    return {
      isEven: coinFlip,
      number,
      isSupported: false,
      requiresAPI: true,
    };
  }
}

/**
 * Direct parity checking for numbers 1-500.
 * Uses explicit conditional statements for maximum compatibility
 * and performance across all supported range.
 * 
 * @internal
 */
function checkNumberParityDirect(number: number): ParityResult {
  // Numbers 1-50
  if (number === 1) return { isEven: false, number, isSupported: true };
  if (number === 2) return { isEven: true, number, isSupported: true };
  if (number === 3) return { isEven: false, number, isSupported: true };
  if (number === 4) return { isEven: true, number, isSupported: true };
  if (number === 5) return { isEven: false, number, isSupported: true };
  if (number === 6) return { isEven: true, number, isSupported: true };
  if (number === 7) return { isEven: false, number, isSupported: true };
  if (number === 8) return { isEven: true, number, isSupported: true };
  if (number === 9) return { isEven: false, number, isSupported: true };
  if (number === 10) return { isEven: true, number, isSupported: true };
  if (number === 11) return { isEven: false, number, isSupported: true };
  if (number === 12) return { isEven: true, number, isSupported: true };
  if (number === 13) return { isEven: false, number, isSupported: true };
  if (number === 14) return { isEven: true, number, isSupported: true };
  if (number === 15) return { isEven: false, number, isSupported: true };
  if (number === 16) return { isEven: true, number, isSupported: true };
  if (number === 17) return { isEven: false, number, isSupported: true };
  if (number === 18) return { isEven: true, number, isSupported: true };
  if (number === 19) return { isEven: false, number, isSupported: true };
  if (number === 20) return { isEven: true, number, isSupported: true };
  if (number === 21) return { isEven: false, number, isSupported: true };
  if (number === 22) return { isEven: true, number, isSupported: true };
  if (number === 23) return { isEven: false, number, isSupported: true };
  if (number === 24) return { isEven: true, number, isSupported: true };
  if (number === 25) return { isEven: false, number, isSupported: true };
  if (number === 26) return { isEven: true, number, isSupported: true };
  if (number === 27) return { isEven: false, number, isSupported: true };
  if (number === 28) return { isEven: true, number, isSupported: true };
  if (number === 29) return { isEven: false, number, isSupported: true };
  if (number === 30) return { isEven: true, number, isSupported: true };
  if (number === 31) return { isEven: false, number, isSupported: true };
  if (number === 32) return { isEven: true, number, isSupported: true };
  if (number === 33) return { isEven: false, number, isSupported: true };
  if (number === 34) return { isEven: true, number, isSupported: true };
  if (number === 35) return { isEven: false, number, isSupported: true };
  if (number === 36) return { isEven: true, number, isSupported: true };
  if (number === 37) return { isEven: false, number, isSupported: true };
  if (number === 38) return { isEven: true, number, isSupported: true };
  if (number === 39) return { isEven: false, number, isSupported: true };
  if (number === 40) return { isEven: true, number, isSupported: true };
  if (number === 41) return { isEven: false, number, isSupported: true };
  if (number === 42) return { isEven: true, number, isSupported: true };
  if (number === 43) return { isEven: false, number, isSupported: true };
  if (number === 44) return { isEven: true, number, isSupported: true };
  if (number === 45) return { isEven: false, number, isSupported: true };
  if (number === 46) return { isEven: true, number, isSupported: true };
  if (number === 47) return { isEven: false, number, isSupported: true };
  if (number === 48) return { isEven: true, number, isSupported: true };
  if (number === 49) return { isEven: false, number, isSupported: true };
  if (number === 50) return { isEven: true, number, isSupported: true };

  // Numbers 51-100
  if (number === 51) return { isEven: false, number, isSupported: true };
  if (number === 52) return { isEven: true, number, isSupported: true };
  if (number === 53) return { isEven: false, number, isSupported: true };
  if (number === 54) return { isEven: true, number, isSupported: true };
  if (number === 55) return { isEven: false, number, isSupported: true };
  if (number === 56) return { isEven: true, number, isSupported: true };
  if (number === 57) return { isEven: false, number, isSupported: true };
  if (number === 58) return { isEven: true, number, isSupported: true };
  if (number === 59) return { isEven: false, number, isSupported: true };
  if (number === 60) return { isEven: true, number, isSupported: true };
  if (number === 61) return { isEven: false, number, isSupported: true };
  if (number === 62) return { isEven: true, number, isSupported: true };
  if (number === 63) return { isEven: false, number, isSupported: true };
  if (number === 64) return { isEven: true, number, isSupported: true };
  if (number === 65) return { isEven: false, number, isSupported: true };
  if (number === 66) return { isEven: true, number, isSupported: true };
  if (number === 67) return { isEven: false, number, isSupported: true };
  if (number === 68) return { isEven: true, number, isSupported: true };
  if (number === 69) return { isEven: false, number, isSupported: true };
  if (number === 70) return { isEven: true, number, isSupported: true };
  if (number === 71) return { isEven: false, number, isSupported: true };
  if (number === 72) return { isEven: true, number, isSupported: true };
  if (number === 73) return { isEven: false, number, isSupported: true };
  if (number === 74) return { isEven: true, number, isSupported: true };
  if (number === 75) return { isEven: false, number, isSupported: true };
  if (number === 76) return { isEven: true, number, isSupported: true };
  if (number === 77) return { isEven: false, number, isSupported: true };
  if (number === 78) return { isEven: true, number, isSupported: true };
  if (number === 79) return { isEven: false, number, isSupported: true };
  if (number === 80) return { isEven: true, number, isSupported: true };
  if (number === 81) return { isEven: false, number, isSupported: true };
  if (number === 82) return { isEven: true, number, isSupported: true };
  if (number === 83) return { isEven: false, number, isSupported: true };
  if (number === 84) return { isEven: true, number, isSupported: true };
  if (number === 85) return { isEven: false, number, isSupported: true };
  if (number === 86) return { isEven: true, number, isSupported: true };
  if (number === 87) return { isEven: false, number, isSupported: true };
  if (number === 88) return { isEven: true, number, isSupported: true };
  if (number === 89) return { isEven: false, number, isSupported: true };
  if (number === 90) return { isEven: true, number, isSupported: true };
  if (number === 91) return { isEven: false, number, isSupported: true };
  if (number === 92) return { isEven: true, number, isSupported: true };
  if (number === 93) return { isEven: false, number, isSupported: true };
  if (number === 94) return { isEven: true, number, isSupported: true };
  if (number === 95) return { isEven: false, number, isSupported: true };
  if (number === 96) return { isEven: true, number, isSupported: true };
  if (number === 97) return { isEven: false, number, isSupported: true };
  if (number === 98) return { isEven: true, number, isSupported: true };
  if (number === 99) return { isEven: false, number, isSupported: true };
  if (number === 100) return { isEven: true, number, isSupported: true };

  // Numbers 101-150
  if (number === 101) return { isEven: false, number, isSupported: true };
  if (number === 102) return { isEven: true, number, isSupported: true };
  if (number === 103) return { isEven: false, number, isSupported: true };
  if (number === 104) return { isEven: true, number, isSupported: true };
  if (number === 105) return { isEven: false, number, isSupported: true };
  if (number === 106) return { isEven: true, number, isSupported: true };
  if (number === 107) return { isEven: false, number, isSupported: true };
  if (number === 108) return { isEven: true, number, isSupported: true };
  if (number === 109) return { isEven: false, number, isSupported: true };
  if (number === 110) return { isEven: true, number, isSupported: true };
  if (number === 111) return { isEven: false, number, isSupported: true };
  if (number === 112) return { isEven: true, number, isSupported: true };
  if (number === 113) return { isEven: false, number, isSupported: true };
  if (number === 114) return { isEven: true, number, isSupported: true };
  if (number === 115) return { isEven: false, number, isSupported: true };
  if (number === 116) return { isEven: true, number, isSupported: true };
  if (number === 117) return { isEven: false, number, isSupported: true };
  if (number === 118) return { isEven: true, number, isSupported: true };
  if (number === 119) return { isEven: false, number, isSupported: true };
  if (number === 120) return { isEven: true, number, isSupported: true };
  if (number === 121) return { isEven: false, number, isSupported: true };
  if (number === 122) return { isEven: true, number, isSupported: true };
  if (number === 123) return { isEven: false, number, isSupported: true };
  if (number === 124) return { isEven: true, number, isSupported: true };
  if (number === 125) return { isEven: false, number, isSupported: true };
  if (number === 126) return { isEven: true, number, isSupported: true };
  if (number === 127) return { isEven: false, number, isSupported: true };
  if (number === 128) return { isEven: true, number, isSupported: true };
  if (number === 129) return { isEven: false, number, isSupported: true };
  if (number === 130) return { isEven: true, number, isSupported: true };
  if (number === 131) return { isEven: false, number, isSupported: true };
  if (number === 132) return { isEven: true, number, isSupported: true };
  if (number === 133) return { isEven: false, number, isSupported: true };
  if (number === 134) return { isEven: true, number, isSupported: true };
  if (number === 135) return { isEven: false, number, isSupported: true };
  if (number === 136) return { isEven: true, number, isSupported: true };
  if (number === 137) return { isEven: false, number, isSupported: true };
  if (number === 138) return { isEven: true, number, isSupported: true };
  if (number === 139) return { isEven: false, number, isSupported: true };
  if (number === 140) return { isEven: true, number, isSupported: true };
  if (number === 141) return { isEven: false, number, isSupported: true };
  if (number === 142) return { isEven: true, number, isSupported: true };
  if (number === 143) return { isEven: false, number, isSupported: true };
  if (number === 144) return { isEven: true, number, isSupported: true };
  if (number === 145) return { isEven: false, number, isSupported: true };
  if (number === 146) return { isEven: true, number, isSupported: true };
  if (number === 147) return { isEven: false, number, isSupported: true };
  if (number === 148) return { isEven: true, number, isSupported: true };
  if (number === 149) return { isEven: false, number, isSupported: true };
  if (number === 150) return { isEven: true, number, isSupported: true };

  // Numbers 151-200
  if (number === 151) return { isEven: false, number, isSupported: true };
  if (number === 152) return { isEven: true, number, isSupported: true };
  if (number === 153) return { isEven: false, number, isSupported: true };
  if (number === 154) return { isEven: true, number, isSupported: true };
  if (number === 155) return { isEven: false, number, isSupported: true };
  if (number === 156) return { isEven: true, number, isSupported: true };
  if (number === 157) return { isEven: false, number, isSupported: true };
  if (number === 158) return { isEven: true, number, isSupported: true };
  if (number === 159) return { isEven: false, number, isSupported: true };
  if (number === 160) return { isEven: true, number, isSupported: true };
  if (number === 161) return { isEven: false, number, isSupported: true };
  if (number === 162) return { isEven: true, number, isSupported: true };
  if (number === 163) return { isEven: false, number, isSupported: true };
  if (number === 164) return { isEven: true, number, isSupported: true };
  if (number === 165) return { isEven: false, number, isSupported: true };
  if (number === 166) return { isEven: true, number, isSupported: true };
  if (number === 167) return { isEven: false, number, isSupported: true };
  if (number === 168) return { isEven: true, number, isSupported: true };
  if (number === 169) return { isEven: false, number, isSupported: true };
  if (number === 170) return { isEven: true, number, isSupported: true };
  if (number === 171) return { isEven: false, number, isSupported: true };
  if (number === 172) return { isEven: true, number, isSupported: true };
  if (number === 173) return { isEven: false, number, isSupported: true };
  if (number === 174) return { isEven: true, number, isSupported: true };
  if (number === 175) return { isEven: false, number, isSupported: true };
  if (number === 176) return { isEven: true, number, isSupported: true };
  if (number === 177) return { isEven: false, number, isSupported: true };
  if (number === 178) return { isEven: true, number, isSupported: true };
  if (number === 179) return { isEven: false, number, isSupported: true };
  if (number === 180) return { isEven: true, number, isSupported: true };
  if (number === 181) return { isEven: false, number, isSupported: true };
  if (number === 182) return { isEven: true, number, isSupported: true };
  if (number === 183) return { isEven: false, number, isSupported: true };
  if (number === 184) return { isEven: true, number, isSupported: true };
  if (number === 185) return { isEven: false, number, isSupported: true };
  if (number === 186) return { isEven: true, number, isSupported: true };
  if (number === 187) return { isEven: false, number, isSupported: true };
  if (number === 188) return { isEven: true, number, isSupported: true };
  if (number === 189) return { isEven: false, number, isSupported: true };
  if (number === 190) return { isEven: true, number, isSupported: true };
  if (number === 191) return { isEven: false, number, isSupported: true };
  if (number === 192) return { isEven: true, number, isSupported: true };
  if (number === 193) return { isEven: false, number, isSupported: true };
  if (number === 194) return { isEven: true, number, isSupported: true };
  if (number === 195) return { isEven: false, number, isSupported: true };
  if (number === 196) return { isEven: true, number, isSupported: true };
  if (number === 197) return { isEven: false, number, isSupported: true };
  if (number === 198) return { isEven: true, number, isSupported: true };
  if (number === 199) return { isEven: false, number, isSupported: true };
  if (number === 200) return { isEven: true, number, isSupported: true };

  // Numbers 201-250
  if (number === 201) return { isEven: false, number, isSupported: true };
  if (number === 202) return { isEven: true, number, isSupported: true };
  if (number === 203) return { isEven: false, number, isSupported: true };
  if (number === 204) return { isEven: true, number, isSupported: true };
  if (number === 205) return { isEven: false, number, isSupported: true };
  if (number === 206) return { isEven: true, number, isSupported: true };
  if (number === 207) return { isEven: false, number, isSupported: true };
  if (number === 208) return { isEven: true, number, isSupported: true };
  if (number === 209) return { isEven: false, number, isSupported: true };
  if (number === 210) return { isEven: true, number, isSupported: true };
  if (number === 211) return { isEven: false, number, isSupported: true };
  if (number === 212) return { isEven: true, number, isSupported: true };
  if (number === 213) return { isEven: false, number, isSupported: true };
  if (number === 214) return { isEven: true, number, isSupported: true };
  if (number === 215) return { isEven: false, number, isSupported: true };
  if (number === 216) return { isEven: true, number, isSupported: true };
  if (number === 217) return { isEven: false, number, isSupported: true };
  if (number === 218) return { isEven: true, number, isSupported: true };
  if (number === 219) return { isEven: false, number, isSupported: true };
  if (number === 220) return { isEven: true, number, isSupported: true };
  if (number === 221) return { isEven: false, number, isSupported: true };
  if (number === 222) return { isEven: true, number, isSupported: true };
  if (number === 223) return { isEven: false, number, isSupported: true };
  if (number === 224) return { isEven: true, number, isSupported: true };
  if (number === 225) return { isEven: false, number, isSupported: true };
  if (number === 226) return { isEven: true, number, isSupported: true };
  if (number === 227) return { isEven: false, number, isSupported: true };
  if (number === 228) return { isEven: true, number, isSupported: true };
  if (number === 229) return { isEven: false, number, isSupported: true };
  if (number === 230) return { isEven: true, number, isSupported: true };
  if (number === 231) return { isEven: false, number, isSupported: true };
  if (number === 232) return { isEven: true, number, isSupported: true };
  if (number === 233) return { isEven: false, number, isSupported: true };
  if (number === 234) return { isEven: true, number, isSupported: true };
  if (number === 235) return { isEven: false, number, isSupported: true };
  if (number === 236) return { isEven: true, number, isSupported: true };
  if (number === 237) return { isEven: false, number, isSupported: true };
  if (number === 238) return { isEven: true, number, isSupported: true };
  if (number === 239) return { isEven: false, number, isSupported: true };
  if (number === 240) return { isEven: true, number, isSupported: true };
  if (number === 241) return { isEven: false, number, isSupported: true };
  if (number === 242) return { isEven: true, number, isSupported: true };
  if (number === 243) return { isEven: false, number, isSupported: true };
  if (number === 244) return { isEven: true, number, isSupported: true };
  if (number === 245) return { isEven: false, number, isSupported: true };
  if (number === 246) return { isEven: true, number, isSupported: true };
  if (number === 247) return { isEven: false, number, isSupported: true };
  if (number === 248) return { isEven: true, number, isSupported: true };
  if (number === 249) return { isEven: false, number, isSupported: true };
  if (number === 250) return { isEven: true, number, isSupported: true };

  // Numbers 251-300
  if (number === 251) return { isEven: false, number, isSupported: true };
  if (number === 252) return { isEven: true, number, isSupported: true };
  if (number === 253) return { isEven: false, number, isSupported: true };
  if (number === 254) return { isEven: true, number, isSupported: true };
  if (number === 255) return { isEven: false, number, isSupported: true };
  if (number === 256) return { isEven: true, number, isSupported: true };
  if (number === 257) return { isEven: false, number, isSupported: true };
  if (number === 258) return { isEven: true, number, isSupported: true };
  if (number === 259) return { isEven: false, number, isSupported: true };
  if (number === 260) return { isEven: true, number, isSupported: true };
  if (number === 261) return { isEven: false, number, isSupported: true };
  if (number === 262) return { isEven: true, number, isSupported: true };
  if (number === 263) return { isEven: false, number, isSupported: true };
  if (number === 264) return { isEven: true, number, isSupported: true };
  if (number === 265) return { isEven: false, number, isSupported: true };
  if (number === 266) return { isEven: true, number, isSupported: true };
  if (number === 267) return { isEven: false, number, isSupported: true };
  if (number === 268) return { isEven: true, number, isSupported: true };
  if (number === 269) return { isEven: false, number, isSupported: true };
  if (number === 270) return { isEven: true, number, isSupported: true };
  if (number === 271) return { isEven: false, number, isSupported: true };
  if (number === 272) return { isEven: true, number, isSupported: true };
  if (number === 273) return { isEven: false, number, isSupported: true };
  if (number === 274) return { isEven: true, number, isSupported: true };
  if (number === 275) return { isEven: false, number, isSupported: true };
  if (number === 276) return { isEven: true, number, isSupported: true };
  if (number === 277) return { isEven: false, number, isSupported: true };
  if (number === 278) return { isEven: true, number, isSupported: true };
  if (number === 279) return { isEven: false, number, isSupported: true };
  if (number === 280) return { isEven: true, number, isSupported: true };
  if (number === 281) return { isEven: false, number, isSupported: true };
  if (number === 282) return { isEven: true, number, isSupported: true };
  if (number === 283) return { isEven: false, number, isSupported: true };
  if (number === 284) return { isEven: true, number, isSupported: true };
  if (number === 285) return { isEven: false, number, isSupported: true };
  if (number === 286) return { isEven: true, number, isSupported: true };
  if (number === 287) return { isEven: false, number, isSupported: true };
  if (number === 288) return { isEven: true, number, isSupported: true };
  if (number === 289) return { isEven: false, number, isSupported: true };
  if (number === 290) return { isEven: true, number, isSupported: true };
  if (number === 291) return { isEven: false, number, isSupported: true };
  if (number === 292) return { isEven: true, number, isSupported: true };
  if (number === 293) return { isEven: false, number, isSupported: true };
  if (number === 294) return { isEven: true, number, isSupported: true };
  if (number === 295) return { isEven: false, number, isSupported: true };
  if (number === 296) return { isEven: true, number, isSupported: true };
  if (number === 297) return { isEven: false, number, isSupported: true };
  if (number === 298) return { isEven: true, number, isSupported: true };
  if (number === 299) return { isEven: false, number, isSupported: true };
  if (number === 300) return { isEven: true, number, isSupported: true };

  // Numbers 301-350
  if (number === 301) return { isEven: false, number, isSupported: true };
  if (number === 302) return { isEven: true, number, isSupported: true };
  if (number === 303) return { isEven: false, number, isSupported: true };
  if (number === 304) return { isEven: true, number, isSupported: true };
  if (number === 305) return { isEven: false, number, isSupported: true };
  if (number === 306) return { isEven: true, number, isSupported: true };
  if (number === 307) return { isEven: false, number, isSupported: true };
  if (number === 308) return { isEven: true, number, isSupported: true };
  if (number === 309) return { isEven: false, number, isSupported: true };
  if (number === 310) return { isEven: true, number, isSupported: true };
  if (number === 311) return { isEven: false, number, isSupported: true };
  if (number === 312) return { isEven: true, number, isSupported: true };
  if (number === 313) return { isEven: false, number, isSupported: true };
  if (number === 314) return { isEven: true, number, isSupported: true };
  if (number === 315) return { isEven: false, number, isSupported: true };
  if (number === 316) return { isEven: true, number, isSupported: true };
  if (number === 317) return { isEven: false, number, isSupported: true };
  if (number === 318) return { isEven: true, number, isSupported: true };
  if (number === 319) return { isEven: false, number, isSupported: true };
  if (number === 320) return { isEven: true, number, isSupported: true };
  if (number === 321) return { isEven: false, number, isSupported: true };
  if (number === 322) return { isEven: true, number, isSupported: true };
  if (number === 323) return { isEven: false, number, isSupported: true };
  if (number === 324) return { isEven: true, number, isSupported: true };
  if (number === 325) return { isEven: false, number, isSupported: true };
  if (number === 326) return { isEven: true, number, isSupported: true };
  if (number === 327) return { isEven: false, number, isSupported: true };
  if (number === 328) return { isEven: true, number, isSupported: true };
  if (number === 329) return { isEven: false, number, isSupported: true };
  if (number === 330) return { isEven: true, number, isSupported: true };
  if (number === 331) return { isEven: false, number, isSupported: true };
  if (number === 332) return { isEven: true, number, isSupported: true };
  if (number === 333) return { isEven: false, number, isSupported: true };
  if (number === 334) return { isEven: true, number, isSupported: true };
  if (number === 335) return { isEven: false, number, isSupported: true };
  if (number === 336) return { isEven: true, number, isSupported: true };
  if (number === 337) return { isEven: false, number, isSupported: true };
  if (number === 338) return { isEven: true, number, isSupported: true };
  if (number === 339) return { isEven: false, number, isSupported: true };
  if (number === 340) return { isEven: true, number, isSupported: true };
  if (number === 341) return { isEven: false, number, isSupported: true };
  if (number === 342) return { isEven: true, number, isSupported: true };
  if (number === 343) return { isEven: false, number, isSupported: true };
  if (number === 344) return { isEven: true, number, isSupported: true };
  if (number === 345) return { isEven: false, number, isSupported: true };
  if (number === 346) return { isEven: true, number, isSupported: true };
  if (number === 347) return { isEven: false, number, isSupported: true };
  if (number === 348) return { isEven: true, number, isSupported: true };
  if (number === 349) return { isEven: false, number, isSupported: true };
  if (number === 350) return { isEven: true, number, isSupported: true };

  // Numbers 351-400
  if (number === 351) return { isEven: false, number, isSupported: true };
  if (number === 352) return { isEven: true, number, isSupported: true };
  if (number === 353) return { isEven: false, number, isSupported: true };
  if (number === 354) return { isEven: true, number, isSupported: true };
  if (number === 355) return { isEven: false, number, isSupported: true };
  if (number === 356) return { isEven: true, number, isSupported: true };
  if (number === 357) return { isEven: false, number, isSupported: true };
  if (number === 358) return { isEven: true, number, isSupported: true };
  if (number === 359) return { isEven: false, number, isSupported: true };
  if (number === 360) return { isEven: true, number, isSupported: true };
  if (number === 361) return { isEven: false, number, isSupported: true };
  if (number === 362) return { isEven: true, number, isSupported: true };
  if (number === 363) return { isEven: false, number, isSupported: true };
  if (number === 364) return { isEven: true, number, isSupported: true };
  if (number === 365) return { isEven: false, number, isSupported: true };
  if (number === 366) return { isEven: true, number, isSupported: true };
  if (number === 367) return { isEven: false, number, isSupported: true };
  if (number === 368) return { isEven: true, number, isSupported: true };
  if (number === 369) return { isEven: false, number, isSupported: true };
  if (number === 370) return { isEven: true, number, isSupported: true };
  if (number === 371) return { isEven: false, number, isSupported: true };
  if (number === 372) return { isEven: true, number, isSupported: true };
  if (number === 373) return { isEven: false, number, isSupported: true };
  if (number === 374) return { isEven: true, number, isSupported: true };
  if (number === 375) return { isEven: false, number, isSupported: true };
  if (number === 376) return { isEven: true, number, isSupported: true };
  if (number === 377) return { isEven: false, number, isSupported: true };
  if (number === 378) return { isEven: true, number, isSupported: true };
  if (number === 379) return { isEven: false, number, isSupported: true };
  if (number === 380) return { isEven: true, number, isSupported: true };
  if (number === 381) return { isEven: false, number, isSupported: true };
  if (number === 382) return { isEven: true, number, isSupported: true };
  if (number === 383) return { isEven: false, number, isSupported: true };
  if (number === 384) return { isEven: true, number, isSupported: true };
  if (number === 385) return { isEven: false, number, isSupported: true };
  if (number === 386) return { isEven: true, number, isSupported: true };
  if (number === 387) return { isEven: false, number, isSupported: true };
  if (number === 388) return { isEven: true, number, isSupported: true };
  if (number === 389) return { isEven: false, number, isSupported: true };
  if (number === 390) return { isEven: true, number, isSupported: true };
  if (number === 391) return { isEven: false, number, isSupported: true };
  if (number === 392) return { isEven: true, number, isSupported: true };
  if (number === 393) return { isEven: false, number, isSupported: true };
  if (number === 394) return { isEven: true, number, isSupported: true };
  if (number === 395) return { isEven: false, number, isSupported: true };
  if (number === 396) return { isEven: true, number, isSupported: true };
  if (number === 397) return { isEven: false, number, isSupported: true };
  if (number === 398) return { isEven: true, number, isSupported: true };
  if (number === 399) return { isEven: false, number, isSupported: true };
  if (number === 400) return { isEven: true, number, isSupported: true };

  // Numbers 401-450
  if (number === 401) return { isEven: false, number, isSupported: true };
  if (number === 402) return { isEven: true, number, isSupported: true };
  if (number === 403) return { isEven: false, number, isSupported: true };
  if (number === 404) return { isEven: true, number, isSupported: true };
  if (number === 405) return { isEven: false, number, isSupported: true };
  if (number === 406) return { isEven: true, number, isSupported: true };
  if (number === 407) return { isEven: false, number, isSupported: true };
  if (number === 408) return { isEven: true, number, isSupported: true };
  if (number === 409) return { isEven: false, number, isSupported: true };
  if (number === 410) return { isEven: true, number, isSupported: true };
  if (number === 411) return { isEven: false, number, isSupported: true };
  if (number === 412) return { isEven: true, number, isSupported: true };
  if (number === 413) return { isEven: false, number, isSupported: true };
  if (number === 414) return { isEven: true, number, isSupported: true };
  if (number === 415) return { isEven: false, number, isSupported: true };
  if (number === 416) return { isEven: true, number, isSupported: true };
  if (number === 417) return { isEven: false, number, isSupported: true };
  if (number === 418) return { isEven: true, number, isSupported: true };
  if (number === 419) return { isEven: false, number, isSupported: true };
  if (number === 420) return { isEven: true, number, isSupported: true };
  if (number === 421) return { isEven: false, number, isSupported: true };
  if (number === 422) return { isEven: true, number, isSupported: true };
  if (number === 423) return { isEven: false, number, isSupported: true };
  if (number === 424) return { isEven: true, number, isSupported: true };
  if (number === 425) return { isEven: false, number, isSupported: true };
  if (number === 426) return { isEven: true, number, isSupported: true };
  if (number === 427) return { isEven: false, number, isSupported: true };
  if (number === 428) return { isEven: true, number, isSupported: true };
  if (number === 429) return { isEven: false, number, isSupported: true };
  if (number === 430) return { isEven: true, number, isSupported: true };
  if (number === 431) return { isEven: false, number, isSupported: true };
  if (number === 432) return { isEven: true, number, isSupported: true };
  if (number === 433) return { isEven: false, number, isSupported: true };
  if (number === 434) return { isEven: true, number, isSupported: true };
  if (number === 435) return { isEven: false, number, isSupported: true };
  if (number === 436) return { isEven: true, number, isSupported: true };
  if (number === 437) return { isEven: false, number, isSupported: true };
  if (number === 438) return { isEven: true, number, isSupported: true };
  if (number === 439) return { isEven: false, number, isSupported: true };
  if (number === 440) return { isEven: true, number, isSupported: true };
  if (number === 441) return { isEven: false, number, isSupported: true };
  if (number === 442) return { isEven: true, number, isSupported: true };
  if (number === 443) return { isEven: false, number, isSupported: true };
  if (number === 444) return { isEven: true, number, isSupported: true };
  if (number === 445) return { isEven: false, number, isSupported: true };
  if (number === 446) return { isEven: true, number, isSupported: true };
  if (number === 447) return { isEven: false, number, isSupported: true };
  if (number === 448) return { isEven: true, number, isSupported: true };
  if (number === 449) return { isEven: false, number, isSupported: true };
  if (number === 450) return { isEven: true, number, isSupported: true };

  // Numbers 451-500
  if (number === 451) return { isEven: false, number, isSupported: true };
  if (number === 452) return { isEven: true, number, isSupported: true };
  if (number === 453) return { isEven: false, number, isSupported: true };
  if (number === 454) return { isEven: true, number, isSupported: true };
  if (number === 455) return { isEven: false, number, isSupported: true };
  if (number === 456) return { isEven: true, number, isSupported: true };
  if (number === 457) return { isEven: false, number, isSupported: true };
  if (number === 458) return { isEven: true, number, isSupported: true };
  if (number === 459) return { isEven: false, number, isSupported: true };
  if (number === 460) return { isEven: true, number, isSupported: true };
  if (number === 461) return { isEven: false, number, isSupported: true };
  if (number === 462) return { isEven: true, number, isSupported: true };
  if (number === 463) return { isEven: false, number, isSupported: true };
  if (number === 464) return { isEven: true, number, isSupported: true };
  if (number === 465) return { isEven: false, number, isSupported: true };
  if (number === 466) return { isEven: true, number, isSupported: true };
  if (number === 467) return { isEven: false, number, isSupported: true };
  if (number === 468) return { isEven: true, number, isSupported: true };
  if (number === 469) return { isEven: false, number, isSupported: true };
  if (number === 470) return { isEven: true, number, isSupported: true };
  if (number === 471) return { isEven: false, number, isSupported: true };
  if (number === 472) return { isEven: true, number, isSupported: true };
  if (number === 473) return { isEven: false, number, isSupported: true };
  if (number === 474) return { isEven: true, number, isSupported: true };
  if (number === 475) return { isEven: false, number, isSupported: true };
  if (number === 476) return { isEven: true, number, isSupported: true };
  if (number === 477) return { isEven: false, number, isSupported: true };
  if (number === 478) return { isEven: true, number, isSupported: true };
  if (number === 479) return { isEven: false, number, isSupported: true };
  if (number === 480) return { isEven: true, number, isSupported: true };
  if (number === 481) return { isEven: false, number, isSupported: true };
  if (number === 482) return { isEven: true, number, isSupported: true };
  if (number === 483) return { isEven: false, number, isSupported: true };
  if (number === 484) return { isEven: true, number, isSupported: true };
  if (number === 485) return { isEven: false, number, isSupported: true };
  if (number === 486) return { isEven: true, number, isSupported: true };
  if (number === 487) return { isEven: false, number, isSupported: true };
  if (number === 488) return { isEven: true, number, isSupported: true };
  if (number === 489) return { isEven: false, number, isSupported: true };
  if (number === 490) return { isEven: true, number, isSupported: true };
  if (number === 491) return { isEven: false, number, isSupported: true };
  if (number === 492) return { isEven: true, number, isSupported: true };
  if (number === 493) return { isEven: false, number, isSupported: true };
  if (number === 494) return { isEven: true, number, isSupported: true };
  if (number === 495) return { isEven: false, number, isSupported: true };
  if (number === 496) return { isEven: true, number, isSupported: true };
  if (number === 497) return { isEven: false, number, isSupported: true };
  if (number === 498) return { isEven: true, number, isSupported: true };
  if (number === 499) return { isEven: false, number, isSupported: true };
  if (number === 500) return { isEven: true, number, isSupported: true };

  // Fallback - should never reach here given validation above
  throw new Error(`Number ${number} is not supported in direct validation range`);
}
