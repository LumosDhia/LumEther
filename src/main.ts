import initKeyBinds, { getKeyBinds } from "./KeyBinds";
import { runClock } from "./Date";
import initModal from "./Modal";
import "./styles/style.css";
import { getTheme, setTheme } from "./Theme";
import { getImage, setImage } from "./Image";
import { initSearchBar, getSearch, setSearch } from "./Search";
import { getLinks, initLinkSectionKeybinds, setLinks } from "./Links";

const APP_VERSION = "1.0.5";
function checkVersion() {
  if (localStorage.getItem("version") !== APP_VERSION) {
    localStorage.clear();
    localStorage.setItem("version", APP_VERSION);
  }
}

function init() {
  checkVersion();
  const imageState = getImage();
  setImage(imageState);

  const theme = getTheme();
  setTheme(theme);

  const links = getLinks();
  initLinkSectionKeybinds();
  setLinks(links);
  runClock();

  const keybinds = getKeyBinds();
  initKeyBinds(keybinds);

  const search = getSearch();
  setSearch(search);
  initSearchBar();

  initModal({
    links,
    keybinds,
    theme,
    imageState,
    search,
  });
}

init();
