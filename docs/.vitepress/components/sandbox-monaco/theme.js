import active4d from 'monaco-themes/themes/Active4D.json'
import allHallowsEve from 'monaco-themes/themes/All Hallows Eve.json'
import amy from 'monaco-themes/themes/Amy.json'
import blackboard from 'monaco-themes/themes/Blackboard.json'
import brillianceBlack from 'monaco-themes/themes/Brilliance Black.json'
import brillianceDull from 'monaco-themes/themes/Brilliance Dull.json'
import chromeDevtools from 'monaco-themes/themes/Chrome DevTools.json'
import cloudsMidnight from 'monaco-themes/themes/Clouds Midnight.json'
import clouds from 'monaco-themes/themes/Clouds.json'
import cobalt from 'monaco-themes/themes/Cobalt.json'
import dawn from 'monaco-themes/themes/Dawn.json'
import dreamweaver from 'monaco-themes/themes/Dreamweaver.json'
import eiffel from 'monaco-themes/themes/Eiffel.json'
import espressoLibre from 'monaco-themes/themes/Espresso Libre.json'
import github from 'monaco-themes/themes/GitHub.json'
import idle from 'monaco-themes/themes/IDLE.json'
import katzenmilch from 'monaco-themes/themes/Katzenmilch.json'
import kuroirTheme from 'monaco-themes/themes/Kuroir Theme.json'
import lazy from 'monaco-themes/themes/LAZY.json'
import magicwbAmiga from 'monaco-themes/themes/MagicWB (Amiga).json'
import merbivoreSoft from 'monaco-themes/themes/Merbivore Soft.json'
import merbivore from 'monaco-themes/themes/Merbivore.json'
import monokai from 'monaco-themes/themes/Monokai.json'
import pastelsOnDark from 'monaco-themes/themes/Pastels on Dark.json'
import slushAndPoppies from 'monaco-themes/themes/Slush and Poppies.json'
import solarizedDark from 'monaco-themes/themes/Solarized-dark.json'
import solarizedLight from 'monaco-themes/themes/Solarized-light.json'
import spacecadet from 'monaco-themes/themes/SpaceCadet.json'
import sunburst from 'monaco-themes/themes/Sunburst.json'
import textmateMacClassic from 'monaco-themes/themes/Textmate (Mac Classic).json'
import tomorrowNightBlue from 'monaco-themes/themes/Tomorrow-Night-Blue.json'
import tomorrowNightBright from 'monaco-themes/themes/Tomorrow-Night-Bright.json'
import tomorrowNightEighties from 'monaco-themes/themes/Tomorrow-Night-Eighties.json'
import tomorrowNight from 'monaco-themes/themes/Tomorrow-Night.json'
import tomorrow from 'monaco-themes/themes/Tomorrow.json'
import twilight from 'monaco-themes/themes/Twilight.json'
import vibrantInk from 'monaco-themes/themes/Vibrant Ink.json'
import zenburnesque from 'monaco-themes/themes/Zenburnesque.json'
import iplastic from 'monaco-themes/themes/iPlastic.json'
import idlefingers from 'monaco-themes/themes/idleFingers.json'
import krtheme from 'monaco-themes/themes/krTheme.json'
import monoindustrial from 'monaco-themes/themes/monoindustrial.json'

const themeList = {
  active4d,
  allHallowsEve,
  amy,
  blackboard,
  brillianceBlack,
  brillianceDull,
  chromeDevtools,
  cloudsMidnight,
  clouds,
  cobalt,
  dawn,
  dreamweaver,
  eiffel,
  espressoLibre,
  github,
  idle,
  katzenmilch,
  kuroirTheme,
  lazy,
  magicwbAmiga,
  merbivoreSoft,
  merbivore,
  monokai,
  pastelsOnDark,
  slushAndPoppies,
  solarizedDark,
  solarizedLight,
  spacecadet,
  sunburst,
  textmateMacClassic,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  tomorrowNight,
  tomorrow,
  twilight,
  vibrantInk,
  zenburnesque,
  iplastic,
  idlefingers,
  krtheme,
  monoindustrial
}

function loadTheme(monaco) {
  Object.entries(themeList).forEach(([name, theme]) => {
    monaco.editor.defineTheme(name, theme)
  })
}

export default loadTheme
