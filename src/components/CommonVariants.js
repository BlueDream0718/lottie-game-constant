const scaleImageList = [
    "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"
]

const moveImageList = [
    '01', '02', '03', '04', '05',
    '03', '01', '01', '05', '03',
    '01', '05', '02'

]

const letterList = [
    { path: '1A', s: 0.24, l: 0.48, t: 0.26 },
    { path: '2AA', s: 0.24, l: 0.48, t: 0.26 },
    { path: '3I', s: 0.24, l: 0.445, t: 0.09 },
    { path: '4EE', s: 0.24, l: 0.49, t: 0.25 },
    { path: '5U', s: 0.2, l: 0.51, t: 0.26 },
    { path: '6OO', s: 0.24, l: 0.445, t: 0.075 },
    { path: '7RU', s: 0.22, l: 0.5, t: 0.27 },
    { path: '8E', s: 0.24, l: 0.49, t: 0.26 },
    { path: '9AI', s: 0.22, l: 0.5, t: 0.23 },
    { path: '10O', s: 0.26, l: 0.43, t: 0.03 },
    { path: '11OU', s: 0.22, l: 0.49, t: 0.26 },
    { path: '12AM', s: 0.24, l: 0.49, t: 0.21 },
    { path: '13AHA', s: 0.24, l: 0.49, t: 0.21 },
]

export { scaleImageList, moveImageList, letterList }

