const caesar = function (strInput, num) {
  const punctuations = `,."'\`\\/! `;

  let encoded = strInput.split("").map((char) => {
    let encodenum = char.charCodeAt(0);
    let tempnum = 0;
    let lowerLimit = 0;
    let upperLimit = 0;

    if (encodenum >= 65 && encodenum <= 90) {
      //check if uppercase unicode(65-90)
      lowerLimit = 65;
      upperLimit = 90;
    } else if (encodenum >= 97 && encodenum <= 122) {
      //check if lowercase unicode(97-122)
      lowerLimit = 97;
      upperLimit = 122;
    } else {
      //punctuation
      return String.fromCharCode(encodenum);
    }

    if (num > 0) {
      //positive num

      if (encodenum + num <= upperLimit)
        return String.fromCharCode(encodenum + num);
      else {
        tempnum = encodenum + num - upperLimit;
        while (tempnum > 26) {
          tempnum -= 26;
        }
        return String.fromCharCode(lowerLimit - 1 + tempnum);
      }
    } else {
      //negative num

      if (encodenum + num >= lowerLimit) {
        return String.fromCharCode(encodenum + num);
      } else {
        tempnum = encodenum - lowerLimit + num;
        while (tempnum < -26) {
          tempnum += 26;
        }
        return String.fromCharCode(upperLimit + 1 + tempnum);
      }
    }
  });

  return encoded.join("");
};

export default caesar;
