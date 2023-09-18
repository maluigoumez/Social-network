
export default home;

function home(){
    const section = document.createElement('section');
    const title = document.createElement('h2');

    title.textContent = "Welcome"
    section.append(title)
    return section;


}