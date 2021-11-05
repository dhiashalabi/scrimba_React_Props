import React from "react";

import './App.css';
import ContactCard from "./components/ContactCard";
import ToDoItem from "./components/ToDoItem";

function App() {
    return (
        <div className="contact">
            <ContactCard
                contact={{
                    name: "Mr. Whiskerson",
                    imgUrl: "http://placekitten.com/300/200",
                    phone: "(212) 555-1234",
                    email: "mr.whiskaz@catnap.meow"
                }}
            />

            <ContactCard
                contact={{
                    name: "Fluffykins",
                    imgUrl: "http://placekitten.com/400/200",
                    phone: "(212) 555-2345",
                    email: "fluff@me.com"
                }}

            />

            <ContactCard
                contact={{
                    name: "Destroyer",
                    imgUrl: "http://placekitten.com/400/300",
                    phone: "(212) 555-3456",
                    email: "ofworlds@yahoo.com"
                }}
            />

            <ContactCard
                contact={{
                    name: "Felix",
                    imgUrl: "http://placekitten.com/200/100",
                    phone: "(212) 555-4567",
                    email: "thecat@hotmail.com"
                }}
            />
        </div>
        // <div className="todo-list">
        //     <ToDoItem />
        //     <ToDoItem />
        //     <ToDoItem />
        //     <ToDoItem />
        // </div>
    );
}

export default App;
