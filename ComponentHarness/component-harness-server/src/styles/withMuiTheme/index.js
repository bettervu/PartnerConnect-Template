"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@mui/material/styles");
const react_1 = __importDefault(require("react"));
const mui_theme_1 = __importDefault(require("../mui-theme"));
const withMuiTheme = Component => props => {
    return (react_1.default.createElement(styles_1.StyledEngineProvider, { injectFirst: true },
        react_1.default.createElement(styles_1.ThemeProvider, { theme: mui_theme_1.default },
            react_1.default.createElement(Component, { ...props }))));
};
exports.default = withMuiTheme;
//# sourceMappingURL=index.js.map