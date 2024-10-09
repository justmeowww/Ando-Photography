function createGallery(numOfPhotos, folderDir){
    let photos = document.getElementById("photos");
    for(let i = 0; i < numOfPhotos; i++) {
        let imgTag = '<a href="#';
        let imgTag2 = imgTag.concat(i, '" onclick="openImage();"><img src="');
        let path = imgTag2.concat(folderDir, i, '.jpg"', "/></a>");
        photos.innerHTML += path;
    }

    let fullPhotos = document.getElementById("fullPhotos");
    for(let i = 0; i < numOfPhotos; i++) {
        let imgTag = '<img src="';
        let path = imgTag.concat(folderDir, i, '.jpg" id="', i, '"/>');
        fullPhotos.innerHTML += path;
    }
    return false;
}

function createLatest(numOfPhotos, numOfPhotos2, folderDir, folderDir2) {
    let photos = document.getElementById("photos");
    for(let i = 0; i < numOfPhotos; i++) {
        let imgTag = '<a href="#';
        let imgTag2 = imgTag.concat(i, '" onclick="openImage();"><img src="');
        let path = imgTag2.concat(folderDir, i, '.jpg"', "/></a>");
        photos.innerHTML += path;
    }

    let fullPhotos = document.getElementById("fullPhotos");
    for(let i = 0; i < numOfPhotos; i++) {
        let imgTag = '<img src="';
        let path = imgTag.concat(folderDir, i, '.jpg" id="', i, '"/>');
        fullPhotos.innerHTML += path;
    }

    let photos2 = document.getElementById("photos");
    for(let i = 0; i < numOfPhotos2; i++) {
        let imgTag = '<a href="#';
        let imgTag2 = imgTag.concat(i+numOfPhotos, '" onclick="openImage();"><img src="');
        let path = imgTag2.concat(folderDir2, i, '.jpg"', "/></a>");
        photos2.innerHTML += path;
    }

    let fullPhotos2 = document.getElementById("fullPhotos");
    for(let i = numOfPhotos; i < numOfPhotos2+numOfPhotos; i++) {
        let imgTag = '<img src="';
        let path = imgTag.concat(folderDir2, i-numOfPhotos, '.jpg" id="', i, '"/>');
        fullPhotos2.innerHTML += path;
    }
    return false;
}

function openImage() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    return false;
}

function closeImage() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    return false;
}