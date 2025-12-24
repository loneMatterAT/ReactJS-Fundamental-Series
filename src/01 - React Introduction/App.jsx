// 01 - ReactJS Introduction
// App.jsx is the root or main component
// Import section
// import Header from './Header.jsx' // import Header.jsx
// import Footer from './Footer.jsx' // import Footer.jsx
// import Food from './Food.jsx' // import Food.jsx

// 02 - ReactJS Card Component
// import Card from '../02 - React Card Component/Card.jsx'

// 03 - React CSS Styling Components
// import Button from '../03 - React CSS Styling Components/Button/Button.jsx'

// 04 - React Props
// import Student from '../04 - React Props/Student.jsx'

// 05 - React Conditional Rendering
// import UserGreeting from '../05 - React Conditional Rendering/UserGreeting.jsx'

// 06 - React Rendering List
// import List from '../06 - React Rendering List/List.jsx'

// 07 - React Click Event
import Button from '../07 - React Click Event/Button.jsx'
import ProfilePicture from '../07 - React Click Event/ProfilePicture.jsx'


function App() {
  // return(
    <> {/* <> Fragment to store multiple elements */}
     {/* 01 - ReactJS Introduction */}
      {/* <Header></Header> calling header.jsx contents */}
      {/* <Header/> - short syntax calling */}
      {/* <Food/> */}
      {/* <Footer/> */}

      {/* 02 - ReactJS Card Component */}
      {/* <Card/> */}
      {/* <Card/> */} {/* reusable component */}

      {/* 03 - ReactJS CSS Styling Components */}
      {/* 
        HOW TO STYLE REACT COMPONENTS WITH CSS 
        (not including external frameworks (tailwind) or preprocessors)

        1. EXTERNAL = Easy to use, great for global styles like small projects but naming conflict
        2. MODULES = Avoids naming conflict, the style is unique/hash, its convenient if each components have a unique styles and individual component, but it doesn't require additional setup and global style aren't apply easily
        3. INLINE = Convenient, easy to understand, prevents global style conflict, great for minimal styling such as subscribe button, but less increasingly maintainable in large applications, it reduce readability of components when many styles, like responsive style webpage
      */}
      {/* <Button/> */}

      {/* 04 - ReactJS Props */}
      {/* 
        props = read-only properties that are shared between components.
                A parent component can send data to a child component.
                ex. <Component key=value /> eg. <Student name="Mike"/>
                Note: Numerical values use {} for value
      */}
      {/* <Student name="John" age={21} isStudent={true}/>
      <Student name="Rain" age={20} isStudent={true}/>
      <Student name="Ethan" age={35} isStudent={false}/>
      <Student name="Aimer" age={32} isStudent={true}/> */}

      {/* Empty student component */}
      {/* <Student /> */}

      {/* 
        propTypes = a mechanism that ensures that the passed value
                    is of the correct datatype
                    ex. PropTypes.number
                    Note: PropTypes is good for debugging
      */}

      {/* 
        defaultTypes = default values for props in case they are not
                       passed from the parent component
                       ex. name: "Guest"
                       Note: PropTypes is good for debugging
      */}

      {/* 05 - ReactJS Conditional Rendering */}
      {/* 
        defaultTypes = allows you to control what gets rendered
                       in your application based on certain conditions
                       (show, hide, or change components)
      */}
      {/* Two key value pairs: key=value  ex. isLogged={true} username="John" */}
      {/* <UserGreeting isLoggedIn={true} username="John"/>  */}
      </>
  // );

      {/* 06 - ReactJS Conditional Rendering */}
      {/* Make the animals data reusable using props */}

      // First reusable list
      // const animals = [{id: 1, name: "Lion", class: "Carnivores", weight: 150},
      //                     {id: 2, name: "Eagle", class: "Carnivores", weight: 6},
      //                     {id: 3, name: "Cheetah", class: "Carnivores", weight: 65},
      //                     {id: 4, name: "Elephant", class: "Herbivores", weight: 4000},
      //                     {id: 5, name: "Dolphin", class: "Carnivores", weight: 40}];    

      // // Second reusable list
      // const humans = [{id: 6, name: "Bane", class: "American", weight: 70},
      //                     {id: 7, name: "Liam", class: "Chinese", weight: 58},
      //                     {id: 8, name: "Cassandra", class: "Japanese", weight: 50},
      //                     {id: 9, name: "Simon", class: "German", weight: 65},
      //                     {id: 10, name: "Amanda", class: "Filipino", weight: 62}];    

      // Empty list could not been rendered or show empty of this component
      // Second reusable list
      // const human = [];    

      // return( <>
      //           {/* Using short-hand/short circuting ternary operator for less code using && for always true the needed condition, instead of using ? and : for conditions*/}
      //           {animals.length > 0 && <List items={animals} category="Reusable Animals"/>}
      //           {humans.length > 0 && <List items={humans} category="Reusable Humans"/>}
      // </>);

      {/* 07 - ReactJS Click Event */}
      {/* 
        Click Event = An interaction when a user clicks on a specific element.
        We can respond to clicks by pasing
        a callback to the onClick event handler.
      */}
      return(  
      <>
            {/* <Button/> */}
            <ProfilePicture/>
      </>
      );
}

export default App

// git link push : https://github.com/loneMatterAT/ReactJS-Fundamentals.git
