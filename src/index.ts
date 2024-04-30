/**
 * The entrypoint for the action.
 */
import { run } from './run'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
    try {
        if (process.env.GITHUB_ACTIONS === 'true') {
            await run();
        } else {
            console.error("This Cleanup Script Is Intended For Github Action Runner.");
            process.exit(2);
        }
    } catch (error) {
        console.error("Failed to execute action. Please to contect project owner.");
        process.exit(1);
    }
})();
