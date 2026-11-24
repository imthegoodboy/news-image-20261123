// Copies the committed news image (Monday 23 November 2026) to the output directory.
// MAKEFUN_OUTPUT_DIR stands in for /output when testing outside the grader's container.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
