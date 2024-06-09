<h1 align="center">Bhai Lang</h1>
<p align="center">
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/alerts/"><img alt="Total alerts" src="https://img.shields.io/lgtm/alerts/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://lgtm.com/projects/g/DulLabs/bhai-lang/context:javascript"><img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/DulLabs/bhai-lang.svg?logo=lgtm&logoWidth=18"/></a>
<a href="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"><img alt="Build" src="https://github.com/DulLabs/bhai-lang/actions/workflows/node.js.yml/badge.svg"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  <b>Bhai lang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g brolang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file</h4><br/>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
bro listen
  bro say "Hello bhai";
bro done

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```



<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>bro listen</code> is the entrypoint for the program and all program must end with <code>bro done</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

bro listen
// Write code here
bro done

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bro remember</code>.</p>

```

bro listen
  bro remember a = 10;
  bro remember b = "two";
  bro remember c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bro done
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nothing. correct and wrong</code> are the boolean values.</p>

```

bro listen
  bro remember a = 10;
  bro remember b = 10 + (15*20);
  bro remember c = "two";
  bro remember d = 'ok';
  bro remember e = nothing;
  bro remember f = correct;
  bro remember g = wrong;
bro done
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bro say</code> to print anything to console.</p>

```

bro listen
  bro say "Hello World";
  bro remember a = 10;
  {
    bro remember b = 20;
    bro say a + b;
  }
  bro say 5, 'ok', nothing , correct , wrong;
bro done
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports simple if else construct , <code>bro if</code> block will execute if condition is <code>correct</code> and <code>bro otherwise</code> block will execute if condition is <code>wrong</code>.</p>

```

bro listen
  bro remember a = 10;
  bro if (a < 25) {
   bro say "a is less than 25";
  } bro otherwise {
   bro say "a is greater than or equal to 25";
  }
bro done
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>bro when</code> blocks are executed as long as a specified condition evaluates to correct. If the condition becomes <code>wrong</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bro stop</code> to break the loop and <code className="language-cpp">bro skip</code> to continue within loop.</p>


```

bro listen
  bro remember a = 0;
  bro when (a < 10) {
   a += 1;
   bro if (a == 5) {
    bro say "tech bro", a;
    bro skip;
   }
   bro if (a == 6) {
    bro stop;
   }
   bro say a;
  }
  bro say "done";
bro done
```



