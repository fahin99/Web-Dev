function List(){
    // this is when the lists are of strings
    // const games=["omori","tunic","ori","pokemon"];

    // games.sort(); this is the basic sort

    // const listItems=games.map(games=> <li>{games}</li>);


    //with curly braces around every element of the list, we make them objects
    const games=[{id:1, name: "Omori", price: 15},
                  {id:2, name: "Tunic", price: 20},
                  {id:3, name: "Ori", price: 25},
                  {id:4, name: "Pokemon", price: 30}
                ];

    games.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // games.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // games.sort((a,b) => a.price - b.price); //BASED ON PRICE
    // games.sort((a,b) => b.price - a.price); //BASED ON PRICE, REVERSE


    const listItems= games.map(game => <li key={game.id}>
                                        {game.name}: &nbsp;
                                        <b>{game.price}</b> 
                                       </li>);

    //filtering entries

    // this only shows those that have price below 22

    // const lowPrice= games.filter(game =>game.price<22);
    // const listItems= lowPrice.map(low => <li key={low.id}>
    //                                     {low.name}: &nbsp;
    //                                     <b>{low.price}</b> 
    //                                    </li>);

    // this only shows those that have price above 22

    // const highPrice= games.filter(game =>game.price>22);
    // const listItems= highPrice.map(high => <li key={high.id}>
    //                                     {high.name}: &nbsp;
    //                                     <b>{high.price}</b> 
    //                                    </li>);
    return(
        <>
            <div className="list_desc">
            <h3 className="list_title">Games</h3>
            <ol className="list_css">{listItems}</ol>
            </div>
            <hr></hr>
        </>
    );
}
export default List