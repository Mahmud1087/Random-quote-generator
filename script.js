// VARIABLES

let quotes = document.querySelector('#quote');
let person = document.querySelector('#person');
let button = document.querySelector('#btn');

// QUOTE ARRAY

let quoteArray = [
    {
        quotes: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Eintein"
    },

    {
        quotes: "Money and success don't change people; they merely amplify what is already there.",
        person: "Will Smith"
    },

    {
        quotes: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by (living with the results of other people's thinking.",
        person: "Steve Jobs"
    },

    {
        quotes: "The whole secret of a successful life is to find out what is one's destiny to do, and do it.",
        person: "Henry Ford"
    },

    {
        quotes: "The unexamined life is not worth living",
        person: "Socrates"
    },

    {
        quotes: "Don't settle for what life gives you; make life better and build something",
        person: "Ashton Kutcher"
    },

    {
        quotes: "Life imposes things on you that you can't control, but you still have the choice of how you're going to live through this.",
        person: "Celine Dion"
    },

    {
        quotes: "Life is never eay. There is work to be done and obligations to be met - obligations to truth, to justice and to liberty.",
        person: "John F. Kennedy"
    },

    {
        quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        person: "Albert Einstein"
    },

    {
        quotes: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        person: "Chales Swindoll"
    },

    {
        quotes: "Keep smiling, because life is a beautiful thing and there's so much to smile about",
        person: "Marilyn Monroe"
    },

    {
        quotes: "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person.",
        person: "Bill Clinton"
    },

    {
        quotes: "The best way to predict your future is to create it.",
        person: "Abraham Lincoln"
    },

    {
        quotes: "You must expect great things of yourself before you can do them.",
        person: "Micheal Jordan"
    },

    {
        quotes: "It takes 20 years to a buld a reputation and five minutes to ruin it. If you think about that, you'll do things differently.",
        person: "Warren Buffett"
    },

    {
        quotes: "Be happy for this moment. This moment is your life.",
        person: "Omar Khayyam"
    },

    {
        quotes: "It's never too late - never too late to start over, never too late to be happy",
        person: "Jane Fonda"
    },

    {
        quotes: "You're not defined by your past; you're prepared by it. You're stronger, more experienced, and you have greater confidence.",
        person: "Joel Osteen"
    },

    {
        quotes: "Nothing is more honorable than a greatful heat.",
        person: "Seneca"
    },

    {
        quotes: "The more you praide and celebrat your life, the more there is in life to celebrate.",
        person: "Oprah Winfery"
    },


    {
        quotes: "Find people who will make you better.",
        person: "Michelle Obama"
    },

    {
        quotes: "You cannot control everything that happens to you; you can only control the way you respond to what happens. In your response is power.",
        person: "Anonymous"
    },

    {
        quotes: "Don't allow your past or present condition to control you. It's just a process that you're going through to get you to the next level.",
        person: "T.D. Jakes"
    },

    {
        quotes: "You choose the life you live. If you don't like it, it's on you to change it because no one else is going to do it for you.",
        person: "Kim Kiyosaki"
    },

    {
        quotes: "Life does'nt require that we be the best, only that we try our best.",
        person: "H. Jackson Brown Jr."
    },

    {
        quotes: "Today, you have 100% of your life left.",
        person: "Tom Landry"
    },

    {
        quotes: "Nobody who eve gave his best regretted it.",
        person: "John Wooden"
    },

    {
        quotes: "You can't put a limit on anything. The more you dream, the farther you get.",
        person: "Michael Phelps"
    },

    {
        quotes: "Everyone should get a second chance to life.",
        person: "2pac"
    },

    {
        quotes: "To change one's life: Start immediately, do it flamboyantly, and No excepteions.",
        person: "William James"
    },

    {
        quotes: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        person: "Rumi"
    },

    {
        quotes: "To improve is to change; to be perfect is to change often.",
        person: "Winston S. Churchill"
    },

    {
        quotes: "The people who are crazy enough to think they can change the world are the ones who do.",
        person: "Steve Jobs"
    },

    {
        quotes: "Change begins at the end of your comfort zone.",
        person: "Roy T. Bennett"
    },

    {
        quotes: "To change ourselves effectively, we first had to change our perceptions.",
        person: "Stephen R. Covey"
    },

    {
        quotes: "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
        person: "Socrates"
    },

    {
        quotes: "Act the way you'd like to be and soon you'll be the way you'd like to act.",
        person: "Bob Dylan"
    },

    {
        quotes: "Words are where most change begins.",
        person: "Brandon Sanderson"
    },

    {
        quotes: "What is necessary to change a person is to change his awareness of himself",
        person: "Abraham Maslow"
    },

    {
        quotes: "Either way, change will come. It could be bloody, or it could be beautiful. It depends on us.",
        person: "Arundhati Roy"
    },

    {
        quotes: "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
        person: "Oprah Winfery"
    }
]



// ADD EVENT LISTENER TO BUTTON

button.addEventListener('click', changeQuote);

// FUNCTION TO CHANGE THE QUOTES WHEN BUTTON IS CLICKED

function changeQuote(e) {
    // To get random quotes
    let random = Math.floor(Math.random() *quoteArray.length);
    
    // TO INSERT THE QUOTE ARRAY
    quotes.innerText = '"'+quoteArray[random].quotes+'"';
    person.innerText = quoteArray[random].person
}
