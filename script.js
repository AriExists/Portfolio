function pageChange(page){
    switch (page) {
        case 0:
            window.location.replace("http://127.0.0.1:5500/index.html");
            break;
        
        case 1:
        window.location.replace("http://127.0.0.1:5500/Projects.html");
            break;
        default:
            break;
    }
}
