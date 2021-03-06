let course = {
    current: 80,
    change: 0
}

async function changeReset() {
    course.change = 0
    return course
}

async function changeCourse(newCourse) {
    course.change = newCourse - course.current
    course.current = newCourse
    return course
}

function convertUsdToRub(usd) {
    return parseFloat((usd * course.current).toFixed(2))
}

function convertRubToUsd(rub) {
    return parseFloat((rub / course.current).toFixed(2))
}

export default {
    convert: {
        usd: convertUsdToRub,
        rub: convertRubToUsd
    },
    set: {
        course: changeCourse
    },
    reset: {
        change:changeReset
    }
}