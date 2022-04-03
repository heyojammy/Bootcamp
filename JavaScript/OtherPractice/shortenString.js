const truncateString = (str, num) => {
    if (str.length > num) {
      let shorten = str.slice(0, num);
      let truncated = shorten + "...";
      return truncated;
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8); //output: a-tisket