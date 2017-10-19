function likes(nameList = []) {
  let totalNames = nameList.length;

  switch(totalNames) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${nameList[0]} likes this`;
      break;
    case 2:
      return `${nameList[0]} and ${nameList[1]} like this`;
      break;
    case 3:
      return `${nameList[0]}, ${nameList[1]} and ${nameList[2]} like this`;
      break
    default:
      return `${nameList[0]}, ${nameList[1]} and ${totalNames-2} others like this`;
  }
}

module.exports = likes;

