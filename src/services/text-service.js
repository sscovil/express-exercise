"use strict";

const pixelFont = require("../lib/pixel-font");

/**
 * Convert given text to pixel font.
 *
 * Example:
 *
 * pixelate("hello");
 *
 * X  X XXXX X   X    XX
 * X  X X    X   X   X  X
 * XXXX XXX  X   X   X  X
 * X  X X    X   X   X  X
 * X  X XXXX XXX XXX  XX
 *
 * @param {string} text - String to convert to pixel font.
 * @return {string} - Converted string, with line breaks.
 */
exports.pixelate = (text) => {
  return text; // TODO: Map text to pixel font.
};
