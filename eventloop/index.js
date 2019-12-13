const eventloop = {
    queue: [],
    loop() {
        while(this.queue.length > 0) {
            const callback = this.queue.shift();
            // console.log('callback :', callback);
            callback();
        }

        setTimeout(this.loop.bind(this), 1000);
    },

    add(callback) {
        // console.log('callback :', callback);
        this.queue.push(callback)
    }
}

eventloop.loop();

setTimeout(() => {
    eventloop.add(function() {
        console.log('1');
    })
}, 100);

setTimeout(() => {
    eventloop.add(function() {
        console.log('2')
    })
}, 2300)