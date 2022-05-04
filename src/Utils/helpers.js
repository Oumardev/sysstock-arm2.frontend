const convertImgToBase64 = (file) => {
  if (typeof file === undefined) return "";
  else {
    let result = new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (typeof file === "string") return file;
      else {
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      }
    });
    return result;
  }
};

export function getRandomColorsList(nbrColor) {
  var letters = "0123456789abcdef";
  var color = "#";
  let list = [];
  for (let j = 0; j < nbrColor; j++) {
    let tempColor = "";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      tempColor = color;
    }
    list.push(tempColor);
  }
  console.log(list);
}
export default convertImgToBase64;
