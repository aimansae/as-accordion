# React Accordion

This is a siple accordion project made with react.
Please find the Guidelines for the project:

## Requirements

1. Use the starter project, to kick-start your development.
2. Create a new repository and push the starter as initial commit.
3. Pick a styling solution of your choice.
4. Implement the accordion component UI.
5. Ensure only one section can be expanded at a time.
6. Add animations for smooth transitions.
7. Use React state to track the active section.
8. Make sure the component is accessible (you should be able to expand/collapse sections only via the keyboard) (hint: use button, not div).
9. Make sure the design is responsive (doesn’t have to be perfect, but it should at least look good and not be completely broken)
10. Add tests, no excuses

**Time Limit: 4 hours**

## Additional requirements

1. Create a Github repository.
2. Commit your changes regularly.
3. Adjust your README.md to explain your project.
4. Deploy it to Netlify for free and put the URL in the README.md.
5. How should it look
   [Accordion Image]()

## Getting Started

## [Tailwind CSS Installation:](https://tailwindcss.com/docs/guides/vite)

in Terminal:
    tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p

tailwind.config.js file. add:
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

Add @tailwind directives for each of Tailwind’s
index.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

Run your build process with npm run dev.

[Prettier Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

    npm install -D prettier prettier-plugin-tailwindcss

Add plugins to prettierrc

module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
## Github setup

1. Create a local folder and connect it to [Github](https://github.com/)

In terminal Terminal type :

git init
git add .
git commit -m ‘First commit’

2. Open github and create new reposotory

Copy the link and in terminal add:

git remote add origin (paste the link to the Github repo here)
git push origin master

If needed Enter credentials to connect the IDE to Gthub

Resources found on [Youtube](https://www.youtube.com/watch?v=vbQ2bYHxxEA)
