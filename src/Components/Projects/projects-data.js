import { images } from '../../images/images'

const { accountingImage, iChewsYouImage, recipeKeeperImage, ticTacToeImage} = images

const projectsInformation = [
  {
    title: 'Simple Accounting App - GA',
    techList: ['React.js', 'Express.js', 'PSQL'],
    blurb: 'This is a simple accounting app that allows users to record transactions as manual journals and view them in a variety of reports.',
    siteURL: 'https://accounting-app.fly.dev/',
    gitHub: 'https://github.com/gjstephen/accounting-app-react',
    imageURL: accountingImage
  },
  {
    title: 'I Chews You - GA',
    techList: ['Express.js', 'PSQL'],
    blurb: 'This was a group project that incorporated the Spoonacular API to allow users to search for and leave comments on recipes.',
    siteURL: '',
    gitHub: 'https://github.com/gjstephen/I-Chews-You---Food-App',
    imageURL: iChewsYouImage
  },
  {
    title: 'Recipe Keeper - GA',
    techList: ['Ruby', 'Sinatra', 'PSQL'],
    blurb: 'This app allows users to create and manage their own recipe collection, as well as explore those of other users.',
    siteURL: 'https://recipe-keeper.fly.dev/',
    gitHub: 'https://github.com/gjstephen/recipe_keeper',
    imageURL: recipeKeeperImage
  },
  {
    title: 'Tic Tac Toe - GA',
    techList: ['JavaScript', 'HTML 5', 'CSS'],
    blurb: 'Feel free to play a classic game of Tic Tac Toe where you are able to select from a variety of themes.',
    siteURL: 'https://gjstephen.github.io/tic-tac-toe/',
    gitHub: 'https://github.com/gjstephen/tic-tac-toe',
    imageURL: ticTacToeImage
  }
]

export { projectsInformation }