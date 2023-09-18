function home(navigateTo){
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonLogin = document.createElement('button');
    buttonLogin.innerHTML = 'ir a Login';
    buttonLogin.addEventListener('click', () => {
        navigateTo('/login')
    })

    title.textContent = "Welcome"
    section.append(title, buttonLogin);
    return section;


}
export { home };