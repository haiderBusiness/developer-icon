// import { aiArray } from "./ai_icons_array";
// import { biArray } from "./bi_icons_array";
// import { bsArray } from "./bs_icons.array";
// import { cgArray } from "./cg_icons_array";
// import { ciArray } from "./ci_icons_array";
// import { diArray } from "./di_icons_array";
// import { faArray } from "./fa_icons_array";
// import { fa6Array } from "./fa6_icons.array";
// import { fcArray } from "./fc_icons_array";
// import { fiArray } from "./fi_icons_array";
// import { giArray } from "./gi_icons_array";
// import { goArray } from "./go_icons_array";
// import { grArray } from "./gr_icons_array";
// import { hiArray } from "./hi_icons_array";
// import { hi2Array } from "./hi2_icons_array";
// import { imArray } from "./im_icons_array";
// import { ioArray } from "./io_icons_array";
// import { io5Array } from "./io5_icons_array";
// import { liaArray } from "./lia_icons_array";
// import { luArray } from "./lu_icons_array";
// import { mdArray } from "./md_icons_array";
// import { piArray } from "./pi_icons_array";
// import { riArray } from "./ri.icons.array";
// import { rxArray } from "./rx_icons_array";
// import { siArray } from "./si_icons_array";
// import { slArray } from "./sl_icons_array";
// import { tbArray } from "./tb_icons_array";
// import { tfiArray } from "./tfi_icons_array";
// import { tiArray } from "./ti_icons_array";
// import { vscArray } from "./vsc_icons_array";
// import { wiArray } from "./wi_icons_array";

// const all_icons = [
//     ...aiArray,
//     ...biArray,
//     ...bsArray,
//     ...cgArray,
//     ...ciArray,
//     ...diArray,
//     ...faArray,
//     ...fa6Array,
//     ...fcArray,
//     ...fiArray,
//     ...giArray,
//     ...goArray,
//     ...grArray,
//     ...hiArray,
//     ...hi2Array,
//     ...imArray,
//     ...ioArray,
//     ...io5Array,
//     ...liaArray,
//     ...luArray,
//     ...mdArray,
//     ...piArray,
//     ...riArray,
//     ...rxArray,
//     ...siArray,
//     ...slArray,
//     ...tbArray,
//     ...tfiArray,
//     ...tiArray,
//     ...vscArray,
//     ...wiArray,
// ]


// export default all_icons;



// const allIconsPromise = [
//     import("react-icons/bi"),
//     import("react-icons/ai"),
//     import("react-icons/bs"),
//     import("react-icons/cg"),
//     import("react-icons/ci"),
//     import("react-icons/di"),
//     import("react-icons/fa"),
//     import("react-icons/fa6"),
//     import("react-icons/fc"),
//     import("react-icons/fi"),
//     import("react-icons/gi"),
//     import("react-icons/go"),
//     import("react-icons/gr"),
//     import("react-icons/hi"),
//     import("react-icons/hi2"),
//     import("react-icons/im"),
//     import("react-icons/io"),
//     import("react-icons/io5"),
//     import("react-icons/lia"),
//     import("react-icons/lu"),
//     import("react-icons/md"),
//     import("react-icons/pi"),
//     import("react-icons/ri"),
//     import("react-icons/rx"),
//     import("react-icons/si"),
//     import("react-icons/sl"),
//     import("react-icons/tb"),
//     import("react-icons/tfi"),
//     import("react-icons/ti"),
//     import("react-icons/vsc"),
//     import("react-icons/wi"),
//   ]



  
//  const all_icons = async () => {
//     const [allIconsModule] = await Promise.all(allIconsPromise);
//      // Assuming the individual icons are properties of the module object
//     const allIconsArray = Object.values(allIconsModule);

//     return allIconsArray;
//   };

//   export default all_icons;


