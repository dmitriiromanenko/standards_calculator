// const [count, setCount] = useState(0)
// Barva oci
// Podle statistik má zelené oči pouze 7,5% populace ČR. Zhruba 80% populace má hnědé oči, 10% má modré oči a 2,5% má šedé oči
// zdroj: https://bechermarket.cz/krasa/nejvzacnejsi-barva-oci/

//Vek
// Zdroj: https://scitani.gov.cz/vekova-struktura#null
// 18–80 8,15 mil 77,5 % populace, 50,4% populace zeny

// Vyska
// Zdroj: https://praguemorning.cz/czechs-among-worlds-tallest-people/

//Podle normálního rozložení (Gaussovy křivky) lze odhadnout, kolik mužů se nachází v této výškové kategorii. Průměrná výška je 181 cm a standardní odchylka se obvykle pohybuje kolem 6-7 cm pro mužskou populaci. Z toho můžeme zjistit, že výška 170 cm je přibližně 1,57 standardní odchylky pod průměrem (výpočet
// (181−170)/7≈1,57
//Použitím z-skóre a příslušné hodnoty z tabulky normálního rozložení zjistíme, že přibližně 5,8 % mužů má výšku 170 cm nebo méně.
// Použitím z-skóre a příslušné hodnoty z tabulky normálního rozložení zjistíme, že přibližně 5,8 % mužů má výšku 170 cm nebo méně.
//Počet mužů v České republice je přibližně polovina celkové populace, tedy kolem 5,45 milionu mužů (při celkovém počtu obyvatel 10,9 milionu). Pokud tedy 5,8 % z těchto mužů měří 170 cm nebo méně, můžeme odhadnout:
//0,058×5450000≈316100 muzu

// const heightProbabilities = [
// { height: 131, zScore: (131 - 181) / 7, probability: "<0.0001%" },
// { height: 136, zScore: (136 - 181) / 7, probability: "<0.0001%" },
// { height: 141, zScore: (141 - 181) / 7, probability: "<0.0001%" },
// { height: 146, zScore: (146 - 181) / 7, probability: "<0.0001%" },
// { height: 151, zScore: (151 - 181) / 7, probability: "<0.0001%" },
// { height: 156, zScore: (156 - 181) / 7, probability: "<0.0002%" },
// { height: 161, zScore: (161 - 181) / 7, probability: "0.0021%" },
// { height: 166, zScore: (166 - 181) / 7, probability: "1.64%" },
// { height: 171, zScore: (171 - 181) / 7, probability: "7.61%" },
// { height: 176, zScore: (176 - 181) / 7, probability: "23.84%" },
// { height: 181, zScore: (181 - 181) / 7, probability: "50.00%" },
// { height: 186, zScore: (186 - 181) / 7, probability: "23.84%" },
// { height: 191, zScore: (191 - 181) / 7, probability: "7.61%" },
// { height: 196, zScore: (196 - 181) / 7, probability: "1.64%" },
// { height: 201, zScore: (201 - 181) / 7, probability: "0.0021%" },
// { height: 206, zScore: (206 - 181) / 7, probability: "<0.0002%" },
// { height: 211, zScore: (211 - 181) / 7, probability: "<0.0001%" },
// { height: 216, zScore: (216 - 181) / 7, probability: "<0.0001%" },
// { height: 221, zScore: (221 - 181) / 7, probability: "<0.0001%" },
// { height: 226, zScore: (226 - 181) / 7, probability: "<0.0001%" },
// { height: 231, zScore: (231 - 181) / 7, probability: "<0.0001%" },
// ]

// const heightData = [
// { height: 131, count: "<5" },
// { height: 136, count: "<5" },
// { height: 141, count: "<5" },
// { height: 146, count: "<5" },
// { height: 151, count: "<5" },
// { height: 156, count: "<10" },
// { height: 161, count: "~115" },
// { height: 166, count: "~89300" },
// { height: 171, count: "~414200" },
// { height: 176, count: "~1298680" },
// { height: 181, count: "~2725000" },
// { height: 186, count: "~1298680" },
// { height: 191, count: "~414200" },
// { height: 196, count: "~89300" },
// { height: 201, count: "~115" },
// { height: 206, count: "<10" },
// { height: 211, count: "<5" },
// { height: 216, count: "<5" },
// { height: 221, count: "<5" },
// { height: 226, count: "<5" },
// { height: 231, count: "<5" },
// ]

