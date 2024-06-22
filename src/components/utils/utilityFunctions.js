export const elipsisFunction=(str, maxLength)=>{
    if(!str) return '';
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.substring(0, maxLength - 3) + '...';
    }
}

export const isAuthenticated=()=>{
    return !!localStorage.getItem('token');
};
