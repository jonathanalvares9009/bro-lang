<h1 align="center">Bro Lang</h1>
  
</p>
<p align="center">
  This is official repository for brolang.<br><br>
  <b>Brolang is a toy programming language written in Typescript.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g brolang-cli
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bro</code>)</h4>

<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bro-lang-docs.vercel.app/#playground">Bro Lang PlayGround</a></h4>

```
bro listen
  bro say "Tech bro";
bro done

```

<h4 align="left">Run</h4>

```
brolang test.bro
```

<h4 align="left">Output</h4>

```
Tech bro
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
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nothing</code>. <code>correct</code> and <code>wrong</code> are the boolean values.</p>

```

bro listen
  bro remember a = 10;
  bro remember b = 10 + (15*20);
  bro remember c = "two";
  bro remember d = 'ok';
  bro remember e = nalla;
  bro remember f = sahi;
  bro remember g = galat;
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
<p align="center">Brolang supports if-else-if ladder construct , <code>bro if</code> block will execute if condition is <code>correct</code>, otherwise one of the subsequently added <code>bro otherwise if</code> blocks will execute if their respective condition is <code>correct</code>, and the <code>bro otherwise</code> block will eventually execute if all of the above conditions are <code>wrong</code>

```

bro listen
  bro remember a = 10;
  bro if (a < 20) {
    bro say "a is less than 20";
  } bro otherwise if ( a < 25 ) {
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
