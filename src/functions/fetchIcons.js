const fetchIcons = async (shortcut) => {
    let iconsFunc = null;
    
      if (shortcut === "ai") {
        iconsFunc = require("../asets/ai_icons_array").aiArray
      } else if (shortcut === "bi") {
        iconsFunc = require("../asets/bi_icons_array").biArray
      } else if (shortcut === "bs") {
        iconsFunc = require("../asets/bs_icons.array").bsArray
      } else if (shortcut === "cg") {
        iconsFunc = require("../asets/cg_icons_array").cgArray
      } else if (shortcut === "ci") {
        iconsFunc = require("../asets/ci_icons_array").ciArray
      }  else if (shortcut === "di") {
        iconsFunc = require("../asets/di_icons_array").diArray
      } else if (shortcut === "fa") {
        iconsFunc = require("../asets/fa_icons_array").faArray
      } else if (shortcut === "fa6") {
        iconsFunc = require("../asets/fa6_icons.array").fa6Array
      } else if (shortcut === "fc") {
        iconsFunc = require("../asets/fc_icons_array").fcArray
      } else if (shortcut === "fi") {
        iconsFunc = require("../asets/fi_icons_array").fiArray
      } else if (shortcut === "gi") {
        iconsFunc = require("../asets/gi_icons_array").giArray
      } else if (shortcut === "go") {
        iconsFunc = require("../asets/go_icons_array").goArray
      } else if (shortcut === "gr") {
        iconsFunc = require("../asets/gr_icons_array").grArray
      } else if (shortcut === "hi") {
        iconsFunc = require("../asets/hi_icons_array").hiArray
      } else if (shortcut === "hi2") {
        iconsFunc = require("../asets/hi2_icons_array").hi2Array
      } else if (shortcut === "im") {
        iconsFunc = require("../asets/im_icons_array").imArray
      } else if (shortcut === "io") {
        iconsFunc = require("../asets/io_icons_array").ioArray
      } else if (shortcut === "io5") {
        iconsFunc = require("../asets/io5_icons_array").io5Array
      } else if (shortcut === "lia") {
        iconsFunc = require("../asets/lia_icons_array").liaArray
      } else if (shortcut === "lu") {
        iconsFunc = require("../asets/lu_icons_array").luArray
      } else if (shortcut === "md") {
        iconsFunc = require("../asets/md_icons_array").mdArray
      } else if (shortcut === "pi") {
        iconsFunc = require("../asets/pi_icons_array").piArray
      } else if (shortcut === "ri") {
        iconsFunc = require("../asets/ri.icons.array").riArray
      } else if (shortcut === "rx") {
        iconsFunc = require("../asets/rx_icons_array").rxArray
      } else if (shortcut === "si") {
        iconsFunc = require("../asets/si_icons_array").siArray
      } else if (shortcut === "sl") {
        iconsFunc = require("../asets/sl_icons_array").slArray
      } else if (shortcut === "tb") {
        iconsFunc = require("../asets/tb_icons_array").tbArray
      } else if (shortcut === "tfi") {
        iconsFunc = require("../asets/tfi_icons_array").tfiArray
      } else if (shortcut === "ti") {
        iconsFunc = require("../asets/ti_icons_array").tiArray
      } else if (shortcut === "vsc") {
        iconsFunc = require("../asets/vsc_icons_array").vscArray
      } else if (shortcut === "wi") {
        iconsFunc = require("../asets/wi_icons_array").wiArray
      }

      return iconsFunc()
};

export default fetchIcons;