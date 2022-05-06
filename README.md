# Freecodecamp Solutions

I'm using the freecodecamp curriculum as a tool to reinforce and practice basic web development, Javascript and React skills.

I have completed the Responsive Web Design Certificate and Javascript Algorithms and Data Structures Certificate. I'm currently working through the Front End Development Libraries Cert.

I'm adding the solutions here as a way to continue to practice working with git,
github and to document my progress. 

Star this repo if you'd like to follow along. 

## Certificates 

[<img
src="https://github.com/blentz100/freecodecamp-solutions/blob/main/images/responsive_cert.png?raw=true"
alt="drawing" width="700"/>](https://freecodecamp.org/certification/fccf24ff13b-6c51-46b5-9471-8e3644a03c32/responsive-web-design)

[<img
src="https://github.com/blentz100/freecodecamp-solutions/blob/main/images/fcc_js_cert.png?raw=true"
alt="drawing" width="700"/>](https://www.freecodecamp.org/certification/fccf24ff13b-6c51-46b5-9471-8e3644a03c32/javascript-algorithms-and-data-structures)

| module | progress | notes
| --- | --- | --- 
| [Basic Javascript](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Basic%20Javascript) | 100%  | completed 1/18/21 |
| [Regular Expressions](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Regular%20Expressions) | 100%  | completed 12/8/21 |
| [Debugging](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Debugging) | 100%  | completed 12/7/21 |
| [Basic Data Structures](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Basic%20Data%20Structures) | 100% | completed 12/17/21 |
| [Basic Algorithm Scripting](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Basic%20Algorithm%20Scripting) | 100%  | completed 1/1/22 |
| [Object Oriented Programming](https://github.com/blentz100/freecodecamp-solutions/tree/main/Javascript%20Algorithms%20and%20Data%20Structures/Object%20Oriented%20Programming) | 100% | completed 1/14/22 |
| [Functional Programming](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#functional-programming) | 100%  | completed 2/8/22 |
| [Intermediate Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#intermediate-algorithm-scripting) | 100% | completed 4/18/22 |
| [Javascript Algorithm and Data Structure Projects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#javascript-algorithms-and-data-structures-projects) | 100% | completed 4/13/22 |



## Notes

### My Workflow for populating filenames for all challenges

- Copy and paste the challenge names from the browser into a vim buffer called ```filenames.txt```
- Use find and replace to get rid of extra stuff: ```%s/Not Passed//g``` https://linuxize.com/post/vim-find-replace/
- Delete all blank lines with: ```:g/^$/d``` https://linuxize.com/post/vim-delete-line/
- Use a macro to append .js to each line (https://vim.fandom.com/wiki/Macros): 
    1. ```qa``` record to register ```a```
    1. ... actions to record
    1. ```q``` stop recording
    1. ```@a``` execute macro once
    1. ```@@``` repeat last macro
    1. ```23@a``` will repeat the a macro 23 times


- Insert numbers on the front of each line. Make sure to put leading 0s on single digit numbers so it sorts properly
```:%s/^/\=printf('%02d ', line('.'))``` (https://vim.fandom.com/wiki/Insert_line_numbers)


- Create a list of filenames from a text file. [(src)](https://unix.stackexchange.com/questions/456632/create-files-from-a-list-of-text-files) 
  ```console
  gxargs -d '\n' touch -- < filenames.txt
  ```
- Use the GNU version of xargs : https://formulae.brew.sh/formula/findutils
