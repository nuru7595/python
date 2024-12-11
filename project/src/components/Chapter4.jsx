import PythonRunner from "./PythonRunner.jsx";

export default function Chapter4() {
    return (
        <section id="chapter4">
            <h3>
                <a
                    href="https://docs.python.org/3.13/tutorial/controlflow.html"
                    target="_blank"
                >
                    Chapter 04 - More Control Flow Tools
                </a>
            </h3>
            <div>
                <p>
                    <span>1</span> if . . . elif . . . else
                </p>
                <PythonRunner
                code={`\
a = 6;

if(a < 0):
    print('Negative')
elif(a > 0):
    print('Positive')
else:
    print('Zero')
`}
            />
                <p>
                    <span>2</span> Use <span>for in</span> to loop through a
                    list: <span>for item in list</span>.
                </p>
                <PythonRunner
                    code={`\
list = ['item1', 'item2', 'item3', 'item4']

for item in list:
    print(item)\
                `}
                />
                <p>
                    <span>3</span> Loading . . .
                </p>
                <p>
                    <span>4</span> Loading . . .
                </p>
            </div>
            <h3>7, 11 December 2024</h3>
        </section>
    );
}
