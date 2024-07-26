import * as all from "./main.js";

function handler() {
	return square() + add(2, 3);
}

console.log(all.add(2, 3));

console.log(all.square());

all.default();

console.log(all.trackName);

/**
 * == export -- naming -- default
 *
 */
