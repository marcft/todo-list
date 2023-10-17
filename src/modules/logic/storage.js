export function storageAvailable(type) {
    try {
        var storage = window[type],
        x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export function getProjectsListFromStorage() {
    if(!storageAvailable('localStorage')) { return; }
    return JSON.parse(localStorage.getItem('myProjectsList'));
}

export function saveProjectsListToStorage(projectsList) {
    if(storageAvailable('localStorage')) {
        localStorage.setItem('myProjectsList', JSON.stringify(projectsList));
    }
}


  