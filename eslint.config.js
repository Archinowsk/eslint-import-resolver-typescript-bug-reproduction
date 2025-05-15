import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "typescript-eslint";
import eslintPluginImportX from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export default defineConfig([
  eslint.configs.recommended,
  typescriptEslint.configs.stylisticTypeChecked,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,

  globalIgnores([
    "**/.*", // Ignore dotfiles
  ]),

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.js"],
          defaultProject: "./tsconfig.json",
        },
      },
    },
  },

  {
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },

    rules: {
      "import-x/no-named-as-default-member": "off",
    },
  },
]);