const highlightPreList = [
    "SB_04_Letter_Tracing_01_a/SB_04_a_Arrow_0",
    "SB_04_Letter_Tracing_02_aa/SB_04_aa_Arrow_0",
    "SB_04_Letter_Tracing_03_i/SB_04_i_Arrow_01-0",
    "SB_04_Letter_Tracing_04_ee/SB_04_ee_Arrow_0",
    "SB_04_Letter_Tracing_05_u/SB_04_u_Arrow_0",
    "SB_04_Letter_Tracing_06_oo/SB_04_oo_Arrow_0",
    "SB_04_Letter_Tracing_07_r/SB_04_r_Arrow_0",
    "SB_04_Letter_Tracing_08_e/SB_04_e_Arrow_0",
    "SB_04_Letter_Tracing_09_ai/SB_04_ai_Arrow_0",
    "SB_04_Letter_Tracing_10_o/SB_04_o_Arrow_0",
    "SB_04_Letter_Tracing_11_au/SB_04_au_Arrow_0",
    "SB_04_Letter_Tracing_12_am/SB_04_am_Arrow_0",

    "SB_04_Letter_Tracing_13_ahaa/SB_04_ahaa_Arrow_0",
]
const basePreList = [
    'SB_04_Text_interactive_02/SB_04_Letter_Tracing_01_a/SB_04_a_Grey',
    'SB_04_Text_interactive_02/SB_04_Letter_Tracing_02_aa/SB_04_aa_Grey',
    'SB_04_Text_interactive_02/SB_04_Letter_Tracing_03_i/SB_04_i_Grey',
    'SB_04_Text_interactive_02/SB_04_Letter_Tracing_04_ee/SB_04_ee_Grey',
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_05_u/SB_04_u_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_06_oo/SB_04_oo_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_07_r/SB_04_r_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_08_e/SB_04_e_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_09_ai/SB_04_ai_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_10_o/SB_04_o_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_11_au/SB_04_o_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_12_am/SB_04_am_Grey",
    "SB_04_Text_interactive_02/SB_04_Letter_Tracing_13_ahaa/SB_04_ahaa_Grey",
]
const maskInfoList = [
    { size: '71% 71%', position: '44.7% 55%', url: 'SB_04_Letter_Tracing_01_a/SB_04_a_Grey' },
    { size: '71% 71%', position: '44.7% 55%', url: 'SB_04_Letter_Tracing_02_aa/SB_04_aa_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_03_i/SB_04_i_Grey' },
    { size: '73% 73%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_04_ee/SB_04_ee_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_05_u/SB_04_u_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_06_oo/SB_04_oo_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_07_r/SB_04_r_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_08_e/SB_04_e_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_09_ai/SB_04_ai_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_10_o/SB_04_o_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_11_au/SB_04_o_Grey' },
    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_12_am/SB_04_am_Grey' },

    { size: '71% 71%', position: '48.7% 55%', url: 'SB_04_Letter_Tracing_13_ahaa/SB_04_ahaa_Grey' },
]
const animtionList = [
    { path: 'SB_04_a_1', scale: 0.38, left: 0.33, top: 0.205 },
    { path: 'SB_04_aa_1', scale: 0.42, left: 0.32, top: 0.245 },
    { path: 'SB_04_i_1', scale: 0.28, left: 0.37, top: 0.17 },
    { path: 'SB_04_ee_1', scale: 0.245, left: 0.382, top: 0.125 },
    { path: 'SB_04_u_1', scale: 0.33, left: 0.33, top: 0.18 },
    { path: 'SB_04_oo_1', scale: 0.35, left: 0.35, top: 0.215 },
    { path: 'SB_04_r_1', scale: 0.445, left: 0.29, top: 0.22 },
    { path: 'SB_04_e_1', scale: 0.38, left: 0.32, top: 0.16 },

    { path: 'SB_04_ai_1', scale: 0.3, left: 0.37, top: 0.12 },
    { path: 'SB_04_o_1', scale: 0.38, left: 0.33, top: 0.16 },
    { path: 'SB_04_au_1', scale: 0.38, left: 0.33, top: 0.16 },
    { path: 'SB_04_am_1', scale: 0.36, left: 0.33, top: 0.16 },
    { path: 'SB_04_ahaa_1', scale: 0.43, left: 0.305, top: 0.22 },
]
const letterPosList = [
    {
        base: { x: 620, y: 370 },
        highlight: [
            { x: 542, y: 370 },
            { x: 645, y: 370 },
            { x: 742, y: 390 },
            { x: 742, y: 214 },
        ]
    },
    {
        base: { x: 620, y: 370 },
        highlight: [
            { x: 487, y: 370 },
            { x: 605, y: 370 },

            { x: 690, y: 393 },
            { x: 795, y: 393 },
            { x: 742, y: 214 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 625, y: 375 },
            { x: 635, y: 200 },
        ]
    },
    {
        base: { x: 636, y: 370 },
        highlight: [
            { x: 625, y: 445 },
            { x: 635, y: 270 },
            { x: 678, y: 190 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 627, y: 380 },
            { x: 635, y: 208 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 580, y: 385 },
            { x: 745, y: 425 },
            { x: 595, y: 208 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 537, y: 380 },
            { x: 635, y: 375 },
            { x: 737, y: 418 },
            { x: 637, y: 205 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 660, y: 380 },
            { x: 700, y: 305 },
            { x: 640, y: 205 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 650, y: 452 },
            { x: 690, y: 387 },
            { x: 640, y: 300 },

            { x: 625, y: 225 },
        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 520, y: 432 },
            { x: 630, y: 435 },
            { x: 695, y: 455 },
            { x: 785, y: 455 },
            { x: 745, y: 300 },

            { x: 725, y: 230 },

        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 520, y: 432 },
            { x: 630, y: 435 },
            { x: 695, y: 455 },
            { x: 785, y: 455 },

            { x: 645, y: 373 },

            { x: 720, y: 255 },
            { x: 765, y: 235 },

        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 560, y: 410 },
            { x: 680, y: 410 },
            { x: 755, y: 425 },
            { x: 760, y: 255 },

            { x: 758, y: 175 },


        ]
    },
    {
        base: { x: 635, y: 370 },
        highlight: [
            { x: 520, y: 365 },
            { x: 650, y: 370 },
            { x: 725, y: 390 },
            { x: 725, y: 215 },

            { x: 840, y: 302 },
            { x: 840, y: 444 },
        ]
    }
]
const outLinePreList = [
    {
        yellow: 'SB_04_Letter_Tracing_01_a/SB_04_a_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_01_a/SB_04_a_White-Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_02_aa/SB_04_aa_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_02_aa/SB_04_aa_White-Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_03_i/SB_04_i_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_03_i/SB_04_i_White-Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_04_ee/SB_04_ee_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_04_ee/SB_04_ee_White_Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_05_u/SB_04_u_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_05_u/SB_04_u_White-Highlight'
    }
    ,
    {
        yellow: 'SB_04_Letter_Tracing_06_OO/SB_04_oo_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_06_OO/SB_04_oo_White_Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_07_r/SB_04_r_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_07_r/SB_04_r_White_Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_08_e/SB_04_e_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_08_e/SB_04_e_White_Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_09_ai/SB_04_ai_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_09_ai/SB_04_ai_White_Highlight'
    },
    {
        yellow: 'SB_04_Letter_Tracing_10_o/SB_04_o_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_10_o/SB_04_o_White_Highlight'
    },

    {
        yellow: 'SB_04_Letter_Tracing_11_au/SB_04_o_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_11_au/SB_04_o_White_Highlight'
    },

    {
        yellow: 'SB_04_Letter_Tracing_12_am/SB_04_am_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_12_am/SB_04_am_White_Highlight'
    },

    {
        yellow: 'SB_04_Letter_Tracing_13_ahaa/SB_04_ahaa_Yellow_Highlight',
        white: 'SB_04_Letter_Tracing_13_ahaa/SB_04_ahaa_White_Highlight'
    },
]
const lineLengthList = [49, 47, 37, 37, 45, 45, 46, 45, 42, 42, 42, 45, 48, 48];
const HeavyLengthList = [
    [8, 3],
    [9, 6],
    [10, 6],
    [10, 7],
    [12, 5],
    [12, 6],
]
const firstPosList = [
    [
        { x: 440, y: 255 },
        { x: 490, y: 385, },
        { x: 545.00, y: 370.00, letter_start: true },
        { x: 742, y: 232, letter_start: true },
        { x: 640, y: 215, letter_start: true }
    ],
    [
        { x: 380, y: 255 },
        { x: 438, y: 385 },
        { x: 493.00, y: 370.00, letter_start: true },
        { x: 690, y: 232, letter_start: true },
        { x: 795, y: 232, letter_start: true },
        { x: 590, y: 213, letter_start: true },
    ],
    [
        { x: 671, y: 215 },
        { x: 703, y: 281 },
        { x: 476, y: 200, letter_start: true },
    ],
    [
        { x: 672, y: 288 },
        { x: 703, y: 351 },
        { x: 480, y: 271, letter_start: true },
        { x: 672, y: 278, letter_start: true },
    ],
    [
        { x: 691, y: 228 },
        { x: 691, y: 300 },
        { x: 560, y: 405, letter_start: true },


    ],
    [
        { x: 642, y: 226 },
        { x: 531, y: 393 },
        { x: 560, y: 405, letter_start: true },
        { x: 648, y: 391, letter_start: true },

    ],
    [
        { x: 407, y: 320 },
        { x: 614, y: 379 },
        { x: 633, y: 225, letter_start: true },
        { x: 652, y: 363, letter_start: true },
        { x: 375, y: 204, letter_start: true },

    ],
    [

        { x: 560, y: 225 },
        { x: 715, y: 225, letter_start: true },
        { x: 444, y: 206, letter_start: true },
    ]
    ,
    [
        { x: 567, y: 316 },
        { x: 701, y: 316, letter_start: true },
        { x: 474, y: 299, letter_start: true },
        { x: 495, y: 184, letter_start: true },

    ],
    [
        { x: 418, y: 340 },
        { x: 486, y: 464 },
        { x: 568, y: 434, letter_start: true },
        { x: 696, y: 316, letter_start: true },
        { x: 788, y: 316, letter_start: true },
        { x: 607, y: 299, letter_start: true },
        { x: 615, y: 194, letter_start: true },
    ],
    [
        { x: 427, y: 343 },
        { x: 484, y: 461 },
        { x: 547, y: 440, letter_start: true },
        { x: 698, y: 322, letter_start: true },
        { x: 791, y: 322, letter_start: true },
        { x: 591, y: 304, letter_start: true },
        { x: 632, y: 237, letter_start: true },
        { x: 698, y: 171, letter_start: true },
    ]
    ,
    [
        { x: 466, y: 288 },
        { x: 524, y: 435 },
        { x: 610, y: 410, letter_start: true },
        { x: 755, y: 274, letter_start: true },
        { x: 648, y: 255, letter_start: true },
        { x: 718, y: 144, p: true, letter_start: true },
    ],
    [
        { x: 419, y: 252 },
        { x: 488, y: 405 },
        { x: 568, y: 371, letter_start: true },
        { x: 724, y: 233, letter_start: true },
        { x: 612, y: 214, letter_start: true },
        { x: 841, y: 222, p: true, letter_start: true },
        { x: 841, y: 322, p: true, letter_start: true },
    ],

]
const movePath = [
    [
        [
            { x: 463, y: 237 },
            { x: 491, y: 219 },
            { x: 538, y: 206 },
            { x: 571, y: 206 },
            { x: 595, y: 221 },
            { x: 614, y: 247 },
            { x: 623, y: 272 },
            { x: 621, y: 308 },
            { x: 614, y: 329 },
            { x: 596, y: 348 },
            { x: 574, y: 362 },
            { x: 550, y: 370 },
            { x: 500, y: 378 },
        ],
        [
            { x: 537, y: 375 },
            { x: 568, y: 374 },
            { x: 595, y: 382 },
            { x: 621, y: 394 },
            { x: 640, y: 413 },
            { x: 648, y: 437 },
            { x: 651, y: 462 },
            { x: 644, y: 492 },
            { x: 626, y: 513 },
            { x: 598, y: 529 },
            { x: 554, y: 533 },
            { x: 520, y: 519 },
            { x: 489, y: 495 },
            { x: 464, y: 462 },
            { x: 441, y: 420 },
            { x: 423, y: 389 },
        ],
        [
            { x: 567, y: 370 },
            { x: 721, y: 370 },
        ],
        [
            { x: 742, y: 250 },
            { x: 742, y: 553 }
        ],
        [
            { x: 660, y: 213 },
            { x: 824, y: 213 }
        ]
    ],
    [
        [
            { x: 411, y: 237 },
            { x: 439, y: 219 },
            { x: 486, y: 206 },
            { x: 519, y: 206 },
            { x: 543, y: 221 },
            { x: 562, y: 247 },
            { x: 571, y: 272 },
            { x: 569, y: 308 },
            { x: 552, y: 329 },
            { x: 544, y: 348 },
            { x: 522, y: 362 },
            { x: 498, y: 370 },
            { x: 448, y: 378 },
        ],

        [
            { x: 485, y: 375 },
            { x: 516, y: 374 },
            { x: 543, y: 382 },
            { x: 569, y: 394 },
            { x: 588, y: 413 },
            { x: 596, y: 437 },
            { x: 599, y: 462 },
            { x: 592, y: 492 },
            { x: 572, y: 513 },
            { x: 546, y: 529 },
            { x: 502, y: 533 },
            { x: 468, y: 519 },
            { x: 437, y: 495 },
            { x: 412, y: 462 },
            { x: 389, y: 420 },
            { x: 371, y: 389 },
        ],
        [
            { x: 512, y: 370 },
            { x: 670, y: 370 },
        ],
        [
            { x: 690, y: 250 },
            { x: 690, y: 553 }
        ],
        [
            { x: 795, y: 250 },
            { x: 795, y: 553 }
        ],
        [
            { x: 608, y: 213 },
            { x: 878, y: 213 }
        ]
    ],
    [
        [
            { x: 671, y: 219 },
            { x: 671, y: 284 },
        ],
        [
            { x: 674, y: 265 },
            { x: 642, y: 258 },
            { x: 609, y: 255 },
            { x: 585, y: 259 },
            { x: 563, y: 274 },
            { x: 551, y: 297 },
            { x: 548, y: 318 },
            { x: 558, y: 336 },
            { x: 574, y: 349 },
            { x: 595, y: 356 },
            { x: 616, y: 356 },
            { x: 632, y: 353 },
            { x: 661, y: 349 },
            { x: 682, y: 350 },
            { x: 697, y: 364 },
            { x: 703, y: 388 },
            { x: 698, y: 418 },
            { x: 689, y: 436 },
            { x: 676, y: 454 },
            { x: 659, y: 464 },
            { x: 634, y: 468 },
            { x: 608, y: 468 },
            { x: 580, y: 463 },
            { x: 564, y: 458 },

            { x: 552, y: 443 },
            { x: 548, y: 425 },
            { x: 570, y: 417 },
            { x: 597, y: 420 },
            { x: 617, y: 432 },
            { x: 633, y: 446 },
            { x: 647, y: 469 },
            { x: 661, y: 491 },
            { x: 691, y: 546 },

        ],
        [
            { x: 504, y: 200 },
            { x: 770, y: 200 },
        ],

    ],
    [

        [
            { x: 672, y: 295 },
            { x: 672, y: 374 },
        ],
        [
            { x: 674, y: 345 },
            { x: 642, y: 328 },
            { x: 609, y: 325 },
            { x: 585, y: 329 },
            { x: 563, y: 344 },
            { x: 551, y: 367 },
            { x: 548, y: 388 },
            { x: 558, y: 406 },
            { x: 574, y: 419 },
            { x: 595, y: 426 },
            { x: 616, y: 426 },
            { x: 632, y: 423 },
            { x: 661, y: 419 },
            { x: 682, y: 420 },
            { x: 697, y: 434 },
            { x: 703, y: 458 },
            { x: 698, y: 488 },
            { x: 689, y: 506 },
            { x: 676, y: 524 },
            { x: 659, y: 534 },
            { x: 634, y: 538 },
            { x: 608, y: 538 },
            { x: 580, y: 533 },
            { x: 564, y: 528 },

            { x: 552, y: 513 },
            { x: 548, y: 495 },
            { x: 570, y: 487 },
            { x: 597, y: 490 },
            { x: 617, y: 502 },
            { x: 633, y: 516 },
            { x: 647, y: 539 },
            { x: 661, y: 561 },
            { x: 691, y: 616 },
        ],
        [
            { x: 509, y: 271 },
            { x: 759, y: 271 },
        ],
        [
            { x: 654, y: 250 },
            { x: 637, y: 212 },
            { x: 633, y: 179 },
            { x: 637, y: 153 },
            { x: 648, y: 139 },
            { x: 669, y: 132 },
            { x: 686, y: 130 },
            { x: 702, y: 136 },
            { x: 717, y: 151 },
            { x: 734, y: 185 },
        ]

    ],
    [

        [

            { x: 691, y: 250 },
            { x: 695, y: 260 },
            { x: 701, y: 283 },
            { x: 701, y: 297 },
            { x: 697, y: 319 },
            { x: 684, y: 337 },
            { x: 671, y: 350 },
            { x: 647, y: 361 },
            { x: 616, y: 370 },
            { x: 582, y: 376 },
        ],
        [

            { x: 594, y: 381 },
            { x: 650, y: 370 },
            { x: 687, y: 382 },
            { x: 713, y: 411 },
            { x: 727, y: 442 },
            { x: 731, y: 476 },
            { x: 714, y: 511 },
            { x: 684, y: 527 },
            { x: 641, y: 535 },
            { x: 599, y: 521 },
            { x: 559, y: 483 },
            { x: 537, y: 455 },
            { x: 503, y: 391 },

        ],
        [

            { x: 488, y: 207 },
            { x: 781, y: 207 },
        ],


    ],
    [

        [
            { x: 645, y: 254 },
            { x: 648, y: 265 },

            { x: 659, y: 281 },
            { x: 655, y: 311 },
            { x: 647, y: 328 },
            { x: 634, y: 347 },
            { x: 609, y: 361 },
            { x: 582, y: 370 },
            { x: 563, y: 372 },
            { x: 535, y: 380 },
        ],
        [


            { x: 585, y: 375 },
            { x: 615, y: 369 },
            { x: 642, y: 377 },
            { x: 662, y: 397 },
            { x: 678, y: 420 },
            { x: 685, y: 446 },
            { x: 686, y: 479 },
            { x: 677, y: 498 },
            { x: 659, y: 518 },
            { x: 631, y: 532 },
            { x: 597, y: 535 },
            { x: 562, y: 526 },
            { x: 534, y: 508 },
            { x: 513, y: 487 },
            { x: 498, y: 463 },
            { x: 484, y: 437 },
            { x: 460, y: 391 },

        ],
        [

            { x: 666, y: 373 },
            { x: 740, y: 327 },
            { x: 777, y: 330 },
            { x: 809, y: 362 },
            { x: 811, y: 426 },
            { x: 745, y: 555 },
        ],
        [

            { x: 444, y: 207 },
            { x: 737, y: 208 },
        ]


    ],
    [

        [

            { x: 445, y: 311 },
            { x: 481, y: 302 },
            { x: 504, y: 298 },
            { x: 523, y: 298 },
            { x: 543, y: 302 },
            { x: 558, y: 310 },
            { x: 571, y: 317 },
            { x: 581, y: 325 },
            { x: 589, y: 333 },
            { x: 600, y: 336 },
            { x: 607, y: 336 },
            { x: 614, y: 336 },
        ],
        [
            { x: 602, y: 379 },
            { x: 595, y: 379 },
            { x: 589, y: 379 },
            { x: 587, y: 379 },
            { x: 585, y: 381 },
            { x: 577, y: 388 },
            { x: 559, y: 401 },
            { x: 527, y: 426 },
            { x: 506, y: 443 },
            { x: 455, y: 478 },

        ],
        [

            { x: 633, y: 245 },
            { x: 634, y: 562 }
        ],
        [

            { x: 683, y: 362 },
            { x: 702, y: 360 },
            { x: 718, y: 354 },
            { x: 738, y: 345 },
            { x: 759, y: 332 },
            { x: 772, y: 323 },
            { x: 781, y: 318 },
            { x: 783, y: 308 },
            { x: 772, y: 294 },
            { x: 751, y: 288 },
            { x: 735, y: 288 },
            { x: 731, y: 298 },
            { x: 737, y: 312 },
            { x: 749, y: 332 },
            { x: 771, y: 381 },
            { x: 780, y: 398 },
            { x: 782, y: 411 },
            { x: 780, y: 420 },
            { x: 772, y: 426 },
            { x: 744, y: 435 },
            { x: 720, y: 453 },
            { x: 706, y: 466 },
            { x: 703, y: 481 },
            { x: 703, y: 490 },
            { x: 704, y: 499 },
            { x: 710, y: 508 },
            { x: 722, y: 520 },
            { x: 738, y: 531 },
            { x: 755, y: 535 },
            { x: 780, y: 538 },
            { x: 806, y: 532 },
            { x: 821, y: 523 },
            { x: 848, y: 508 },

        ]
        ,
        [

            { x: 407, y: 204 },
            { x: 892, y: 206 },
        ]
    ],
    [
        [
            { x: 560, y: 235 },
            { x: 560, y: 408 },
            { x: 780, y: 558 },
        ],
        [

            { x: 715, y: 241, w: 120 },
            { x: 715, y: 372 },
            { x: 668, y: 394 },

        ],
        [

            { x: 471, y: 206, },
            { x: 813, y: 203 },
        ],

    ],
    [
        [
            { x: 567, y: 345 },
            { x: 567, y: 479 },
            { x: 762, y: 609 },
        ],

        [
            { x: 701, y: 345, w: 120 },
            { x: 699, y: 447 },
            { x: 649, y: 467 },
        ],
        [
            { x: 501, y: 299, w: 45 },
            { x: 790, y: 299 },
        ],

        [

            { x: 546, y: 167 },
            { x: 576, y: 161 },
            { x: 590, y: 165 },
            { x: 609, y: 179 },
            { x: 698, y: 285 },
        ],

    ],
    [
        [


            { x: 455, y: 320 },
            { x: 484, y: 303 },
            { x: 512, y: 293 },
            { x: 538, y: 293 },
            { x: 559, y: 298 },
            { x: 574, y: 311 },
            { x: 584, y: 328 },
            { x: 592, y: 344 },
            { x: 592, y: 361 },
            { x: 588, y: 390 },
            { x: 577, y: 405 },
            { x: 564, y: 421 },
            { x: 541, y: 429 },
            { x: 519, y: 431 },
            { x: 479, y: 438 },
        ],
        [


            { x: 506, y: 446 },
            { x: 525, y: 439 },
            { x: 543, y: 435 },
            { x: 561, y: 435 },
            { x: 579, y: 442 },
            { x: 598, y: 456 },
            { x: 610, y: 472 },
            { x: 615, y: 490 },
            { x: 616, y: 513 },
            { x: 615, y: 528 },
            { x: 608, y: 545 },
            { x: 597, y: 555 },
            { x: 581, y: 567 },
            { x: 565, y: 574 },
            { x: 538, y: 577 },
            { x: 513, y: 572 },
            { x: 495, y: 561 },
            { x: 481, y: 546 },
            { x: 461, y: 526 },
            { x: 413, y: 443 },

        ],
        [


            { x: 593, y: 435 },
            { x: 678, y: 433 },
        ],
        [
            { x: 696, y: 335 },
            { x: 696, y: 603 },
        ],

        [

            { x: 788, y: 335 },
            { x: 788, y: 607 },
        ],
        [
            { x: 631, y: 299 },
            { x: 871, y: 299 },
        ],
        [

            { x: 647, y: 176 },
            { x: 674, y: 170 },
            { x: 691, y: 171 },
            { x: 708, y: 184 },
            { x: 736, y: 215 },
            { x: 790, y: 285 },
        ]

    ],
    [
        [

            { x: 455, y: 323 },
            { x: 483, y: 309 },
            { x: 506, y: 297 },
            { x: 532, y: 294 },
            { x: 557, y: 299 },
            { x: 573, y: 312 },
            { x: 587, y: 333 },
            { x: 592, y: 364 },
            { x: 587, y: 392 },
            { x: 574, y: 415 },
            { x: 557, y: 431 },
            { x: 527, y: 435 },
            { x: 506, y: 440 },
            { x: 484, y: 446 },
        ],
        [



            { x: 509, y: 452 },
            { x: 532, y: 443 },
            { x: 557, y: 439 },
            { x: 575, y: 446 },
            { x: 590, y: 456 },
            { x: 600, y: 465 },
            { x: 611, y: 482 },
            { x: 615, y: 504 },
            { x: 614, y: 530 },
            { x: 604, y: 551 },
            { x: 589, y: 567 },
            { x: 572, y: 574 },
            { x: 551, y: 580 },
            { x: 528, y: 577 },
            { x: 503, y: 568 },
            { x: 485, y: 557 },
            { x: 468, y: 540 },
            { x: 456, y: 519 },
            { x: 410, y: 447 },

        ],
        [

            { x: 597, y: 441 },
            { x: 679, y: 439 },
        ],
        [

            { x: 698, y: 337 },
            { x: 698, y: 606 },
        ],

        [


            { x: 791, y: 337 },
            { x: 791, y: 607 },
        ],
        [

            { x: 624, y: 304 },
            { x: 878, y: 304 },
        ],
        [


            { x: 659, y: 223 },
            { x: 686, y: 224 },
            { x: 713, y: 241, w: 38 },
            { x: 769, y: 294, w: 38 },
        ],
        [

            { x: 721, y: 170 },
            { x: 751, y: 177 },
            { x: 762, y: 191 },
            { x: 772, y: 211 },
            { x: 775, y: 221 },
            { x: 792, y: 285 },
        ]

    ],
    [
        [
            { x: 486, y: 275 },
            { x: 509, y: 261 },
            { x: 536, y: 250 },
            { x: 559, y: 246 },
            { x: 581, y: 247 },
            { x: 605, y: 256 },
            { x: 621, y: 272 },
            { x: 635, y: 295 },
            { x: 638, y: 314 },
            { x: 638, y: 333 },
            { x: 634, y: 354 },
            { x: 628, y: 370 },
            { x: 621, y: 380 },
            { x: 609, y: 390 },
            { x: 599, y: 397 },
            { x: 583, y: 404 },
            { x: 569, y: 407 },
            { x: 553, y: 407 },
            { x: 520, y: 416 },
        ],
        [




            { x: 542, y: 427 },
            { x: 560, y: 420 },
            { x: 577, y: 415 },
            { x: 599, y: 413 },
            { x: 618, y: 417 },
            { x: 639, y: 426 },
            { x: 650, y: 439 },
            { x: 663, y: 457 },
            { x: 666, y: 473 },
            { x: 666, y: 496 },
            { x: 663, y: 518 },
            { x: 651, y: 536 },
            { x: 636, y: 554 },
            { x: 613, y: 567 },
            { x: 589, y: 570 },
            { x: 569, y: 567 },
            { x: 547, y: 562 },
            { x: 529, y: 549 },
            { x: 512, y: 536 },
            { x: 497, y: 518 },
            { x: 482, y: 500 },
            { x: 449, y: 440 },
            { x: 432, y: 411 },

        ],
        [
            { x: 639, y: 410 },
            { x: 735, y: 408 },
        ],
        [
            { x: 755, y: 292 },
            { x: 755, y: 608 },
        ],

        [

            { x: 674, y: 255 },
            { x: 851, y: 254 },
        ],
        [

            { x: 756, y: 173 },
            { x: 791, y: 204 },
        ],

    ],

    [
        [

            { x: 449, y: 237 },
            { x: 466, y: 226 },
            { x: 484, y: 214 },
            { x: 504, y: 208 },
            { x: 523, y: 205 },
            { x: 545, y: 203 },
            { x: 565, y: 211 },
            { x: 579, y: 222 },
            { x: 595, y: 241 },
            { x: 601, y: 259 },
            { x: 604, y: 281 },
            { x: 602, y: 302 },
            { x: 596, y: 323 },
            { x: 587, y: 339 },
            { x: 570, y: 353 },
            { x: 546, y: 360 },
            { x: 519, y: 364 },
            { x: 482, y: 370 },
        ],
        [

            { x: 519, y: 385 },
            { x: 542, y: 380 },
            { x: 568, y: 376 },
            { x: 590, y: 379 },
            { x: 609, y: 391 },
            { x: 624, y: 411 },
            { x: 631, y: 440 },
            { x: 630, y: 464 },
            { x: 626, y: 492 },
            { x: 613, y: 509 },
            { x: 591, y: 525 },
            { x: 560, y: 529 },
            { x: 533, y: 529 },
            { x: 505, y: 519 },
            { x: 482, y: 503 },
            { x: 463, y: 483 },
            { x: 439, y: 454 },
            { x: 421, y: 420 },
            { x: 413, y: 401 },
            { x: 395, y: 377 },

        ],
        [
            { x: 608, y: 371 },
            { x: 704, y: 371 },
        ],
        [

            { x: 724, y: 251 },
            { x: 724, y: 567 },
        ],

        [
            { x: 640, y: 214 },
            { x: 824, y: 214 },
        ],
        [


            { x: 841, y: 305 },
            { x: 841, y: 370 },
        ],


        [
            { x: 841, y: 445 },
            { x: 841, y: 500 },
        ],

    ],

]
const brushColorList = [
    0x8436ff,
    0xdd35ef,
    0xe84f4f
]
const showingLayoutList = [
    [
        {
            wPath: 'SB_05_BG_PI_03_akhbaar',
            hPath: 'SB_05_BG_PI_03_YH_akhbaar',
            tPath: 'SB_05_TI_01_akhbaar',
            s: 1, r: 0.0, tb : 0.21
        },
        {
            wPath: 'SB_05_BG_PI_02_ananas',
            hPath: 'SB_05_BG_PI_02_YH_ananas',
            tPath: 'SB_05_TI_01_ananas',
            s: 0.8, r: 0.1, tb : 0.2
        },
        {
            wPath: 'SB_05_BG_PI_01_anaar',
            hPath: 'SB_05_BG_PI_01_YH_anaar',
            tPath: 'SB_05 _TI_01_anaar',
            s: 1, r: 0.0, tb : 0.205
        },
    ],
    [
        {
            wPath: 'SB_05_BG_PI_04_aari',
            hPath: 'SB_05_BG_PI_04_YH_aari',
            tPath: 'SB_05_TI_02_aari',
            s: 1, r: 0.0, tb : 0.17
        },
        {
            wPath: 'SB_05_BG_PI_05_ aalu',
            hPath: 'SB_05_BG_PI_05_YH_aalu',
            tPath: 'SB_05_TI_02_aalu',
            s: 1, r: 0.0, tb : 0.05
        },
        {
            wPath: 'SB_05_BG_PI_06_aasman',
            hPath: 'SB_05_BG_PI_06_YH_aasman',
            tPath: 'SB_05_TI_02_aasman',
            s: 0.8, r: 0.1, tb : 0.1
        },
    ],
    [
        {
            wPath: 'SB_05_BG_PI_07_imarath',
            hPath: 'SB_05_BG_PI_07_YH_imarath',
            tPath: 'SB_05_TI_03_imarat',
            s: 1, r: 0.0, tb : 0.07
        },
        {
            wPath: 'SB_05_BG_PI_08_idli',
            hPath: 'SB_05_BG_PI_08_YH_idli',
            tPath: 'SB_05_TI_03_idli',
            s: 1, r: 0.0, tb : 0.11
        },
        {
            wPath: 'SB_05_BG_PI_09_itra',
            hPath: 'SB_05_BG_PI_09_YH_itra',
            tPath: 'SB_05_TI_03_itra',
            s: 0.8, r: 0.12, tb : 0.02
        },
    ],
    [
        {
            wPath: 'SB_05_BG_PI_11_eid',
            hPath: 'SB_05_BG_PI_11_YH_eid',
            tPath: 'SB_05_TI_04_eid',
            s: 0.9, r: 0.1, tb : 0.125
        },

        {
            wPath: 'SB_05_BG_PI_10_sugar cane',
            hPath: 'SB_05_BG_PI_10_YH_sugar cane',
            tPath: 'SB_05_TI_04_eekh',
            s: 0.9, r: 0.0, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_12_eet',
            hPath: 'SB_05_BG_PI_12_YH_eet',
            tPath: 'SB_05_TI_04_eet',
            s: 1, r: 0.05, tb : 0.15
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_14_ upahar',
            hPath: 'SB_05_BG_PI_14_YH_upahar',
            tPath: 'SB_05_TI_05_upahar',
            s: 1, r: 0.00, tb : 0.05
        },

        {
            wPath: 'SB_05_BG_PI_13_ullu',
            hPath: 'SB_05_BG_PI_13_YH_ullu',
            tPath: 'SB_05_TI_05_ullu',
            s: 0.8, r: 0.15, tb : 0.04
        },

        {
            wPath: 'SB_05_BG_PI_15_upavan',
            hPath: 'SB_05_BG_PI_15_YH_upavan',
            tPath: 'SB_05_TI_05_upavan',
            s: 1.2, r: -0.07, tb : 0.11
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_18_unt',
            hPath: 'SB_05_BG_PI_18_YH_unt',
            tPath: 'SB_05_TI_06_unt',
            s: 1, r: 0.2, tb : 0.17
        },

        {
            wPath: 'SB_05_BG_PI_17_udbilav',
            hPath: 'SB_05_BG_PI_17_YH_udbilav',
            tPath: 'SB_05_TI_06_udbilav',
            s: 1.1, r: -0.05, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_16_unn',
            hPath: 'SB_05_BG_PI_16_YH_unn',
            tPath: 'SB_05_TI_06_unn',
            s: 1, r: 0.0, tb : 0.05
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_19a_rutu',
            hPath: 'SB_05_BG_PI_19a_YH_rutu',
            tPath: 'SB_05_TI_07_rutu',
            s: 0.9, r: 0.05, tb : 0.06
        },
        {
            wPath: 'SB_05_BG_PI_19_rushi',
            hPath: 'SB_05_BG_PI_19_YH_rushi',
            tPath: 'SB_05_TI_07_rushi',
            s: 0.9, r: 0.1, tb : 0.15
        },
        {
            wPath: 'SB_05_BG_PI_19b_runa',
            hPath: 'SB_05_BG_PI_19b_YH_runa',
            tPath: 'SB_05_TI_07_runa',
            s: 0.9, r: 0.05, tb : 0.07
        }
    ],
    [

        {
            wPath: 'SB_05_BG_PI_21_ektara',
            hPath: 'SB_05_BG_PI_21_YH_ektara',
            tPath: 'SB_05_TI_08_ektara',
            s: 1, r: 0, tb : 0.07
        },

        {
            wPath: 'SB_05_BG_PI_20_ek',
            hPath: 'SB_05_BG_PI_20_YH_ek',
            tPath: 'SB_05_TI_08_ek',
            s: 0.4, r: 0.4, tb : 0.07
        },


        {
            wPath: 'SB_05_BG_PI_22_aedi',
            hPath: 'SB_05_BG_PI_22_YH_aedi',
            tPath: 'SB_05_TI_08_aedi',
            s: 0.7, r: 0.15, tb : 0.15
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_25_airavat',
            hPath: 'SB_05_BG_PI_25_YH_airavat',
            tPath: 'SB_05_TI_09_airavat',
            s: 1.1, r: 0.1, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_23_enak',
            hPath: 'SB_05_BG_PI_23_YH_enak',
            tPath: 'SB_05_TI_09_enak',
            s: 1, r: 0.0, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_24_elaan',
            hPath: 'SB_05_BG_PI_24_YH_elaan',
            tPath: 'SB_05_TI_09_elaan',
            s: 0.8, r: 0.1, tb : 0.15
        }
    ],
    [

        {
            wPath: 'SB_05_BG_PI_27_oos',
            hPath: 'SB_05_BG_PI_27_YH_oos',
            tPath: 'SB_05_TI_10_oos',
            s: 0.9, r: 0.05, tb : 0.14
        },

        {
            wPath: 'SB_05_BG_PI_28_odhani',
            hPath: 'SB_05_BG_PI_28_YH_odhani',
            tPath: 'SB_05_TI_10_odhani',
            s: 0.6, r: 0.25, tb : 0.10
        },
        {
            wPath: 'SB_05_BG_PI_26_okhali',
            hPath: 'SB_05_BG_PI_26_YH_okhali',
            tPath: 'SB_05_TI_10_okhali',
            s: 1, r: 0.0, tb : 0.15
        },
    ],
    [
        {
            wPath: 'SB_05_BG_PI_30_auzaar',
            hPath: 'SB_05_BG_PI_30_YH_auzaar',
            tPath: 'SB_05_TI_11_auzaar',
            s: 0.9, r: 0.05, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_29_aura',
            hPath: 'SB_05_BG_PI_29_YH_aura',
            tPath: 'SB_05_TI_11_aurat',
            s: 1, r: 0.0, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_31_aushadhi',
            hPath: 'SB_05_BG_PI_31_YH_aushadhi',
            tPath: 'SB_05_TI_11_aushadhi',
            s: 0.6, r: 0.2, tb : 0.15
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_33_anguthi',
            hPath: 'SB_05_BG_PI_33_YH_anguthi',
            tPath: 'SB_05_TI_12_angithi',
            s: 0.6, r: 0.2, tb : 0.13
        },

        {
            wPath: 'SB_05_BG_PI_34_anda',
            hPath: 'SB_05_BG_PI_34_YH_anda',
            tPath: 'SB_05_TI_12_anda',
            s: 0.8, r: 0.1, tb : 0.14
        },

        {
            wPath: 'SB_05_BG_PI_32_angoor',
            hPath: 'SB_05_BG_PI_32_YH_angoor',
            tPath: 'SB_05_TI_12_angoor',
            s: 0.9, r: 0.05, tb : 0.07
        }
    ],
    [
        {
            wPath: 'SB_05_BG_PI_33_anguthi',
            hPath: 'SB_05_BG_PI_33_YH_anguthi',
            tPath: 'SB_05_TI_12_angithi',
            s: 0.6, r: 0.2, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_34_anda',
            hPath: 'SB_05_BG_PI_34_YH_anda',
            tPath: 'SB_05_TI_12_anda',
            s: 0.8, r: 0.1, tb : 0.15
        },

        {
            wPath: 'SB_05_BG_PI_32_angoor',
            hPath: 'SB_05_BG_PI_32_YH_angoor',
            tPath: 'SB_05_TI_12_angoor',
            s: 0.9, r: 0.05, tb : 0.15
        }
    ],
]

export {
    highlightPreList, basePreList, maskInfoList, animtionList, letterPosList, outLinePreList,
    lineLengthList, HeavyLengthList, firstPosList, movePath, brushColorList, showingLayoutList
}


export const notJudgeBackList = []