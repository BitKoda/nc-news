const truncateText = (text) => {
    return text.length > 120 ? text.substring(0, 110) + "..." : text;
}
 
export default truncateText;