// const heightProbabilitiesWomen = [
// { height: 131, zScore: (131 - 168) / 6, probability: "<0.0001%" },
// { height: 136, zScore: (136 - 168) / 6, probability: "<0.0001%" },
// { height: 141, zScore: (141 - 168) / 6, probability: "<0.0001%" },
// { height: 146, zScore: (146 - 168) / 6, probability: "<0.0001%" },
// { height: 151, zScore: (151 - 168) / 6, probability: "<0.0001%" },
// { height: 156, zScore: (156 - 168) / 6, probability: "<0.0002%" },
// { height: 161, zScore: (161 - 168) / 6, probability: "0.0038%" },
// { height: 166, zScore: (166 - 168) / 6, probability: "18.32%" },
// { height: 171, zScore: (171 - 168) / 6, probability: "33.59%" },
// { height: 176, zScore: (176 - 168) / 6, probability: "23.24%" },
// { height: 181, zScore: (181 - 168) / 6, probability: "5.98%" },
// { height: 186, zScore: (186 - 168) / 6, probability: "0.14%" },
// { height: 191, zScore: (191 - 168) / 6, probability: "<0.0002%" },
// { height: 196, zScore: (196 - 168) / 6, probability: "<0.0001%" },
// { height: 201, zScore: (201 - 168) / 6, probability: "<0.0001%" },
// { height: 206, zScore: (206 - 168) / 6, probability: "<0.0001%" },
// { height: 211, zScore: (211 - 168) / 6, probability: "<0.0001%" },
// { height: 216, zScore: (216 - 168) / 6, probability: "<0.0001%" },
// { height: 221, zScore: (221 - 168) / 6, probability: "<0.0001%" },
// { height: 226, zScore: (226 - 168) / 6, probability: "<0.0001%" },
// { height: 231, zScore: (231 - 168) / 6, probability: "<0.0001%" },
// ]

// const heightDataWomen = [
// { height: 131, count: "<5" },
// { height: 136, count: "<5" },
// { height: 141, count: "<5" },
// { height: 146, count: "<5" },
// { height: 151, count: "<5" },
// { height: 156, count: "<10" },
// { height: 161, count: "~160" },
// { height: 166, count: "~99700" },
// { height: 171, count: "~183100" },
// { height: 176, count: "~126500" },
// { height: 181, count: "~32500" },
// { height: 186, count: "~760" },
// { height: 191, count: "<10" },
// { height: 196, count: "<5" },
// { height: 201, count: "<5" },
// { height: 206, count: "<5" },
// { height: 211, count: "<5" },
// { height: 216, count: "<5" },
// { height: 221, count: "<5" },
// { height: 226, count: "<5" },
// { height: 231, count: "<5" },
// ]

//Koureni
// V populaci České republiky bylo v roce 2022 celkem 24,4 % kuřáků různých druhů tabákových výrobků, které zahrnují cigarety (průmyslově vyráběné i ručně balené), dýmky, doutníky, doutníčky a vodní dýmky. Denně kouří 20,6 % mužů a 12,0 % žen starších 15 let. I přes občasné roční odchylky lze ale ve sledovaných letech 2012 – 2022 pozorovat trvalé snižování podílu kuřáků v populaci (prevalence).

// Alkohol
// V roce 2021 bylo dlouhodobě abstinujících 17,7 %.

//Rodinny stav
//https://scitani.gov.cz/rodinny-stav
// 38.7 zenatych muzu a 37.4 vdanych zen rok 2021

// Narodnost
// 88% cechu, 1% slovaku, 0.55% vietnamcu , 0.39% rusu, ukrajincu 5.8%, polaku 0.34% jine:3.92

// Vzdelani
//Bez vzdělání: 56 100 osob (0.6%)
//Základní vzdělání včetně neukončeného: 1 107 860 osob (12.5%)
//Střední vzdělání včetně vyučení bez maturity: 2 736 983 osob (31%)
//Úplné střední vzdělání s maturitou včetně nástavbového a pomaturitního: 2 729 091 osob (30.9%)
//Vyšší odborné vzdělání, konzervatoř: 138 588 osob (1.6%)
//Vysokoškolské vzdělání: 1 552 407 osob (17.6%)

