const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data.results))
}

const displayBuddies = (info) => {
    for(const buddy of info){
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}.
        Email:${buddy.email}`
        const previewBuddies = document.getElementById('buddy');
        previewBuddies.appendChild(p);
    }
}