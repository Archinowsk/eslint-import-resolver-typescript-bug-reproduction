# eslint-import-resolver-typescript-bug-reproduction

After updating `eslint-import-resolver-typescript` version `3.9.0` to `4.3.4`, the following regression appears.

NOTE: This bug appears only on Windows. This works fine on Mac and Linux.

1. Install `yarn` and run `yarn install` (correct yarn version included in repo)
1. Run `yarn eslint`
2. This will produce two `import/no-unresolved` errors, for `eslint/config` and `typescript-eslint`.
3. The same error will appear in `eslint.config.js` and `index.ts` to demonstrate it appears outside ESLint config file.

Environment:

- OS: Windows 11
- NodeJS: 22.11.0
- Yarn: 4.9.1
