const setUserFormData = ( companyInfo = '' ) => { // Fills the selected user company into the form for editing

    document.querySelector('#name').value = companyInfo.name || '';
    document.querySelector('#address').value = companyInfo.address || '';
    document.querySelector('#email').value = companyInfo.email || '';
    document.querySelector('#telephone').value = companyInfo.telephone || '';
    document.querySelector('#city').value = companyInfo.city_id || '';
    
}

export default setUserFormData