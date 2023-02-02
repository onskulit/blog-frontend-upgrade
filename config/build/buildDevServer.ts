import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  const { port } = options;
  return {
    port,
    //open browser tab with app after build
    open: true,
    //needed to fix problem when you update page on route ('/about' e.g.) and browser show error 'Cannot GET /about'
    historyApiFallback: true,
  };
};