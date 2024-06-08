import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">bro listen</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bro done</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

bro listen
  // Write code here
bro done

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">bro remember</code>.
      </>
    ),
    code: `bro listen
    bro remember a = 10;
    bro remember b = "two";
    bro remember c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bro done
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">sahi</code> and{" "}
        <code className="language-cpp">galat</code> are the boolean values.
      </>
    ),
    code: `bro listen
    bro remember a = 10;
    bro remember b = 10 + (15*20);
    bro remember c = "two";
    bro remember d = 'ok';
    bro remember e = nalla;
    bro remember f = sahi;
    bro remember g = galat;
bro done
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bro say</code> to print anything to
        console.
      </>
    ),
    code: `bro listen
    bro say "Hello World";
    bro remember a = 10;
    {
       bro remember b = 20;
       bro say a + b;
    }
    bro say 5, 'ok', nalla , sahi , galat;
bro done
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        Bhailang supports if-else-if ladder construct , <code className="language-cpp">agar bhai</code> block will execute if condition is <code className="language-cpp">sahi</code>, otherwise one of the subsequently added <code className="language-cpp">nahi to bhai</code> blocks will execute if their respective condition is <code className="language-cpp">sahi</code>, and the <code className="language-cpp">warna bhai</code> block will eventually execute if all of the above conditions are <code className="language-cpp">galat</code>.
      </>
    ),
    code: `bro listen
    bro remember a = 10;
    agar bhai (a < 20) {
      bro say "a is less than 20";
    } nahi to bhai ( a < 25 ) {
      bro say "a is less than 25";
    } warna bhai {
      bro say "a is greater than or equal to 25";
    }
bro done
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak bhai</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">sahi</code>. If the condition becomes <code className="language-cpp">galat</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.
      </>
    ),
    code: `bro listen
    bro remember a = 0;
    jab tak bhai (a < 10) {
      a += 1;
      agar bhai (a == 5) {
        bro say "andar se bro say ", a;
        agla dekh bhai;
      }
      agar bhai (a == 6) {
        bas kar bhai;
      }
      bro say a;
    }
    bro say "done";
bro done
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            Bhailang is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
