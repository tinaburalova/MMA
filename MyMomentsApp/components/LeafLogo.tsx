import React from 'react';
import Svg, { Path } from 'react-native-svg';

// Primárna farba z tvojho popisu: Sage Green
const PRIMARY_COLOR = '#758D76';

/**
 * Komponent LeafLogo: štylizovaný, asymetrický list so stopkou.
 * @param {number} size - Veľkosť ikony (šírka a výška). Predvolená hodnota je 32.
 * @param {string} color - Farba výplne ikony. Predvolená je PRIMARY_COLOR.
 */
const LeafLogo = ({ size = 32, color = PRIMARY_COLOR }) => {
    // Navrhnutý Path, ktorý simuluje:
    // 1. Väčší list, jemne zahnutý doprava hore
    // 2. Menší list, prekrývajúci sa s prvým, zahnutý doľava
    // 3. Spodnú zakrivenú stopku
    const pathData = `
        M 10 20 C 5 15, 5 5, 12 5 C 19 5, 19 15, 14 20 Q 14 20, 12 21 
        C 10 22, 10 21, 10 20 Z 
        M 14 18 C 17 15, 17 8, 11 10 C 5 12, 7 18, 10 18 C 11 19, 13 18, 14 18 Z
        M 12 21 Q 13 25, 18 20
    `;

    return (
        <Svg height={size} width={size} viewBox="0 0 24 24">
            {/* Prvý list (väčší) */}
            <Path 
                d="M11 22 C 7 18, 7 4, 13 4 C 19 4, 19 18, 15 22 Q 15 23, 14 23 C 13 23, 13 22, 11 22 Z"
                fill={color}
            />
            {/* Druhý list (menší, prekrývajúci sa) */}
            <Path
                d="M15 18 C 18 15, 18 8, 12 10 C 6 12, 8 18, 11 18 C 12 19, 14 18, 15 18 Z"
                fill={color}
                opacity={0.8} // Jemne iný odtieň
            />
            {/* Stopka (jemne zakrivená) */}
            <Path
                d="M13 22 Q 14 24, 16 22"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
        </Svg>
    );
};

export default LeafLogo;