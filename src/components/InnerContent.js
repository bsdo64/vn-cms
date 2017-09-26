import React, {Componet} from 'react';
import style from './InnerContent.css';
import cx from 'classnames';

const InnerContent = () => {
  return (
      <div className={style['inner-content']}>
        <a className="edit-page-link" href="https://github.com/facebook/react/tree/master/docs/docs/hello-world.md" target="_blank">Edit on GitHub</a>
        <h1>
          Hello World
        </h1>
        <div className="subHeader"></div>

        <p>The easiest way to get started with React is to use <a href="http://codepen.io/gaearon/pen/ZpvBNJ?editors=0010">this Hello World example code on CodePen</a>. You don't need to install anything; you can just open it in another tab and follow along as we go through examples. If you'd rather use a local development environment, check out the <a href="/react/docs/installation.html">Installation</a> page.</p>

        <p>The smallest React example looks like this:</p>
        <div className="highlight"><pre><code className="language-js" data-lang="js"><span className="nx">ReactDOM</span><span className="p">.</span><span className="nx">render</span><span className="p">(</span>
  <span className="o">&lt;</span><span className="nx">h1</span><span className="o">&gt;</span><span className="nx">Hello</span><span className="p">,</span> <span className="nx">world</span><span className="o">!&lt;</span><span className="err">/h1&gt;,</span>
  <span className="nb">document</span><span className="p">.</span><span className="nx">getElementById</span><span className="p">(</span><span className="s1">'root'</span><span className="p">)</span>
<span className="p">);</span>
</code></pre></div>
        <p>It renders a header saying "Hello World" on the page.</p>

        <p>The next few sections will gradually introduce you to using React. We will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.</p>

        <h2><a className="anchor" name="a-note-on-javascript"></a>A Note on JavaScript<a className="hash-link" href="#a-note-on-javascript">#</a></h2>

        <p>React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language. If you don't feel very confident, we recommend <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">refreshing your JavaScript knowledge</a> so you can follow along more easily.</p>

        <p>We also use some of the ES6 syntax in the examples. We try to use it sparingly because it's still relatively new, but we encourage you to get familiar with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">classes</a>, <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals">template literals</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"><code>let</code></a>, and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><code>const</code></a> statements. You can use <a href="http://babeljs.io/repl/#?babili=false&amp;evaluate=true&amp;lineWrap=false&amp;presets=es2015%2Creact&amp;experimental=false&amp;loose=false&amp;spec=false&amp;code=const%20element%20%3D%20%3Ch1%3EHello%2C%20world!%3C%2Fh1%3E%3B%0Aconst%20container%20%3D%20document.getElementById('root')%3B%0AReactDOM.render(element%2C%20container)%3B%0A">Babel REPL</a> to check what ES6 code compiles to.</p>


        <div className="docs-prevnext">

          <a className="docs-prev" href="/react/docs/installation.html">← Prev</a>


          <a className="docs-next" href="/react/docs/introducing-jsx.html">Next →</a>

        </div>
      </div>
  )
};

export default InnerContent;