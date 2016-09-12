var fix = function () {
    var fixtures = {};
    return function (name, type) {
        if (!fixtures[name] || type) {
            if (typeof (type) === "undefined") {
                type = "string";
            }
            if (typeof (type) === "string" && fix[type]) {
                if (type === "string") {
                    fixtures[name] = name;
                } else {
                    fixtures[name] = fix[type]();
                }
            } else {
                fixtures[name] = type;
            }
        }
        return fixtures[name];
    }
}
fix.string = function () {
    return "fix" + Math.random() + (+new Date);
}
fix.int = function () {
    return parseInt(Math.random() + (+new Date));
}
fix.float = function () {
    return Math.random() + (+new Date);
}
fix.number = function () {
    return Math.random() + (+new Date);
}
module.exports = fix;