// Chteji dite:
// Zjištění konkrétního počtu lidí v České republice, kteří chtějí mít dítě, není jednoduché, protože se tato data běžně neuvádějí v demografických statistikách. Nicméně, některé údaje nám mohou pomoci vytvořit odhad.
// Podle aktuálního populačního vývoje v ČR je počet dětí do 14 let zhruba 1,75 milionu, což je 16,2 % populace​ (CZSO)​. Kromě toho produktivní složka obyvatelstva (15-64 let) tvoří přibližně 63,4 % populace, což je přibližně 6,9 milionu osob​ (CZSO)​.
// Podle různých průzkumů a studií ohledně rodinných preferencí, většina dospělých ve věku 20-40 let, což je věk, kdy lidé nejčastěji plánují mít děti, vyjadřuje zájem o založení rodiny. Pokud předpokládáme, že kolem 50 % této věkové skupiny by chtělo mít dítě, můžeme odhadnout, že přibližně 3,45 milionu lidí v ČR může mít zájem o potomka.
// Pro přesnější údaje a detailnější analýzu by bylo vhodné nahlédnout do specifických sociologických výzkumů nebo průzkumů veřejného mínění zaměřených na rodinné plány a preference obyvatel ČR. Tyto informace mohou poskytovat instituce jako Český statistický úřad nebo akademické výzkumné ústavy.

// Plat
// zdroj csu?? https://www.e15.cz/kalkulacka-vyse-mzdy-srovnani

// const salaryData = [
// { mzda: 100001, mene: 96.67, stejne: 3.33, vice: 0 },
// { mzda: 95001, mene: 96.17, stejne: 0.5, vice: 3.33 },
// { mzda: 90001, mene: 95.56, stejne: 0.61, vice: 3.83 },
// { mzda: 85001, mene: 94.83, stejne: 0.73, vice: 4.44 },
// { mzda: 80001, mene: 93.86, stejne: 0.97, vice: 5.17 },
// { mzda: 75001, mene: 92.63, stejne: 1.22, vice: 6.15 },
// { mzda: 70001, mene: 90.98, stejne: 1.65, vice: 7.37 },
// { mzda: 65001, mene: 88.83, stejne: 2.15, vice: 9.02 },
// { mzda: 60001, mene: 85.82, stejne: 3.01, vice: 11.17 },
// { mzda: 58001, mene: 84.29, stejne: 1.53, vice: 14.18 },
// { mzda: 56001, mene: 82.52, stejne: 1.77, vice: 15.71 },
// { mzda: 54001, mene: 80.42, stejne: 2.1, vice: 17.48 },
// { mzda: 52001, mene: 78, stejne: 2.42, vice: 19.58 },
// { mzda: 50001, mene: 75.35, stejne: 2.66, vice: 21.99 },
// { mzda: 48001, mene: 72.36, stejne: 2.99, vice: 24.65 },
// { mzda: 46001, mene: 69.07, stejne: 3.29, vice: 27.64 },
// { mzda: 44001, mene: 65.37, stejne: 3.7, vice: 30.93 },
// { mzda: 42001, mene: 61.25, stejne: 4.13, vice: 34.62 },
// { mzda: 40001, mene: 56.53, stejne: 4.72, vice: 38.75 },
// { mzda: 38001, mene: 51.51, stejne: 5.03, vice: 43.46 },
// { mzda: 36001, mene: 46.24, stejne: 5.27, vice: 48.49 },
// { mzda: 34001, mene: 40.84, stejne: 5.39, vice: 53.77 },
// { mzda: 32001, mene: 35.44, stejne: 5.4, vice: 59.16 },
// { mzda: 30001, mene: 29.93, stejne: 5.51, vice: 64.56 },
// { mzda: 28001, mene: 24.76, stejne: 5.17, vice: 70.07 },
// { mzda: 26001, mene: 19.79, stejne: 4.98, vice: 75.23 },
// { mzda: 24001, mene: 15.16, stejne: 4.63, vice: 80.21 },
// { mzda: 22001, mene: 11.14, stejne: 4.01, vice: 84.85 },
// { mzda: 20001, mene: 7.17, stejne: 3.97, vice: 88.86 },
// { mzda: 18001, mene: 3.86, stejne: 3.31, vice: 92.83 },
// { mzda: 16001, mene: 0.5, stejne: 3.37, vice: 96.13 },
// { mzda: 0, mene: 0, stejne: 0.5, vice: 99.5 },
// ]

// const {
// mene: e,
// stejne: t,
// vice: a,
// } = salaryData.find((e) => e.mzda <= 72000) || { mene: 0, stejne: 0, vice: 0 }

// console.log(e, t, a)
