function rotation() {
    tm = new Date();
    htime = tm.getHours();
    mtime = tm.getMinutes();
    stime = tm.getSeconds();
    hrotation = 30 * htime + mtime / 2 + stime / 120;
    mrotation = 6 * mtime + stime / 10;
    srotation = 6 * stime;
    hr.style.transform = `rotate(${hrotation}deg)`;
    mn.style.transform = `rotate(${mrotation}deg)`;
    sc.style.transform = `rotate(${srotation}deg)`;
}

setInterval(rotation, 1000);