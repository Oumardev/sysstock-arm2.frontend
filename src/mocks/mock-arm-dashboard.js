export const PRIX_DOMINANTS_DETAILS_RIZ = {
    labels: [
      "Dakar",
      "Diourbel",
      "Fatick",
      "Kaffrine",
      "Kaolack",
      "Kédougou",
      "Kolda",
      "Louga",
      "Matam",
      "Sedhiou",
      "StLouis",
      "Tamba",
      "Thies",
      "Ziguinchor",
    ],
    datasets: [
      {
        label: "Local",
        data: [350, 0, 420, 0, 0, 0, 0, 360, 0, 0, 0, 0, 360, 390],
        fill: true,
        backgroundColor: ["rgb(91,155,213)"],
      },
      {
        label: "Parf Luxe",
        data: [500, 0, 0, 0, 550, 0, 0, 0, 0, 0, 0, 0, 490, 0],
        fill: true,
        backgroundColor: ["rgb(237,125,49)"],
      },
      {
        label: "Parf Ord",
        data: [
          500, 500, 500, 450, 450, 500, 500, 500, 500, 400, 0, 500, 450, 500,
        ],
        fill: true,
        backgroundColor: ["rgb(165,165,165)"],
      },
      {
        label: "Non Parf",
        data: [350, 400, 350, 300, 350, 370, 370, 350, 400, 0, 0, 370, 350, 360],
        fill: true,
        backgroundColor: ["rgb(255,192,0)"],
      },
      {
        label: "Indien",
        data: [350, 350, 330, 310, 0, 350, 330, 0, 370, 350, 0, 360, 340, 0],
        fill: true,
        backgroundColor: ["rgb(68,114,196)"],
      },
    ],
  };
  
  export const STOCK_RIZ = {
    labels: [
      "Dakar",
      "Diourbel",
      "Fatick",
      "Kaffrine",
      "Kaolack",
      "Kédougou",
      "Kolda",
      "Louga",
      "Matam",
      "Sedhiou",
      "StLouis",
      "Tamba",
      "Thies",
      "Ziguinchor",
    ],
    datasets: [
      {
        label: "Local",
        data: [35000, 0, 4200, 0, 0, 0, 0, 3060, 0, 0, 0, 0, 3060, 3090],
        fill: true,
        backgroundColor: ["rgb(91,155,213)"],
      },
      {
        label: "Import",
        data: [5000, 0, 0, 0, 5050, 0, 0, 0, 0, 0, 0, 0, 4900, 0],
        fill: true,
        backgroundColor: ["rgb(237,125,49)"],
      },
    ],
  };
  
  export const VARIATIONS_RIZ_PIRX_STOCK = [
    {
      region: "Dakar",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "baisse", value: 80 },
      },
    },
    {
      region: "Diouberl",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "baisse", value: 80 },
      },
    },
    {
      region: "Fatick",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "static", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "baisse", value: 80 },
      },
    },
    {
      region: "Kaffrine",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "static", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "baisse", value: 80 },
      },
    },
    {
      region: "Kaolack",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Kédougou",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "baisse", value: 80 },
      },
    },
    {
      region: "Kolda",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Louga",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Matam",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Sedhiou",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "StLouis",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Tamba",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Thies",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
    {
      region: "Ziguinchor",
      varRizPrix: {
        local: { variation: "hausse", value: 100 },
        parfLuxe: { variation: "baisse", value: 500 },
        parfOrd: { variation: "hausse", value: 10 },
        nonParf: { variation: "baisse", value: 800 },
        indien: { variation: "hausse", value: 140 },
      },
      varRizStock: {
        local: { variation: "hausse", value: 10 },
        import: { variation: "static", value: 80 },
      },
    },
  ];
  
  export const FOURCHETTE_PRIX_RIZ = [
    {
      region: "Dakar",
      varRizPrix: {
        local: { value: "100-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Diouberl",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Fatick",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { variation: "static", value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Kaffrine",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { variation: "static", value: "140-360" },
      },
    },
    {
      region: "Kaolack",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Kédougou",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Kolda",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Louga",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Matam",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Sedhiou",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "StLouis",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "tamba",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Thies",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
    {
      region: "Ziguinchor",
      varRizPrix: {
        local: { value: "200-200" },
        parfLuxe: { value: "20-400" },
        parfOrd: { value: "50-90" },
        nonParf: { value: "800-450" },
        indien: { value: "140-360" },
      },
    },
  ];
  
  export const DATA_STOCK_REGULATION = {
    brisureParf: 31507,
    brisureNonParf: 55494,
    entierOuIntermed: 1187,
    totalDispo: 88188,
    stockSousDouane: 92000,
    stockRizLocal: 519,
    totaux: 180707,
    variationSemaine: { value: 26.88, variation: "baisse" },
  };  