functionPlot({
    target: '#func1',
    xAxis: {
        label: 'x'
    },
    yAxis: {
        label: 'f(x)'
    },
    grid: true,
    data: [{
        fn: 'y = 2x + 9', color: '#aa1111'
    }]
})

functionPlot({
    target: '#func2',
    xAxis: {
        label: 'x'
    },
    yAxis: {
        label: 'f(x)'
    },
    grid: true,
    data: [{
        fn: 'y = 2x^2 + 3x - 5', color: '#aa1111'
    }]
})
