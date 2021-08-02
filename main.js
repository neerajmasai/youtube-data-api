function getVideos(){
    makeRequest();
}
async function makeRequest(){
    const keyword = document.getElementById("search").value;
    const resp = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&key=AIzaSyCZNZPGfVxgOsDCXAQC84erLCHpv8ahvSk`);
    const data = await resp.json();
    console.log(data);
    data.items.forEach(({ id }) => {
        const frameDiv = document.getElementById("frameContainer2");
        const frame = document.createElement("iframe");
        frame.setAttribute("width", "300");
        frame.setAttribute("height", "200");
        frame.setAttribute("src", `https://www.youtube.com/embed/${id.videoId}`);
        frameDiv.append(frame);
    });
}

async function defaultVideos(){
    const resp = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=in&videoCategoryId=17&key=AIzaSyCZNZPGfVxgOsDCXAQC84erLCHpv8ahvSk`);
    const data = await resp.json();
    console.log(data);
    data.items.forEach(({ id }) => {
        const frameDiv = document.getElementById("frameContainer");
        const frame = document.createElement("iframe");
        frame.setAttribute("width", "250");
        frame.setAttribute("height", "150");
        frame.setAttribute("src", `https://www.youtube-nocookie.com/embed/${id}`);
        frameDiv.append(frame);
    });    
}

function loadDefault(){
    defaultVideos();
}

loadDefault();