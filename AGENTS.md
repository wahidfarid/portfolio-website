# Agent Instructions & Best Practices

This document contains critical operational rules for AI agents working on this codebase.

## Critical Rules for File Editing

To avoid common errors and infinite loops during development, follow these rules strictly:

### 1. Prefer `write` over `edit` for complex changes
- **DO NOT** use the `edit` tool if you are changing more than one line of code or modifying multiple parts of a file.
- If a change requires updating imports, adding new functions, or restructuring a component, use the `write` tool to overwrite the entire file. This prevents "string mismatch" errors and ensures the file remains syntactically correct.

### 2. Always `read` before you `edit` (if using `edit`)
- If you must use the `edit` tool for a small change, you **must** call the `read` tool immediately beforehand to ensure your `oldString` matches the file's exact indentation, whitespace, and line endings.
- Never guess the content of a file; always verify it first.

### 3. Avoid Ambiguous `oldString` values
- When using `edit`, never use short or common strings (like `}`, `)`, or `import ...`) as your `oldString`. This causes ambiguity errors if that character appears multiple times in the file.
- Always provide a large, unique block of code for the `oldString` to ensure an exact match.

### 4. Handle Errors Proactively
- If an `edit` call fails with a "string mismatch" or "syntax error", do not attempt to fix it by making another small `edit`. Instead, use `read` to see what the current state is and then use `write` to overwrite the file with the correct version.

## Workflow Guidelines
- **Understand before implementing**: Always read existing patterns in the codebase to ensure your changes match the project's style (e.g., Tailwind classes, TypeScript interfaces).
- **Verify after writing**: After using `write` or `edit`, always verify the file content with a `read` call to confirm the change was applied as intended.
