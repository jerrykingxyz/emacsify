import IconSvg from './components/IconSvg/index.js'
import TopBar from "./components/TopBar/index.js";
import SettingCard from "./components/SettingCard/index.js";
import RuleSetting from "./components/RuleSetting/index.js";
import CodeModule, {DefaultCodeModule} from "./components/CodeModule/index.js";

window.customElements.define('icon-svg',IconSvg)
window.customElements.define("top-bar", TopBar);
window.customElements.define("setting-card", SettingCard);
window.customElements.define("rule-setting", RuleSetting);
window.customElements.define("code-module", CodeModule);
window.customElements.define("default-code-module",DefaultCodeModule)
