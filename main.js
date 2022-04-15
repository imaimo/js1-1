function cook(food1, food2) {
    console.log(food1 + 'を切ります。')
    console.log(food1 + 'を炒めます。')
    console.log(`${food2}をすりおろします。`)
    console.log(`${food1}に${food2}を混ぜます。`)
}
cook('豚肉', '生姜')

function foo(a, b, c) {
    console.log(`fooが引数${a}, ${b}, ${c}で呼び出された`)
}

foo(1, 'abc', 'true')

function bar() {
    console.log(`barが呼び出された`)
}
bar()

function applyTax(price) {
    const result = price * 0.1
    return result
}

const tax = applyTax(12000)
console.log(tax)
