import PythonRunner from "./PythonRunner.jsx";

export default function Chapter1() {
    return (
        <section id="chapter3">
            <h3>
                <a
                    href="https://docs.python.org/3.13/tutorial/introduction.html"
                    target="_blank"
                >
                    Chapter 03 - Introduction
                </a>
            </h3>
            <div>
                <p>
                    <span>1</span> Division <span>/</span> always returns a
                    floating number. To avoid that use double division{" "}
                    <span>//</span>.
                </p>
                <PythonRunner
                    code={`\
print(10 / 5)
print(10 // 5)\
                `}
                />
                <p>
                    <span>2</span> In interactive mode, the last printed
                    expression is assigned to the variable <span>_</span>.
                </p>
                <PythonRunner
                    code={`\
print(10 / 5)
print(_)
# This code works only in Interactive Mode.\
                `}
                />
                <p>
                    <span>3</span> Use a <span>\</span> to escape characters and
                    unwanted lines.
                </p>
                <p>
                    <span>4</span> Use <span>r</span> before the quote to avoid
                    escape by <span>\</span>.
                </p>
                <p>
                    <span>5</span> If you break a string{" "}
                    <span>'Py' 'thon'</span> it will automatically join. If one
                    of them is a variable use the <span>+</span> operator.
                </p>
                <PythonRunner
                    code={`\
print('Py' 'thon')

a = 'Py'
print(a + 'thon')
`}
                />
                <p>
                    <span>6</span> Strings can be indexed: <span>word[2]</span>.
                    If out of range this gives an error.
                </p>
                <PythonRunner
                    code={`\
word = 'Python'
print(word[2])
`}
                />
                <p>
                    <span>7</span> Slicing is also supported:{" "}
                    <span>word[2:5]</span>. If out of range this dosen't give an
                    error.
                </p>
                <PythonRunner
                    code={`\
word = 'Python'
print(word[2:5])
`}
                />
                <p>
                    <span>8</span> Lists can be indexed, sliced, concatenated,
                    changed and also append child: <span>list.append(6)</span>.
                </p>
                <PythonRunner
                    code={`\
list = ['a', 'b', 'c']
print(list)

list.append('d')
print(list)
`}
                />
                <p>
                    <span>9</span> When you assign a list to a variable both
                    variables refer to the same list not a new one. But if you
                    use a slice operation it creates a shallow copy.
                </p>
                <PythonRunner
                    code={`\
list = ['a', 'b', 'c']
a = list

print('list:', list)
print('a:', a)

list.append('d')
print('a:', a)
`}
                />
                <p>
                    <span>10</span> You can select a full list by the code{" "}
                    <span>[:]</span>. And empty with the code{" "}
                    <span>list[:] = []</span>.
                </p>
                <PythonRunner
                    code={`\
list = ['a', 'b', 'c']
print(list[:])

list[:] = []
print('list:', list)
`}
                />
            </div>
            <h3>4, 7 December 2024</h3>
        </section>
    );
}
