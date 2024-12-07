export default function Chapter1() {
    return (
        <section>
            <a
                href="https://docs.python.org/3.13/tutorial/introduction.html"
                target="_blank"
                className="title"
            >
                Chapter 03 - Introduction
            </a>
            <div className="box">
                <p>
                    <span>1</span> Division <span>/</span> always returns a
                    float. To get a output without a floating point use Double
                    Division <span>//</span>.
                </p>
                <p>
                    <span>2</span> In interactive mode, the last printed
                    expression is assigned to the variable <span>_</span>.
                </p>
                <p>
                    <span>3</span> Use <span>\</span> to escape charecter and
                    unwanted line.
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
                <p>
                    <span>6</span> Strings can be indexed: <span>word[3]</span>. If out of range this gives an error.
                </p>
                <p>
                    <span>7</span> Slicing is also supported: <span>word[2:5]</span>. If out of range this dosent give an error.
                </p>
                <p>
                    <span>8</span> Lists can be indexed, sliced, concatenated, changed and also append childe: <span>list.append(6)</span>.
                </p>
                <p>
                    <span>9</span> When you assign a list to a variable both variables refer to the same list not a new one. But if you use a slice operation it creates a shallow copy.
                </p>
                <p>
                    <span>10</span> You can select a full list by the code <span>[:]</span>. And empty with the code <span>list[:] = []</span>.
                </p>
            </div>
            <h3 className="b-title">4, 7 December 2024</h3>
        </section>
    );
}
