


# Application Name

inventory-tracker

## `Brief Description`

inventory-tracker is an inventory tracking application for tracking coffee beans supply for a fictitious cofee shop. It has full CRUD functionality.

It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## `Author`

By Bai Jaitrong

## Technologies Used
  * VS Code
  * React
  * JSX
  * JavaScript
  * draw.io
  
## `Component Diagram`

![Alt](src/img/componentDiagram.svg)

&nbsp;

## `Step 1. Setup/Installation`

  • Create a repository in your GitHub account for this project by selecting the green New button on the upper left side of the screen and follow the instruction. The button is across from Recent Repositories. You will need the URL for this repository in Step 2.

  • Clone inventory-tracker repository to your desktop or a subdirectory in your desktop by running the command: 
  
  `git clone https://github.com/bjaitrong22/inventory-tracker`

 Be careful not to clone the repository inside a local repository. Otherwise, you will have a nested git respository.

## `Step 2. Adding your remote repository`

  • Navigate to the top level/root of your inventory-tracker directory using the command line.
  
  • Run the following command to find the name of the remote repository attached to this project so that it can be removed before adding your remote repository:

  `git remote -v`

    bj      https://github.com/bjaitrong22/inventory-tracker.git (fetch)
    bj      https://github.com/bjaitrong22/inventory-tracker.git (push)

  You will get the response above, and the remote repository's nick name/identifier is bj or you may see it as origin.

 • Enter the following command: 
 
  `git remote rm bj` 
    
  If the identifier is something else, then replace bj with that identifier. So if the identifier is origin, you would enter git remote rm origin. 
      
• Confirm that the prior remote repository has been removed by running the command below:

`git remote -v`  
      
Nothing should show up. That means the remote has been removed. If it hasn't been removed correctly, go through step 2 again. 
      
• Now you can add your remote repository by running the command below (be sure to remove the brackets) using your project's git repository url.  

`git remote add origin [your-project-url-here]` 
      
You can use an identifier other than origin. Copy the URL from your GitHub project repository by clicking the green CODE drop down menu on your GitHub repository and put it at the end of the command above. Which you should already have from step 1.
      
• You can confirm that the new remote is correctly linked by running the command: 

`git remote -v`

## `Step 3. Pushing .gitignore file from the cloned inventory-tracker`
    
• Before pushing any changes to your remote repository, navigate to top level/root of your inventory-tractor directory in your command line and run the following commands:  

  `git add .gitignore`  
  `git commit -m "Add .gitignore file`  
  `git push [your-remote-Identifier] main`
    
  This will let GitHub know what files not to upload from your local repository.

## `Step 4. You are now ready to work on the project`

• Open the project using your chosen text editor. You can run the application by entering the command below in the command line.

`npm start`

You can also review the Available Scripts section below provided by create-react-app for more commands you can experiment with and for more React resources.
  
## `Known Bugs`

  * No known bugs

## `License`

 * Portfolio is licensed under the terms of GNU AFFERO GENERAL PUBLIC LICENS Version 3, 19 November 2007 ( change if you are using a different license).    

&nbsp;

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`NOTE: No testing was completed for inventory-tracker.`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

