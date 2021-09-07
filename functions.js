
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]

function range(grades) {
    let lowest = grades[0], highest = grades[0]
    for (const grade of grades) {
        if (grade<lowest)
            lowest = grade
        if (grade>highest)
            highest = grade
    }
    return (highest - lowest)
}

function median (grades) {
    let grades1 = [...grades]
    grades1.sort(function(a, b){return a - b})
    if (grades1.length%2==1)
        return grades1 [grades1.length/2 + 1]
    else {
        return (grades1 [grades1.length/2] + grades1 [grades1.length/2 - 1])/2.0
    }
}