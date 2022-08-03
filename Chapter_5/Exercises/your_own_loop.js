function loop(start, first, second, action) {
    if (first(start)) {
        action(start);
        loop(second(start), first, second, action);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);