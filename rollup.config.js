import babel from "rollup-plugin-babel";
import cjs from "rollup-plugin-commonjs";
import inject from "rollup-plugin-inject";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";

const processShim = "\0process-shim";

export default {
  output: {
    name: "floating-label-react",
    globals: { react: "React" },
    file: "dist/floating-label-react.es.js",
    format: "es",
    exports: "named"
  },
  input: "index.js",
  external: ["react", "prop-types", "styled-jsx"],
  plugins: [
    // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
    // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
    // which includes a shim containing just the parts the bundle needs.
    // Taken from the styled-components rollup config
    {
      resolveId(importee) {
        if (importee === processShim) return importee;
        return null;
      },
      load(id) {
        if (id === processShim) return "export default { argv: [], env: {} }";
        return null;
      }
    },
    resolve(),
    babel({
      babelrc: false,
      presets: [["env", { modules: false, loose: true }], "react"],
      plugins: [
        "transform-react-remove-prop-types",
        "external-helpers",
        "transform-class-properties"
      ]
    }),
    cjs({
      namedExports: {
        "node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js": [
          "default"
        ],
        "node_modules/core-js/library/modules/es6.object.to-string.js": [
          "default"
        ]
      }
    }),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    inject({ process: processShim })
  ]
};
