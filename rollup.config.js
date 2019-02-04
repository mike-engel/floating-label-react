import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";
import pkg from "./package.json";

export default {
  input: "index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      globals: { react: "React" }
    },
    {
      file: pkg.module,
      format: "es",
      globals: { react: "React" }
    }
  ],
  external: ["react"],
  plugins: [
    replace({
      // The react sources include a reference to process.env.NODE_ENV so we need to replace it here with the actual value
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    typescript({
      typescript: require("typescript")
    })
  ]
};
