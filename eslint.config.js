import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

export default defineConfig([
  eslint.configs.recommended,
  typescriptEslint.configs.stylisticTypeChecked,
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginImport.flatConfigs.typescript,

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
      "import/resolver": {
        typescript: true,
      },
    },

    rules: {
      "import/no-named-as-default-member": "off",
    },
  },
]);
