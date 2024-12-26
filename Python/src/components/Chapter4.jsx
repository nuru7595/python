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
                    <span>3</span> Always create a copy of a dictionary when you
                    need to modify during iteration.
                </p>
                <PythonRunner
                    code={`\
users = {'Nuru': 'active', 'Jame': 'inactive', 'Abdullah': 'active', 'Sadia': 'inactive'}

for user, status in users.copy().items():
    if status == 'inactive':
        del users[user]

active_users = {}
for user, status in users.items():
    if status == 'active':
        active_users[user] = status

print(active_users)\
                `}
                />
                <p>
                    <span>4</span> If you do need to iterate over a sequence of
                    numbers, the built-in function range() comes in handy.
                </p>
                <PythonRunner
                    code={`\
for i in range(3):
    print(i)

for i in range(5, 8):
    print(i)

for i in range(10, 20, 3):
    print(i)\
                `}
                />
                <p>
                    <span>5</span> To iterate over the indices of a sequence,
                    you can combine range() and len() as follows:
                </p>
                <PythonRunner
                    code={`\
a = ['Muri', 'Jame', 'Nuru', 'Abdu']

for i in range(len(a)):
    print(i + 1, a[i])\
                `}
                />
                <p>
                    <span>6</span> The break statement breaks out of the
                    innermost enclosing for or while loop:
                </p>
                <PythonRunner
                    code={`\
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} equals {x} * {n // x}")
            break\
                `}
                />
                <p>
                    <span>7</span> The continue statement continues with the
                    next iteration of the loop:
                </p>
                <PythonRunner
                    code={`\
for i in range(2, 10):
    if i % 2 == 0:
        print(f'Even Number {i}')
        continue
    print(f'Odd Number {i}')\
                `}
                />
                <p>
                    <span>8</span> In a for loop, the else clause is executed
                    after the loop finishes its final iteration, that is, if no
                    break occurred.
                </p>
                <PythonRunner
                    code={`\
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n // x)
            break
    else:
        print(n, 'is a prime number')\
                `}
                />
                <p>
                    <span>9</span> The pass statement does nothing.
                </p>
                <p>
                    <span>10</span> A match statement takes an expression and
                    compares its value to successive patterns given as one or
                    more case blocks.
                </p>
                <PythonRunner
                    code={`\
status = 404

match status:
    case 400:
        print("Bad Request")
    case 404:
        print("Not Found")
    case 418:
        print("I'm a teapot")
    case _:
        print("Something went wrong with the internet")\
                `}
                />
                <p>
                    <span>11</span> You can combine several literals in a single
                    pattern using | (“or”):
                </p>
                <PythonRunner
                    code={`\
a = 18

match a:
    case 18 | 20 | 22:
        print("Adult")\
                `}
                />
                <p>
                    <span>12</span> 
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>13</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>14</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>15</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>16</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>17</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>18</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>19</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>20</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>21</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
                <p>
                    <span>22</span>
                </p>
                <PythonRunner
                    code={`\
\
                `}
                />
            </div>
            <h3>7, 11, 26 December 2024</h3>
        </section>
    );
}
