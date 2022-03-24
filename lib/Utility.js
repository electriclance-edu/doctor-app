class Utility {
    static newID(count) {
        const charArray = [...count];

        for (let i = charArray.length - 1; i >= 0; i--) {
            let digit = parseInt(charArray[i]);
            digit++;

            if (digit === 10) {
                charArray[i] = "0";
                if (i === 0) {
                    charArray.unshift("1");
                    break;
                }
            } else {
                charArray[i] = digit.toString();
                break;
            }
        }

        return charArray.join("");
    }
}