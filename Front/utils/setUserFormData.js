const setUserFormData = ( userInfo = '' ) => { // Fills the selected user info into the form for editing

    let name , lastname;
    if (userInfo) {
        name = userInfo.fullname.split(' ')[0];
        lastname = userInfo.fullname.split(' ')[1];
    }

    document.querySelector('#name').value = name || '';
    document.querySelector('#lastname').value = lastname || '';
    document.querySelector('#email').value = userInfo.email || '';
    document.querySelector('#role').value = userInfo.role || 'user';
    
    document.querySelector('#password').value = '';
    document.querySelector('#confirm-password').value = '';
    
}

export default setUserFormData