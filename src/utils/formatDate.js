const formatDate = (date) => {
    let strDate = String(new Date(date));
    return strDate.replace( / GMT.*/, "");
}
 
export default formatDate;