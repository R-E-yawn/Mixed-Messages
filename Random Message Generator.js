//I am coding a random message generator. There are three components to this. A greeting, name, and task. 

//These are lists of the greetings, names, and tasks
greetingList = ['Hello', 'Good Morning', 'How are you today', 'What\'s up', 'Ayyyy', 'Let\'s go']
nameList = ['Jessica', 'Bob', 'Aryan', 'Dylan', 'Alyssa', 'Doug', 'Bootleg', 'Chris', 'Jason']
taskList = ['make coffee', 'buy vegetables', 'bring your car in to get fixed', 'run 5 miles', 'pick your money up from the bank', 'cook an omelette', 'code a project', 'build a spaceship', 'go to the gym to workout', 'meditate for 5 hours']

//These are functions that generate the greetings, names, and tasks
const greetingGenerator = () => {
   const greetingIndex = Math.floor(Math.random() * greetingList.length)
   const greeting = greetingList[greetingIndex];
   return greeting;
}
const nameGenerator = () => {
    const nameIndex = Math.floor(Math.random() * nameList.length)
    const name =  nameList[nameIndex];
    return name;
}
const taskGenerator = () => {
    const taskIndex = Math.floor(Math.random() * taskList.length)
    const task =  taskList[taskIndex];
    return task;
}

//Generates the final message
const generateMessage = (greeting, name, task) => {
    message = `${greeting} ${name}! Today you must ${task}.`
    return message;
};

greeting = greetingGenerator();
name = nameGenerator();
task = taskGenerator();

//logs the message generated 
console.log(generateMessage(greeting,name,task));





