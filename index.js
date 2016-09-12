var fix = function () {
    var fixtures = {};
    return function (name, type) {
        if (!fixtures[name] || type) {
            var isEmptyType = false;
            if (typeof (type) === "undefined") {
                isEmptyType = true;
                type = "string";
            }
            if (typeof (type) === "string" && fix[type]) {
                if (isEmptyType) {
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