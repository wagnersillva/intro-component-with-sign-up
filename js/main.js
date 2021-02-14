let submitForm = document.getElementById('form-submit');
submitForm.addEventListener('click', function(e){
    e.preventDefault()
    const imgs = [
        document.getElementById('iconeExclamacaoFirstName'),
        document.getElementById('iconeExclamacaoLastName'),
        document.getElementById('iconeExclamacaoEmail'),
        document.getElementById('iconeExclamacaoPassword')
    ]
    const mensagemErro = [
        document.getElementById('validacaoFirstName'),
        document.getElementById('validacaoLastName'),
        document.getElementById('validacaoEmail'),
        document.getElementById('validacaoEmail2'),
        document.getElementById('validacaoPassword')
    ]
    const form = {
        FirstName: document.getElementById('form-FirstName'),
        LastName: document.getElementById('form-LastName'),
        Email: document.getElementById('form-email'),
        Password: document.getElementById('form-password')
    }

    if(form.FirstName.value === ''){
        showItem(imgs[0])
        showItem(mensagemErro[0])
        showBorderError(form.FirstName)
    }else {
        hideItem(imgs[0])
        hideItem(mensagemErro[0])
        hideBorderError(form.FirstName)
    }
    if(form.LastName.value === ''){
        showItem(imgs[1])
        showItem(mensagemErro[1])
        showBorderError(form.LastName)
    }else {
        hideItem(imgs[1])
        hideItem(mensagemErro[1])
        hideBorderError(form.LastName)
    }
    if(form.Email.value === ''){
        hideItem(mensagemErro[3])
        showItem(imgs[2])
        showItem(mensagemErro[2])
        showBorderError(form.Email)
    }else {
        hideItem(mensagemErro[2])
        hideItem(imgs[2])
        validationEmail(form.Email.value, imgs[2], mensagemErro[3], form.Email)
    }
    if(form.Password.value === ''){
        showItem(imgs[3])
        showItem(mensagemErro[4])
        showBorderError(form.Password)
    }else {
        hideItem(imgs[3])
        hideItem(mensagemErro[4])
        hideBorderError(form.Password)
    }
    

})

const hideItem = (item) => {
    item.style.display = 'none';
}

const showItem = (item) => {
    item.style.display = 'block';
}

const hideBorderError = (item) =>{
    item.classList.remove('errormsg')
}
const showBorderError = (item) =>{
    item.classList.add('errormsg')
}

function validationEmail(value, img, msgError, element){
    // alert(value.indexOf('@'), value.indexOf('.'))
    if(value.indexOf('@')!==-1 && value.indexOf('.')!==-1){
        hideItem(img)
        hideItem(msgError)
        hideBorderError(element)
    } else {
        showItem(img)
        showItem(msgError)
        showBorderError(element)
    }
}