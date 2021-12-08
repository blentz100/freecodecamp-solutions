# Freecodecamp Solutions

I'm using the freecodecamp curriculum as a tool to reinforce and practice basic
web development, Javascript and React skills.

I completed the Responsive Web Design Certificate and now I'm working through
the Javascript Algorithms and Data Structures Cert and the Front End Development
Libraries Cert.

I'm adding the solutions here as a way to continue to practice working with git,
github and to document my progress. 

Star this repo if you'd like to follow along. 

[<img
src="https://github.com/blentz100/freecodecamp-solutions/blob/main/images/responsive_cert.png?raw=true"
alt="drawing" width="500"/>](https://freecodecamp.org/certification/fccf24ff13b-6c51-46b5-9471-8e3644a03c32/responsive-web-design)


## Notes

### Workflow for populating filenames for all challenges

- Copy and paste the challenge names from the browser into a vim buffer
- Use find and replace to get rid of extra stuff: ```%s/Not Passed//g``` https://linuxize.com/post/vim-find-replace/
- Delete all blank lines with: ```:g/^$/d``` https://linuxize.com/post/vim-delete-line/
- Use a macro to append .js to each line (https://vim.fandom.com/wiki/Macros): 
    1. ```qa``` record to register ```a```
    1. ... actions to record
    1. ```q``` stop recording
    1. ```@a``` execute macro once
    1. ```@@``` repeat last macro


- Manually put numbers on the front of each line - todo - find an automated
solution. Make sure to put leading 0s on single digit numbers so it sorts properly

- Create a list of filenames from a text file. [(src)](https://unix.stackexchange.com/questions/456632/create-files-from-a-list-of-text-files) 
  ```console
  gxargs -d '\n' touch -- < filenames.txt
  ```
- Use the GNU version of xargs : https://formulae.brew.sh/formula/findutils