// const iconModules = [
//     "react-icons/bi",
//     "react-icons/ai",
//     "react-icons/bs",
//     "react-icons/cg",
//     "react-icons/ci",
//     "react-icons/di",
//     "react-icons/fa",
//     "react-icons/fa6",
//     "react-icons/fc",
//     "react-icons/fi",
//     "react-icons/gi",
//     "react-icons/go",
//     "react-icons/gr",
//     "react-icons/hi",
//     "react-icons/hi2",
//     "react-icons/im",
//     "react-icons/io",
//     "react-icons/io5",
//     "react-icons/lia",
//     "react-icons/lu",
//     "react-icons/md",
//     "react-icons/pi",
//     "react-icons/ri",
//     "react-icons/rx",
//     "react-icons/si",
//     "react-icons/sl",
//     "react-icons/tb",
//     "react-icons/tfi",
//     "react-icons/ti",
//     "react-icons/vsc",
//     "react-icons/wi",
//   ];
  
//   const all_icons = async () => {
//     const allIconsArray = await Promise.all(
//       iconModules.map(async (moduleName) => {
//         const module = await import(moduleName);
//         return Object.values(module);
//       })
//     );
  
//     // Flatten the array of arrays into a single array
//     return allIconsArray.flat();
//   };
  
//   export default all_icons;



import { aiArray } from "./ai_icons_array";
import { biArray } from "./bi_icons_array"
import { bsArray } from "./bs_icons.array";
import { cgArray } from "./cg_icons_array";
import { ciArray } from "./ci_icons_array";
import { diArray } from "./di_icons_array";
import { faArray } from "./fa_icons_array";
import { fcArray } from "./fc_icons_array";
import { fiArray } from "./fi_icons_array";
import { giArray } from "./gi_icons_array";
import { goArray } from "./go_icons_array";
import { grArray } from "./gr_icons_array";
import { hi2Array } from "./hi2_icons_array";
import { hiArray } from "./hi_icons_array";
import { imArray } from "./im_icons_array";
import { ioArray } from "./io_icons_array";
import { io5Array } from "./io5_icons_array";
import { liaArray } from "./lia_icons_array";
import { luArray } from "./lu_icons_array";
import { mdArray } from "./md_icons_array";
import { piArray } from "./pi_icons_array";
import { riArray } from "./ri.icons.array";
import { rxArray } from "./rx_icons_array";
import { siArray } from "./si_icons_array";
import { slArray } from "./sl_icons_array";
import { tbArray } from "./tb_icons_array";
import { tfiArray } from "./tfi_icons_array";
import { tiArray } from "./ti_icons_array";
import { vscArray } from "./vsc_icons_array";
import { wiArray } from "./wi_icons_array";






 export const all_icons = async () => {
    const ai = await aiArray();
    const bi = await biArray();
    const bs = await bsArray();
    const cg = await cgArray();
    const ci = await ciArray();
    const di = await diArray();
    const fa = await faArray();
    const fc = await fcArray();
    const fi = await fiArray();
    const gi = await giArray(); 
    const go = await goArray(); 
    const gr = await grArray(); 
    const hi = await hiArray();
    const hi2 = await hi2Array();
    const im = await imArray(); 
    const io = await ioArray(); 
    const io5 = await io5Array();
    const lia = await liaArray();
    const lu = await luArray(); 
    const md = await mdArray(); 
    const pi = await piArray(); 
    const ri = await riArray(); 
    const rx = await rxArray(); 
    const si = await siArray(); 
    const sl = await slArray(); 
    const tb = await tbArray(); 
    const tfi = await tfiArray();
    const ti = await tiArray(); 
    const vsc = await vscArray();
    const wi = await wiArray(); 
    // const bs = await bsArray();
    // const array1 = Object.values(ai)
    // const array2 = Object.values(ai)
     // Assuming the individual icons are properties of the module object
    // const allIconsArray = Object.values(allIconsModule);

    const newArray = [
        ...ai, ...bi, ...bs, ...cg, ...ci, ...di, 
        ...fa, ...fc, ...fi, ...gi, ...go, ...gr, 
        ...hi, ...hi2, ...im, ...io, ...io5, ...lia,
        ...lu, ...md, ...pi, ...ri, ...rx, ...si,
        ...sl, ...tb, ...tfi, ...ti, ...vsc, ...wi
    ]

    
    return newArray
  };

  // export default all_icons;
  


