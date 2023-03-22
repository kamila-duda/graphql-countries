import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/",
  documents: ["src/utils/gql/*.ts"],
  generates: {
    "./src/types/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};
export default config;
