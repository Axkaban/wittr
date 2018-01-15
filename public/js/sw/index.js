// setting a listener to fetch the serviceWorker's event
this.addEventListener('fetch', event => console.log(event.request));