const countdown = (num, callback) => {
    if(num === 0){
        callback();
    } else {
        document.getElementById('countdown').innerText = num;
        setTimeout(() => {
            countdown(num - 1, callback);
        }, 1000);
    }
}

countdown(10, () => {
    document.getElementById('countdown').innerText = 'Happy Independence Day'
});