const questions = [
    // NIVEL 1: PATRONES BÁSICOS DE SUMA (+2) - 10 preguntas
    {
        level: 1,
        topic: "patrones",
        question: "María colecciona figuritas. Tiene esta secuencia: 2, 4, 6, ___. ¿Cuál número sigue?",
        visual: "2 → 4 → 6 → ?",
        options: ["7", "8", "10", "9"],
        correct: 1,
        explanation: "¡Excelente! El patrón suma +2 cada vez. 6 + 2 = 8"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Carlos salta en estos números: 4, 6, 8, ___. ¿En cuál número cae después?",
        visual: "4 → 6 → 8 → ?",
        options: ["9", "10", "11", "12"],
        correct: 1,
        explanation: "¡Correcto! Se suma +2 cada vez. 8 + 2 = 10"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Ana cuenta flores: 6, 8, 10, ___. ¿Cuántas flores siguen?",
        visual: "🌸🌸 → 🌸🌸 → 🌸🌸 → ?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "¡Muy bien! El patrón suma +2. 10 + 2 = 12"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Luis sube escalones: 3, 5, 7, ___. ¿Cuál escalón sigue?",
        visual: "3 → 5 → 7 → ?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "¡Perfecto! Sumas +2 cada vez. 7 + 2 = 9"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Sofía anota puntos: 8, 10, 12, ___. ¿Cuántos puntos siguen?",
        visual: "8 → 10 → 12 → ?",
        options: ["13", "14", "15", "16"],
        correct: 1,
        explanation: "¡Excelente! El patrón es +2. 12 + 2 = 14"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Pedro cuenta monedas: 5, 7, 9, ___. ¿Cuántas monedas siguen?",
        visual: "🪙🪙 → 🪙🪙 → 🪙🪙 → ?",
        options: ["10", "11", "12", "13"],
        correct: 1,
        explanation: "¡Muy bien! Sumas +2 cada vez. 9 + 2 = 11"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Laura salta la cuerda: 10, 12, 14, ___. ¿Cuántos saltos siguen?",
        visual: "10 → 12 → 14 → ?",
        options: ["15", "16", "17", "18"],
        correct: 1,
        explanation: "¡Correcto! El patrón suma +2. 14 + 2 = 16"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Juan lee páginas: 7, 9, 11, ___. ¿Qué página sigue?",
        visual: "📖 7 → 9 → 11 → ?",
        options: ["12", "13", "14", "15"],
        correct: 1,
        explanation: "¡Genial! Sumas +2 cada vez. 11 + 2 = 13"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Carmen cuenta caramelos: 12, 14, 16, ___. ¿Cuántos caramelos siguen?",
        visual: "🍬 → 🍬 → 🍬 → ?",
        options: ["17", "18", "19", "20"],
        correct: 1,
        explanation: "¡Perfecto! El patrón es +2. 16 + 2 = 18"
    },
    {
        level: 1,
        topic: "patrones",
        question: "Diego organiza lápices: 9, 11, 13, ___. ¿Cuántos lápices siguen?",
        visual: "✏️ ✏️ ✏️ ?",
        options: ["14", "15", "16", "17"],
        correct: 1,
        explanation: "¡Excelente! Sumas +2 cada vez. 13 + 2 = 15"
    },

    // NIVEL 2: PATRONES DE SUMA (+3) - 10 preguntas
    {
        level: 2,
        topic: "patrones",
        question: "Rosa colecciona stickers: 3, 6, 9, ___. ¿Cuántos stickers siguen?",
        visual: "3 → 6 → 9 → ?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "¡Muy bien! El patrón suma +3 cada vez. 9 + 3 = 12"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Pablo salta: 6, 9, 12, ___. ¿En qué número cae después?",
        visual: "6 → 9 → 12 → ?",
        options: ["13", "14", "15", "16"],
        correct: 2,
        explanation: "¡Correcto! Se suma +3 cada vez. 12 + 3 = 15"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Elena cuenta dulces: 9, 12, 15, ___. ¿Cuántos dulces siguen?",
        visual: "🍭 → 🍭 → 🍭 → ?",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "¡Perfecto! El patrón suma +3. 15 + 3 = 18"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Raúl anota: 12, 15, 18, ___. ¿Qué número sigue?",
        visual: "12 → 15 → 18 → ?",
        options: ["19", "20", "21", "22"],
        correct: 2,
        explanation: "¡Excelente! Sumas +3 cada vez. 18 + 3 = 21"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Valeria cuenta pasos: 15, 18, 21, ___. ¿Cuántos pasos siguen?",
        visual: "👣 15 → 18 → 21 → ?",
        options: ["22", "23", "24", "25"],
        correct: 2,
        explanation: "¡Muy bien! El patrón es +3. 21 + 3 = 24"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Miguel suma puntos: 18, 21, 24, ___. ¿Cuántos puntos siguen?",
        visual: "18 → 21 → 24 → ?",
        options: ["25", "26", "27", "28"],
        correct: 2,
        explanation: "¡Correcto! Sumas +3 cada vez. 24 + 3 = 27"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Lucía lee páginas: 21, 24, 27, ___. ¿Qué página sigue?",
        visual: "📚 21 → 24 → 27 → ?",
        options: ["28", "29", "30", "31"],
        correct: 2,
        explanation: "¡Genial! El patrón suma +3. 27 + 3 = 30"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Alberto cuenta: 24, 27, 30, ___. ¿Qué número sigue?",
        visual: "24 → 27 → 30 → ?",
        options: ["31", "32", "33", "34"],
        correct: 2,
        explanation: "¡Perfecto! Sumas +3 cada vez. 30 + 3 = 33"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Andrea organiza: 27, 30, 33, ___. ¿Qué número sigue?",
        visual: "27 → 30 → 33 → ?",
        options: ["34", "35", "36", "37"],
        correct: 2,
        explanation: "¡Excelente! El patrón es +3. 33 + 3 = 36"
    },
    {
        level: 2,
        topic: "patrones",
        question: "Ricardo anota: 30, 33, 36, ___. ¿Qué número sigue?",
        visual: "30 → 33 → 36 → ?",
        options: ["37", "38", "39", "40"],
        correct: 2,
        explanation: "¡Muy bien! Sumas +3 cada vez. 36 + 3 = 39"
    },

    // NIVEL 3: SUMA REPETIDA (TABLA DEL 2) - 15 preguntas
    {
        level: 3,
        topic: "suma_repetida",
        question: "Hay 3 cajas. Cada caja tiene 2 manzanas. ¿Cuántas manzanas hay en total? 2 + 2 + 2 = ?",
        visual: "🍎🍎 | 🍎🍎 | 🍎🍎",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "¡Correcto! 2 + 2 + 2 = 6 manzanas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "María tiene 4 pares de zapatos. ¿Cuántos zapatos tiene en total? 2 + 2 + 2 + 2 = ?",
        visual: "👞👞 | 👞👞 | 👞👞 | 👞👞",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "¡Muy bien! 2 + 2 + 2 + 2 = 8 zapatos"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Hay 5 platos con 2 galletas cada uno. ¿Cuántas galletas hay? 2 + 2 + 2 + 2 + 2 = ?",
        visual: "🍪🍪 en cada plato (×5)",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "¡Perfecto! 2 + 2 + 2 + 2 + 2 = 10 galletas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Carlos tiene 6 días y ahorra 2 monedas cada día. ¿Cuántas monedas tiene? 2 + 2 + 2 + 2 + 2 + 2 = ?",
        visual: "🪙🪙 por día (6 días)",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "¡Excelente! 2 + 2 + 2 + 2 + 2 + 2 = 12 monedas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Hay 7 mesas con 2 sillas cada una. ¿Cuántas sillas hay en total?",
        visual: "2 sillas × 7 mesas",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "¡Genial! 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14 sillas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Ana lee 2 páginas cada noche durante 8 noches. ¿Cuántas páginas leyó?",
        visual: "📖 2 páginas × 8 noches",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "¡Correcto! 2 veces 8 = 16 páginas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Pedro dibuja 2 estrellas en cada una de sus 9 hojas. ¿Cuántas estrellas dibujó?",
        visual: "⭐⭐ en 9 hojas",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "¡Muy bien! 2 + 2 (nueve veces) = 18 estrellas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Hay 10 niños y cada uno tiene 2 lápices. ¿Cuántos lápices hay en total?",
        visual: "✏️✏️ × 10 niños",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "¡Perfecto! 2 + 2 (diez veces) = 20 lápices"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Si 2 + 2 + 2 = 6, ¿cuántos grupos de 2 hay?",
        visual: "2 + 2 + 2 = 6",
        options: ["2 grupos", "3 grupos", "4 grupos", "6 grupos"],
        correct: 1,
        explanation: "¡Correcto! Hay 3 grupos de 2"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Laura ve 5 pájaros y cada uno tiene 2 alas. ¿Cuántas alas en total?",
        visual: "🐦 × 5 (2 alas cada uno)",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "¡Excelente! 2 + 2 + 2 + 2 + 2 = 10 alas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Diego come 2 frutas al día por 6 días. ¿Cuántas frutas comió?",
        visual: "🍓🍓 cada día (6 días)",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "¡Muy bien! 2 × 6 = 12 frutas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Rosa guarda 2 juguetes en cada una de 7 cajas. ¿Cuántos juguetes guardó?",
        visual: "🎁🎁 en 7 cajas",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "¡Genial! 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14 juguetes"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Hay 8 bicicletas. ¿Cuántas ruedas hay en total? (Cada bicicleta tiene 2 ruedas)",
        visual: "🚲 × 8 bicicletas",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "¡Perfecto! 2 ruedas × 8 bicicletas = 16 ruedas"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Carlos compra 9 paquetes de 2 chocolates. ¿Cuántos chocolates tiene?",
        visual: "🍫🍫 × 9 paquetes",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "¡Excelente! 2 × 9 = 18 chocolates"
    },
    {
        level: 3,
        topic: "suma_repetida",
        question: "Patricia planta 2 flores en cada una de 10 macetas. ¿Cuántas flores plantó?",
        visual: "🌺🌺 en 10 macetas",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "¡Muy bien! 2 × 10 = 20 flores"
    },

    // NIVEL 4: MULTIPLICACIÓN TABLA DEL 2 - 10 preguntas
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuál es el resultado de 2 × 3? (2 + 2 + 2)",
        visual: "2 × 3 = ?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "¡Correcto! 2 × 3 = 6 (dos veces tres)"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 4? (2 + 2 + 2 + 2)",
        visual: "2 × 4 = ?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "¡Muy bien! 2 × 4 = 8"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 5? (2 + 2 + 2 + 2 + 2)",
        visual: "2 × 5 = ?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "¡Perfecto! 2 × 5 = 10"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 6?",
        visual: "2 × 6 = ?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "¡Excelente! 2 × 6 = 12"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 7?",
        visual: "2 × 7 = ?",
        options: ["12", "13", "14", "15"],
        correct: 2,
        explanation: "¡Genial! 2 × 7 = 14"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 8?",
        visual: "2 × 8 = ?",
        options: ["14", "15", "16", "17"],
        correct: 2,
        explanation: "¡Muy bien! 2 × 8 = 16"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 9?",
        visual: "2 × 9 = ?",
        options: ["16", "17", "18", "19"],
        correct: 2,
        explanation: "¡Correcto! 2 × 9 = 18"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "¿Cuánto es 2 × 10?",
        visual: "2 × 10 = ?",
        options: ["18", "19", "20", "21"],
        correct: 2,
        explanation: "¡Perfecto! 2 × 10 = 20"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "Si 2 × 5 = 10, ¿cuánto es 5 × 2?",
        visual: "5 × 2 = ?",
        options: ["8", "9", "10", "11"],
        correct: 2,
        explanation: "¡Excelente! La multiplicación da el mismo resultado: 5 × 2 = 10"
    },
    {
        level: 4,
        topic: "multiplicacion",
        question: "Ana tiene 2 cajas con 7 dulces cada una. ¿Cuál multiplicación representa esto?",
        visual: "2 cajas × 7 dulces",
        options: ["7 × 2", "2 × 7", "Ambas son correctas", "Ninguna"],
        correct: 2,
        explanation: "¡Muy bien! Ambas multiplicaciones dan 14. 2 × 7 = 7 × 2 = 14"
    },

    // NIVEL 5: SUMA REPETIDA TABLA DEL 3 - 15 preguntas
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 3 platos con 3 galletas cada uno. ¿Cuántas galletas hay? 3 + 3 + 3 = ?",
        visual: "🍪🍪🍪 | 🍪🍪🍪 | 🍪🍪🍪",
        options: ["6", "7", "8", "9"],
        correct: 3,
        explanation: "¡Correcto! 3 + 3 + 3 = 9 galletas"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Pedro compra 4 paquetes de 3 lápices. ¿Cuántos lápices compró? 3 + 3 + 3 + 3 = ?",
        visual: "✏️✏️✏️ × 4 paquetes",
        options: ["9", "10", "11", "12"],
        correct: 3,
        explanation: "¡Muy bien! 3 + 3 + 3 + 3 = 12 lápices"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 5 árboles con 3 pájaros cada uno. ¿Cuántos pájaros hay? 3 + 3 + 3 + 3 + 3 = ?",
        visual: "🐦🐦🐦 en 5 árboles",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Perfecto! 3 + 3 + 3 + 3 + 3 = 15 pájaros"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Laura tiene 6 cajas con 3 juguetes cada una. ¿Cuántos juguetes tiene?",
        visual: "🎁🎁🎁 × 6 cajas",
        options: ["15", "16", "17", "18"],
        correct: 3,
        explanation: "¡Excelente! 3 × 6 = 18 juguetes"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 7 grupos de 3 niños. ¿Cuántos niños hay en total?",
        visual: "👦👦👦 × 7 grupos",
        options: ["18", "19", "20", "21"],
        correct: 3,
        explanation: "¡Genial! 3 + 3 + 3 + 3 + 3 + 3 + 3 = 21 niños"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "María come 3 frutas al día por 8 días. ¿Cuántas frutas comió?",
        visual: "🍎🍎🍎 cada día (8 días)",
        options: ["21", "22", "23", "24"],
        correct: 3,
        explanation: "¡Muy bien! 3 × 8 = 24 frutas"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 9 floreros con 3 flores cada uno. ¿Cuántas flores hay?",
        visual: "🌺🌺🌺 en 9 floreros",
        options: ["24", "25", "26", "27"],
        correct: 3,
        explanation: "¡Correcto! 3 × 9 = 27 flores"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Carlos dibuja 3 estrellas en cada una de sus 10 hojas. ¿Cuántas estrellas dibujó?",
        visual: "⭐⭐⭐ en 10 hojas",
        options: ["27", "28", "29", "30"],
        correct: 3,
        explanation: "¡Perfecto! 3 × 10 = 30 estrellas"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Si 3 + 3 + 3 + 3 = 12, ¿cuántos grupos de 3 hay?",
        visual: "3 + 3 + 3 + 3 = 12",
        options: ["2 grupos", "3 grupos", "4 grupos", "5 grupos"],
        correct: 2,
        explanation: "¡Correcto! Hay 4 grupos de 3"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Ana guarda 3 libros en cada uno de 5 estantes. ¿Cuántos libros guardó?",
        visual: "📚📚📚 en 5 estantes",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Muy bien! 3 × 5 = 15 libros"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 6 mesas con 3 platos cada una. ¿Cuántos platos hay?",
        visual: "🍽️🍽️🍽️ × 6 mesas",
        options: ["15", "16", "17", "18"],
        correct: 3,
        explanation: "¡Genial! 3 × 6 = 18 platos"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Roberto compra 7 cajas de 3 dulces. ¿Cuántos dulces tiene?",
        visual: "🍬🍬🍬 × 7 cajas",
        options: ["18", "19", "20", "21"],
        correct: 3,
        explanation: "¡Excelente! 3 × 7 = 21 dulces"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Sofía organiza 3 stickers en cada una de 8 páginas. ¿Cuántos stickers tiene?",
        visual: "⭐⭐⭐ en 8 páginas",
        options: ["21", "22", "23", "24"],
        correct: 3,
        explanation: "¡Muy bien! 3 × 8 = 24 stickers"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Hay 9 niños y cada uno tiene 3 globos. ¿Cuántos globos hay?",
        visual: "🎈🎈🎈 × 9 niños",
        options: ["24", "25", "26", "27"],
        correct: 3,
        explanation: "¡Correcto! 3 × 9 = 27 globos"
    },
    {
        level: 5,
        topic: "suma_repetida",
        question: "Diego planta 3 semillas en cada una de 10 macetas. ¿Cuántas semillas plantó?",
        visual: "🌱🌱🌱 en 10 macetas",
        options: ["27", "28", "29", "30"],
        correct: 3,
        explanation: "¡Perfecto! 3 × 10 = 30 semillas"
    },

    // NIVEL 6: MULTIPLICACIÓN TABLA DEL 3 - 10 preguntas
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 3?",
        visual: "3 × 3 = ?",
        options: ["6", "7", "8", "9"],
        correct: 3,
        explanation: "¡Correcto! 3 × 3 = 9"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 4?",
        visual: "3 × 4 = ?",
        options: ["9", "10", "11", "12"],
        correct: 3,
        explanation: "¡Muy bien! 3 × 4 = 12"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 5?",
        visual: "3 × 5 = ?",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Perfecto! 3 × 5 = 15"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 6?",
        visual: "3 × 6 = ?",
        options: ["15", "16", "17", "18"],
        correct: 3,
        explanation: "¡Excelente! 3 × 6 = 18"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 7?",
        visual: "3 × 7 = ?",
        options: ["18", "19", "20", "21"],
        correct: 3,
        explanation: "¡Genial! 3 × 7 = 21"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 8?",
        visual: "3 × 8 = ?",
        options: ["21", "22", "23", "24"],
        correct: 3,
        explanation: "¡Muy bien! 3 × 8 = 24"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 9?",
        visual: "3 × 9 = ?",
        options: ["24", "25", "26", "27"],
        correct: 3,
        explanation: "¡Correcto! 3 × 9 = 27"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "¿Cuánto es 3 × 10?",
        visual: "3 × 10 = ?",
        options: ["27", "28", "29", "30"],
        correct: 3,
        explanation: "¡Perfecto! 3 × 10 = 30"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "Pedro tiene 3 bolsas con 6 caramelos cada una. ¿Cuál multiplicación representa esto?",
        visual: "3 bolsas × 6 caramelos",
        options: ["3 × 6", "6 × 3", "Ambas son correctas", "Ninguna"],
        correct: 2,
        explanation: "¡Excelente! Ambas dan 18. 3 × 6 = 6 × 3 = 18"
    },
    {
        level: 6,
        topic: "multiplicacion",
        question: "Si 3 × 5 = 15, ¿cuánto es 5 × 3?",
        visual: "5 × 3 = ?",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Muy bien! La multiplicación da el mismo resultado: 5 × 3 = 15"
    },

    // NIVEL 7: SUMA REPETIDA TABLA DEL 4 - 15 preguntas
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 3 mesas con 4 sillas cada una. ¿Cuántas sillas hay? 4 + 4 + 4 = ?",
        visual: "🪑🪑🪑🪑 | 🪑🪑🪑🪑 | 🪑🪑🪑🪑",
        options: ["9", "10", "11", "12"],
        correct: 3,
        explanation: "¡Correcto! 4 + 4 + 4 = 12 sillas"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Ana compra 4 paquetes de 4 chocolates. ¿Cuántos chocolates compró? 4 + 4 + 4 + 4 = ?",
        visual: "🍫🍫🍫🍫 × 4 paquetes",
        options: ["12", "14", "16", "18"],
        correct: 2,
        explanation: "¡Muy bien! 4 + 4 + 4 + 4 = 16 chocolates"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 5 grupos de 4 niños. ¿Cuántos niños hay en total?",
        visual: "👦👦👦👦 × 5 grupos",
        options: ["16", "18", "20", "22"],
        correct: 2,
        explanation: "¡Perfecto! 4 + 4 + 4 + 4 + 4 = 20 niños"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Carlos guarda 4 libros en cada uno de 6 estantes. ¿Cuántos libros guardó?",
        visual: "📚📚📚📚 en 6 estantes",
        options: ["20", "22", "24", "26"],
        correct: 2,
        explanation: "¡Excelente! 4 × 6 = 24 libros"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 7 cajas con 4 juguetes cada una. ¿Cuántos juguetes hay?",
        visual: "🎁🎁🎁🎁 × 7 cajas",
        options: ["24", "26", "28", "30"],
        correct: 2,
        explanation: "¡Genial! 4 × 7 = 28 juguetes"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "María come 4 frutas al día por 8 días. ¿Cuántas frutas comió?",
        visual: "🍎🍎🍎🍎 cada día (8 días)",
        options: ["28", "30", "32", "34"],
        correct: 2,
        explanation: "¡Muy bien! 4 × 8 = 32 frutas"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 9 floreros con 4 flores cada uno. ¿Cuántas flores hay?",
        visual: "🌺🌺🌺🌺 en 9 floreros",
        options: ["32", "34", "36", "38"],
        correct: 2,
        explanation: "¡Correcto! 4 × 9 = 36 flores"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Roberto dibuja 4 círculos en cada una de sus 10 hojas. ¿Cuántos círculos dibujó?",
        visual: "⭕⭕⭕⭕ en 10 hojas",
        options: ["36", "38", "40", "42"],
        correct: 2,
        explanation: "¡Perfecto! 4 × 10 = 40 círculos"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Si 4 + 4 + 4 + 4 + 4 = 20, ¿cuántos grupos de 4 hay?",
        visual: "4 + 4 + 4 + 4 + 4 = 20",
        options: ["3 grupos", "4 grupos", "5 grupos", "6 grupos"],
        correct: 2,
        explanation: "¡Correcto! Hay 5 grupos de 4"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Laura tiene 4 cajas con 5 lápices cada una. ¿Cuántos lápices tiene?",
        visual: "✏️✏️✏️✏️ × 5 cajas",
        options: ["16", "18", "20", "22"],
        correct: 2,
        explanation: "¡Muy bien! 4 × 5 = 20 lápices"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 6 platos con 4 galletas cada uno. ¿Cuántas galletas hay?",
        visual: "🍪🍪🍪🍪 × 6 platos",
        options: ["20", "22", "24", "26"],
        correct: 2,
        explanation: "¡Genial! 4 × 6 = 24 galletas"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Pedro compra 7 paquetes de 4 dulces. ¿Cuántos dulces tiene?",
        visual: "🍬🍬🍬🍬 × 7 paquetes",
        options: ["24", "26", "28", "30"],
        correct: 2,
        explanation: "¡Excelente! 4 × 7 = 28 dulces"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Sofía organiza 4 stickers en cada una de 8 páginas. ¿Cuántos stickers tiene?",
        visual: "⭐⭐⭐⭐ en 8 páginas",
        options: ["28", "30", "32", "34"],
        correct: 2,
        explanation: "¡Muy bien! 4 × 8 = 32 stickers"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Hay 9 niños y cada uno tiene 4 globos. ¿Cuántos globos hay?",
        visual: "🎈🎈🎈🎈 × 9 niños",
        options: ["32", "34", "36", "38"],
        correct: 2,
        explanation: "¡Correcto! 4 × 9 = 36 globos"
    },
    {
        level: 7,
        topic: "suma_repetida",
        question: "Diego planta 4 flores en cada una de 10 macetas. ¿Cuántas flores plantó?",
        visual: "🌺🌺🌺🌺 en 10 macetas",
        options: ["36", "38", "40", "42"],
        correct: 2,
        explanation: "¡Perfecto! 4 × 10 = 40 flores"
    },

    // NIVEL 8: MULTIPLICACIÓN TABLA DEL 4 - 10 preguntas
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 3?",
        visual: "4 × 3 = ?",
        options: ["9", "10", "11", "12"],
        correct: 3,
        explanation: "¡Correcto! 4 × 3 = 12"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 4?",
        visual: "4 × 4 = ?",
        options: ["12", "14", "16", "18"],
        correct: 2,
        explanation: "¡Muy bien! 4 × 4 = 16"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 5?",
        visual: "4 × 5 = ?",
        options: ["16", "18", "20", "22"],
        correct: 2,
        explanation: "¡Perfecto! 4 × 5 = 20"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 6?",
        visual: "4 × 6 = ?",
        options: ["20", "22", "24", "26"],
        correct: 2,
        explanation: "¡Excelente! 4 × 6 = 24"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 7?",
        visual: "4 × 7 = ?",
        options: ["24", "26", "28", "30"],
        correct: 2,
        explanation: "¡Genial! 4 × 7 = 28"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 8?",
        visual: "4 × 8 = ?",
        options: ["28", "30", "32", "34"],
        correct: 2,
        explanation: "¡Muy bien! 4 × 8 = 32"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 9?",
        visual: "4 × 9 = ?",
        options: ["32", "34", "36", "38"],
        correct: 2,
        explanation: "¡Correcto! 4 × 9 = 36"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "¿Cuánto es 4 × 10?",
        visual: "4 × 10 = ?",
        options: ["36", "38", "40", "42"],
        correct: 2,
        explanation: "¡Perfecto! 4 × 10 = 40"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "Ana tiene 4 grupos de 7 stickers. ¿Cuál multiplicación representa esto?",
        visual: "4 grupos × 7 stickers",
        options: ["4 × 7", "7 × 4", "Ambas son correctas", "Ninguna"],
        correct: 2,
        explanation: "¡Excelente! Ambas dan 28. 4 × 7 = 7 × 4 = 28"
    },
    {
        level: 8,
        topic: "multiplicacion",
        question: "Si 4 × 6 = 24, ¿cuánto es 6 × 4?",
        visual: "6 × 4 = ?",
        options: ["20", "22", "24", "26"],
        correct: 2,
        explanation: "¡Muy bien! La multiplicación da el mismo resultado: 6 × 4 = 24"
    },

    // NIVEL 9: SUMA REPETIDA TABLA DEL 5 - 15 preguntas
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 3 grupos de 5 niños. ¿Cuántos niños hay en total? 5 + 5 + 5 = ?",
        visual: "👦👦👦👦👦 × 3 grupos",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Correcto! 5 + 5 + 5 = 15 niños"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "María tiene 4 bolsas con 5 caramelos cada una. ¿Cuántos caramelos tiene?",
        visual: "🍬🍬🍬🍬🍬 × 4 bolsas",
        options: ["15", "18", "20", "25"],
        correct: 2,
        explanation: "¡Muy bien! 5 + 5 + 5 + 5 = 20 caramelos"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 5 mesas con 5 sillas cada una. ¿Cuántas sillas hay?",
        visual: "🪑🪑🪑🪑🪑 × 5 mesas",
        options: ["20", "22", "24", "25"],
        correct: 3,
        explanation: "¡Perfecto! 5 + 5 + 5 + 5 + 5 = 25 sillas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Carlos compra 6 paquetes de 5 lápices. ¿Cuántos lápices compró?",
        visual: "✏️✏️✏️✏️✏️ × 6 paquetes",
        options: ["25", "28", "30", "35"],
        correct: 2,
        explanation: "¡Excelente! 5 × 6 = 30 lápices"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 7 árboles con 5 frutas cada uno. ¿Cuántas frutas hay?",
        visual: "🍎🍎🍎🍎🍎 en 7 árboles",
        options: ["30", "32", "35", "40"],
        correct: 2,
        explanation: "¡Genial! 5 × 7 = 35 frutas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Ana lee 5 páginas cada día durante 8 días. ¿Cuántas páginas leyó?",
        visual: "📖 5 páginas × 8 días",
        options: ["35", "38", "40", "45"],
        correct: 2,
        explanation: "¡Muy bien! 5 × 8 = 40 páginas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 9 cajas con 5 juguetes cada una. ¿Cuántos juguetes hay?",
        visual: "🎁🎁🎁🎁🎁 × 9 cajas",
        options: ["40", "42", "45", "50"],
        correct: 2,
        explanation: "¡Correcto! 5 × 9 = 45 juguetes"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Pedro dibuja 5 estrellas en cada una de sus 10 hojas. ¿Cuántas estrellas dibujó?",
        visual: "⭐⭐⭐⭐⭐ en 10 hojas",
        options: ["45", "48", "50", "55"],
        correct: 2,
        explanation: "¡Perfecto! 5 × 10 = 50 estrellas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Si 5 + 5 + 5 + 5 = 20, ¿cuántos grupos de 5 hay?",
        visual: "5 + 5 + 5 + 5 = 20",
        options: ["2 grupos", "3 grupos", "4 grupos", "5 grupos"],
        correct: 2,
        explanation: "¡Correcto! Hay 4 grupos de 5"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Laura tiene 5 días para juntar monedas. Cada día guarda 5 monedas. ¿Cuántas juntó?",
        visual: "🪙🪙🪙🪙🪙 cada día (5 días)",
        options: ["20", "22", "25", "30"],
        correct: 2,
        explanation: "¡Muy bien! 5 × 5 = 25 monedas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 6 floreros con 5 flores cada uno. ¿Cuántas flores hay?",
        visual: "🌺🌺🌺🌺🌺 en 6 floreros",
        options: ["25", "28", "30", "35"],
        correct: 2,
        explanation: "¡Genial! 5 × 6 = 30 flores"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Roberto guarda 5 libros en cada uno de 7 estantes. ¿Cuántos libros guardó?",
        visual: "📚📚📚📚📚 en 7 estantes",
        options: ["30", "32", "35", "40"],
        correct: 2,
        explanation: "¡Excelente! 5 × 7 = 35 libros"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Sofía compra 8 paquetes de 5 galletas. ¿Cuántas galletas tiene?",
        visual: "🍪🍪🍪🍪🍪 × 8 paquetes",
        options: ["35", "38", "40", "45"],
        correct: 2,
        explanation: "¡Muy bien! 5 × 8 = 40 galletas"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Hay 9 niños y cada uno tiene 5 globos. ¿Cuántos globos hay?",
        visual: "🎈🎈🎈🎈🎈 × 9 niños",
        options: ["40", "42", "45", "50"],
        correct: 2,
        explanation: "¡Correcto! 5 × 9 = 45 globos"
    },
    {
        level: 9,
        topic: "suma_repetida",
        question: "Diego planta 5 semillas en cada una de 10 macetas. ¿Cuántas semillas plantó?",
        visual: "🌱🌱🌱🌱🌱 en 10 macetas",
        options: ["45", "48", "50", "55"],
        correct: 2,
        explanation: "¡Perfecto! 5 × 10 = 50 semillas"
    },

    // NIVEL 10: MULTIPLICACIÓN TABLA DEL 5 - 10 preguntas
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 3?",
        visual: "5 × 3 = ?",
        options: ["12", "13", "14", "15"],
        correct: 3,
        explanation: "¡Correcto! 5 × 3 = 15"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 4?",
        visual: "5 × 4 = ?",
        options: ["15", "18", "20", "25"],
        correct: 2,
        explanation: "¡Muy bien! 5 × 4 = 20"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 5?",
        visual: "5 × 5 = ?",
        options: ["20", "22", "25", "30"],
        correct: 2,
        explanation: "¡Perfecto! 5 × 5 = 25"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 6?",
        visual: "5 × 6 = ?",
        options: ["25", "28", "30", "35"],
        correct: 2,
        explanation: "¡Excelente! 5 × 6 = 30"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 7?",
        visual: "5 × 7 = ?",
        options: ["30", "32", "35", "40"],
        correct: 2,
        explanation: "¡Genial! 5 × 7 = 35"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 8?",
        visual: "5 × 8 = ?",
        options: ["35", "38", "40", "45"],
        correct: 2,
        explanation: "¡Muy bien! 5 × 8 = 40"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 9?",
        visual: "5 × 9 = ?",
        options: ["40", "42", "45", "50"],
        correct: 2,
        explanation: "¡Correcto! 5 × 9 = 45"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "¿Cuánto es 5 × 10?",
        visual: "5 × 10 = ?",
        options: ["45", "48", "50", "55"],
        correct: 2,
        explanation: "¡Perfecto! 5 × 10 = 50"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "Carlos tiene 5 cajas con 8 dulces cada una. ¿Cuál multiplicación representa esto?",
        visual: "5 cajas × 8 dulces",
        options: ["5 × 8", "8 × 5", "Ambas son correctas", "Ninguna"],
        correct: 2,
        explanation: "¡Excelente! Ambas dan 40. 5 × 8 = 8 × 5 = 40"
    },
    {
        level: 10,
        topic: "multiplicacion",
        question: "Si 5 × 7 = 35, ¿cuánto es 7 × 5?",
        visual: "7 × 5 = ?",
        options: ["30", "32", "35", "40"],
        correct: 2,
        explanation: "¡Muy bien! La multiplicación da el mismo resultado: 7 × 5 = 35"
    }
];

