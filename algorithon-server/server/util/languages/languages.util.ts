import { Language } from "../../models/languages/language.model";

export type LanguageTable = Iterable<[string, Language[]]>;

export type LanguagesMap = Map<string, Language[]>;

export const LanguagesTable: LanguageTable = [
  [
    "java",
    [
      { lang: "java", name: "Java", version: "JDK 1.8.0_66", index: "0" },
      { lang: "java", name: "Java", version: "JDK 9.0.1", index: "1" },
      { lang: "java", name: "Java", version: "JDK 10.0.1", index: "2" },
      { lang: "java", name: "Java", version: "JDK 11.0.4", index: "3" },
    ],
  ],
  [
    "c",
    [
      { lang: "c", name: "C", version: "GCC 5.3.0", index: "0" },
      { lang: "c", name: "C", version: "Zapcc 5.0.0", index: "1" },
      { lang: "c", name: "C", version: "GCC 7.2.0", index: "2" },
      { lang: "c", name: "C", version: "GCC 8.1.0", index: "3" },
    ],
  ],
  [
    "c99",
    [
      { lang: "c99", name: "C-99", version: "GCC 5.3.0", index: "0" },
      { lang: "c99", name: "C-99", version: "GCC 7.2.0", index: "1" },
      { lang: "c99", name: "C-99", version: "GCC 8.1.0", index: "2" },
      { lang: "c99", name: "C-99", version: "GCC 9.1.0", index: "3" },
    ],
  ],
  [
    "cpp14",
    [
      { lang: "cpp14", name: "C++ 14", version: "g++ 14 GCC 5.3.0", index: "0" },
      { lang: "cpp14", name: "C++ 14", version: "g++ 14 GCC 7.2.0", index: "1" },
      { lang: "cpp14", name: "C++ 14", version: "g++ 14 GCC 8.1.0", index: "2" },
      { lang: "cpp14", name: "C++ 14", version: "g++ 14 GCC 9.1.0", index: "3" },
    ],
  ],
  [
    "cpp17",
    [
      { lang: "cpp17", name: "C++ 17", version: "g++ 17 GCC 9.10", index: "0" },
    ],
  ],
  [
    "php",
    [
      { lang: "php", name: "PHP", version: "5.6.16", index: "0" },
      { lang: "php", name: "PHP", version: "7.1.11", index: "1" },
      { lang: "php", name: "PHP", version: "7.2.5", index: "1" },
      { lang: "php", name: "PHP", version: "7.3.10", index: "1" },
    ],
  ],
  [
    "perl",
    [
      { lang: "perl", name: "Perl", version: "5.22.0", index: "0" },
      { lang: "perl", name: "Perl", version: "5.26.1", index: "1" },
      { lang: "perl", name: "Perl", version: "5.26.2", index: "2" },
      { lang: "perl", name: "Perl", version: "5.30.0", index: "3" },
    ],
  ],
  [
    "nodejs",
    [
      { lang: "nodejs", name: "NodeJS", version: "6.3.1", index: "0" },
      { lang: "nodejs", name: "NodeJS", version: "9.2.0", index: "1" },
      { lang: "nodejs", name: "NodeJS", version: "10.1.0", index: "2" },
      { lang: "nodejs", name: "NodeJS", version: "12.11.1", index: "3" }
    ],
  ],
  [
    "python2",
    [
      { lang: "python2", name: "Python 2", version: "2.7.11", index: "0" },
      { lang: "python2", name: "Python 2", version: "2.7.15", index: "1" },
      { lang: "python2", name: "Python 2", version: "2.7.16", index: "2" },
    ],
  ],
  [
    "python3",
    [
      { lang: "python3", name: "Python 3", version: "3.5.1", index: "0" },
      { lang: "python3", name: "Python 3", version: "3.6.3", index: "1" },
      { lang: "python3", name: "Python 3", version: "3.6.5", index: "2" },
      { lang: "python3", name: "Python 3", version: "3.7.4", index: "3" }
    ],
  ],
  [
    "ruby",
    [
      { lang: "ruby", name: "Ruby", version: "2.2.4", index: "0" },
      { lang: "ruby", name: "Ruby", version: "2.4.2p198", index: "1" },
      { lang: "ruby", name: "Ruby", version: "2.5.1p57", index: "2" },
      { lang: "ruby", name: "Ruby", version: "2.6.5", index: "3" }
    ],
  ],
  [
    "go",
    [
      { lang: "go", name: "GO Lang", version: "1.5.2", index: "0" },
      { lang: "go", name: "GO Lang", version: "1.9.2", index: "1" },
      { lang: "go", name: "GO Lang", version: "1.10.2", index: "2" },
      { lang: "go", name: "GO Lang", version: "1.13.1", index: "3" }
    ],
  ],
  [
    "scala",
    [
      { lang: "scala", name: "Scala", version: "2.12.0", index: "0" },
      { lang: "scala", name: "Scala", version: "2.12.4", index: "1" },
      { lang: "scala", name: "Scala", version: "2.12.5", index: "2" },
      { lang: "scala", name: "Scala", version: "2.13.0", index: "3" }
    ],
  ],
  [
    "bash",
    [
      { lang: "bash", name: "Bash Shell", version: "4.3.42", index: "0" },
      { lang: "bash", name: "Bash Shell", version: "4.4.12", index: "1" },
      { lang: "bash", name: "Bash Shell", version: "4.4.19", index: "2" },
      { lang: "bash", name: "Bash Shell", version: "5.0.011", index: "3" }
    ],
  ],
  [
    "sql",
    [
      { lang: "sql", name: "SQL", version: "SQLite 3.9.2", index: "0" },
      { lang: "sql", name: "SQL", version: "SQLite 3.21.0", index: "1" },
      { lang: "sql", name: "SQL", version: "SQLite 3.23.1", index: "2" },
      { lang: "sql", name: "SQL", version: "SQLite 3.29.0", index: "3" }
    ],
  ],
  [
    "pascal",
    [
      { lang: "pascal", name: "Pascal", version: "fpc 3.0.0", index: "0" },
      { lang: "pascal", name: "Pascal", version: "fpc-3.0.2", index: "1" },
      { lang: "pascal", name: "Pascal", version: "fpc-3.0.4", index: "2" },
    ],
  ],
  [
    "csharp",
    [
      { lang: "csharp", name: "C#", version: "mono 4.2.2", index: "0" },
      { lang: "csharp", name: "C#", version: "mono 5.0.0", index: "1" },
      { lang: "csharp", name: "C#", version: "mono 5.10.1", index: "2" },
      { lang: "csharp", name: "C#", version: "mono 6.0.0", index: "3" },
    ],
  ],
  [
    "vbn",
    [
      { lang: "vbn", name: "VB.Net", version: "mono 4.0.1", index: "0" },
      { lang: "vbn", name: "VB.Net", version: "mono 4.6", index: "1" },
      { lang: "vbn", name: "VB.Net", version: "mono 5.10.1", index: "2" },
      { lang: "vbn", name: "VB.Net", version: "mono 6.0.0", index: "3" },
    ],
  ],
  [
    "haskell",
    [
      { lang: "haskell", name: "Haskell", version: "ghc 7.10.3", index: "0" },
      { lang: "haskell", name: "Haskell", version: "ghc 8.2.1", index: "1" },
      { lang: "haskell", name: "Haskell", version: "ghc 8.2.2", index: "2" },
      { lang: "haskell", name: "Haskell", version: "ghc 8.6.5", index: "3" },
    ],
  ],
  [
    "objc",
    [
      { lang: "objc", name: "Objective C", version: "GCC 5.3.0", index: "0" },
      { lang: "objc", name: "Objective C", version: "GCC 7.2.0", index: "1" },
      { lang: "objc", name: "Objective C", version: "GCC 8.1.0", index: "2" },
      { lang: "objc", name: "Objective C", version: "GCC 9.1.0", index: "3" },
    ],
  ],
  [
    "swift",
    [
      { lang: "swift", name: "Swift", version: "2.2", index: "0" },
      { lang: "swift", name: "Swift", version: "3.1.1", index: "1" },
      { lang: "swift", name: "Swift", version: "4.1", index: "2" },
      { lang: "swift", name: "Swift", version: "5.1", index: "3" },
    ],
  ],
  [
    "groovy",
    [
      { lang: "groovy", name: "Groovy", version: "2.4.6 JVM: 1.7.0_99", index: "0" },
      { lang: "groovy", name: "Groovy", version: "2.4.12 JVM: 9.0.1", index: "1" },
      { lang: "groovy", name: "Groovy", version: "2.4.15 JVM: 10.0.1", index: "2" },
      { lang: "groovy", name: "Groovy", version: "2.5.8 JVM: 11.0.4", index: "3" },
    ],
  ],
  [
    "fortran",
    [
      { lang: "fortran", name: "Fortran", version: "GNU 5.3.0", index: "0" },
      { lang: "fortran", name: "Fortran", version: "GNU 7.2.0", index: "1" },
      { lang: "fortran", name: "Fortran", version: "GNU 8.1.0", index: "2" },
      { lang: "fortran", name: "Fortran", version: "GNU 9.1.0", index: "3" },
    ],
  ],
  [
    "brainfuck",
    [
      { lang: "brainfuck", name: "Brainfuck", version: "bfc-0.1", index: "0" },
    ],
  ],
  [
    "lua",
    [
      { lang: "lua", name: "Lua", version: "5.3.2", index: "0" },
      { lang: "lua", name: "Lua", version: "5.3.4", index: "1" },
      { lang: "lua", name: "Lua", version: "5.3.5", index: "2" },
    ],
  ],
  [
    "tcl",
    [
      { lang: "tcl", name: "TCL", version: "8.6", index: "0" },
      { lang: "tcl", name: "TCL", version: "8.6.7", index: "1" },
      { lang: "tcl", name: "TCL", version: "8.6.8", index: "2" },
      { lang: "tcl", name: "TCL", version: "8.6.9", index: "3" },
    ],
  ],
  [
    "hack",
    [
      { lang: "hack", name: "Hack", version: "HipHop VM 3.13.0", index: "0" },
    ],
  ],
  [
    "rust",
    [
      { lang: "rust", name: "RUST", version: "1.10.0", index: "0" },
      { lang: "rust", name: "RUST", version: "1.21.0", index: "1" },
      { lang: "rust", name: "RUST", version: "1.25.0", index: "2" },
      { lang: "rust", name: "RUST", version: "1.38.0", index: "3" },
    ],
  ],
  [
    "d",
    [
      { lang: "d", name: "D", version: "DMD64 D Compiler v2.071.1", index: "0" },
      { lang: "d", name: "D", version: "DMD64 D Compiler  v2.088", index: "1" },
    ],
  ],
  [
    "ada",
    [
      { lang: "ada", name: "Ada", version: "GNATMAKE 6.1.1", index: "0" },
      { lang: "ada", name: "Ada", version: "GNATMAKE 7.2.0", index: "1" },
      { lang: "ada", name: "Ada", version: "GNATMAKE 8.1.0", index: "2" },
      { lang: "ada", name: "Ada", version: "GNATMAKE 9.1.0", index: "3" },
    ],
  ],
  [
    "r",
    [
      { lang: "r", name: "R Language", version: "3.3.1", index: "0" },
      { lang: "r", name: "R Language", version: "3.4.2", index: "1" },
      { lang: "r", name: "R Language", version: "3.5.0", index: "2" },
      { lang: "r", name: "R Language", version: "3.6.1", index: "3" },
    ],
  ],
  [
    "freebasic",
    [
      { lang: "freebasic", name: "FREE BASIC", version: "1.05.0", index: "0" },
      { lang: "freebasic", name: "FREE BASIC", version: "1.07.1", index: "1" },
    ],
  ],
  [
    "verilog",
    [
      { lang: "verilog", name: "VERILOG", version: "10.1", index: "0" },
      { lang: "verilog", name: "VERILOG", version: "10.2", index: "1" },
      { lang: "verilog", name: "VERILOG", version: "10.3", index: "2" },
    ],
  ],
  [
    "cobol",
    [
      { lang: "cobol", name: "COBOL", version: "GNU COBOL 2.0.0", index: "0" },
      { lang: "cobol", name: "COBOL", version: "GNU COBOL 2.2.0", index: "1" },
      { lang: "cobol", name: "COBOL", version: "GNU COBOL 3.0", index: "2" },
    ],
  ],
  [
    "dart",
    [
      { lang: "dart", name: "Dart", version: "1.18.0", index: "0" },
      { lang: "dart", name: "Dart", version: "1.24.2", index: "1" },
      { lang: "dart", name: "Dart", version: "1.24.3", index: "2" },
      { lang: "dart", name: "Dart", version: "2.5.1", index: "3" },
    ],
  ],
  [
    "yabasic",
    [
      { lang: "yabasic", name: "YaBasic", version: "2.769", index: "0" },
      { lang: "yabasic", name: "YaBasic", version: "2.84.1", index: "1" },
    ],
  ],
  [
    "clojure",
    [
      { lang: "clojure", name: "Clojure", version: "1.8.0", index: "0" },
      { lang: "clojure", name: "Clojure", version: "1.9.0", index: "1" },
      { lang: "clojure", name: "Clojure", version: "1.10.1", index: "2" },
    ],
  ],
  [
    "scheme",
    [
      { lang: "scheme", name: "Scheme", version: "Gauche 0.9.4", index: "0" },
      { lang: "scheme", name: "Scheme", version: "Gauche 0.9.5", index: "1" },
      { lang: "scheme", name: "Scheme", version: "Gauche 0.9.8", index: "2" },
    ],
  ],
  [
    "forth",
    [
      { lang: "forth", name: "Forth", version: "gforth 0.7.3", index: "0" },
    ],
  ],
  [
    "prolog",
    [
      { lang: "prolog", name: "Prolog", version: "GNU Prolog 1.4.4", index: "0" },
      { lang: "prolog", name: "Prolog", version: "GNU Prolog 1.4.5", index: "1" },
    ],
  ],
  [
    "octave",
    [
      { lang: "octave", name: "Octave", version: "GNU 4.0.0", index: "0" },
      { lang: "octave", name: "Octave", version: "GNU 4.2.1", index: "1" },
      { lang: "octave", name: "Octave", version: "GNU 4.4.0", index: "2" },
      { lang: "octave", name: "Octave", version: "GNU 5.1.0", index: "3" },
    ],
  ],
  [
    "coffeescript",
    [
      { lang: "coffeescript", name: "CoffeeScript", version: "1.11.1", index: "0" },
      { lang: "coffeescript", name: "CoffeeScript", version: "2.0.0", index: "1" },
      { lang: "coffeescript", name: "CoffeeScript", version: "2.3.0", index: "2" },
      { lang: "coffeescript", name: "CoffeeScript", version: "2.4.1", index: "3" },
    ],
  ],
  [
    "icon",
    [
      { lang: "icon", name: "Icon", version: "9.4.3", index: "0" },
      { lang: "icon", name: "Icon", version: "9.5.1", index: "1" },
    ],
  ],
  [
    "fsharp",
    [
      { lang: "fsharp", name: "F#", version: "4.1", index: "0" },
      { lang: "fsharp", name: "F#", version: "4.5.0", index: "1" },
    ],
  ],
  [
    "nasm",
    [
      { lang: "nasm", name: "Assembler - NASM", version: "2.11.08", index: "0" },
      { lang: "nasm", name: "Assembler - NASM", version: "2.13.01", index: "1" },
      { lang: "nasm", name: "Assembler - NASM", version: "2.13.03", index: "2" },
      { lang: "nasm", name: "Assembler - NASM", version: "2.14.02", index: "3" },
    ],
  ],
  [
    "gccasm",
    [
      { lang: "gccasm", name: "Assembler - GCC", version: "GCC 6.2.1", index: "0" },
      { lang: "gccasm", name: "Assembler - GCC", version: "GCC 8.1.0", index: "1" },
      { lang: "gccasm", name: "Assembler - GCC", version: "GCC 9.1.0", index: "2" },
    ],
  ],
  [
    "intercal",
    [
      { lang: "intercal", name: "Intercal", version: "0.30", index: "0" },
    ],
  ],
  [
    "nemerle",
    [
      { lang: "nemerle", name: "Nemerle", version: "1.2.0.507", index: "0" },
    ],
  ],
  [
    "ocaml",
    [
      { lang: "ocaml", name: "Ocaml", version: "4.03.0", index: "0" },
      { lang: "ocaml", name: "Ocaml", version: "4.08.1", index: "1" },
    ],
  ],
  [
    "unlambda",
    [
      { lang: "unlambda", name: "Unlambda", version: "0.1.3", index: "0" },
    ],
  ],
  [
    "picolisp",
    [
      { lang: "picolisp", name: "Picolisp", version: "3.1.11.1", index: "0" },
      { lang: "picolisp", name: "Picolisp", version: "17.11.14", index: "1" },
      { lang: "picolisp", name: "Picolisp", version: "18.5.11", index: "2" },
      { lang: "picolisp", name: "Picolisp", version: "18.9.5", index: "3" },
    ],
  ],
  [
    "spidermonkey",
    [
      { lang: "spidermonkey", name: "SpiderMonkey", version: "38", index: "0" },
      { lang: "spidermonkey", name: "SpiderMonkey", version: "45.0.2", index: "1" },
    ],
  ],
  [
    "rhino",
    [
      { lang: "rhino", name: "Rhino JS", version: "1.7.7.1", index: "0" },
      { lang: "rhino", name: "Rhino JS", version: "1.7.7.2", index: "1" },
    ],
  ],
  [
    "bc",
    [
      { lang: "bc", name: "BC", version: "1.06.95", index: "0" },
      { lang: "bc", name: "BC", version: "1.07.1", index: "1" },
    ],
  ],
  [
    "clisp",
    [
      { lang: "clisp", name: "CLISP", version: "GNU CLISP 2.49 - GNU C 5.2.0", index: "0" },
      { lang: "clisp", name: "CLISP", version: "GNU CLISP 2.49 - GNU C 6.2.1", index: "1" },
      { lang: "clisp", name: "CLISP", version: "GNU CLISP 2.49.93 - GNU 8.1.0", index: "2" },
      { lang: "clisp", name: "CLISP", version: "GNU CLISP 2.49.93 - GNU 9.1.0", index: "3" },
    ],
  ],
  [
    "elixir",
    [
      { lang: "elixir", name: "Elixir", version: "1.3.4", index: "0" },
      { lang: "elixir", name: "Elixir", version: "1.5.2", index: "1" },
      { lang: "elixir", name: "Elixir", version: "1.6.4", index: "2" },
      { lang: "elixir", name: "Elixir", version: "1.9.1", index: "3" },
    ],
  ],
  [
    "factor",
    [
      { lang: "factor", name: "Factor", version: "8.25", index: "0" },
      { lang: "factor", name: "Factor", version: "8.28", index: "1" },
      { lang: "factor", name: "Factor", version: "8.29", index: "2" },
      { lang: "factor", name: "Factor", version: "8.31", index: "3" },
    ],
  ],
  [
    "falcon",
    [
      { lang: "falcon", name: "Falcon", version: "0.9.6.8 (Chimera)", index: "0" },
    ],
  ],
  [
    "fantom",
    [
      { lang: "fantom", name: "Fantom", version: "1.0.69", index: "0" },
    ],
  ],
  [
    "nim",
    [
      { lang: "nim", name: "Nim", version: "0.15.0", index: "0" },
      { lang: "nim", name: "Nim", version: "0.17.2", index: "1" },
      { lang: "nim", name: "Nim", version: "0.18.0", index: "2" },
    ],
  ],
  [
    "pike",
    [
      { lang: "pike", name: "Pike", version: "v8.0", index: "0" },
      { lang: "pike", name: "Pike", version: "v8.0.702", index: "1" },
    ],
  ],
  [
    "smalltalk",
    [
      { lang: "smalltalk", name: "SmallTalk", version: "GNU SmallTalk 3.2.92", index: "0" },
    ],
  ],
  [
    "mozart",
    [
      { lang: "mozart", name: "OZ Mozart", version: "2.0.0 (OZ 3)", index: "0" },
    ],
  ],
  [
    "lolcode",
    [
      { lang: "lolcode", name: "LOLCODE", version: "0.10.5", index: "0" },
    ],
  ],
  [
    "racket",
    [
      { lang: "racket", name: "Racket", version: "6.11", index: "0" },
      { lang: "racket", name: "Racket", version: "6.12", index: "1" },
      { lang: "racket", name: "Racket", version: "7.4", index: "2" },
    ],
  ],
  [
    "kotlin",
    [
      { lang: "kotlin", name: "Kotlin", version: "1.1.51 (JRE 9.0.1+11)", index: "0" },
      { lang: "kotlin", name: "Kotlin", version: "1.2.40 (JRE 10.0.1)", index: "1" },
      { lang: "kotlin", name: "Kotlin", version: "1.3.50 (JRE 11.0.4)", index: "2" },
    ],
  ],
  [
    "whitespace",
    [
      { lang: "whitespace", name: "Whitespace", version: "0.3", index: "0" },
    ],
  ],
  [
    "erlang",
    [
      { lang: "erlang", name: "Erlang", version: "22.1", index: "0" },
    ],
  ],
  [
    "jlang",
    [
      { lang: "jlang", name: "J", version: "9.01.10", index: "0" },
    ],
  ],
];
