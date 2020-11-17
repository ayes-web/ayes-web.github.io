async function title_cycle(default_title) {
    while(true) {
        var title = default_title;
        let p = 0;
        document.title = title;
        while (title.length >= 1) {
            title = title.substring(0, title.length - 1);
            document.title = title;
            await new Promise(r => setTimeout(r, 300));
        }
        while (title.length < default_title.length) {
            title = title.concat(default_title[p]);
            p++;
            document.title = title;
            await new Promise(r => setTimeout(r, 300));
        }
    }
}