const levelNames = {
    1: "Nivel 1: Patrones de +2",
    2: "Nivel 2: Patrones de +3",
    3: "Nivel 3: Suma Repetida (×2)",
    4: "Nivel 4: Tabla del 2",
    5: "Nivel 5: Suma Repetida (×3)",
    6: "Nivel 6: Tabla del 3",
    7: "Nivel 7: Suma Repetida (×4)",
    8: "Nivel 8: Tabla del 4",
    9: "Nivel 9: Suma Repetida (×5)",
    10: "Nivel 10: Tabla del 5"
};

const rewardMessages = {
    1: "¡Dominas los patrones de +2! ⭐",
    2: "¡Excelente! Los patrones de +3 no tienen secretos para ti 🌟",
    3: "¡Increíble! Ya sabes sumar repetidas veces el 2 🎉",
    4: "¡Genial! ¡Dominaste la tabla del 2! 🏆",
    5: "¡Asombroso! La suma repetida del 3 es fácil para ti 🎊",
    6: "¡Fantástico! ¡La tabla del 3 es tuya! 💫",
    7: "¡Maravilloso! Ya dominas las sumas del 4 ⚡",
    8: "¡Espectacular! ¡La tabla del 4 está conquistada! 🌠",
    9: "¡Impresionante! Las sumas del 5 son pan comido para ti 🎯",
    10: "¡CAMPEÓN! ¡Dominaste la tabla del 5! ¡Eres un genio matemático! 👑"
};

// Export for use in other scripts if using modules, 
// but since we're aiming for GitHub Pages with simple script tags, 
// we'll keep them as global constants.
