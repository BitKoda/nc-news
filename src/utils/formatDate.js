const formatDate = (date) => {
    let strDate = String(new Date(date));
    return strDate.replace( /\d{2}:\d{2}:\d{2} GMT.*/, "");
}
 
export default formatDate;