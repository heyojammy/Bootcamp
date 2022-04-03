import React from "react";

const Cameos = () => {
    return(
        <div>
            <h3>Cuccos appear in:</h3>
            <ul>
                <Games/>
                <a href="https://www.zeldadungeon.net/wiki/Cucco">Sauce</a>
            </ul>
        </div>
    )
}

const Games = (props) => {
return (
    <div className="cameo-list">  
     {props.games.map((game, index) =>
        <li>{game.title}</li>
     )}   
    </div>
)
}

Games.defaultProps = { 
games: [
    {
        title: "Link's Awakening"
    },
    {
        title: "Majora's Mask"
    },
    {
        title: "Oracle of Seasons and Oracle of Ages"
    },
    {
        title: "Twilight Princess"
    },
    {
        title: "Phantom Hourglass"
    },
    {
        title: "A Link Between Worlds"
    },
    {
        title: "Breath of the Wild"
    },
    {
        title: "And more! They've even guest starred in Super Smash Bros!"
    }
]
}

export default Cameos;